/* Datos del curso: textos de la interfaz, temas y estilos de pregunta. */
window.Sim = window.Sim || {};

(function (S) {
  S.course = {
    key: 'sd',
    title: 'Simulacro de Sistemas Distribuidos',
    docTitle: 'Simulacro Sistemas Distribuidos',
    eyebrow: 'UCAB · Computación en la Nube · Parcial 1',
    sub: 'Preguntas al estilo del profesor sobre CEN-02 a CEN-05. Cada error te muestra por qué la opción elegida no era, con la lámina de donde sale.',
    uni: 'Universidad Católica Andrés Bello',
    sheetCourse: 'Computación en la Nube · Examen Parcial 1',
    simIntro: 'Igual que el parcial real: selección simple, 4 opciones, 2 pts cada una y factor de corrección por respuesta incorrecta. Marcá también si estás seguro o dudás: al final te digo si te conviene arriesgar o dejar en blanco.',
    pens: [2, 1],
    defaultPen: 2,
    penNote: 'En los parciales de IA usó ambos; −2 es el más reciente.',
    extraLabel: 'Incluir comunicación en grupo y replicación (final de CEN-05)',
    extraDefault: true,
    xTopics: [],
    xChip: {
      GR: 'Final de CEN-05'
    },
    xChipDefault: 'Mencionado en clase',
    methodLead: 'Este parcial premia distinguir términos vecinos y castiga adivinar. Leer las láminas otra vez no entrena eso. Lo que funciona es recuperar de memoria, equivocarte y entender por qué.',
    howTitle: 'Cómo pregunta este profesor',
    howAsk: [
      ['Definición → nombre.', 'Copia una frase casi textual de la lámina y pregunta el término. Leé las definiciones de las láminas como enunciados.'],
      ['Distractores inventados que suenan reales.', 'En IA puso "Receptor Over Curve", "Redes feed-backward", "Clustering basado en curvas". Si un término no lo viste nunca en clase, sospechá.'],
      ['Vecinos del mismo tema.', 'Las cuatro opciones suelen salir de la misma lista (las 7 capas, los 4 tipos de primitivas, las transparencias). Tenés que saber la lista completa.'],
      ['Bloques con las mismas opciones.', 'Pone entre 2 y 4 preguntas seguidas que comparten las mismas 4 opciones, y cada una tiene una respuesta distinta. Hay que saber a cuál de las cuatro corresponde cada definición, no solo reconocer una. Se practican con «Solo bloques de opciones compartidas».'],
      ['Repite preguntas entre parciales.', 'F-score, softmax y bagging salieron en varios exámenes casi iguales. Las definiciones centrales vuelven.'],
      ['Lo que dijo "para el examen".', 'Ventanas tontas, Frame Relay, XON/XOFF, Erlang, por qué funciona la fórmula de NTP. Están en el banco marcadas como "Mencionado en clase".']
    ]
  };

  S.topics = [
    { k: 'SD', n: 'Fundamentos y objetivos' },
    { k: 'TR', n: 'Transparencia y desafíos' },
    { k: 'AR', n: 'Arquitecturas' },
    { k: 'PH', n: 'Procesos e hilos' },
    { k: 'RD', n: 'Redes, OSI y protocolos' },
    { k: 'CM', n: 'RPC, mensajes y sockets' },
    { k: 'CO', n: 'Concurrencia y relojes' },
    { k: 'EX', n: 'Exclusión mutua y elección' },
    { k: 'GR', n: 'Grupos y replicación' }
  ];

  S.styles = {
    def: 'Definición → nombre',
    alias: 'Alias / mejor conocido como',
    casi: 'Casi sinónimos',
    neg: '¿Cuál NO?',
    app: 'Aplicación',
    dato: 'Dato o cifra'
  };
})(window.Sim);
