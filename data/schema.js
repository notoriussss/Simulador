/* Formato del banco y función Sim.add().
   Cada archivo de data/bank/ llama Sim.add('TEMA', [filas]). Una fila es un arreglo posicional:

     [ estilo, grupo, enunciado, correcta, por_qué, [distractor1, nota1], [distractor2, nota2], [distractor3, nota3], fuente ]

   - estilo: clave de Sim.styles (def, alias, casi, neg, app, dato)
   - grupo: clave de una tabla de Sim.contrasts ('' si no tiene)
   - nota: por qué ese distractor NO es la respuesta
   - fuente: lámina de donde sale (ROB-02, ROB-03 o ROB-04)

   Bloques de opciones compartidas (como hace el profesor: varias preguntas seguidas con las MISMAS 4 opciones):

     Sim.addSet('TEMA', 'id-del-bloque', grupo, fuente,
       [ [nombre, descripción], ... 4 opciones ... ],
       [ [enunciado, índice de la correcta (0 a 3)], ... 2 o más preguntas ... ])

   - descripción: frase sobre esa opción; sirve de explicación si es la correcta y de «por qué no» si no lo es
   - cada pregunta del bloque debe tener una correcta distinta
   El motor las muestra juntas, seguidas y con las opciones en el mismo orden. */
window.Sim = window.Sim || {};

(function (S) {
  S.topics = [];
  S.bank = [];
  S.contrasts = [];
  S.sets = {}; // id de bloque → nombres de sus 4 opciones

  S.addSet = function (topic, id, group, src, options, questions) {
    S.sets[id] = options.map((x) => x[0]);
    questions.forEach(([stem, right]) => {
      S.bank.push({
        id: S.bank.length,
        t: topic,
        s: 'def',
        g: group,
        q: stem,
        a: options[right][0],
        w: options[right][1],
        d: options.filter((_, i) => i !== right).map((x) => ({ o: x[0], n: x[1] })),
        src,
        set: id,
      });
    });
  };

  S.add = function (topic, rows) {
    rows.forEach((r) => {
      S.bank.push({
        id: S.bank.length,
        t: topic,
        s: r[0],
        g: r[1],
        q: r[2],
        a: r[3],
        w: r[4],
        d: [r[5], r[6], r[7]].map((x) => ({ o: x[0], n: x[1] })),
        src: r[8],
      });
    });
  };
})(window.Sim);
