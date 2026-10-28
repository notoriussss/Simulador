/* Bloques de preguntas con las MISMAS 4 opciones, seguidas, cada una con una respuesta distinta (de 2 a 4 preguntas).
   Formato en data/schema.js. Van al final para no cambiar el número de las preguntas anteriores.
   Cada descripción de opción sirve de explicación si es la correcta y de «por qué no» si no lo es. */

// ---------- Historia
Sim.addSet('HI', 'autores-robot', '', 'ROB-02 · Vocablo Robot y cronología', [
  ['Karel Čapek', 'Escritor checo que introdujo la palabra robot en R.U.R.'],
  ['Isaac Asimov', 'Escritor de ciencia ficción que publicó Yo, Robot en 1950 con las leyes de la robótica.'],
  ['George Devol', 'Desarrolló en 1954 el primer robot programable.'],
  ['Joseph Engelberger', 'Con Devol, fusionó manipuladores mecánicos con técnicas de programación.'],
], [
  ['Autor de las tres leyes de la robótica:', 1],
  ['Creador del «Dispositivo de transferencia articulada programado» (1954):', 2],
]);

Sim.addSet('HI', 'robots-hitos', '', 'ROB-02 · Cronología y ROB-03 · Un poco de historia', [
  ['Unimate', 'Robot instalado en 1959 en una fábrica de General Motors.'],
  ['Shakey', 'Robot móvil de Stanford, con visión artificial y paradigma deliberativo.'],
  ['Lunokhod 1', 'Robot ruso que exploró la Luna a control remoto (1970).'],
  ['Genghis', 'Robot hexápodo de los 80, con 12 motores, 6 sensores y AFSM; paradigma reactivo.'],
], [
  ['Robot móvil desarrollado en el Stanford Research Institute:', 1],
  ['Robot instalado en 1959 en una fábrica de General Motors:', 0],
  ['Robot hexápodo de los 80 con 12 motores, 6 sensores y AFSM:', 3],
]);

Sim.addSet('HI', 'robots-empresas', 'cronologia', 'ROB-02 · Cronología', [
  ['PUMA', 'Robot introducido en 1978.'],
  ['P2', 'Robot humanoide creado por Honda en 1996.'],
  ['AIBO', 'Robot de entretenimiento construido por Sony en 1999.'],
  ['Robomow RL500', 'Cortacésped robótico completamente automático de Friendly Robotics (2000).'],
], [
  ['Cortacésped robótico completamente automático de Friendly Robotics:', 3],
  ['Robot humanoide creado por Honda:', 1],
  ['Robot de entretenimiento construido por Sony:', 2],
  ['Robot que se introduce en 1978, según la cronología:', 0],
]);

Sim.addSet('HI', 'robots-1974', 'cronologia', 'ROB-02 · Cronología', [
  ['IR6', 'Robot de ASEA (1974) con accionamiento completamente eléctrico.'],
  ['T3', 'Robot de Cincinnati Milacron (1974) con control por computador.'],
  ['WAVE', 'Lenguaje de programación de robots de 1973.'],
  ['AL', 'Lenguaje de robots de 1974; su fusión con WAVE dio origen a VAL.'],
], [
  ['Robot de ASEA de 1974 con accionamiento completamente eléctrico:', 0],
  ['Lenguaje de programación de robots desarrollado en 1973:', 2],
]);

// ---------- Definiciones y clasificación
Sim.addSet('DF', 'autores-def', 'autores', 'ROB-02 · Definición', [
  ['Webster', 'Define al robot como un dispositivo automático que realiza funciones que normalmente hacen los humanos.'],
  ['Russell y Norvig', 'Lo definen como un agente activo artificial cuyo ambiente es el mundo físico.'],
  ['Jones y Flynn', 'Lo definen como una conexión inteligente de percepción a acción.'],
  ['Sucar', 'Lo define como una máquina programable capaz de percibir y actuar con cierta autonomía.'],
], [
  ['Autor que define al robot como un «dispositivo automático»:', 0],
  ['Autores que definen al robot como un «agente activo artificial»:', 1],
  ['Autores de la «conexión inteligente de percepción a acción»:', 2],
  ['Autor que define al robot como una «máquina programable» con cierta autonomía:', 3],
]);

