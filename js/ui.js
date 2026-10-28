/* Piezas de interfaz compartidas por varias vistas. */
(function (S) {
  const { esc } = S;

  /* state: 'answer' (se está respondiendo) o 'review' (ya corregida, se marcan correcta/incorrecta). */
  S.optHTML = (it, pos, state) => {
    const o = it.opts[pos];
    const cls = ['opt'];
    if (state === 'answer' && it.choice === pos) cls.push('sel');
    if (state === 'review') {
      if (o.ok) cls.push('right');
      else if (it.choice === pos) cls.push('wrong');
    }
    return `<button class="${cls.join(' ')}" data-pos="${pos}" ${state === 'review' ? 'disabled' : ''}>` +
      `<span class="box">[ ${pos + 1} ]</span><span>${esc(o.o)}</span></button>`;
  };

  S.metaChips = (q) => {
    const trap = q.s === 'casi' || q.s === 'alias';
    const chips = [`<span class="chip">${esc(S.topicName(q.t))}</span>`,
      `<span class="chip${trap ? ' trap' : ''}">${esc(S.styles[q.s])}</span>`];
    if (q.set) chips.push('<span class="chip">Bloque de opciones compartidas</span>');
    if (q.x) chips.push(`<span class="chip extra">${esc((S.course.xChip && S.course.xChip[q.t]) || S.course.xChipDefault || 'Extra')}</span>`);
    return `<div class="chips">${chips.join('')}</div>`;
  };

  /* pen = null en práctica (no hay puntos). */
  S.feedbackHTML = (it, pen) => {
    const q = it.q;
    const blank = it.choice == null;
    const ok = !blank && it.opts[it.choice].ok;
    const right = it.opts.findIndex((o) => o.ok);
    let verdict, cls;
    if (blank) { verdict = pen != null ? 'En blanco · 0 pts' : 'Sin responder'; cls = 'blank'; }
    else if (ok) { verdict = pen != null ? 'Correcta · +2 pts' : 'Correcta'; cls = 'ok'; }
    else { verdict = pen != null ? (pen ? `Incorrecta · −${pen} pts` : 'Incorrecta · 0 pts') : 'Incorrecta'; cls = 'bad'; }

    const mine = !blank && !ok
      ? `<div><b>Por qué no era [ ${it.choice + 1} ] ${esc(it.opts[it.choice].o)}:</b> ${esc(it.opts[it.choice].n)}</div>` : '';
    const others = it.opts
      .map((o, i) => ({ o, i }))
      .filter(({ o, i }) => !o.ok && i !== it.choice)
      .map(({ o, i }) => `<li><b>[ ${i + 1} ] ${esc(o.o)}:</b> ${esc(o.n)}</li>`).join('');

    return `<div class="fb">
      <div class="verdict ${cls}">${verdict}</div>
      <div><b>Respuesta: [ ${right + 1} ] ${esc(q.a)}.</b> ${esc(q.w)}</div>
      ${mine}
      ${others ? `<details><summary>Por qué no son las otras opciones</summary><ul>${others}</ul></details>` : ''}
      <div class="src">Fuente: ${esc(q.src)}</div>
    </div>`;
  };

  S.renderLegend = () => {
    const seen = Object.keys(S.stats).length;
    const errs = S.pendingIds().length;
    document.getElementById('legend').innerHTML =
      `<div><b>${S.bank.length}</b> preguntas en el banco</div><div><b>${seen}</b> vistas · <b>${errs}</b> por repasar</div>`;
  };

  S.flash = (container, msg) => {
    const old = container.querySelector('.advice.flash');
    if (old) old.remove();
    container.appendChild(S.el(`<p class="advice flash">${esc(msg)}</p>`));
  };
})(window.Sim);
