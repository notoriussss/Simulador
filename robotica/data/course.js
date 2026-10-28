/* Datos del curso: textos de la interfaz, temas y estilos de pregunta. */
window.Sim = window.Sim || {};

(function (S) {
  S.course = {
    key: 'robotica-p1', // prefijo del progreso guardado en el navegador
    title: 'Simulacro de Robótica',
    docTitle: 'Simulacro Robótica · Parcial 1',
    eyebrow: 'UCAB · Robótica · Parcial 1',
    sub: 'Preguntas al estilo del profesor sobre ROB-02, ROB-03 y ROB-04. Cada error te muestra por qué la opción que elegiste no era, con la lámina de donde sale.',
    uni: 'Universidad Católica Andrés Bello',
    sheetCourse: 'Robótica · Examen Parcial 1',
    simIntro: 'Igual que el parcial real: selección simple, 4 opciones, 2 pts cada una y factor de corrección por respuesta incorrecta. Marca también si estás seguro o dudas: al final te digo si te convenía arriesgar o dejar en blanco.',
    pens: [2, 1],
    defaultPen: 2,
    penNote: 'Este profesor ha usado −2 y −1 en sus parciales; −2 es el más frecuente.',
    methodLead: 'Este parcial premia distinguir términos vecinos y castiga adivinar. Releer las láminas no entrena eso. Lo que funciona es recordar de memoria, equivocarte y entender por qué.',
    howTitle: 'Cómo pregunta este profesor',
    howAsk: [
      ['Definición → nombre.', 'Copia una frase casi textual de la lámina y pide el término («Mide la probabilidad de…», «Razonamiento que va de lo particular a lo general»). Lee las definiciones de las láminas como si fueran enunciados.'],
      ['Distractores del mismo tema.', 'Las cuatro opciones suelen salir de la misma lista. Aquí: los tipos de rueda, los arreglos de ruedas, los paradigmas, los elementos del híbrido. Tienes que saber la lista completa y qué la distingue.'],
      ['Bloques con las mismas opciones.', 'Pone entre 2 y 4 preguntas seguidas que comparten las mismas 4 opciones y cada una tiene una respuesta distinta. Hay que saber a cuál de las cuatro corresponde cada definición, no solo reconocer una. Se entrenan con «Solo bloques de opciones compartidas» en Práctica.'],
      ['Distractores que suenan reales.', 'En sus otros parciales mezcla términos inventados o que no vimos con los reales. Si un término no lo viste nunca en clase, sospecha.'],
      ['Las definiciones centrales se repiten.', 'Las mismas preguntas vuelven casi idénticas entre parciales. Las definiciones de autor, las leyes de Asimov y la lista de sensores son candidatas.'],
      ['Cifras y nombres propios.', 'Años, autores y datos numéricos (2 cm a 5 m, 24 satélites, 120°, 1 a 2°) aparecen como opción única. Se estudian con las tablas de Contrastes.'],
    ],
  };

  S.topics = [
    { k: 'HI', n: 'Historia y origen' },
    { k: 'DF', n: 'Definiciones y clasificación' },
    { k: 'MV', n: 'Robot móvil, locomoción y cinemática' },
    { k: 'RU', n: 'Ruedas y arreglos' },
    { k: 'SE', n: 'Sensores' },
    { k: 'AC', n: 'Actuadores, transmisiones y sistemas' },
    { k: 'PA', n: 'Paradigmas y comportamientos' },
    { k: 'AR', n: 'Arquitecturas de control' },
  ];

  S.styles = {
    def: 'Definición → nombre',
    alias: 'Alias / mejor conocido como',
    casi: 'Casi sinónimos',
    neg: '¿Cuál NO?',
    app: 'Aplicación / ejemplo',
    dato: 'Dato o cifra',
  };
})(window.Sim);
