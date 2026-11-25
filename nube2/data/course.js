/* Datos del curso: textos de la interfaz, temas y estilos de pregunta. */
window.Sim = window.Sim || {};

(function (S) {
  S.course = {
    key: 'cn2',
    title: 'Simulacro de Computación en la Nube',
    docTitle: 'Simulacro Nube · Parcial 2',
    eyebrow: 'UCAB · Computación en la Nube · Parcial 2',
    sub: 'Preguntas al estilo del profesor sobre CEN-06 a CEN-11: fundamentos, virtualización y contenedores, modelos de servicio y de despliegue. Cada error te muestra por qué la opción elegida no era, con la lámina de donde sale.',
    uni: 'Universidad Católica Andrés Bello',
    sheetCourse: 'Computación en la Nube · Examen Parcial 2',
    simIntro: 'Igual que el parcial real: selección simple, 4 opciones, 2 pts cada una y factor de corrección por respuesta incorrecta. Marcá también si estás seguro o dudás: al final te digo si te conviene arriesgar o dejar en blanco.',
    pens: [2, 1],
    defaultPen: 2,
    penNote: 'En los parciales de IA usó ambos; −2 es el más reciente.',
    extraLabel: 'Incluir lo que sale solo en diagramas y fotos de clase (actores NIST, seis capas, serverless)',
    extraDefault: true,
    xTopics: [],
    xChip: {},
    xChipDefault: 'Diagrama / foto de clase',
    methodLead: 'Este parcial premia distinguir términos vecinos y castiga adivinar. Leer las láminas otra vez no entrena eso. Lo que funciona es recuperar de memoria, equivocarte y entender por qué.',
    howTitle: 'Cómo pregunta este profesor',
    howAsk: [
      ['Definición → nombre.', 'Copia una frase casi textual de la lámina y pregunta el término: «Mide la probabilidad de…», «Son métodos donde…». Leé las definiciones de CEN-06 a CEN-11 como si fueran enunciados.'],
      ['Distractores inventados que suenan reales.', 'En IA puso "Receptor Over Curve", "Redes feed-backward", "Clustering basado en curvas". Aquí esperá cosas como "Hipervisor de tipo 3" o "Elasticidad diferida". Si nunca lo viste en clase, sospechá.'],
      ['Vecinos de la misma lista.', 'Las 4 opciones salen de una misma lista: las 5 características del NIST, los 4 modelos de despliegue, SaaS/PaaS/IaaS, los tipos de hipervisor. Hay que saberse la lista completa.'],
      ['Bloques con las mismas opciones.', 'Pone de 2 a 4 preguntas seguidas que comparten las mismas 4 opciones, cada una con respuesta distinta (en IA: Precisión / Tasa de error / Especificidad / Sensibilidad dos veces seguidas). Se practican con «Solo bloques de opciones compartidas».'],
      ['Siglas que chocan.', 'DaaS es Datos como servicio y también Escritorio como servicio; BMaaS, SecaaS, AIPaaS, FaaS, VPC, SLA, OCI. Asociá cada sigla con su frase de la lámina.'],
      ['Fechas y nombres.', '1961 McCarthy (tiempo compartido), 1999 Salesforce, 2002 AWS, 2006 EC2 y Google Docs, 2000 FreeBSD Jails, 2011 CSA, 2015 OCI. Son preguntas fáciles de poner y de equivocarse.']
    ]
  };

  S.topics = [
    { k: 'FU', n: 'Origen y definición de la nube' },
    { k: 'CA', n: 'Características de la nube' },
    { k: 'SL', n: 'Computación sin servidor' },
    { k: 'AQ', n: 'Arquitectura de referencia' },
    { k: 'VI', n: 'Virtualización e hipervisores' },
    { k: 'CT', n: 'Contenedores y orquestación' },
    { k: 'MS', n: 'Modelos de servicio' },
    { k: 'MD', n: 'Modelos de despliegue' },
    { k: 'AD', n: 'Adopción, SLA y seguridad' }
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
