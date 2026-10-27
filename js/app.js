/* Arranque y navegación entre modos. */
(function (S) {
  const MODES = ['sim', 'prac', 'err', 'cmp', 'how'];
  const app = document.getElementById('app');
  let mode = 'sim';

  document.getElementById('h-eyebrow').textContent = S.course.eyebrow;
  document.getElementById('h-title').textContent = S.course.title;
  document.getElementById('h-sub').textContent = S.course.sub;
  document.title = S.course.title + ' · Parcial 1';

  S.refresh = () => {
    app.innerHTML = '';
    S.views[mode].render(app);
  };

  S.go = (m) => {
    mode = m;
    document.querySelectorAll('nav.modes button').forEach((b) => b.setAttribute('aria-selected', b.dataset.mode === m));
    S.store.set('mode', m);
    S.refresh();
  };

  document.querySelectorAll('nav.modes button').forEach((b) => (b.onclick = () => {
    const v = S.views[b.dataset.mode];
    if (b.dataset.mode === mode && v.reset) v.reset(); // pulsar el modo activo vuelve a su pantalla inicial
    S.go(b.dataset.mode);
  }));

  const fromHash = (location.hash || '').slice(1);
  S.renderLegend();
  S.go(MODES.includes(fromHash) ? fromHash : S.store.get('mode', 'sim'));
})(window.Sim);