Sim.addSet('DF', 'iso-terminos', 'iso', 'ROB-02 · La norma ISO 8373', [
  ['Manipulador', 'Mecanismo de segmentos y uniones para mover objetos en varios grados de libertad.'],
  ['Reprogramable', 'Sus funciones de movimiento pueden cambiarse sin alteraciones físicas.'],
  ['Multifuncional', 'Se adapta a otras aplicaciones con alteraciones físicas o del sistema de control.'],
  ['Grado de libertad', 'Cada movimiento independiente de una articulación respecto a la anterior.'],
], [
  ['Mecanismo de segmentos y uniones para mover objetos, según ISO 8373:', 0],
  ['Cualidad de cambiar las funciones programadas sin alteraciones físicas:', 1],
  ['Cualidad de adaptarse a otras aplicaciones con alteraciones físicas o del sistema de control:', 2],
  ['Cada movimiento independiente de una articulación respecto a la anterior:', 3],
]);

Sim.addSet('DF', 'tipos-control', 'control', 'ROB-02 · Según el tipo de control', [
  ['Secuencia controlada', 'Los movimientos se realizan en un orden determinado.'],
  ['Trayectoria continua', 'Opera según la trayectoria requerida para alcanzar la posición.'],
  ['Adaptativo', 'Ajusta parámetros según condiciones detectadas, sensores o aprendizaje.'],
  ['Teleoperado', 'Un operador humano maneja el robot de forma remota.'],
], [
  ['Control en el que los movimientos siguen un orden determinado:', 0],
  ['Control que sigue la trayectoria requerida para alcanzar la posición:', 1],
  ['Control que ajusta sus parámetros según condiciones detectadas, sensores o aprendizaje:', 2],
  ['Control en el que un operador humano maneja el robot de forma remota:', 3],
]);

Sim.addSet('DF', 'categorias-apl', 'servicio', 'ROB-02 · Categorías y aplicaciones', [
  ['Robot industrial', 'Mueve materiales con movimientos programados, en ambiente conocido y controlado.'],
  ['Robot de servicio', 'Opera semi o totalmente autónomo en ambientes desconocidos y dinámicos, sin hacer manufactura.'],
  ['Robot manipulador', 'Es el brazo, normalmente fijo en un sitio.'],
  ['Robot híbrido', 'Es un robot móvil con capacidad de manipulación.'],
], [
  ['Robot que opera en ambientes desconocidos y dinámicos y con interacción con personas:', 1],
  ['Robot móvil con capacidad de manipulación:', 3],
  ['Robot que realiza tareas repetitivas en un ambiente conocido y controlado:', 0],
]);

// ---------- Robot móvil, locomoción y cinemática
Sim.addSet('MV', 'cinematica-set', 'cinematica', 'ROB-03 · Locomoción y cinemática', [
  ['Dinámica', 'Estudia las fuerzas aplicadas a un sistema y los cambios que provocan.'],
  ['Cinemática', 'Estudia el movimiento sin considerar las fuerzas.'],
  ['Cinemática directa', 'Con la posición inicial y los movimientos realizados, da la posición final.'],
  ['Cinemática inversa', 'Con la posición inicial y la final deseada, da los movimientos a realizar.'],
], [
  ['Estudio de las fuerzas aplicadas a un sistema y los cambios que provocan:', 0],
  ['Estudio del movimiento sin considerar las fuerzas que lo afectan:', 1],
  ['Con la posición inicial y los movimientos realizados, da la posición final del robot:', 2],
  ['Con la posición inicial y la final deseada, da la serie de movimientos a realizar:', 3],
]);

Sim.addSet('MV', 'holonomia-balance', 'holonomia', 'ROB-03 · Cinemática y locomoción', [
  ['Holonómica', 'Grados de libertad desacoplados (robots diferenciales y síncronos).'],
  ['No holonómica', 'Grados de libertad acoplados (triciclos y carros).'],
  ['Balance estático', 'La proyección del centro de gravedad cae dentro del polígono de soporte.'],
  ['Balance dinámico', 'El centro de masa puede salir del área de soporte por instantes controlados.'],
], [
  ['Restricción de los robots diferenciales y síncronos, con grados de libertad desacoplados:', 0],
  ['Restricción de los triciclos y carros, con grados de libertad acoplados:', 1],
  ['Sistema balanceado por la proyección de su centro de gravedad dentro del polígono de soporte:', 2],
  ['Caso en que el centro de masa puede salir del área de soporte por instantes controlados:', 3],
]);

