/* Vista Práctica: feedback inmediato por pregunta. Los fallos alimentan «Mis errores». */
(function (S) {
  const { el, esc } = S;
  let prac = null; // { label, items, i, ok, answered }

  function setup(app) {
    const rows = S.topics.map((t) => {
      const qs = S.bank.filter((q) => q.t === t.k);
      const done = qs.filter((q) => S.mastered(q.id)).length;
      return `<div class="mrow"><button data-t="${t.k}">${esc(t.n)}</button>
        <div class="bar" aria-hidden="true"><i style="width:${Math.round((100 * done) / qs.length)}%"></i></div>
        <span class="mono">${done}/${qs.length}</span></div>`;
    }).join('');
    const v = el(`<section class="sheet stack">
      <div><h2>Práctica por tema</h2>
        <p class="lead" style="margin-top:6px">Respondes y ves el feedback al instante. La barra muestra cuántas preguntas dominas (acertadas 2 veces seguidas). Elige un tema o mezcla todo.</p></div>
      <div class="mastery">${rows}</div>
      <div class="row">
        <button class="btn primary" id="mix">Mezclar todo (20 preguntas)</button>
        <button class="btn" id="traps">Solo casi sinónimos y alias</button>
        <button class="btn" id="data">Solo datos y cifras</button>
        <button class="btn" id="sets">Solo bloques de opciones compartidas</button>
        <button class="btn" id="unseen">Solo las que nunca vi</button>
      </div>
    </section>`);
    const ids = (f) => S.bank.filter(f).map((q) => q.id);
    v.querySelectorAll('[data-t]').forEach((b) => (b.onclick = () => start(ids((q) => q.t === b.dataset.t), S.topicName(b.dataset.t))));
    v.querySelector('#mix').onclick = () => start(S.shuffle(S.bank).slice(0, 20).map((q) => q.id), 'Mezcla');
    v.querySelector('#traps').onclick = () => start(ids((q) => q.s === 'casi' || q.s === 'alias'), 'Casi sinónimos y alias');
    v.querySelector('#data').onclick = () => start(ids((q) => q.s === 'dato'), 'Datos y cifras');
    v.querySelector('#sets').onclick = () => start(ids((q) => q.set), 'Bloques de opciones compartidas');
    v.querySelector('#unseen').onclick = () => {
      const u = ids((q) => !S.stats[q.id]);
      u.length ? start(u, 'Nunca vistas') : S.flash(v, 'Ya viste todas las preguntas. Prueba con «Mis errores».');
    };
    app.appendChild(v);
  }

  function start(ids, label) {
    // Los bloques de opciones compartidas se mantienen juntos y con las mismas opciones, como en el parcial.
    prac = { label, items: S.arrange(S.units(ids.map((id) => S.bank[id]))), i: 0, ok: 0, answered: false };
    S.go('prac');
  }

  function finish(app) {
    const v = el(`<section class="sheet stack"><h2>${esc(prac.label)}: terminaste</h2>
      <p class="big">${prac.ok}<small>/${prac.items.length}</small></p>
      <p class="muted">Las que fallaste quedaron en <b>Mis errores</b> y vuelven a aparecer hasta que las aciertes dos veces seguidas.</p>
      <div class="row"><button class="btn primary" id="back">Elegir otro tema</button><button class="btn" id="errs">Ir a Mis errores</button></div></section>`);
    v.querySelector('#back').onclick = () => { prac = null; S.refresh(); };
    v.querySelector('#errs').onclick = () => { prac = null; S.go('err'); };
    app.appendChild(v);
  }

  function question(app) {
    const p = prac;
    if (p.i >= p.items.length) return finish(app);
    const it = p.items[p.i];
    const state = p.answered ? 'review' : 'answer';
    const v = el(`<div class="stack">
      <div class="row between"><span class="eyebrow">${esc(p.label)} · ${p.i + 1} de ${p.items.length}</span><span class="mono muted" style="font-size:.85rem">${p.ok} correctas</span></div>
      <div class="progress"><i style="width:${(100 * p.i) / p.items.length}%"></i></div>
      <section class="sheet"><div class="q">
        <div class="q-stem"><span class="q-num">${p.i + 1}.</span><span>${esc(it.q.q)}</span><div class="q-meta">${S.metaChips(it.q)}</div></div>
        <div class="opts">${it.opts.map((_, k) => S.optHTML(it, k, state)).join('')}</div>
        ${p.answered ? S.feedbackHTML(it, null) : ''}
      </div></section>
      <div class="row between"><button class="btn ghost" id="quit">Terminar</button>
        ${p.answered ? '<button class="btn primary" id="next">Siguiente</button>' : '<button class="btn ghost" id="skip">No sé · ver respuesta</button>'}</div>
    </div>`);
    const answer = (choice) => {
      it.choice = choice;
      p.answered = true;
      const ok = choice != null && it.opts[choice].ok;
      if (ok) p.ok++;
      S.record(it.q.id, ok);
      S.refresh();
    };
    if (!p.answered) {
      v.querySelectorAll('.opt').forEach((b) => (b.onclick = () => answer(+b.dataset.pos)));
      v.querySelector('#skip').onclick = () => answer(null);
    } else {
      const n = v.querySelector('#next');
      n.onclick = () => { p.i++; p.answered = false; S.refresh(); window.scrollTo({ top: 0 }); };
      setTimeout(() => n.focus(), 0);
    }
    v.querySelector('#quit').onclick = () => { p.i = p.items.length; S.refresh(); };
    app.appendChild(v);
  }

  S.views = S.views || {};
  S.practice = { start };
  S.views.prac = {
    render(app) { prac ? question(app) : setup(app); },
    reset() { prac = null; },
  };
})(window.Sim);
