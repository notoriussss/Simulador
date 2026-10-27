/* Vista Cómo estudiar: método, tabla de esperanza (arriesgar o no) y patrón del profesor. */
(function (S) {
  const { el, esc } = S;
  const fmt = (x) => {
    const r = Math.round(x * 100) / 100;
    const c = Math.abs(r) < 0.01 ? 'zero' : r > 0 ? 'pos' : 'neg';
    return `<span class="${c}">${r > 0 ? '+' : ''}${r.toFixed(2)}</span>`;
  };

  function render(app) {
    const pens = S.course.pens;
    const v = el(`<div class="stack">
      <section class="sheet stack">
        <h2>El método</h2>
        <p class="lead">${esc(S.course.methodLead)}</p>
        <ol class="steps">
          <li><div><b>Diagnóstico.</b> Haz un simulacro en frío antes de repasar. Marca Seguro o Dudo con honestidad. La nota importa menos que saber dónde estás.</div></li>
          <li><div><b>Contraste.</b> Por cada tema que falló, abre su tabla en <i>Contrastes</i>. La pregunta es: «¿qué palabra del enunciado delata a esta opción y no a su vecina?».</div></li>
          <li><div><b>Práctica con feedback.</b> Haz la práctica de ese tema. Cuando falles, lee por qué tu opción no era antes de mirar la correcta.</div></li>
          <li><div><b>Repaso espaciado.</b> Vuelve a <i>Mis errores</i> horas después, y otra vez al día siguiente. Las opciones cambian de orden en cada intento, así que no se pueden memorizar posiciones.</div></li>
          <li><div><b>Simulacro final.</b> Haz un modelo que no hayas visto, con el factor de corrección real, y decide qué dejar en blanco según tu acierto en las dudosas.</div></li>
        </ol>
      </section>
      <section class="sheet stack">
        <h2>¿Arriesgar o dejar en blanco?</h2>
        <p class="lead">Puntos esperados por pregunta según cuántas opciones te quedan después de descartar. Un acierto vale +2.</p>
        <div class="tbl"><table class="ev mono"><thead><tr><th>Opciones que quedan</th>${pens.map((p) => `<th>Factor −${p}</th>`).join('')}</tr></thead><tbody>
          ${[4, 3, 2].map((k) => `<tr><td>${k} (${k === 4 ? 'no descarto ninguna' : 'descarto ' + (4 - k)})</td>${pens.map((p) => `<td>${fmt(S.expected(k, p))}</td>`).join('')}</tr>`).join('')}
        </tbody></table></div>
        <p style="max-width:68ch">Con <b>−2</b>, adivinar entre 4 te quita 1 punto en promedio y con 2 opciones quedas en cero: solo conviene responder si tu acierto supera el 50%. Con <b>−1</b> conviene arriesgar si lograste descartar al menos una opción.</p>
      </section>
      <section class="sheet stack">
        <h2>${esc(S.course.howTitle)}</h2>
        <ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;max-width:68ch">
          ${S.course.howAsk.map(([b, t]) => `<li><b>${esc(b)}</b> ${esc(t)}</li>`).join('')}
        </ul>
      </section>
    </div>`);
    app.appendChild(v);
  }

  S.views = S.views || {};
  S.views.how = { render };
})(window.Sim);