Sim.addSet('MV', 'locomocion-set', 'estabilidad', 'ROB-03 · Locomoción y robots sin patas', [
  ['Locomoción estática', 'Peso apoyado en al menos tres patas; segura, lenta e ineficiente.'],
  ['Locomoción dinámica', 'El robot cae a menos que se mueva; rápida y eficiente.'],
  ['Robots ápodos', 'Sin partes móviles diferenciadas del tronco; imitan serpientes o gusanos.'],
  ['Robots con patas', 'Versátiles en terrenos, pero complejos, inestables y de mayor consumo.'],
], [
  ['Locomoción en la que el robot cae a menos que se mueva:', 1],
  ['Robots que imitan serpientes, gusanos o caracoles:', 2],
  ['Locomoción segura, lenta e ineficiente, con al menos tres patas de apoyo:', 0],
]);

Sim.addSet('MV', 'tareas-movil', '', 'ROB-03 · Problemas del robot móvil', [
  ['Navegación', 'Evitar obstáculos e ir a un lugar meta.'],
  ['Planeación', 'Decidir la serie de pasos para cumplir una o más metas.'],
  ['Localización', 'Ubicarse en el mundo (en el mapa).'],
  ['Manipulación', 'Mover otros objetos del medio ambiente.'],
], [
  ['Tarea de decidir la serie de pasos para cumplir una o más metas:', 1],
  ['Tarea de ubicarse en el mundo (en el mapa):', 2],
  ['Tarea de evitar obstáculos e ir a un lugar meta:', 0],
]);

Sim.addSet('MV', 'puntos-estabilidad', 'cci', 'ROB-03 · Locomoción y CCI', [
  ['Centro de curvatura instantáneo', 'Punto en que coinciden los ejes de rotación de las ruedas.'],
  ['Polígono de soporte', 'Área formada por las bases de soporte del robot.'],
  ['Centro de gravedad', 'Su proyección vertical debe caer dentro del polígono de soporte (balance estático).'],
  ['Centro de masa', 'Su proyección puede salir del área de soporte en el balance dinámico.'],
], [
  ['Punto en que coinciden los ejes de rotación de las ruedas:', 0],
  ['Área formada por las bases de soporte del robot:', 1],
]);

// ---------- Ruedas y arreglos
Sim.addSet('RU', 'tipos-rueda-set', 'tiposrueda', 'ROB-03 · Tipos de ruedas', [
  ['Rueda motriz', 'Proporciona la fuerza de tracción.'],
  ['Rueda directriz', 'Da el direccionamiento de orientación.'],
  ['Rueda fija', 'Gira sin tracción motriz.'],
  ['Rueda loca o castor', 'Es orientable, pero no controlable.'],
], [
  ['Rueda que proporciona la fuerza de tracción:', 0],
  ['Rueda que da el direccionamiento de orientación:', 1],
  ['Rueda que gira sin tracción motriz:', 2],
  ['Rueda cuya orientación no se puede controlar:', 3],
]);

Sim.addSet('RU', 'arreglos-1', 'arreglos', 'ROB-03 · Arreglo de ruedas', [
  ['Diferencial', 'Dos ruedas en un eje común, controladas de forma independiente.'],
  ['Síncrono', 'Ruedas ligadas que apuntan siempre en la misma dirección; requiere torreta.'],
  ['Triciclo', 'Rueda delantera de dirección; buena estabilidad y cinemática más compleja.'],
  ['Carro (Ackermann)', 'Dos ruedas de tracción y dos de dirección.'],
], [
  ['Arreglo cuyas ruedas giran juntas y requiere una torreta:', 1],
  ['Arreglo con dos ruedas de tracción y dos de dirección:', 3],
  ['Arreglo de dos ruedas en un eje común, controladas de forma independiente:', 0],
  ['Arreglo con una rueda delantera de dirección, buena estabilidad y cinemática más compleja:', 2],
]);

