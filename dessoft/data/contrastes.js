/* Tablas de contraste. Cada una tiene un g que coincide con el grupo de las preguntas del banco que se refieren a ella. */
Sim.contrasts.push(
  {
    g: 'niveles',
    title: 'Niveles de abstracción',
    lead: 'Mismo requisito, dos redacciones: la del usuario y la del sistema.',
    cols: ['Nivel', 'Cómo se escribe', 'Ejemplo de la lámina'],
    rows: [
      ['Requerimiento de usuario', 'Abstracto, alto nivel, lenguaje natural, desde la necesidad del usuario', '"Como usuario, quiero modificar mi contraseña para proteger mi cuenta"'],
      ['Requerimiento de sistema', 'Formal, detallado, lenguaje técnico: funciones, servicios y restricciones', '"El sistema debe permitir registrar, consultar, modificar y eliminar los datos del usuario..."']
    ]
  },
  {
    g: 'calidad',
    title: 'Criterios de calidad',
    lead: 'Nueve criterios. Para cada uno, la pregunta que detecta si se viola.',
    cols: ['Criterio', 'Definición', 'Se viola si...'],
    rows: [
      ['Correcto', 'Refleja una necesidad real', 'Nadie lo pidió ni lo necesita'],
      ['No ambiguo', 'Una única interpretación', '"rápido", "fácil", "amigable"'],
      ['Entendible', 'Fácil de entender para todos', 'El cliente no entiende la jerga'],
      ['Completo', 'Cubre todas las necesidades', 'Falta algo que se necesita'],
      ['Consistente', 'No se contradicen entre sí', 'Dos requerimientos dicen lo opuesto'],
      ['Realista (factible)', 'Posible con las restricciones técnicas, económicas y de tiempo', 'Imposible con ese tiempo o presupuesto'],
      ['Verificable', 'Se puede comprobar: pruebas, inspección, análisis o demostración', 'No hay cómo probarlo'],
      ['Modificable', 'Se adapta a cambios de forma controlada y consistente', 'Un cambio rompe todo'],
      ['Trazable', 'Origen conocido y seguible en diseño, implementación y pruebas', 'No se sabe de dónde salió']
    ]
  },
  {
    g: 'tipos',
    title: 'Funcionales y no funcionales',
    lead: 'Funcional = qué HACE. No funcional = cómo lo limita. Para los no funcionales, preguntá de dónde viene la limitación.',
    cols: ['Tipo', 'Origen o idea', 'Ejemplos'],
    rows: [
      ['Funcional', 'Qué hace el sistema y cómo reacciona a entradas', 'Enviar correo al registrarse, generar reporte'],
      ['No funcional de producto', 'Restringe el comportamiento del producto', 'Rendimiento, memoria, usabilidad, fiabilidad, portabilidad'],
      ['No funcional organizacional', 'Políticas y procedimientos del cliente o del desarrollador', 'Proceso operativo, estándares de desarrollo, requerimientos ambientales'],
      ['No funcional externo', 'Factores ajenos al sistema y a su desarrollo', 'Regulatorios, legislativos, éticos']
    ]
  },
  {
    g: 'actividades',
    title: 'Actividades de la ingeniería de requerimientos',
    lead: 'Pressman (2010). El verbo clave de cada una suele estar en el enunciado.',
    cols: ['Actividad', 'Verbo clave', 'Qué pasa'],
    rows: [
      ['Concepción', 'Iniciar', 'Se identifica la necesidad, los stakeholders y la factibilidad'],
      ['Indagación', 'Adquirir', 'Se obtienen y analizan requerimientos (problemas de alcance, entendimiento, volatilidad)'],
      ['Elaboración', 'Refinar', 'Se refinan, clasifican y organizan; casos de uso'],
      ['Negociación', 'Priorizar', 'El cliente ordena y prioriza; se resuelven conflictos'],
      ['Especificación', 'Documentar', 'Documentos formales o informales'],
      ['Validación', 'Revisar', 'Sin ambigüedades, inconsistencias, omisiones ni errores'],
      ['Administración', 'Controlar', 'Identificar, controlar y seguir cambios en el tiempo']
    ]
  },
  {
    g: 'indagacion',
    title: 'Problemas de la indagación',
    lead: 'Christel y Kang (1992).',
    cols: ['Problema', 'Señal en el enunciado', ''],
    rows: [
      ['Alcance', 'Límites del sistema mal definidos; detalles técnicos innecesarios', ''],
      ['Entendimiento', 'El cliente no sabe bien qué necesita o no logra comunicarlo', ''],
      ['Volatilidad', 'Los requerimientos cambian con el tiempo', '']
    ]
  },
  {
    g: 'validacion',
    title: 'Validación: entradas, participantes y salida',
    lead: 'Fácil de preguntar como "¿cuál NO es entrada?".',
    cols: ['Elemento', 'Contenido', ''],
    rows: [
      ['Entradas', 'Especificación de requerimientos del sistema, prototipos de interfaz, actas de reuniones', ''],
      ['Participantes', 'Ingeniero de requerimientos, clientes y usuarios', ''],
      ['Salida', 'Diagnóstico de problemas en los requerimientos', '']
    ]
  },
  {
    g: 'modelos',
    title: 'Categorías del modelado',
    lead: 'La trampa: el DFD es de FLUJO (no de datos) y el diagrama de secuencia es de COMPORTAMIENTO (no de flujo).',
    cols: ['Categoría', 'Representa', 'Ejemplo'],
    rows: [
      ['Basados en escenarios', 'Requerimientos desde el punto de vista de los actores', 'Casos de uso, historias de usuario'],
      ['Orientados al flujo', 'Elementos funcionales y cómo transforman los datos', 'DFD'],
      ['Orientados a clases', 'Clases (atributos, operaciones) y su colaboración', 'Diagrama de clases y colaboración'],
      ['De datos', 'Dominio de información del problema', 'Entidad-Relación'],
      ['De comportamiento', 'Reacción a estímulos internos o externos', 'Diagramas de secuencia y de estado']
    ]
  },
  {
    g: 'principios',
    title: 'Principios del modelado',
    lead: 'Estratificación y nivel de abstracción son el par más parecido.',
    cols: ['Principio', 'Idea', ''],
    rows: [
      ['Dominio de la información', 'Representarlo completo: entradas, salidas, almacenes', ''],
      ['Definición de funciones', 'Definir con precisión las funciones del software', ''],
      ['Comportamiento', 'Representarlo como consecuencia de eventos externos', ''],
      ['Estratificación / Jerarquía', 'DIVIDIR los modelos para descubrir detalles progresivamente', ''],
      ['Nivel de abstracción', 'Ir de la información esencial a los detalles de implementación', '']
    ]
  },
  {
    g: 'cu',
    title: 'Include y extend',
    lead: 'Include = obligatorio y común. Extend = opcional y específico.',
    cols: ['Relación', 'Cuándo se usa', 'Flecha (en la lámina)', 'Ejemplo'],
    rows: [
      ['<<include>>', 'Comportamiento común a varios casos de uso', 'Del caso base al incluido', 'Reservar libro y Renovar préstamo → Comprobar reserva'],
      ['<<extend>>', 'Especialización opcional, sin alterar el caso base', 'Del caso que extiende al caso base', 'Buscar por autor / editorial / ISBN → Buscar producto']
    ]
  },
  {
    g: 'notacion',
    title: 'Notación del diagrama de actividades',
    lead: 'Siete símbolos. Inicio y final se diferencian solo por el anillo.',
    cols: ['Símbolo', 'Elemento', 'Significado'],
    rows: [
      ['● círculo negro', 'Punto de inicio', 'Inicio del proceso'],
      ['▭ rectángulo redondeado', 'Actividad / acción', 'Tarea del sistema o de un actor'],
      ['◇ rombo', 'Condicional / decisión', 'Evalúa condiciones con guardas [si] / [no]'],
      ['→ flecha', 'Flujo de secuencia', 'Dirección del flujo de control'],
      ['▬ barra negra gruesa', 'Bifurcación / unión (fork/join)', 'Flujos simultáneos o su reincorporación'],
      ['◉ círculo con anillo', 'Punto final', 'Final del proceso'],
      ['▯ columna con nombre', 'Swimlanes (carriles)', 'Responsabilidades por actor o componente']
    ]
  },
  {
    g: 'act',
    title: 'Actividades y swimlane',
    lead: 'Los dos muestran flujo. Solo el swimlane dice quién hace cada cosa.',
    cols: ['Diagrama', 'Definición (Pressman 2010)', ''],
    rows: [
      ['Actividades', 'Flujo de interacción dentro de un escenario específico; en UML, comportamiento dinámico por flujo de control', ''],
      ['Swimlane', 'Flujo de actividades del caso de uso, indicando qué actor o clase de análisis es responsable', '']
    ]
  },
  {
    g: 'autores',
    title: 'Quién dijo qué',
    lead: 'Las láminas citan autor en casi cada definición.',
    cols: ['Autor', 'Qué aporta en clase', ''],
    rows: [
      ['Sommerville (2011)', 'Definición de requerimientos, funcionales, no funcionales y su clasificación', ''],
      ['Pressman (2010)', 'Ingeniería de requerimientos y sus 7 actividades, análisis, modelado por escenarios, diagramas de actividades y swimlane', ''],
      ['Christel y Kang (1992)', 'Problemas de la indagación: alcance, entendimiento, volatilidad', '']
    ]
  }
);
