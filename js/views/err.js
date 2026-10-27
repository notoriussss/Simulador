/* Vista Mis errores: repasa lo que fallaste hasta acertarlo 2 veces seguidas. */
(function (S) {
  const { el, esc } = S;

  function render(app) {
    const ids = S.pendingIds();
    if (!ids.length) {
      const v = el(`<section class="sheet empty"><h2>No tienes errores pendientes</h2>
        <p style="margin-top:8px">Cuando falles una pregunta en el simulacro o en la práctica aparece aquí. Sale de la lista al acertarla dos veces seguidas.</p>
        <div class="row" style="justify-content:center;margin-top:14px"><button class="btn primary" id="go">Hacer un simulacro</button></div></section>`);
      v.querySelector('#go').onclick = () => S.go('sim');
      return app.appendChild(v);
    }
    const byT = {};
    ids.forEach((id) => { const t = S.bank[id].t; byT[t] = (byT[t] || 0) + 1; });
    const v = el(`<section class="sheet stack">
      <div><h2>Mis errores · ${ids.length} por repasar</h2>
        <p class="lead" style="margin-top:6px">Repetir lo que fallaste, con las opciones en otro orden, es lo que más rinde por minuto. Cada pregunta sale de la lista al acertarla dos veces seguidas.</p></div>
      <div class="chips">${Object.entries(byT).map(([t, n]) => `<span class="chip">${esc(S.topicName(t))} · ${n}</span>`).join('')}</div>
      <div class="row"><button class="btn primary" id="go">Repasar mis errores</button><button class="btn ghost" id="reset">Borrar mi progreso</button></div>
      <div id="confirm"></div>
    </section>`);
    v.querySelector('#go').onclick = () => S.practice.start(ids, 'Mis errores');
    v.querySelector('#reset').onclick = () => {
      const c = v.querySelector('#confirm');
      c.innerHTML = `<div class="advice row between"><span>¿Borrar todas las estadísticas y mejores notas?</span>
        <span class="row"><button class="btn" id="no">Cancelar</button><button class="btn primary" id="yes">Sí, borrar</button></span></div>`;
      c.querySelector('#no').onclick = () => (c.innerHTML = '');
      c.querySelector('#yes').onclick = () => { S.resetProgress(); S.renderLegend(); S.refresh(); };
    };
    app.appendChild(v);
  }

  S.views = S.views || {};
  S.views.err = { render };
})(window.Sim);
