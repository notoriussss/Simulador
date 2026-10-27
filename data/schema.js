/* Formato del banco y función Sim.add().
   Cada archivo de data/bank/ llama Sim.add('TEMA', [filas]). Una fila es un arreglo posicional:

     [ estilo, grupo, enunciado, correcta, por_qué, [distractor1, nota1], [distractor2, nota2], [distractor3, nota3], fuente ]

   - estilo: clave de Sim.styles (def, alias, casi, neg, app, dato)
   - grupo: clave de una tabla de Sim.contrasts ('' si no tiene)
   - nota: por qué ese distractor NO es la respuesta
   - fuente: lámina de donde sale (ROB-02, ROB-03 o ROB-04) */
window.Sim = window.Sim || {};

(function (S) {
  S.topics = [];
  S.bank = [];
  S.contrasts = [];

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
