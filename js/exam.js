/* Armado y corrección de parciales. Sin DOM: se puede probar desde Node (tools/check.js).

   Unidad = una pregunta suelta, o un bloque de preguntas con las mismas 4 opciones (q.set). Un bloque siempre sale
   completo, seguido y con las opciones en el mismo orden, como hace el profesor. */
(function (S) {
  const PER_EXAM = 10;

  /* Una pregunta lista para responder. Con `order` (lista de textos de opción) usa ese orden; si no, baraja.
     Cada opción lleva su nota de «por qué no». */
  S.inst = (q, r, order) => {
    const all = [{ o: q.a, n: null, ok: true }, ...q.d.map((d) => ({ o: d.o, n: d.n, ok: false }))];
    const opts = order ? order.map((name) => all.find((x) => x.o === name)) : S.shuffle(all, r);
    return { q, opts, choice: null, conf: null };
  };

  /* Agrupa preguntas en unidades: cada bloque (mismo q.set) forma una sola unidad, en el orden del banco. */
  S.units = (qs) => {
    const bySet = {};
    const out = [];
    qs.forEach((q) => {
      if (!q.set) return out.push([q]);
      if (!bySet[q.set]) { bySet[q.set] = []; out.push(bySet[q.set]); }
      bySet[q.set].push(q);
    });
    out.forEach((u) => u.sort((a, b) => a.id - b.id));
    return out;
  };

  /* Convierte unidades en preguntas listas: baraja las unidades y las opciones. Con seedPrefix el resultado es siempre el mismo. */
  S.arrange = (units, seedPrefix) => {
    const rnd = (key) => (seedPrefix ? S.rng(S.hash(seedPrefix + key)) : Math.random);
    return S.shuffle(units, rnd('u')).flatMap((u) => {
      if (u[0].set) {
        const order = S.shuffle(S.sets[u[0].set], rnd('s' + u[0].set));
        return u.map((q) => S.inst(q, null, order));
      }
      return [S.inst(u[0], rnd('q' + u[0].id))];
    });
  };

  /* Modelos fijos: reparte TODO el banco en parciales de 10 sin repetir preguntas. Los bloques se reparten primero
     (uno por modelo, mientras alcance) y cada tema queda repartido entre todos. Mismo banco = mismos modelos.
     Devuelve, por modelo, una lista de unidades. */
  S.models = (pool) => {
    const M = Math.floor(pool.length / PER_EXAM);
    const units = S.units(pool);
    const order = (u) => S.topics.findIndex((t) => t.k === u[0].t);
    const blocks = units.filter((u) => u.length > 1).sort((a, b) => order(a) - order(b) || a[0].id - b[0].id);
    const singles = S.topics.flatMap((t) =>
      S.shuffle(units.filter((u) => u.length === 1 && u[0].t === t.k), S.rng(S.hash('t' + t.k))));
    const models = Array.from({ length: M }, () => ({ units: [], n: 0 }));

    blocks.forEach((b, i) => {
      let m = i % M;
      for (let k = 0; k < M && models[m].n + b.length > PER_EXAM; k++) m = (m + 1) % M;
      models[m].units.push(b);
      models[m].n += b.length;
    });
    let p = 0;
    singles.forEach((u) => {
      for (let k = 0; k < M && models[p % M].n >= PER_EXAM; k++) p++;
      const m = models[p % M];
      m.units.push(u);
      m.n++;
      p++;
    });
    return models.map((m) => m.units);
  };

  /* Parcial aleatorio balanceado: una unidad de cada tema por turno, como cubre el profesor el temario.
     Devuelve unidades que suman exactamente 10 preguntas. */
  S.randomExam = (pool) => {
    const byT = {};
    S.shuffle(S.units(pool)).forEach((u) => (byT[u[0].t] = byT[u[0].t] || []).push(u));
    const topics = S.shuffle(Object.keys(byT));
    const out = [];
    let n = 0;
    for (let k = 0; n < PER_EXAM && k < 800; k++) {
      const bucket = byT[topics[k % topics.length]];
      const at = bucket.findIndex((u) => n + u.length <= PER_EXAM);
      if (at < 0) continue;
      const [u] = bucket.splice(at, 1);
      out.push(u);
      n += u.length;
    }
    return out;
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