Sim.addSet('RU', 'arreglos-2', 'arreglos', 'ROB-03 · Triciclos, omnidireccionales y orugas', [
  ['Triciclo A', 'Dos ruedas fijas traseras y una rueda motriz y directora delantera.'],
  ['Triciclo B', 'Dos ruedas fijas de tracción y una rueda delantera solo de dirección.'],
  ['Omnidireccional', 'Tres ruedas a 120° (suecas o esféricas).'],
  ['Orugas', 'Siguen el modelo diferencial; pobres resultados en odometría.'],
], [
  ['Arreglo con tres ruedas colocadas a 120°:', 2],
  ['Arreglo con una rueda delantera solo de dirección, sin tracción:', 1],
  ['Arreglo con pobres resultados en odometría, cuyo giro consume mucha potencia:', 3],
]);

Sim.addSet('RU', 'diferencial-nombres', 'arreglos', 'ROB-03 · Diferencial y síncrono', [
  ['Triángulo', 'Esquema diferencial de 3 ruedas; puede tener problemas de estabilidad.'],
  ['Diamante', 'Esquema diferencial de 4 ruedas; la pérdida de contacto exige suspensión.'],
  ['Torreta', 'Mecanismo del síncrono que mantiene el frente del chasis en la dirección de las ruedas.'],
  ['Caster', 'Rueda adicional que da balance al esquema diferencial.'],
], [
  ['Mecanismo que mantiene el frente del chasis en la dirección de las ruedas:', 2],
  ['Rueda adicional que da balance al esquema diferencial:', 3],
  ['Esquema diferencial de 4 ruedas:', 1],
]);

// ---------- Sensores
Sim.addSet('SE', 'clasif-sensores', 'activos', 'ROB-03 · Sensores en robótica móvil', [
  ['Activos', 'Emiten energía.'],
  ['Pasivos', 'Reciben energía pasivamente.'],
  ['Internos', 'Permiten al robot conocer su propio estado.'],
  ['Externos', 'Permiten percibir el medio ambiente.'],
], [
  ['Sensores que emiten energía:', 0],
  ['Sensores que reciben energía pasivamente:', 1],
  ['Sensores que permiten conocer el estado del propio robot:', 2],
  ['Sensores que permiten percibir el medio ambiente:', 3],
]);

Sim.addSet('SE', 'proximidad-set', 'proximidad', 'ROB-03 · Sensores de proximidad y distancia', [
  ['Infrarrojos', 'Detectan obstáculos cercanos con luz infrarroja.'],
  ['Sonares', 'Usan ultrasonido; rango aproximado de 2 cm a 5 m.'],
  ['Telémetro láser', 'Tiene mayor rango y mejor precisión que los sonares.'],
  ['Apuntador láser con cámara', 'Es la alternativa más económica al telémetro láser.'],
], [
  ['Sensor de proximidad de alcance cercano que usa luz infrarroja:', 0],
  ['Sensor cuyo rango aproximado es de 2 cm a 5 m:', 1],
  ['Sensor de mayor rango y mejor precisión que los sonares:', 2],
  ['Alternativa más económica al telémetro láser:', 3],
]);

Sim.addSet('SE', 'metodos-laser', 'laser', 'ROB-03 · Telémetro láser y GPS', [
  ['Triangulación', 'Usa la relación geométrica entre el haz emitido y el recibido.'],
  ['Tiempo de vuelo', 'Usa el tiempo de regreso del haz.'],
  ['Basado en fase', 'Usa la diferencia de fase entre el haz emitido y el reflejado.'],
  ['Correlación de pseudocódigo', 'Técnica del receptor GPS: el retardo de mejor correlación es el tiempo de vuelo.'],
], [
  ['Método láser que compara la fase del haz emitido con la del reflejado:', 2],
  ['Método láser que usa el tiempo de regreso del haz:', 1],
  ['Técnica del receptor GPS que correlaciona un pseudocódigo con el del satélite:', 3],
]);

