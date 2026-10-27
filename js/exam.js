/* Armado y corrección de parciales. Sin DOM: se puede probar desde Node (tools/check.js). */
(function (S) {
  const PER_EXAM = 10;

  /* Una pregunta lista para responder: opciones barajadas, cada una con su nota de «por qué no». */
  S.inst = (q, r) => ({
    q,
    opts: S.shuffle([{ o: q.a, n: null, ok: true }, ...q.d.map((d) => ({ o: d.o, n: d.n, ok: false }))], r),
    choice: null,
    conf: null,
  });

  S.build = (qs, seedPrefix) =>
    qs.map((q) => S.inst(q, seedPrefix ? S.rng(S.hash(seedPrefix + q.id)) : Math.random));

  /* Modelos fijos: reparte TODO el banco en parciales de 10 sin repetir preguntas, y cada tema queda
     repartido entre todos los modelos. Mismo banco = mismos modelos siempre. */
  S.models = (pool) => {
    const M = Math.floor(pool.length / PER_EXAM);
    const flat = S.topics.flatMap((t) => S.shuffle(pool.filter((q) => q.t === t.k), S.rng(S.hash('t' + t.k))));
    return Array.from({ length: M }, (_, m) =>
      S.shuffle(flat.filter((_, i) => i % M === m), S.rng(S.hash('m' + m))));
  };

  /* Parcial aleatorio balanceado: una pregunta de cada tema por turno, como cubre el profesor el temario. */
  S.randomExam = (pool) => {
    const byT = {};
    S.shuffle(pool).forEach((q) => (byT[q.t] = byT[q.t] || []).push(q));
    const topics = S.shuffle(Object.keys(byT));
    const out = [];
    for (let k = 0; out.length < PER_EXAM && k < 400; k++) {
      const q = byT[topics[k % topics.length]].shift();
      if (q) out.push(q);
    }
    return S.shuffle(out);
  };

  /* Nota: +2 por acierto, −pen por fallo, 0 en blanco. ifBlankDoubt = nota si hubieras dejado en blanco las dudosas. */
  S.score = (items, pen) => {
    const r = { total: 0, ok: 0, bad: 0, blank: 0, sure: { n: 0, ok: 0 }, doubt: { n: 0, ok: 0 }, ifBlankDoubt: 0 };
    items.forEach((it) => {
      if (it.choice == null) { r.blank++; return; }
      const good = it.opts[it.choice].ok;
      const pts = good ? 2 : -pen;
      r.total += pts;
      good ? r.ok++ : r.bad++;
      const bucket = it.conf === 'doubt' ? r.doubt : r.sure;
      bucket.n++;
      if (good) bucket.ok++;
      if (it.conf !== 'doubt') r.ifBlankDoubt += pts;
    });
    return r;
  };

  /* Puntos esperados por pregunta si te quedan k opciones y fallar resta pen. */
  S.expected = (k, pen) => 2 / k - pen * (1 - 1 / k);

  S.PER_EXAM = PER_EXAM;
})(window.Sim);
