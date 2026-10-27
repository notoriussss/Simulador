/* Vista Contrastes: tablas lado a lado de los términos que el profesor usa como distractores. */
(function (S) {
  const { el, esc } = S;

  function render(app) {
    const v = el(`<div class="stack">
      <section class="sheet stack">
        <div><h2>Tablas de contraste</h2>
          <p class="lead" style="margin-top:6px">En selección simple los distractores suelen ser términos vecinos. Estas tablas ponen lado a lado lo que se confunde. Lee una tabla, ciérrala y ponte a prueba con sus preguntas.</p></div>
        <div class="toc">${S.contrasts.map((c) => `<a href="#c-${c.g}">${esc(c.title)}</a>`).join('')}</div>
      </section>
      ${S.contrasts.map((c) => {
        const n = S.bank.filter((q) => q.g === c.g).length;
        return `<section class="sheet stack" id="c-${c.g}">
          <h3>${esc(c.title)}</h3><p class="lead">${esc(c.lead)}</p>
          <div class="tbl"><table><thead><tr>${c.cols.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
            <tbody>${c.rows.map((r) => `<tr>${r.map((x) => `<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
          ${n ? `<div class="row"><button class="btn" data-g="${c.g}" data-title="${esc(c.title)}">Ponerme a prueba · ${n} pregunta${n > 1 ? 's' : ''}</button></div>` : ''}
        </section>`;
      }).join('')}
    </div>`);
    v.querySelectorAll('[data-g]').forEach((b) => (b.onclick = () =>
      S.practice.start(S.bank.filter((q) => q.g === b.dataset.g).map((q) => q.id), b.dataset.title)));
    v.querySelectorAll('.toc a').forEach((a) => (a.onclick = (e) => {
      e.preventDefault();
      const t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) t.scrollIntoView({ behavior: 'smooth' });
    }));
    app.appendChild(v);
  }

  S.views = S.views || {};
  S.views.cmp = { render };
})(window.Sim);