Sim.addSet('SE', 'posicion-set', 'internos', 'ROB-03 · Sensores de posición, faros y GPS', [
  ['Odometría', 'Estima posición y orientación a partir de la rotación de las ruedas (encoders).'],
  ['Técnicas inerciales', 'Usan giroscopios y acelerómetros.'],
  ['Faros', 'Balizas de señalización con posición precisa conocida.'],
  ['GPS', 'Sistema de satélites; no es aplicable en interiores.'],
], [
  ['Técnica que estima posición y orientación con la rotación de las ruedas:', 0],
  ['Técnica que usa giroscopios y acelerómetros:', 1],
  ['Balizas con posición precisa conocida para resolver la localización:', 2],
  ['Sistema de satélites no aplicable en interiores:', 3],
]);

Sim.addSet('SE', 'sonido-luz', '', 'ROB-03 · Sonidos y sensores de luz', [
  ['Micrófono', 'Trabaja con frecuencias audibles.'],
  ['Película piezoeléctrica', 'Produce un voltaje cuando cambia la cantidad medida.'],
  ['Sonar', 'Mide el tiempo de retorno de un sonido no audible emitido.'],
  ['Fotodiodo', 'Es un sensor de luz.'],
], [
  ['Sensor que produce un voltaje ante cambios de vibración o temperatura:', 1],
  ['Sensor de sonido que opera con frecuencias audibles:', 0],
]);

// ---------- Actuadores, transmisiones y sistemas
Sim.addSet('AC', 'partes-dc', 'motores', 'ROB-03 · Motores de corriente continua', [
  ['Inductor', 'Devanado de excitación; está en el estator y crea un campo magnético fijo.'],
  ['Inducido', 'Está en el rotor y gira por la fuerza de Lorentz.'],
  ['Colector de delgas', 'Conmutador de sincronización por donde entra la corriente al inducido.'],
  ['Escobillas de grafito', 'Se apoyan en el colector para llevar la corriente al inducido.'],
], [
  ['Devanado del motor de corriente continua situado en el rotor:', 1],
  ['Piezas que se apoyan en el colector de delgas:', 3],
  ['Devanado de excitación del motor de corriente continua:', 0],
]);

Sim.addSet('AC', 'tipos-pasos', 'pasos', 'ROB-03 · Motores de pasos', [
  ['Imanes permanentes', 'Rotor con polarización magnética constante.'],
  ['Reluctancia variable', 'Rotor ferromagnético con menos polos que el estator.'],
  ['Híbrido', 'Aumenta el número de polos del estator y del rotor, con dientes.'],
  ['Sin escobillas', 'Motor de corriente continua con imán permanente en el rotor.'],
], [
  ['Paso a paso con rotor ferromagnético y menos polos que el estator:', 1],
  ['Paso a paso cuyo rotor tiene polarización magnética constante:', 0],
  ['Paso a paso que aumenta el número de polos del estator y del rotor con dientes:', 2],
]);

Sim.addSet('AC', 'comunicacion-set', '', 'ROB-03 · Comunicación y control', [
  ['Telecontrol', 'Programación y control a distancia.'],
  ['Coordinación', 'Comunicación con otros robots o máquinas para tareas conjuntas.'],
  ['Interacción humano-robot', 'Comunicación con personas para recibir comandos o dar información.'],
  ['Control', 'Interfaz entre el procesamiento del robot y sus sensores y actuadores.'],
], [
  ['Comunicación con personas para recibir comandos o dar información:', 2],
  ['Interfaz entre el procesamiento del robot y sus sensores y actuadores:', 3],
]);

// ---------- Paradigmas y comportamientos
Sim.addSet('PA', 'paradigmas-set', 'paradigmas', 'ROB-04 · Paradigmas de control', [
  ['Jerárquico', 'SENSE → PLAN → ACT, con un modelo global del mundo.'],
  ['Reactivo', 'SENSE → ACT, sin planificación; comportamientos locales.'],
  ['Híbrido', 'Planifica y luego sensa y actúa; tres capas.'],
  ['Subsunción', 'Arquitectura reactiva con capas de comportamientos.'],
], [
  ['Paradigma de mediados de los 90 con capas reactiva, intermedia y deliberativa:', 2],
  ['Paradigma que usa solo las primitivas sensar y actuar:', 1],
  ['Paradigma en que sensar, planificar y actuar se encadenan en ese orden:', 0],
]);

