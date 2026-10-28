/* Formato del banco. Cada curso (nube/, dessoft/) tiene en data/ su course.js, sus archivos de data/bank/ y contrastes.js.

   Los archivos de data/bank/ llaman Sim.add('TEMA', [filas]). Una fila es un arreglo posicional:

     [ estilo, grupo, enunciado, correcta, por_qué, [distractor1, nota1], [distractor2, nota2], [distractor3, nota3], fuente, extra ]

   - estilo: clave de Sim.styles (por ejemplo def, alias, casi, neg, app, dato)
   - grupo: clave de una tabla de Sim.contrasts ('' si no tiene)
   - nota: por qué ese distractor NO es la respuesta
   - fuente: lámina de donde sale la pregunta
   - extra: true si es temario extra o «mencionado en clase» (el interruptor del temario lo incluye o lo excluye)

   Bloques de opciones compartidas (como hace el profesor: varias preguntas seguidas con las MISMAS 4 opciones):

     Sim.addSet('TEMA', 'id-del-bloque', grupo, fuente,
       [ [nombre, descripción], ... 4 opciones ... ],
       [ [enunciado, índice de la correcta (0 a 3)], ... de 2 a 4 preguntas ... ],
       { s: 'alias', x: true })   // opcional: estilo (por defecto 'def') y x:true si es temario extra

   - descripción: frase sobre esa opción; sirve de explicación si es la correcta y de «por qué no» si no lo es
   - cada pregunta del bloque debe tener una correcta distinta
   El motor las muestra juntas, seguidas y con las opciones en el mismo orden.

   Los números de las preguntas (id) son su posición de carga: para no perder el progreso guardado, agrega preguntas nuevas
   al final del orden de carga (por ejemplo en bloques.js) y no reordenes las que ya existen. */
window.Sim = window.Sim || {};

(function (S) {
  S.topics = [];
  S.bank = [];
  S.contrasts = [];
  S.sets = {}; // id de bloque → nombres de sus 4 opciones

  S.add = function (topic, rows) {
    rows.forEach((r) => {
      const q = {
        id: S.bank.length,
        t: topic,
        s: r[0],
        g: r[1],
        q: r[2],
        a: r[3],
        w: r[4],
        d: [r[5], r[6], r[7]].map((x) => ({ o: x[0], n: x[1] })),
        src: r[8],
      };
      if (r[9]) q.x = true;
      S.bank.push(q);
    });
  };

  S.addSet = function (topic, id, group, src, options, questions, extra) {
    extra = extra || {};
    S.sets[id] = options.map((x) => x[0]);
    questions.forEach(([stem, right]) => {
      const q = {
        id: S.bank.length,
        t: topic,
        s: extra.s || 'def',
        g: group,
        q: stem,
        a: options[right][0],
        w: options[right][1],
        d: options.filter((_, i) => i !== right).map((x) => ({ o: x[0], n: x[1] })),
        src,
        set: id,
      };
      if (extra.x) q.x = true;
      S.bank.push(q);
    });
  };
})(window.Sim);
