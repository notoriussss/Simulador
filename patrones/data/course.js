/* Datos del curso: cuestionario teórico de diseño y patrones (selección múltiple + verdadero/falso). */
window.Sim = window.Sim || {};

(function (S) {
  S.course = {
    key: 'pd',
    title: 'Cuestionario de Diseño y Patrones',
    eyebrow: 'Desarrollo de Software · Prof. Jannelly Bello · Parcial 2',
    sub: 'Solo teoría: definiciones, componentes y características de SOLID y de los patrones expuestos en clase. Mezcla selección múltiple y verdadero/falso; cada error explica por qué.',
    uni: 'Universidad Católica Andrés Bello',
    sheetCourse: 'Desarrollo de Software · Cuestionario teórico',
    simIntro: '10 preguntas: selección múltiple (4 opciones) y verdadero/falso, 2 pts cada una. No sabemos si hay factor de corrección: elegí el factor y marcá si estás seguro o dudás. En verdadero/falso adivinar vale 50%, así que el factor importa más.',
    pens: [0, 1, 2],
    defaultPen: 0,
    penNote: 'Sin dato del profesor. Si confirma que resta, elegí el factor real.',
    extraLabel: null,
    extraDefault: true,
    xTopics: [],
    xChip: {},
    xChipDefault: 'Extra',
    methodLead: 'En teoría lo que más falla son los patrones vecinos (Strategy vs State, Adapter vs Facade vs Proxy) y los verdadero/falso con una palabra cambiada. Recuperar de memoria y leer por qué fallaste rinde más que releer las láminas.',
    howTitle: 'Qué esperar de este cuestionario',
    howAsk: [
      ['Verdadero/falso con una palabra cambiada.', 'Casi todas las falsas son una afirmación correcta con un detalle invertido: herencia por composición, estructural por creacional, «abiertas para la modificación». Leé con lupa.'],
      ['Patrones vecinos.', 'Strategy y State tienen el mismo diagrama; Adapter, Facade y Proxy envuelven objetos; Template Method y Strategy varían algoritmos. Mirá la pestaña Contrastes.'],
      ['Participantes de cada patrón.', 'Qué rol cumple cada pieza (Contexto, Handler, Hoja, Compuesto, Receptora, Creadora...). Es el tipo de definición que sale en selección múltiple.'],
      ['SOLID.', 'Los cinco principios con su nombre en español e inglés. En bloques de opciones compartidas hay que saber a cuál corresponde cada frase.'],
      ['Autores y fuentes.', 'Pressman (2010), Appleton, Fowler, M. A. Jackson, Hewlett-Packard y el GoF (Gamma et al., 1994).']
    ]
  };

  S.topics = [
    { k: 'DIS', n: 'Conceptos de diseño' },
    { k: 'SOL', n: 'Principios SOLID' },
    { k: 'BAS', n: 'Categorías y patrones básicos' },
    { k: 'CPX', n: 'Composite y Proxy' },
    { k: 'TST', n: 'Template Method y Strategy' },
    { k: 'SOB', n: 'State, Observer y Command' },
    { k: 'CHN', n: 'Chain of Responsibility' }
  ];

  S.styles = {
    def: 'Definición → término',
    inv: 'Término → definición',
    casi: 'Casi sinónimos',
    neg: '¿Cuál NO?',
    app: 'Aplicación',
    vf: 'Verdadero / falso'
  };
})(window.Sim);
