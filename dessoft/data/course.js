/* Datos del curso: textos de la interfaz, temas y estilos de pregunta. */
window.Sim = window.Sim || {};

(function (S) {
  S.course = {
    key: 'ds',
    title: 'Simulacro Desarrollo de Software',
    eyebrow: 'Desarrollo de Software · Prof. Jannelly Bello',
    sub: 'Selección simple sobre ingeniería y análisis de requerimientos. Cada error te explica por qué tu opción no era, con la lámina de donde sale.',
    uni: 'Universidad Católica Andrés Bello',
    sheetCourse: 'Desarrollo de Software · Examen Parcial',
    simIntro: '10 preguntas de selección simple, 4 opciones, 2 pts cada una. Todavía no sabemos si la profesora resta por respuesta incorrecta: elegí el factor y marcá si estás seguro o dudás.',
    pens: [0, 1, 2],
    defaultPen: 0,
    penNote: 'No sabemos si esta profesora resta. Si lo confirma, elegí el factor real.',
    extraLabel: null,
    extraDefault: true,
    xTopics: [],
    xChip: {},
    xChipDefault: 'Ejercicio de clase',
    methodLead: 'Casi todo en este tema se gana sabiendo clasificar ejemplos y distinguir definiciones vecinas. Recuperar de memoria y entender por qué fallaste rinde más que releer las láminas.',
    howTitle: 'Qué esperar de esta profesora',
    howAsk: [
      ['Todavía no conocemos su estilo.', 'Por eso el banco mezcla cinco formatos: definición → término, término → definición, clasificar un ejemplo, ¿cuál NO? y casi sinónimos. Si cuando veas un parcial suyo notás un patrón, avisá y ajusto el banco.'],
      ['Definiciones con autor.', 'Las láminas citan a Sommerville (2011) y a Pressman (2010) en casi cada definición. Es fácil que pregunte quién dijo qué.'],
      ['Clasificar ejemplos.', 'En requerimientos lo típico es darte un enunciado y preguntar si es funcional o no funcional (de producto, organizacional o externo), o qué criterio de calidad viola.'],
      ['Listas completas.', 'Los 9 criterios de calidad, las 7 actividades de Pressman, las 5 categorías de modelado y los 7 símbolos del diagrama de actividades. Las opciones suelen salir de la misma lista.'],
      ['El ejercicio del café.', 'Es candidato a pregunta de aplicación: qué símbolo usás para cada parte del enunciado.'],
      ['Falta contenido.', 'La profesora todavía no subió todo. Cuando haya láminas nuevas, se agregan al banco y a las tablas.']
    ]
  };

  S.topics = [
    { k: 'DEF', n: 'Requerimientos y niveles' },
    { k: 'CAL', n: 'Criterios de calidad' },
    { k: 'TIP', n: 'Funcionales y no funcionales' },
    { k: 'IR', n: 'Ingeniería de requerimientos' },
    { k: 'AN', n: 'Análisis y modelado' },
    { k: 'CU', n: 'Casos de uso' },
    { k: 'ACT', n: 'Actividades y swimlane' }
  ];

  S.styles = {
    def: 'Definición → término',
    inv: 'Término → definición',
    clasif: 'Clasificar un ejemplo',
    casi: 'Casi sinónimos',
    neg: '¿Cuál NO?',
    app: 'Aplicación'
  };
})(window.Sim);
