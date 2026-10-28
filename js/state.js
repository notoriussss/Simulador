/* Estado persistente: preferencias y estadísticas por pregunta.
   stats[id] = { c: aciertos, w: fallos, b: aciertos seguidos (máx. 3) }.
   Una pregunta está «por repasar» si falló alguna vez y aún no suma 2 aciertos seguidos. */
(function (S) {
  S.store.prefix = (S.course.key || 'sim') + '-';
  S.stats = S.store.get('stats', {});
  S.prefs = Object.assign({ pen: S.course.defaultPen, extra: !!S.course.extraDefault }, S.store.get('prefs-v2', {}));
  if (!S.course.pens.includes(S.prefs.pen)) S.prefs.pen = S.course.defaultPen;

  S.savePrefs = () => S.store.set('prefs-v2', S.prefs);

  /* Preguntas disponibles: las marcadas x (temario extra o «mencionado en clase») solo entran si el interruptor está activo. */
  S.pool = (extra) => S.bank.filter((q) => extra || !q.x);

  S.record = (id, ok) => {
    const s = S.stats[id] || { c: 0, w: 0, b: 0 };
    if (ok) { s.c++; s.b = Math.min(s.b + 1, 3); } else { s.w++; s.b = 0; }
    S.stats[id] = s;
    S.store.set('stats', S.stats);
    if (S.renderLegend) S.renderLegend();
  };

  S.mastered = (id) => !!S.stats[id] && S.stats[id].b >= 2;
  S.pendingIds = () =>
    Object.entries(S.stats)
      .filter(([id, s]) => s.w > 0 && s.b < 2 && S.bank[+id])
      .sort((a, b) => a[1].b - b[1].b || b[1].w - a[1].w)
      .map(([id]) => +id);

  S.resetProgress = () => {
    S.stats = {};
    S.store.set('stats', {});
    S.store.keys('best-').forEach((k) => S.store.remove(k));
  };

  S.topicName = (k) => (S.topics.find((t) => t.k === k) || {}).n || k;
})(window.Sim);
