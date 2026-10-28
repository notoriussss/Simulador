/* Validador de los bancos. Uso:
     node tools/check.js            valida todos los cursos
     node tools/check.js nube       valida uno solo
   Carga los mismos archivos de datos y lógica que la página de cada curso (sin DOM) y verifica que el banco esté bien armado.
   Úsalo cada vez que agregues preguntas. Sale con código 1 si hay errores; los avisos no hacen fallar. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const COURSES = ['robotica', 'nube', 'dessoft'];
const wanted = process.argv[2] ? [process.argv[2]] : COURSES;
let failed = false;

function load(dir) {
  const html = fs.readFileSync(path.join(root, dir, 'index.html'), 'utf8');
  const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => path.normalize(path.join(root, dir, m[1])));
  const ctx = { console, Math, Object, Array, JSON, String, Number };
  ctx.window = ctx;
  ctx.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
  vm.createContext(ctx);
  // Todo menos las vistas y la interfaz, que necesitan un navegador
  scripts
    .filter((p) => /[\\/]js[\\/](util|schema|state|exam)\.js$|[\\/]data[\\/]/.test(p))
    .forEach((p) => vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: p }));
  return ctx.Sim;
}

for (const dir of wanted) {
  const S = load(dir);
  const errors = [];
  const warns = [];
  const topicKeys = new Set(S.topics.map((t) => t.k));
  const groups = new Set(S.contrasts.map((c) => c.g));
  const seenStems = new Map();

  S.bank.forEach((q) => {
    const tag = `#${q.id} [${q.t}] "${q.q.slice(0, 50)}…"`;
    if (!topicKeys.has(q.t)) errors.push(`${tag}: tema desconocido`);
    if (!S.styles[q.s]) errors.push(`${tag}: estilo desconocido «${q.s}»`);
    if (q.g && !groups.has(q.g)) warns.push(`${tag}: grupo sin tabla de contraste «${q.g}»`);
    if (!q.w) errors.push(`${tag}: falta la explicación de la correcta`);
    if (!q.src) errors.push(`${tag}: falta la fuente`);
    const opts = [q.a, ...q.d.map((d) => d.o)];
    if (opts.length !== 4 || opts.some((o) => !o)) errors.push(`${tag}: necesita 4 opciones no vacías`);
    if (new Set(opts).size !== 4) errors.push(`${tag}: opciones repetidas`);
    q.d.forEach((d) => { if (!d.n) errors.push(`${tag}: falta la nota del distractor «${d.o}»`); });
    if (seenStems.has(q.q)) warns.push(`${tag}: enunciado repetido con #${seenStems.get(q.q)}`);
    seenStems.set(q.q, q.id);
  });

  S.contrasts.forEach((c) => {
    c.rows.forEach((r) => { if (r.length !== c.cols.length) errors.push(`tabla ${c.g}: una fila tiene ${r.length} columnas y el encabezado ${c.cols.length}`); });
  });

  /* Bloques de opciones compartidas: de 2 a 4 preguntas, mismas 4 opciones, una correcta distinta por pregunta, mismo tema, seguidas. */
  const blocks = {};
  S.bank.filter((q) => q.set).forEach((q) => (blocks[q.set] = blocks[q.set] || []).push(q));
  Object.entries(blocks).forEach(([id, qs]) => {
    if (qs.length < 2 || qs.length > 4) errors.push(`bloque ${id}: tiene ${qs.length} preguntas (debe tener de 2 a 4)`);
    if (new Set(qs.map((q) => q.t)).size !== 1) errors.push(`bloque ${id}: mezcla temas`);
    if (new Set(qs.map((q) => q.a)).size !== qs.length) errors.push(`bloque ${id}: dos preguntas tienen la misma respuesta correcta`);
    const names = [...S.sets[id]].sort().join('|');
    qs.forEach((q) => {
      if ([q.a, ...q.d.map((d) => d.o)].sort().join('|') !== names) errors.push(`bloque ${id}: la pregunta #${q.id} no usa las mismas opciones`);
    });
    const ids = qs.map((q) => q.id);
    if (ids[ids.length - 1] - ids[0] !== ids.length - 1) errors.push(`bloque ${id}: sus preguntas no están seguidas en el banco`);
  });

  /* Modelos fijos: cada pregunta en un solo modelo, de 10 en 10, con los bloques seguidos y con las mismas opciones en el mismo orden.
     Se prueban los dos temarios (con y sin extras) si el curso tiene interruptor. */
  const pools = S.course.extraLabel ? [['con extras', S.pool(true)], ['sin extras', S.pool(false)]] : [['', S.pool(!!S.course.extraDefault)]];
  const summary = [];
  pools.forEach(([name, pool]) => {
    const models = S.models(pool);
    const flat = models.map((units) => units.flat());
    const used = flat.flat().map((q) => q.id);
    if (new Set(used).size !== used.length) errors.push(`${name}: una pregunta sale en más de un modelo`);
    flat.forEach((m, i) => { if (m.length !== S.PER_EXAM) errors.push(`${name}: el modelo ${i} tiene ${m.length} preguntas`); });
    if (pool.length % S.PER_EXAM) warns.push(`${name ? name + ": " : ""}${pool.length} preguntas; sobran ${pool.length % S.PER_EXAM} que no entran en ningún modelo (salen en el aleatorio y la práctica). Con ${pool.length + S.PER_EXAM - (pool.length % S.PER_EXAM)} preguntas entrarían todas`);
    models.forEach((units, mi) => {
      const items = S.arrange(units, 'm' + mi + '-');
      Object.keys(blocks).forEach((id) => {
        const at = items.map((it, k) => (it.q.set === id ? k : -1)).filter((k) => k >= 0);
        if (!at.length) return;
        if (at[at.length - 1] - at[0] !== at.length - 1) errors.push(`${name}: modelo ${mi}: el bloque ${id} no sale seguido`);
        const order = (k) => items[k].opts.map((o) => o.o).join('|');
        if (at.some((k) => order(k) !== order(at[0]))) errors.push(`${name}: modelo ${mi}: el bloque ${id} no mantiene el orden de opciones`);
      });
    });
    summary.push(`${name ? name + ': ' : ''}${models.length} modelos`);
    for (let i = 0; i < 300; i++) {
      const n = S.randomExam(pool).flat().length;
      if (n !== S.PER_EXAM) { errors.push(`${name}: un parcial aleatorio salió con ${n} preguntas`); break; }
    }
  });

  const by = {};
  S.bank.forEach((q) => (by[q.t] = (by[q.t] || 0) + 1));
  const sizes = {};
  Object.values(blocks).forEach((qs) => (sizes[qs.length] = (sizes[qs.length] || 0) + 1));
  console.log(`\n[${dir}] ${S.bank.length} preguntas · ${S.contrasts.length} tablas de contraste · ${summary.join(' · ')}`);
  console.log('  por tema:', S.topics.map((t) => `${t.k}:${by[t.k] || 0}`).join(' '));
  if (Object.keys(blocks).length) console.log(`  bloques: ${Object.keys(blocks).length} (de 2: ${sizes[2] || 0}, de 3: ${sizes[3] || 0}, de 4: ${sizes[4] || 0})`);
  warns.forEach((w) => console.log('  AVISO: ' + w));
  if (errors.length) {
    failed = true;
    console.error(`  ${errors.length} errores:\n    ` + errors.join('\n    '));
  } else console.log('  OK');
}

process.exit(failed ? 1 : 0);
