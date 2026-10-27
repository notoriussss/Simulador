/* Validador del banco. Uso:  node tools/check.js
   Carga los mismos archivos de datos y lógica que index.html (sin DOM) y verifica que el banco esté bien armado.
   Úsalo cada vez que agregues preguntas. Sale con código 1 si hay errores. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]);
const NO_DOM = ['js/util.js', 'data/', 'js/state.js', 'js/exam.js'];

const ctx = { console, Math, Object, Array, JSON, String, Number };
ctx.window = ctx;
ctx.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
vm.createContext(ctx);
scripts
  .filter((s) => NO_DOM.some((p) => s.startsWith(p)))
  .forEach((s) => vm.runInContext(fs.readFileSync(path.join(root, s), 'utf8'), ctx, { filename: s }));

const S = ctx.Sim;
const errors = [];
const topicKeys = new Set(S.topics.map((t) => t.k));
const groups = new Set(S.contrasts.map((c) => c.g));
const seenStems = new Map();

S.bank.forEach((q) => {
  const tag = `#${q.id} [${q.t}] "${q.q.slice(0, 50)}…"`;
  if (!topicKeys.has(q.t)) errors.push(`${tag}: tema desconocido`);
  if (!S.styles[q.s]) errors.push(`${tag}: estilo desconocido «${q.s}»`);
  if (q.g && !groups.has(q.g)) errors.push(`${tag}: grupo sin tabla de contraste «${q.g}»`);
  if (!q.w) errors.push(`${tag}: falta la explicación de la correcta`);
  if (!/^ROB-0[234] · /.test(q.src || '')) errors.push(`${tag}: la fuente debe empezar con ROB-02, ROB-03 o ROB-04`);
  const opts = [q.a, ...q.d.map((d) => d.o)];
  if (opts.length !== 4 || opts.some((o) => !o)) errors.push(`${tag}: necesita 4 opciones no vacías`);
  if (new Set(opts).size !== 4) errors.push(`${tag}: opciones repetidas`);
  q.d.forEach((d) => { if (!d.n) errors.push(`${tag}: falta la nota del distractor «${d.o}»`); });
  if (seenStems.has(q.q)) errors.push(`${tag}: enunciado repetido con #${seenStems.get(q.q)}`);
  seenStems.set(q.q, q.id);
});

S.contrasts.forEach((c) => {
  c.rows.forEach((r) => { if (r.length !== c.cols.length) errors.push(`tabla ${c.g}: una fila tiene ${r.length} columnas y el encabezado ${c.cols.length}`); });
});

/* Bloques de opciones compartidas: de 2 a 4 preguntas, mismas 4 opciones, una correcta distinta por pregunta, mismo tema. */
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

const N = S.bank.length;
if (N % S.PER_EXAM) errors.push(`el banco tiene ${N} preguntas; para que cada modelo tenga ${S.PER_EXAM} debe ser múltiplo de ${S.PER_EXAM}`);

const models = S.models(S.bank);
const flat = models.map((units) => units.flat());
const used = flat.flat().map((q) => q.id);
if (new Set(used).size !== used.length) errors.push('una pregunta sale en más de un modelo');
if (used.length !== N) errors.push(`los modelos cubren ${used.length} de ${N} preguntas`);
flat.forEach((m, i) => { if (m.length !== S.PER_EXAM) errors.push(`el modelo ${i} tiene ${m.length} preguntas`); });

/* En cada modelo armado, las preguntas de un bloque salen seguidas y con las opciones en el mismo orden. */
models.forEach((units, mi) => {
  const items = S.arrange(units, 'm' + mi + '-');
  Object.keys(blocks).forEach((id) => {
    const at = items.map((it, k) => (it.q.set === id ? k : -1)).filter((k) => k >= 0);
    if (!at.length) return;
    if (at[at.length - 1] - at[0] !== at.length - 1) errors.push(`modelo ${mi}: el bloque ${id} no sale seguido`);
    const order = (k) => items[k].opts.map((o) => o.o).join('|');
    if (at.some((k) => order(k) !== order(at[0]))) errors.push(`modelo ${mi}: el bloque ${id} no mantiene el orden de opciones`);
  });
});

/* Parcial aleatorio: siempre 10 preguntas exactas. */
for (let i = 0; i < 300; i++) {
  const n = S.randomExam(S.bank).flat().length;
  if (n !== S.PER_EXAM) { errors.push(`un parcial aleatorio salió con ${n} preguntas`); break; }
}

if (errors.length) {
  console.error(errors.length + ' errores:\n  ' + errors.join('\n  '));
  process.exit(1);
}

const by = {};
S.bank.forEach((q) => (by[q.t] = (by[q.t] || 0) + 1));
const st = {};
S.bank.forEach((q) => (st[q.s] = (st[q.s] || 0) + 1));
const sizes = {};
Object.values(blocks).forEach((qs) => (sizes[qs.length] = (sizes[qs.length] || 0) + 1));
const withBlock = flat.filter((m) => m.some((q) => q.set)).length;
console.log(`OK · ${N} preguntas · ${models.length} modelos · ${S.contrasts.length} tablas de contraste`);
console.log('Por tema:  ', S.topics.map((t) => `${t.k}:${by[t.k]}`).join(' '));
console.log('Por estilo:', Object.entries(st).map(([k, v]) => `${k}:${v}`).join(' '));
console.log(`Bloques: ${Object.keys(blocks).length} (de 2: ${sizes[2] || 0}, de 3: ${sizes[3] || 0}, de 4: ${sizes[4] || 0}) · modelos con algún bloque: ${withBlock}/${models.length}`);

/* Posición de la respuesta correcta en los modelos: debería repartirse, no concentrarse. */
const pos = [0, 0, 0, 0];
models.forEach((units, mi) => S.arrange(units, 'm' + mi + '-').forEach((it) => pos[it.opts.findIndex((o) => o.ok)]++));
console.log('Posición de la correcta en modelos (1..4):', pos.join(' '));