Sim.addSet('PA', 'primitivas-set', 'primitivas', 'ROB-04 · Paradigmas de control', [
  ['Sensar', 'Recolecta información del entorno con los sensores.'],
  ['Planificar', 'Construye el modelo del mundo y determina las acciones.'],
  ['Actuar', 'Realiza las acciones planificadas y supervisa su cumplimiento.'],
  ['Cartografiar', 'Crea, almacena y mantiene el mapa.'],
], [
  ['Primitiva que construye el modelo del mundo y determina las acciones:', 1],
  ['Primitiva que realiza las acciones planificadas y supervisa su cumplimiento:', 2],
  ['Primitiva que recolecta información del entorno con los sensores:', 0],
  ['Función de crear, almacenar y mantener el mapa:', 3],
]);

Sim.addSet('PA', 'adquirir-comport', 'comportamientos', 'ROB-04 · Comportamientos', [
  ['Innato', 'El pico rojo de las aves: pichón y madre.'],
  ['Secuencia innata', 'Avispas: aparean, el macho construye el nido y la hembra deja huevos.'],
  ['Innato con memoria', 'La abeja ubica la colmena con viajes cortos desde distintos ángulos.'],
  ['Aprendido', 'La caza en los leones.'],
], [
  ['La caza en los leones es un ejemplo de comportamiento:', 3],
  ['Las avispas que aparean, construyen el nido y dejan huevos ilustran un comportamiento:', 1],
  ['El pico rojo de las aves, pichón y madre, ilustra un comportamiento:', 0],
]);

// ---------- Arquitecturas de control
Sim.addSet('AR', 'elementos-set', 'elementos', 'ROB-04 · Paradigma híbrido (elementos)', [
  ['Secuenciador', 'Cadena de activación de los comportamientos.'],
  ['Manejador de recursos', 'Sensores, efectores y librería de esquemas.'],
  ['Cartógrafo', 'Crea, almacena y mantiene el mapa.'],
  ['Planificador de misión', 'Construye la estrategia para llegar al objetivo.'],
], [
  ['Elemento del híbrido que construye la estrategia para llegar al objetivo:', 3],
  ['Elemento del híbrido formado por sensores, efectores y librería de esquemas:', 1],
  ['Elemento del híbrido que crea, almacena y mantiene el mapa:', 2],
  ['Elemento del híbrido que da la cadena de activación de los comportamientos:', 0],
]);

Sim.addSet('AR', 'subsuncion-set', 'subsuncion', 'ROB-04 · Subsunción y paradigma híbrido', [
  ['Inhibición', 'La salida del módulo superior bloquea la del inferior.'],
  ['Supresión', 'La salida del superior, si es distinta de cero, reemplaza a la del inferior.'],
  ['Secuenciador', 'Cadena de activación de los comportamientos.'],
  ['Monitoreo de rendimiento', 'Verifica los progresos del robot.'],
], [
  ['Forma de subsunción en que la salida superior, si es distinta de cero, reemplaza a la inferior:', 1],
  ['Elemento del híbrido que verifica los progresos del robot:', 3],
  ['Forma de subsunción en que la salida superior bloquea la del módulo inferior:', 0],
]);

Sim.addSet('AR', 'arquitecturas-siglas', 'arquitecturas', 'ROB-04 · Arquitecturas de IA en Robótica', [
  ['NHC', 'Controlador Jerárquico Anidado; arquitectura deliberativa.'],
  ['RCS', 'Sistema de Control en Tiempo Real; arquitectura deliberativa.'],
  ['AuRA', 'Autonomous Robot Architecture; arquitectura híbrida.'],
  ['TCA', 'Task Control Architecture; arquitectura híbrida.'],
], [
  ['Arquitectura híbrida cuyas siglas son Autonomous Robot Architecture:', 2],
  ['Arquitectura deliberativa llamada Controlador Jerárquico Anidado:', 0],
]);
