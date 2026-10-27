/* Vista Simulacro: elegir modelo → responder con Seguro/Dudo → corregir → análisis de riesgo y revisión. */
(function (S) {
  const { el, esc } = S;
  const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const penText = (p) => `Para respuestas incorrectas el factor de corrección es −${p} pto${p > 1 ? 's' : ''}.`;
  let sim = null; // { name, model, pen, items, done }

  function setup(app) {
    const models = S.models(S.bank);
    const v = el(`<div class="stack">
      <section class="sheet stack">
        <div><h2>Simulacro de ${S.PER_EXAM} preguntas</h2><p class="lead" style="margin-top:6px">${esc(S.course.simIntro)}</p></div>
        <div class="field"><span class="lbl">Factor de corrección</span>
          <div class="seg" role="group" aria-label="Factor de corrección">
            ${S.course.pens.map((p) => `<button data-pen="${p}" aria-pressed="${S.prefs.pen === p}">−${p} ${p > 1 ? 'pts' : 'pto'}</button>`).join('')}
          </div>
          <span class="muted" style="font-size:.82rem">${esc(S.course.penNote)}</span>
        </div>
        <div class="row"><button class="btn primary" id="rnd">Generar parcial aleatorio</button></div>
      </section>
      <section class="stack">
        <div><h3>Modelos fijos</h3>
          <p class="muted" style="margin-top:4px">Cada pregunta del banco sale en un solo modelo, así que los ${models.length} modelos juntos cubren todo el temario. Siempre salen las mismas preguntas, para repetir un modelo después de estudiar y comparar tu nota.</p></div>
        <div class="models">${models.map((_, m) => {
          const best = S.store.get('best-' + LETTERS[m], null);
          return `<button class="model" data-m="${m}"><b>${LETTERS[m]}</b><span class="mono ${best == null ? '' : 'has'}">${best == null ? 'sin intentar' : 'mejor ' + best + '/20'}</span></button>`;
        }).join('')}</div>
      </section>
    </div>`);
    v.querySelectorAll('[data-pen]').forEach((b) => (b.onclick = () => { S.prefs.pen = +b.dataset.pen; S.savePrefs(); S.refresh(); }));
    v.querySelector('#rnd').onclick = () => start('Aleatorio', null, S.build(S.randomExam(S.bank)));
    v.querySelectorAll('.model').forEach((b) => (b.onclick = () => {
      const m = +b.dataset.m;
      start(LETTERS[m], m, S.build(models[m], 'm' + m + '-'));
    }));
    app.appendChild(v);
  }

  function start(name, model, items) {
    sim = { name, model, pen: S.prefs.pen, items, done: false };
    S.refresh();
    window.scrollTo({ top: 0 });
  }

  function exam(app) {
    const s = sim;
    const answered = s.items.filter((i) => i.choice != null).length;
    const sheet = el(`<section class="sheet">
      <div class="sheet-head">
        <div class="uni"><b>${esc(S.course.uni)}</b><br>${esc(S.course.sheetCourse)} · ${s.model == null ? 'Modelo aleatorio' : 'Modelo ' + s.name}</div>
        <div class="uni mono" style="text-align:right">${s.done ? 'Corregido' : answered + '/' + S.PER_EXAM + ' respondidas'}</div>
      </div>
      <div id="qs"></div>
      <p class="mono muted" style="font-size:.85rem;margin-top:12px">2 ptos C/U. ${penText(s.pen)}</p>
    </section>`);
    const qs = sheet.querySelector('#qs');

    s.items.forEach((it, n) => {
      const state = s.done ? 'review' : 'answer';
      const q = el(`<div class="q">
        <div class="q-stem"><span class="q-num">${n + 1}.</span><span>${esc(it.q.q)}</span>${s.done ? `<div class="q-meta">${S.metaChips(it.q)}</div>` : ''}</div>
        <div class="opts">${it.opts.map((_, p) => S.optHTML(it, p, state)).join('')}</div>
        ${s.done ? S.feedbackHTML(it, s.pen) : `<div class="conf" role="group" aria-label="Confianza">
          <button class="c-sure" data-c="sure">Seguro</button>
          <button class="c-doubt" data-c="doubt">Dudo</button>
          <button class="c-blank" data-c="blank">Dejar en blanco</button></div>`}
      </div>`);
      if (!s.done) {
        paintConf(q, it);
        q.querySelectorAll('.opt').forEach((b) => (b.onclick = () => {
          it.choice = +b.dataset.pos;
          if (!it.conf) it.conf = 'sure';
          paint(q, it);
        }));
        q.querySelectorAll('.conf button').forEach((b) => (b.onclick = () => {
          if (b.dataset.c === 'blank') { it.choice = null; it.conf = null; } else it.conf = b.dataset.c;
          paint(q, it);
        }));
      }
      qs.appendChild(q);
    });
    app.appendChild(sheet);

    if (s.done) { app.insertBefore(results(), sheet); return; }
    const bar = el(`<div class="sticky-bar"><span class="mono muted" id="count"></span>
      <div class="row"><button class="btn ghost" id="quit">Salir</button><button class="btn primary" id="grade">Corregir parcial</button></div></div>`);
    bar.querySelector('#quit').onclick = () => { sim = null; S.refresh(); };
    bar.querySelector('#grade').onclick = grade;
    app.appendChild(bar);
    count();
  }

  function paintConf(node, it) {
    node.querySelectorAll('.conf button').forEach((b) => {
      const c = b.dataset.c;
      b.setAttribute('aria-pressed', c === 'blank' ? it.choice == null : it.choice != null && it.conf === c);
    });
  }
  function paint(node, it) {
    node.querySelectorAll('.opt').forEach((b) => b.classList.toggle('sel', +b.dataset.pos === it.choice));
    paintConf(node, it);
    count();
  }
  function count() {
    const n = sim.items.filter((i) => i.choice != null).length;
    const c = document.getElementById('count');
    if (c) c.textContent = `${n}/${S.PER_EXAM} respondidas · ${S.PER_EXAM - n} en blanco`;
  }

  function grade() {
    sim.done = true;
    sim.items.forEach((it) => { if (it.choice != null) S.record(it.q.id, it.opts[it.choice].ok); });
    const total = S.score(sim.items, sim.pen).total;
    if (sim.model != null) {
      const k = 'best-' + sim.name;
      const b = S.store.get(k, null);
      if (b == null || total > b) S.store.set(k, total);
    }
    S.refresh();
    window.scrollTo({ top: 0 });
  }

  function advice(r, pen) {
    const pct = (x) => (x.n ? Math.round((100 * x.ok) / x.n) + '%' : '—');
    const be = Math.round((100 * pen) / (2 + pen));
    if (!r.doubt.n) return 'No marcaste ninguna como <b>Dudo</b>. La próxima vez márcalas: así medimos si te conviene arriesgar.';
    if (r.ifBlankDoubt > r.total) return `Cuando dudaste acertaste ${pct(r.doubt)}. Con factor −${pen} necesitas más de ${be}% para que arriesgar sume. <b>Si hubieras dejado en blanco las dudosas sacabas ${r.ifBlankDoubt}/20 en vez de ${r.total}/20.</b>`;
    if (r.ifBlankDoubt === r.total) return `Cuando dudaste acertaste ${pct(r.doubt)}, justo donde arriesgar ni suma ni resta: ${r.total}/20 en ambos casos. <b>Con más dudas que aciertos, conviene dejar en blanco.</b>`;
    return `Cuando dudaste acertaste ${pct(r.doubt)}, por encima del ${be}% que hace falta con factor −${pen}. <b>Arriesgar te sumó</b>: ${r.total}/20 contra ${r.ifBlankDoubt}/20 si las dejabas en blanco.`;
  }

  function results() {
    const r = S.score(sim.items, sim.pen), pen = sim.pen;
    const pct = (x) => (x.n ? Math.round((100 * x.ok) / x.n) + '%' : '—');
    const weak = {};
    sim.items.forEach((it) => { if (it.choice == null || !it.opts[it.choice].ok) weak[it.q.t] = (weak[it.q.t] || 0) + 1; });
    const weakList = Object.entries(weak).sort((a, b) => b[1] - a[1]).map(([t]) => t);
    const p = el(`<section class="sheet stack" style="margin-bottom:16px">
      <div class="score">
        <div class="big">${r.total}<small>/20</small></div>
        <div class="kv">
          <div class="ok"><div class="k">Correctas</div><div class="v">${r.ok} · +${r.ok * 2}</div></div>
          <div class="bad"><div class="k">Incorrectas</div><div class="v">${r.bad} · −${r.bad * pen}</div></div>
          <div><div class="k">En blanco</div><div class="v">${r.blank}</div></div>
          <div class="doubt"><div class="k">Acierto si dudabas</div><div class="v">${pct(r.doubt)}</div></div>
          <div class="ok"><div class="k">Acierto si estabas seguro</div><div class="v">${pct(r.sure)}</div></div>
        </div>
      </div>
      <div class="advice">${advice(r, pen)}</div>
      ${weakList.length ? `<div class="row"><span class="muted">Repasa:</span>${weakList.map((t) => `<button class="btn" data-t="${t}">${esc(S.topicName(t))}</button>`).join('')}</div>` : ''}
      <div class="row"><button class="btn primary" id="again">Otro parcial</button>${sim.model != null ? '<button class="btn" id="redo">Repetir este modelo</button>' : ''}</div>
    </section>`);
    p.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => S.practice.start(S.bank.filter((q) => q.t === b.dataset.t).map((q) => q.id), S.topicName(b.dataset.t))));
    p.querySelector('#again').onclick = () => { sim = null; S.refresh(); };
    const redo = p.querySelector('#redo');
    if (redo) redo.onclick = () => start(sim.name, sim.model, S.build(S.models(S.bank)[sim.model], 'm' + sim.model + '-'));
    return p;
  }

  S.views = S.views || {};
  S.views.sim = {
    render(app) { sim ? exam(app) : setup(app); },
    reset() { if (sim && sim.done) sim = null; },
  };
})(window.Sim);
