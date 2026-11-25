/* Tema SOL · Principios SOLID. Fuente: Principios de diseño de software (Prof. Bello). */
const SRC_S = '02 · Principios SOLID';
Sim.add('SOL', [
  ['inv', 'solid', 'Los principios SOLID son:', 'Cinco principios de diseño de software basados en la experiencia y la práctica de los desarrolladores',
    'Se aplican a cualquier lenguaje o marco de trabajo y ayudan a crear código más limpio, mantenible y extensible.',
    ['Cinco patrones de diseño creacionales', 'Los patrones son otra categoría; SOLID son principios.'],
    ['Un lenguaje de programación orientado a objetos', 'Se aplican a cualquier lenguaje.'],
    ['Una metodología de gestión de proyectos', 'Son principios de diseño, no de gestión.'],
    SRC_S],
  ['neg', 'solid', '¿Cuál NO es uno de los principios SOLID?', 'Principio de encapsulamiento total',
    'Los cinco: responsabilidad única, abierto-cerrado, sustitución de Liskov, segregación de interfaces e inversión de dependencias.',
    ['Principio de responsabilidad única', 'Sí es SOLID (S).'],
    ['Principio de segregación de interfaces', 'Sí es SOLID (I).'],
    ['Principio de inversión de dependencias', 'Sí es SOLID (D).'],
    SRC_S],
  ['inv', 'solid', 'Según el DIP, los módulos de alto nivel deben depender de:', 'Interfaces (abstracciones), no de clases concretas',
    'Alto y bajo nivel deben depender de abstracciones.',
    ['Los módulos de bajo nivel que implementan el detalle', 'Es justo lo que el principio prohíbe.'],
    ['Clases concretas, para ahorrar capas', 'El DIP pide interfaces, no clases concretas.'],
    ['Otras clases de alto nivel exclusivamente', 'No es lo que plantea el principio.'],
    SRC_S]
]);

Sim.addSet('SOL', 'solid-a', 'solid', SRC_S, [
  ['Responsabilidad única (SRP)', 'Una clase debe tener una y solo una responsabilidad, un solo propósito bien definido.'],
  ['Abierto-cerrado (OCP)', 'Las clases son abiertas a la extensión y cerradas a la modificación, así se protege la funcionalidad básica.'],
  ['Sustitución de Liskov (LSP)', 'Las instancias de una clase sustituta deben poder usarse en lugar de las de la clase base sin alterar el programa.'],
  ['Segregación de interfaces (ISP)', 'Las interfaces deben ser tan pequeñas y específicas como sea posible.']
], [
  ['Una clase debe tener una y solo una responsabilidad.', 0],
  ['Las clases deben poder extenderse para agregar funcionalidades sin modificar el código existente.', 1],
  ['Toda clase hija debe poder utilizarse como si fuera el mismo padre.', 2],
  ['Si es necesario, las interfaces se dividen en otras más pequeñas, cada una con una funcionalidad específica.', 3]
]);

Sim.addSet('SOL', 'solid-b', 'solid', SRC_S, [
  ['Sustitución de Liskov (LSP)', 'La clase hija debe poder usarse como si fuera el padre sin alterar el comportamiento.'],
  ['Segregación de interfaces (ISP)', 'Es mejor tener clases pequeñas y especializadas que interfaces grandes.'],
  ['Inversión de dependencias (DIP)', 'Alto y bajo nivel dependen de abstracciones; los de alto nivel, de interfaces y no de clases concretas.'],
  ['Responsabilidad única (SRP)', 'Cada clase tiene un solo propósito.']
], [
  ['Los módulos de alto nivel no deben depender de los de bajo nivel; ambos dependen de abstracciones.', 2],
  ['Reemplazar una instancia de la clase base por la de una subclase no debe alterar el comportamiento del programa.', 0],
  ['Es preferible dividir una interfaz grande y tener clases pequeñas y especializadas.', 1]
]);

Sim.addVF('SOL', [
  ['solid', 'Los principios SOLID se pueden aplicar a cualquier lenguaje de programación o marco de trabajo.', true,
    'Verdadero: son principios de diseño, no de un lenguaje.', SRC_S],
  ['solid', 'Según el OCP, las clases deben estar cerradas para la extensión y abiertas para la modificación.', false,
    'Falso: es al revés. Abiertas para la extensión, cerradas para la modificación.', SRC_S],
  ['solid', 'Según el LSP, toda clase hija debe poder utilizarse como si fuera su clase padre.', true,
    'Verdadero.', SRC_S],
  ['solid', 'El ISP recomienda interfaces grandes y generales para que una sola cubra todos los casos.', false,
    'Falso: recomienda interfaces pequeñas y específicas.', SRC_S],
  ['solid', 'El DIP establece que los módulos de alto nivel deben depender de interfaces y no de clases concretas.', true,
    'Verdadero.', SRC_S],
  ['solid', 'El SRP permite que una clase tenga varias responsabilidades mientras estén relacionadas entre sí.', false,
    'Falso: una clase debe tener una y solo una responsabilidad.', SRC_S]
]);
