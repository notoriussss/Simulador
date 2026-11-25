/* Tablas de contraste. El g coincide con el grupo de las preguntas que se refieren a ellas. */
Sim.contrasts.push(
  {
    g: 'diseno',
    title: 'Atributos de calidad (Hewlett-Packard)',
    lead: 'Cinco atributos. Cada uno se evalúa con factores distintos.',
    cols: ['Atributo', 'Se evalúa con...'],
    rows: [
      ['Funcionalidad', 'Características y capacidades, generalidad de las funciones y seguridad general'],
      ['Usabilidad', 'Factores humanos, estética, consistencia y documentación'],
      ['Confiabilidad', 'Frecuencia y gravedad de fallas, exactitud, TMPF, capacidad de recuperación, predecibilidad'],
      ['Rendimiento', 'Velocidad de procesamiento, tiempo de respuesta, uso de recursos, eficiencia'],
      ['Mantenibilidad', 'Que el programa sea ampliable, adaptable y servicial']
    ]
  },
  {
    g: 'conceptos',
    title: 'Conceptos de diseño',
    lead: 'Ocho conceptos fundamentales. Los vecinos que más se confunden: cohesión/acoplamiento y abstracción/refinamiento.',
    cols: ['Concepto', 'Idea clave'],
    rows: [
      ['Abstracción', 'Niveles alto y bajo; de procedimientos y de datos'],
      ['Arquitectura', 'Organización de los módulos, su interacción y las estructuras de datos (Pressman)'],
      ['Patrones', 'Solución demostrada a un problema recurrente en un contexto (Appleton)'],
      ['División de problemas / modularidad', 'Subdividir en componentes con nombre que se resuelven por separado'],
      ['Ocultamiento de información', 'Algoritmos y datos de un módulo inaccesibles para quien no los necesita'],
      ['Independencia funcional', 'Se evalúa con cohesión (una sola tarea) y acoplamiento (interconexión entre módulos)'],
      ['Refinamiento', 'Revela detalles a medida que avanza el diseño'],
      ['Rediseño', 'Cambia la estructura interna sin alterar el comportamiento externo (Fowler)']
    ]
  },
  {
    g: 'solid',
    title: 'Principios SOLID',
    lead: 'Cinco principios. La palabra clave de cada uno delata cuál es.',
    cols: ['Principio', 'Sigla', 'Idea', 'Palabra clave'],
    rows: [
      ['Responsabilidad única', 'SRP', 'Una clase, un solo propósito bien definido', 'una y solo una'],
      ['Abierto-cerrado', 'OCP', 'Abiertas a la extensión, cerradas a la modificación', 'extensión / modificación'],
      ['Sustitución de Liskov', 'LSP', 'La clase hija se usa como el padre sin alterar el programa', 'sustituir'],
      ['Segregación de interfaces', 'ISP', 'Interfaces pequeñas y específicas', 'pequeñas'],
      ['Inversión de dependencias', 'DIP', 'Alto y bajo nivel dependen de abstracciones', 'abstracciones']
    ]
  },
  {
    g: 'categorias',
    title: 'Categorías de patrones y los patrones de las láminas',
    lead: 'Creacionales crean, estructurales organizan, conductuales reparten responsabilidad.',
    cols: ['Categoría', 'Se centra en', 'Patrones vistos'],
    rows: [
      ['Creacionales', 'Mecanismos de creación de objetos', 'Singleton, Factory Method'],
      ['Estructurales', 'Estructura de los objetos y sus relaciones', 'Adapter, Decorator, Facade, Composite, Proxy'],
      ['Conductuales', 'Asignación de responsabilidad y comunicación entre objetos', 'Observer, Command, Template Method, Strategy, State, Chain of Responsibility']
    ]
  },
  {
    g: 'envoltorios',
    title: 'Estructurales que envuelven: Adapter, Decorator, Facade, Composite y Proxy',
    lead: 'Todos envuelven o agrupan objetos, pero con otro propósito.',
    cols: ['Patrón', 'Propósito', 'Idea clave'],
    rows: [
      ['Adapter', 'Que dos clases incompatibles trabajen juntas', 'Implementa la interfaz del cliente y envuelve el servicio (Wrapper)'],
      ['Decorator', 'Añadir funcionalidad dinámicamente', 'Composición en lugar de herencia; decoradora base con objeto envuelto'],
      ['Facade', 'Interfaz simplificada a un subsistema complejo', 'Oculta la complejidad; no elimina la funcionalidad de bajo nivel'],
      ['Composite', 'Tratar igual a un objeto y a un grupo', 'Árbol parte-todo: Componente, Hoja, Compuesto, Cliente'],
      ['Proxy', 'Controlar el acceso a otro objeto', 'Misma interfaz que el servicio real; autoriza, cachea, intercepta']
    ]
  },
  {
    g: 'conductuales',
    title: 'Conductuales: Template Method, Strategy, State, Chain, Observer y Command',
    lead: 'Strategy y State se dibujan casi igual; lo que cambia es quién decide el cambio y para qué.',
    cols: ['Patrón', 'Idea clave', 'Mecanismo'],
    rows: [
      ['Template Method', 'Esqueleto del algoritmo en la superclase; las subclases redefinen pasos', 'Herencia; método plantilla final; Principio de Hollywood'],
      ['Strategy', 'Familia de algoritmos intercambiables en tiempo de ejecución', 'Composición: Contexto + interfaz Estrategia; el cliente elige'],
      ['State', 'El objeto cambia de comportamiento al cambiar su estado interno', 'Composición: Contexto delega en el estado; los estados hacen la transición'],
      ['Chain of Responsibility', 'Pasar la solicitud por una cadena hasta que alguien la atienda', 'Handler con sucesor; recepción no garantizada'],
      ['Observer', 'Un sujeto notifica a sus observadores los cambios de estado', 'Notificador + suscriptores'],
      ['Command', 'Encapsular una solicitud como objeto', 'Emisora, Comando, Receptora, Cliente']
    ]
  },
  {
    g: 'estructuras',
    title: 'Participantes por patrón',
    lead: 'Los nombres de los roles son lo que más se pregunta.',
    cols: ['Patrón', 'Participantes'],
    rows: [
      ['Singleton', 'Clase Singleton + método de instanciación estático'],
      ['Factory Method', 'Producto, Productos Concretos, Creadora, Creadores Concretos'],
      ['Adapter', 'Interfaz con el Cliente, Servicio, Clase Adaptadora'],
      ['Decorator', 'Componente, Componente Concreto, Decoradora Base, Decoradores Concretos'],
      ['Facade', 'Facade, Fachada Adicional, Subsistema Complejo'],
      ['Composite', 'Componente, Hoja, Compuesto, Cliente'],
      ['Proxy', 'Interfaz de Servicio, Servicio Real, Proxy, Cliente'],
      ['Template Method', 'Clase Abstracta, método plantilla, operaciones primitivas, operaciones concretas, hooks, Clase Concreta'],
      ['Strategy', 'Contexto, Estrategia, Estrategias Concretas, Cliente'],
      ['State', 'Contexto, Estado Abstracto, Estados Concretos'],
      ['Chain of Responsibility', 'Handler, ConcreteHandler, Client'],
      ['Observer', 'Notificador, interfaz Suscriptora, Suscriptores Concretos'],
      ['Command', 'Emisora (invocadora), interfaz Comando, Comandos Concretos, Receptora, Cliente']
    ]
  }
);
