// Bloques de preguntas de Computación en la Nube: de 2 a 4 preguntas SEGUIDAS que comparten las MISMAS 4 opciones,
// cada una con una respuesta distinta (así las arma el profesor). Formato y uso: js/schema.js.
// La frase de cada opción sirve de explicación si es la correcta y de «por qué no» si no lo es.
const SET = Sim.addSet;

// ───────────────────────── CEN-02 · Fundamentos ─────────────────────────
SET('SD', 'mw-servicios', 'mw', 'CEN-02 · Middleware, ejemplos', [
  ['Comunicación', 'Ejemplo de servicio de middleware: la llamada a procedimiento remoto (RPC).'],
  ['Transacciones', 'Ofrece soporte especial para ejecutar operaciones en una forma de todo o nada.'],
  ['Composición del servicio', 'Desarrollar aplicaciones uniendo programas existentes, por ejemplo aplicaciones web.'],
  ['Confiabilidad', 'Horus: un mensaje enviado por un proceso lo reciben todos o ninguno de los otros procesos.']
], [
  ['Servicio de middleware cuyo ejemplo es la llamada a procedimiento remoto (RPC):', 0],
  ['Servicio de middleware que ejecuta operaciones de todo o nada:', 1],
  ['Servicio de middleware para construir aplicaciones web uniendo programas existentes:', 2],
  ['Servicio de middleware ilustrado por Horus, con entrega a todos o a ninguno:', 3]
]);

SET('SD', 'deutsch-1', 'deutsch', 'CEN-02 · Consideraciones', [
  ['La red es confiable', 'Suposición falsa: se asume que los mensajes siempre llegan y que la red no falla.'],
  ['La latencia es cero', 'Suposición falsa: se asume que la comunicación es instantánea.'],
  ['El ancho de banda es infinito', 'Suposición falsa: se asume que se puede transmitir cualquier cantidad de datos.'],
  ['Hay un solo administrador', 'Suposición falsa: se asume que toda la red depende de una única autoridad.']
], [
  ['Suposición falsa de Deutsch: los mensajes siempre llegan a su destino:', 0],
  ['Suposición falsa de Deutsch: enviar datos por la red no toma tiempo:', 1],
  ['Suposición falsa de Deutsch: se puede transmitir cualquier cantidad de datos:', 2],
  ['Suposición falsa de Deutsch: toda la red depende de una única autoridad:', 3]
]);

SET('SD', 'deutsch-2', 'deutsch', 'CEN-02 · Consideraciones', [
  ['La red es segura', 'Suposición falsa: se asume que no hay amenazas ni atacantes en la red.'],
  ['La topología no cambia', 'Suposición falsa: se asume que la estructura de la red permanece fija.'],
  ['El costo de transporte es cero', 'Suposición falsa: se asume que mover datos por la red no cuesta nada.'],
  ['La red es homogénea', 'Suposición falsa: se asume que todos los nodos y enlaces son del mismo tipo.']
], [
  ['Suposición falsa de Deutsch: no hay que preocuparse por ataques en la red:', 0],
  ['Suposición falsa de Deutsch: los nodos y enlaces son todos del mismo tipo:', 3]
]);

SET('SD', 'objetivos-diseno', 'objetivos', 'CEN-02 · Objetivos del diseño', [
  ['Compartir recursos', 'Facilitar que usuarios y aplicaciones accedan a recursos remotos; una razón obvia es la economía.'],
  ['Transparencia de distribución', 'Ocultar que procesos y recursos están distribuidos físicamente en varias computadoras.'],
  ['Sistema abierto', 'Los componentes se adhieren a reglas estándar sobre su sintaxis y semántica, descritas con interfaces.'],
  ['Escalabilidad', 'Poder crecer en tamaño, en distancia geográfica y en organizaciones administrativas.']
], [
  ['Objetivo de diseño cuya razón más obvia es la economía:', 0],
  ['Objetivo de diseño que consiste en ocultar la distribución física de procesos y recursos:', 1],
  ['Objetivo de diseño que exige adherirse a reglas estándar descritas con interfaces:', 2],
  ['Objetivo de diseño que se mide en tamaño, geografía y administración:', 3]
]);

SET('SD', 'abierto-terminos', 'abierto', 'CEN-02 · Sistema distribuido abierto', [
  ['Interoperabilidad', 'Grado en que dos sistemas o componentes diferentes coexisten y trabajan juntos con un estándar común.'],
  ['Portabilidad', 'Hasta qué punto una aplicación corre sin modificaciones en otro sistema con las mismas interfaces.'],
  ['Extensibilidad', 'Facilidad para agregar componentes nuevos o reemplazar los existentes sin afectar a los demás.'],
  ['Neutralidad', 'Las especificaciones no prescriben cómo debe ser la implementación.']
], [
  ['Característica por la que dos sistemas diferentes coexisten y trabajan juntos con un estándar común:', 0],
  ['Característica por la que una aplicación corre sin modificaciones en otro sistema con las mismas interfaces:', 1],
  ['Característica por la que se agregan o reemplazan componentes sin afectar al resto:', 2],
  ['Propiedad de una buena especificación: no prescribe cómo debe ser la implementación:', 3]
]);

SET('SD', 'escalabilidad-dim', 'escal', 'CEN-02 · Escalabilidad', [
  ['Escalabilidad de tamaño', 'Se pueden agregar más usuarios y recursos sin una pérdida notable de rendimiento.'],
  ['Escalabilidad geográfica', 'Usuarios y recursos pueden estar muy separados y apenas se nota el retraso de las comunicaciones.'],
  ['Escalabilidad administrativa', 'El sistema se administra fácilmente aunque abarque muchas organizaciones independientes.'],
  ['Escalabilidad vertical', 'Añadir más recursos (CPU, RAM o almacenamiento) a un único nodo existente.']
], [
  ['Escalabilidad que permite agregar usuarios y recursos sin pérdida notable de rendimiento:', 0],
  ['Escalabilidad que se mantiene fácil de administrar aunque abarque varias organizaciones:', 2],
  ['Escalabilidad que consiste en añadir CPU o memoria a una misma máquina:', 3]
]);

// ───────────────────────── CEN-03 · Desafíos y arquitecturas ─────────────────────────
SET('TR', 'transp-1', 'transp', 'CEN-02 · Tipos de transparencia', [
  ['Acceso', 'Oculta las diferencias en la representación de los datos y en la forma de acceder a un objeto.'],
  ['Ubicación', 'Oculta el lugar donde se encuentra un objeto.'],
  ['Reubicación', 'Oculta que un objeto puede ser movido a otra ubicación mientras está en uso.'],
  ['Migración', 'Oculta que un objeto puede moverse a otra ubicación.']
], [
  ['Transparencia que oculta dónde se encuentra un objeto:', 1],
  ['Transparencia que oculta que un objeto se mueve mientras está en uso:', 2],
  ['Transparencia que oculta las diferencias en la representación de los datos:', 0],
  ['Transparencia que oculta que un objeto puede cambiar de ubicación:', 3]
]);

SET('TR', 'transp-2', 'transp', 'CEN-02 · Tipos de transparencia', [
  ['Replicación', 'Oculta que un objeto está replicado.'],
  ['Concurrencia', 'Oculta que un objeto puede ser compartido por varios usuarios independientes.'],
  ['Fallos', 'Oculta el fallo y la recuperación de un objeto.'],
  ['Prestaciones', 'Permite reconfigurar el sistema para mejorar el desempeño según varía la carga.']
], [
  ['Transparencia que oculta que existen varias copias de un objeto:', 0],
  ['Transparencia que oculta que varios usuarios independientes comparten un objeto:', 1],
  ['Transparencia que oculta el fallo y la recuperación de un objeto:', 2],
  ['Transparencia que permite reconfigurar el sistema para mejorar el desempeño según la carga:', 3]
]);

SET('TR', 'desafios', '', 'CEN-03 · Desafíos en su construcción', [
  ['Heterogeneidad', 'Acceder a servicios y ejecutar aplicaciones sobre un conjunto heterogéneo de redes y hardware.'],
  ['Extensibilidad', 'Grado en que se pueden añadir nuevos servicios de compartición de recursos.'],
  ['Seguridad', 'Confidencialidad, integridad y disponibilidad de los recursos de información.'],
  ['Tratamiento de fallos', 'Los fallos son parciales: algunos componentes fallan y otros siguen funcionando.']
], [
  ['Desafío que consiste en soportar redes y hardware distintos:', 0],
  ['Desafío que determina si se pueden añadir nuevos servicios de compartición de recursos:', 1],
  ['Desafío que se resume en confidencialidad, integridad y disponibilidad:', 2]
]);

SET('AR', 'estilos-arq', 'arq', 'CEN-03 · Arquitecturas', [
  ['Arquitecturas en capas', 'Un componente de la capa Lj llama a capas inferiores Li (i < j); solo excepcionalmente hay un upcall.'],
  ['Arquitecturas basadas en objetos', 'Cada objeto es un componente, conectado mediante llamadas a procedimiento, incluso remotas.'],
  ['Arquitecturas centradas en recursos', 'Un recurso es una entidad autosuficiente e identificable, manejable por una interfaz uniforme.'],
  ['Arquitecturas basadas en eventos', 'Hay una fuerte separación entre procesamiento y coordinación, con dependencias flexibles.']
], [
  ['Estilo en que una capa Lj llama hacia abajo a capas Li con i < j:', 0],
  ['Estilo en que cada objeto es un componente y las llamadas pueden cruzar la red:', 1],
  ['Estilo cuya entidad básica es el recurso identificable, con interfaz uniforme:', 2],
  ['Estilo que separa con fuerza el procesamiento de la coordinación:', 3]
]);

SET('AR', 'soa-micro', 'arq', 'CEN-03 · SOA y microservicios', [
  ['SOA', 'Estructura la aplicación descomponiéndola en servicios que se comunican por un bus de mensajes.'],
  ['Bus de Servicio Empresarial (ESB)', 'Modelo de arquitectura de software que gestiona la comunicación entre servicios.'],
  ['Microservicios', 'Colección de servicios autónomos y pequeños, acoplados de forma flexible mediante contratos de API.'],
  ['Arquitectura orientada a recursos', 'Amplía el estilo REST y es independiente del transporte.']
], [
  ['Estilo que descompone la aplicación en servicios comunicados por un bus de mensajes:', 0],
  ['Modelo que gestiona la comunicación entre los servicios de una SOA:', 1],
  ['Estilo de servicios pequeños y autónomos que se comunican por contratos de API:', 2]
]);

// ───────────────────────── CEN-03 · Procesos e hilos ─────────────────────────
SET('PH', 'estados-proc', 'hilos', 'CEN-03 · Estados de los procesos', [
  ['Listo', 'Puede pasar a ejecución si el planificador lo selecciona.'],
  ['En ejecución', 'Se está ejecutando en el procesador en ese momento.'],
  ['Bloqueado', 'Espera la respuesta de otro proceso o una operación de E/S para continuar.'],
  ['Cooperante', 'No es un estado: describe a un proceso que interactúa con otros.']
], [
  ['Estado en que el proceso usa el procesador en ese momento:', 1],
  ['Estado en que el proceso espera una respuesta o una operación de E/S:', 2],
  ['Estado en que el proceso espera ser seleccionado por el planificador:', 0]
]);

SET('PH', 'estado-por-hilos', 'hilos', 'CEN-03 · Estados del proceso en función de sus hilos', [
  ['Ejecutando', 'El proceso está Ejecutando si cualquiera de sus hilos lo está.'],
  ['Listo', 'Si ningún hilo ejecuta y alguno está Listo, el proceso está Listo.'],
  ['Bloqueado', 'El proceso está Bloqueado solo si todos sus hilos están Bloqueados.'],
  ['Terminado', 'No es uno de los tres estados de las láminas (listo, en ejecución y bloqueado).']
], [
  ['Un proceso P tiene un hilo Ejecutando y otro Bloqueado. P está:', 0],
  ['Ningún hilo de P ejecuta; uno está Listo y otro Bloqueado. P está:', 1],
  ['Todos los hilos de P están Bloqueados. P está:', 2]
]);

SET('PH', 'proc-hilo-bcp', 'hilos', 'CEN-03 · Procesos, BCP e hilos', [
  ['Hilo', 'Unidad básica de utilización de la CPU: contador de programa, registros y pila.'],
  ['Proceso', 'Es un programa en ejecución; es una entidad activa.'],
  ['Programa', 'Es una entidad pasiva.'],
  ['BCP', 'Bloque de Control de Proceso: contiene el PID, el estado, el contador de programa, etc.']
], [
  ['Entidad pasiva, a diferencia del proceso:', 2],
  ['Entidad activa que es un programa en ejecución:', 1],
  ['Estructura que guarda el PID, el estado y el contador de programa de un proceso:', 3],
  ['Unidad básica de uso de la CPU formada por contador de programa, registros y pila:', 0]
]);

SET('PH', 'tipos-hilos-set', 'hilos', 'CEN-03 · Tipos de hilos', [
  ['Hilos de usuario (ULT)', 'Se crean con una biblioteca sobre el kernel y el núcleo no sabe que existen.'],
  ['Hilos de núcleo (KLT)', 'El núcleo mantiene el contexto del proceso y de los hilos y planifica en función de los hilos.'],
  ['Enfoque combinado', 'Mezcla hilos de usuario y de núcleo; se conoce como procesos livianos.'],
  ['Un proceso, un hilo', 'Modelo de sistemas como DOS.']
], [
  ['Hilos que el núcleo ni siquiera conoce:', 0],
  ['Hilos cuya planificación hace el núcleo:', 1],
  ['Aproximación de procesos livianos que mezcla ambos tipos de hilos:', 2]
]);

SET('PH', 'fork-casos', '', 'CEN-03 · Creación de procesos (POSIX)', [
  ['pid < 0', 'fork() falló: no se pudo crear el proceso hijo.'],
  ['pid == 0', 'Corre el código del proceso hijo.'],
  ['pid > 0', 'Corre el código del proceso padre.'],
  ['wait(NULL)', 'El padre espera a que termine el hijo.']
], [
  ['Resultado de fork() cuando falla la creación del hijo:', 0],
  ['Condición que ejecuta el código del proceso hijo:', 1],
  ['Condición que ejecuta el código del proceso padre:', 2],
  ['Llamada con la que el padre espera el término del hijo:', 3]
]);

SET('PH', 'hilos-sd', 'hilos', 'CEN-03 · Hilos en sistemas distribuidos', [
  ['Clientes multihilo', 'Sirven para esconder la latencia de comunicación a través de la red.'],
  ['Servidores multihilo', 'Su principal uso es mejorar el desempeño y la estructura del servidor.'],
  ['Llamadas bloqueantes sin bloquear el proceso', 'Con hilos se pueden usar llamadas al sistema bloqueantes sin bloquear todo el proceso.'],
  ['Hilos de núcleo', 'El núcleo mantiene el contexto de proceso e hilos.']
], [
  ['Hilos que esconden la latencia de comunicación en el lado del cliente:', 0],
  ['Principal uso de la tecnología multihilo, en el lado del servidor:', 1],
  ['Propiedad de los hilos que evita bloquear todo el proceso y los hace atractivos en sistemas distribuidos:', 2]
]);

// ───────────────────────── CEN-04 · Redes, OSI y protocolos ─────────────────────────
SET('RD', 'compl-1', 'complej', 'CEN-04 · Complejidad de las comunicaciones', [
  ['Direccionamiento', 'Solución al problema de identificar el destino.'],
  ['Enrutamiento', 'Solución al problema de localizar el destino.'],
  ['Control de flujo', 'Solución a la saturación del receptor.'],
  ['Control de congestión', 'Solución a la saturación de la red.']
], [
  ['Problema: identificación del destino. Solución:', 0],
  ['Problema: localización del destino. Solución:', 1],
  ['Problema: saturación del receptor. Solución:', 2],
  ['Problema: saturación de la red. Solución:', 3]
]);

SET('RD', 'compl-2', 'complej', 'CEN-04 · Complejidad de las comunicaciones', [
  ['Detección y corrección de errores', 'Solución al manejo de errores.'],
  ['Reordenación', 'Solución a la pérdida de secuencias.'],
  ['Multiplexado', 'Solución a la eficiencia de uso de la red.'],
  ['Segmentación', 'Solución a las diferencias de longitud.']
], [
  ['Problema: manejo de errores. Solución:', 0],
  ['Problema: pérdidas de secuencias. Solución:', 1],
  ['Problema: eficiencia de uso de la red. Solución:', 2],
  ['Problema: diferencias de longitud. Solución:', 3]
]);

SET('RD', 'osi-1', 'osi', 'CEN-04 · Capas OSI', [
  ['Aplicación', 'Da a los usuarios acceso al entorno OSI y ofrece servicios de información distribuida.'],
  ['Presentación', 'Da independencia a los procesos de aplicación respecto a las diferencias en la representación de los datos (sintaxis).'],
  ['Sesión', 'Controla la comunicación entre aplicaciones: establece, gestiona y cierra las sesiones.'],
  ['Transporte', 'Transferencia transparente y fiable de datos entre puntos finales, con recuperación de errores y control de flujo origen-destino.']
], [
  ['Capa OSI que da a los usuarios acceso al entorno OSI:', 0],
  ['Capa OSI que da independencia respecto a la sintaxis de los datos:', 1],
  ['Capa OSI que establece, gestiona y cierra sesiones entre aplicaciones:', 2],
  ['Capa OSI con recuperación de errores y control de flujo de origen a destino:', 3]
]);

SET('RD', 'pdu-terminos', 'pdu', 'CEN-04 · Conceptos relacionados', [
  ['Entidades', 'Elementos activos de cada capa.'],
  ['Entidades pares', 'Entidades de la misma capa ubicadas en máquinas diferentes.'],
  ['Servicio', 'Capacidad funcional de una capa suministrada a las entidades de la capa superior.'],
  ['Protocolo', 'Reglas, convenciones y formatos que siguen las entidades pares en su comunicación.']
], [
  ['Término para los elementos activos de una capa:', 0],
  ['Término para las entidades de una misma capa ubicadas en máquinas distintas:', 1],
  ['Término para la capacidad funcional que una capa da a la capa superior:', 2],
  ['Término para las reglas y formatos que siguen las entidades pares:', 3]
]);

SET('RD', 'sna-capas', 'sna', 'CEN-04 · IBM SNA', [
  ['Control de enlace de datos (DLC)', 'Incluye el Synchronous Data Link Control (SDLC).'],
  ['Control de ruta', 'Es la capa Path Control.'],
  ['Control de transmisión', 'Da un servicio de conexión punta a punta confiable y servicios de cifrado.'],
  ['Control de flujo de datos', 'Gestiona el procesamiento de las peticiones y respuestas.']
], [
  ['Capa de SNA que incluye el Synchronous Data Link Control (SDLC):', 0],
  ['Capa de SNA conocida como Path Control:', 1],
  ['Capa de SNA con conexión punta a punta confiable y servicios de cifrado:', 2],
  ['Capa de SNA que gestiona el procesamiento de peticiones y respuestas:', 3]
]);

SET('RD', 'tipos-serv', 'conexion', 'CEN-04 · Tipos de servicios', [
  ['Orientado a conexión', 'Establecer, usar y liberar; ejemplo: una llamada telefónica.'],
  ['Sin conexión y sin confirmación', 'Ejemplo: una carta.'],
  ['Sin conexión y con confirmación', 'Ejemplo: una carta certificada.'],
  ['Calidad de Servicio (QoS)', 'Caudal, retardo y confiabilidad; implica una negociación con la capa de red.']
], [
  ['Servicio cuyas fases son establecer, usar y liberar:', 0],
  ['Servicio cuyo ejemplo es la carta certificada:', 2],
  ['Parámetros como caudal, retardo y confiabilidad negociados con la capa de red:', 3]
]);

SET('RD', 'protocolos-capa', 'osi', 'CEN-04 · Protocolos de comunicación', [
  ['Capa física', 'Protocolos como RS-232-C y X.21.'],
  ['Capa de enlace de datos', 'Protocolos como HDLC, LAPB y PPP.'],
  ['Capa de transporte', 'Protocolos como TP0-TP4, TCP y UDP.'],
  ['Capa de red', 'Protocolos como IP e IPX.']
], [
  ['RS-232-C y X.21 son protocolos de la capa:', 0],
  ['HDLC, LAPB y PPP son protocolos de la capa:', 1],
  ['TP0-TP4, TCP y UDP son protocolos de la capa:', 2],
  ['IP e IPX son protocolos de la capa:', 3]
]);

// ───────────────────────── CEN-04 · RPC, mensajes y sockets ─────────────────────────
SET('CM', 'param-paso', 'param', 'CEN-04 · Parameter passing', [
  ['Por valor', 'El valor se copia a la pila; modificar el parámetro real no cambia el original.'],
  ['Por referencia', 'Se colocan punteros a los valores en la pila; modificar el parámetro sí cambia el original.'],
  ['Por copia/restauración', 'El valor se copia a la pila y, al terminar, el contenido de la pila se copia de vuelta al original.'],
  ['Por nombre', 'El argumento no se evalúa al llamar: se sustituye textualmente por su expresión, que se evalúa en cada acceso.']
], [
  ['Paso de parámetros en que modificar el parámetro real no cambia el valor original:', 0],
  ['Paso de parámetros que coloca punteros a los valores en la pila:', 1],
  ['Paso de parámetros que devuelve el contenido de la pila al valor original al terminar:', 2],
  ['Paso de parámetros cuya expresión se evalúa cada vez que se accede al parámetro:', 3]
]);

SET('CM', 'rpc-pasos', 'rpc', 'CEN-04 · RPC, pasos', [
  ['Stub del cliente', 'Construye el mensaje y llama al sistema operativo local; al final desempaqueta el resultado.'],
  ['Stub del servidor', 'Desempaqueta los parámetros, llama al servidor y empaqueta el resultado.'],
  ['SO del cliente', 'Envía el mensaje al SO remoto y, al final, entrega la respuesta al stub del cliente.'],
  ['SO del servidor', 'Entrega el mensaje al stub del servidor y envía el resultado al SO del cliente.']
], [
  ['En RPC, ¿quién construye el mensaje y llama al sistema operativo local?', 0],
  ['En RPC, ¿qué componente desempaqueta los parámetros y llama al servidor?', 1],
  ['En RPC, ¿quién entrega el mensaje al stub del servidor?', 3],
  ['En RPC, ¿quién entrega al stub del cliente el mensaje con la respuesta?', 2]
]);

SET('CM', 'dce-binding', 'rpc', 'CEN-04 · Binding a client to a server', [
  ['Registrar el punto final', 'Paso 1 de la vinculación en DCE.'],
  ['Registrar el servicio', 'Paso 2 de la vinculación en DCE.'],
  ['Buscar el servidor', 'Paso 3 de la vinculación en DCE.'],
  ['Solicitar el punto final', 'Paso 4 de la vinculación en DCE; después se ejecuta la llamada RPC (paso 5).']
], [
  ['Primer paso de la vinculación cliente-servidor en DCE:', 0],
  ['Segundo paso de la vinculación cliente-servidor en DCE:', 1],
  ['Tercer paso de la vinculación cliente-servidor en DCE:', 2],
  ['Cuarto paso de la vinculación cliente-servidor en DCE, justo antes de ejecutar la llamada RPC:', 3]
]);

SET('CM', 'colas-prim', 'colas', 'CEN-04 · Message-Queuing Model', [
  ['Put', 'Añade un mensaje a una cola especificada.'],
  ['Get', 'Se bloquea hasta que la cola no esté vacía y extrae el primer mensaje.'],
  ['Poll', 'Comprueba si hay mensajes en la cola y extrae el primero; nunca se bloquea.'],
  ['Notify', 'Instala un manejador que se invoca cuando se coloca un mensaje en la cola.']
], [
  ['Primitiva de colas que añade un mensaje a una cola especificada:', 0],
  ['Primitiva de colas que se bloquea hasta que la cola tenga mensajes:', 1],
  ['Primitiva de colas que extrae el primer mensaje y nunca se bloquea:', 2],
  ['Primitiva de colas que instala un manejador para cuando llegue un mensaje:', 3]
]);

SET('CM', 'colas-comb', 'colas', 'CEN-04 · Four combinations', [
  ['Emisor en ejecución y receptor en ejecución', 'El emisor envía a la cola y el receptor la consume de inmediato.'],
  ['Emisor en ejecución y receptor pasivo', 'El emisor deposita el mensaje; el receptor lo consumirá cuando se active.'],
  ['Emisor pasivo y receptor en ejecución', 'El emisor ya está inactivo tras dejar el mensaje y el receptor lo procesa.'],
  ['Emisor pasivo y receptor pasivo', 'Ambos están inactivos; el mensaje queda almacenado de forma persistente en la cola.']
], [
  ['Combinación de colas en que ambos extremos están activos:', 0],
  ['Combinación de colas en que el receptor está inactivo y consumirá el mensaje al activarse:', 1],
  ['Combinación de colas en que el emisor ya está inactivo y el receptor procesa el mensaje:', 2],
  ['Combinación de colas en que el mensaje permanece almacenado con ambos inactivos:', 3]
]);

SET('CM', 'com-tipos', 'entrega', 'CEN-04 · Comunicación orientada a mensajes', [
  ['Comunicación persistente', 'El middleware almacena el mensaje el tiempo que tarde en entregarlo al destinatario.'],
  ['Comunicación transitoria', 'El sistema almacena el mensaje solo mientras remitente y destinatario se ejecutan.'],
  ['Comunicación asíncrona', 'El remitente continúa inmediatamente después de pasar su mensaje para la transmisión.'],
  ['Comunicación síncrona', 'El remitente se bloquea hasta saber que su petición fue aceptada.']
], [
  ['Tipo de comunicación en que el middleware guarda el mensaje hasta entregarlo:', 0],
  ['Tipo de comunicación en que se descartan los mensajes si el destinatario no se está ejecutando:', 1],
  ['Tipo de comunicación en que el remitente continúa de inmediato:', 2],
  ['Tipo de comunicación en que el remitente se bloquea hasta que su petición es aceptada:', 3]
]);

SET('CM', 'entrega-set', 'entrega', 'CEN-04 · Entrega al-menos-una-vez y a-lo-más-una-vez', [
  ['Al-menos-una-vez', 'Sin fallas entrega exactamente una vez; ante fallas puede entregar más de una. SunNFS lo usa.'],
  ['A-lo-más-una-vez', 'Detecta que falló la red o el servidor y lo reporta; opera dentro de una sesión.'],
  ['Exactamente una vez', 'Con amnesia total del servidor, ningún protocolo puede garantizarlo.'],
  ['Idempotente', 'Propiedad de una operación que se puede repetir sin cambiar el resultado.']
], [
  ['Protocolo que ante fallas puede entregar un mensaje más de una vez:', 0],
  ['Protocolo que detecta la falla y la reporta dentro de una sesión:', 1],
  ['Garantía imposible de dar si el servidor sufre amnesia total:', 2],
  ['Propiedad que permite repetir la operación sin alterar el resultado:', 3]
]);

SET('CM', 'sockets-prims', 'sock', 'CEN-04 · Primitivas de socket TCP/IP', [
  ['Socket', 'Crea un nuevo punto final de comunicación.'],
  ['Bind', 'Asocia una dirección local (IP y puerto) con un socket.'],
  ['Listen', 'Anuncia que el servidor está dispuesto a aceptar conexiones.'],
  ['Connect', 'Intenta establecer una conexión de forma activa (lado del cliente).']
], [
  ['Primitiva de socket que crea un nuevo punto final de comunicación:', 0],
  ['Primitiva de socket que asocia una dirección local y un puerto con el socket:', 1],
  ['Primitiva de socket con la que el servidor anuncia que aceptará conexiones:', 2],
  ['Primitiva de socket con la que el cliente intenta establecer la conexión:', 3]
]);

// ───────────────────────── CEN-05 · Concurrencia, relojes y exclusión mutua ─────────────────────────
SET('CO', 'conc-1', 'conc', 'CEN-05 · Términos claves', [
  ['Condición de carrera', 'Varios hilos o procesos leen y escriben un dato compartido y el resultado depende de la coordinación relativa de sus ejecuciones.'],
  ['Sección crítica', 'Código que accede a recursos compartidos y no puede ejecutarse mientras otro proceso esté en una sección correspondiente.'],
  ['Exclusión mutua', 'Mientras un proceso está en una sección crítica, ningún otro puede estar en una que acceda a esos recursos.'],
  ['Operación atómica', 'Operación que no es interrumpida hasta que finaliza su procesamiento.']
], [
  ['Situación en que el resultado depende de la coordinación relativa de varios procesos sobre un dato compartido:', 0],
  ['Código que accede a recursos compartidos y no puede ejecutarse a la vez en dos procesos:', 1],
  ['Requisito de que solo un proceso esté en su sección crítica sobre esos recursos:', 2],
  ['Operación que no se interrumpe hasta terminar:', 3]
]);

SET('CO', 'conc-2', 'conc', 'CEN-05 · Términos claves', [
  ['Interbloqueo (deadlock)', 'Dos o más procesos no pueden actuar porque cada uno espera que los otros hagan algo.'],
  ['Círculo vicioso (livelock)', 'Los procesos cambian de estado continuamente en respuesta a los otros, sin realizar trabajo útil.'],
  ['Inanición (starvation)', 'Un proceso listo para avanzar es soslayado indefinidamente por el planificador.'],
  ['Condición de carrera', 'El resultado depende de la coordinación relativa de las ejecuciones.']
], [
  ['Problema en que cada proceso espera que los otros hagan algo:', 0],
  ['Problema en que los procesos cambian de estado sin hacer trabajo útil:', 1],
  ['Problema en que un proceso listo nunca es escogido por el planificador:', 2]
]);

SET('CO', 'ntp-marcas', 'reloj', 'CEN-05 · NTP', [
  ['T1', 'Registro de tiempo de A al enviar la petición.'],
  ['T2', 'Tiempo en que B recibe la petición, medido con su propio reloj.'],
  ['T3', 'Tiempo en que B responde; envía T2 y T3 a A.'],
  ['T4', 'Tiempo en que A recibe la respuesta.']
], [
  ['Marca de NTP que A registra al enviar su petición a B:', 0],
  ['Marca de NTP que B registra al recibir la petición:', 1],
  ['Marca de NTP que B registra al responder:', 2],
  ['Marca de NTP que A registra al recibir la respuesta:', 3]
]);

SET('CO', 'lamport-reglas', 'reloj', 'CEN-05 · Actualización del contador Ci', [
  ['Antes de ejecutar un evento', 'Pi ejecuta Ci ← Ci + 1.'],
  ['Al enviar un mensaje', 'La marca ts(m) se iguala a Ci después del incremento.'],
  ['Al recibir un mensaje', 'Pj ajusta Cj ← max{Cj, ts(m)}, luego incrementa y entrega el mensaje.'],
  ['Relación ocurre-antes', 'Debe cumplirse: si a → b entonces C(a) < C(b).']
], [
  ['Momento en que el proceso Pi ejecuta Ci ← Ci + 1:', 0],
  ['Momento en que la marca ts(m) se iguala a Ci después del incremento:', 1],
  ['Momento en que Pj calcula Cj ← max{Cj, ts(m)}:', 2]
]);

SET('CO', 'sinc-algoritmos', 'reloj', 'CEN-05 · Algoritmos de sincronización de reloj', [
  ['NTP', 'Obtiene la hora actual de un servidor de tiempo con las marcas T1, T2, T3 y T4.'],
  ['Algoritmo de Berkeley', 'Un demonio del tiempo pide los relojes a todas las máquinas y les indica cómo ajustarse.'],
  ['Relojes lógicos de Lamport', 'Ordenan eventos con un contador, sin referirse al tiempo real.'],
  ['Estrato 0', 'Servidor con un reloj de referencia.']
], [
  ['Algoritmo en que un demonio del tiempo pide el reloj a todas las máquinas y les indica cómo ajustarse:', 1],
  ['Protocolo que obtiene la hora de un servidor de tiempo con cuatro marcas, de T1 a T4:', 0]
]);

SET('EX', 'mutex-alg', 'mutex', 'CEN-05 · Exclusión mutua', [
  ['Algoritmo centralizado', 'Un coordinador otorga el acceso; son tres mensajes: petición, autorización y liberación.'],
  ['Algoritmo descentralizado', 'Votación: cada recurso se replica n veces y se necesita una mayoría m > n/2.'],
  ['Algoritmo distribuido', 'Lamport (1978), mejorado por Ricart y Agrawala (1981); requiere ordenar todos los eventos.'],
  ['Algoritmo de anillo con token', 'Los procesos forman un anillo y un token circula; no se puede reutilizar de inmediato.']
], [
  ['Algoritmo de exclusión mutua que necesita una mayoría m > n/2 de coordinadores:', 1],
  ['Algoritmo de exclusión mutua con un coordinador y tres mensajes por acceso:', 0],
  ['Algoritmo de exclusión mutua de Lamport mejorado por Ricart y Agrawala:', 2],
  ['Algoritmo de exclusión mutua en que un token circula por un anillo:', 3]
]);

SET('EX', 'mutex-pros-contras', 'mutex', 'CEN-05 · Exclusión mutua', [
  ['Punto simple de falla', 'Es la desventaja del coordinador en el algoritmo centralizado.'],
  ['N puntos de falla', 'Es la desventaja del algoritmo distribuido.'],
  ['Pérdida del token', 'Es la desventaja del algoritmo de anillo, junto con la caída del proceso que lo posee.'],
  ['Menor cantidad de mensajes que el descentralizado', 'Es la ventaja del algoritmo distribuido.']
], [
  ['Desventaja principal del coordinador en el algoritmo centralizado:', 0],
  ['Desventaja del algoritmo distribuido respecto a las fallas:', 1],
  ['Problema del algoritmo de anillo cuando cae el proceso que posee el token:', 2],
  ['Ventaja del algoritmo distribuido frente al descentralizado:', 3]
]);

SET('EX', 'distribuido-casos', 'mutex', 'CEN-05 · Algoritmo distribuido', [
  ['Envía OK', 'Si el receptor no usa el recurso ni lo desea, envía un mensaje OK al remitente.'],
  ['No responde y encola', 'Si ya cuenta con el recurso, no responde y coloca la petición en una cola.'],
  ['Compara marcas de tiempo', 'Si desea el recurso pero aún no lo tiene, compara las marcas y gana la menor.'],
  ['Descarta la petición', 'No es una de las tres respuestas del algoritmo.']
], [
  ['En el algoritmo distribuido, el receptor que no usa el recurso ni lo desea:', 0],
  ['En el algoritmo distribuido, el receptor que ya usa el recurso:', 1],
  ['En el algoritmo distribuido, el receptor que desea el recurso pero aún no lo tiene:', 2]
]);

SET('EX', 'eleccion-set', 'elec', 'CEN-05 · Algoritmos de elección', [
  ['Algoritmo Bully (grandullón)', 'Concebido por García-Molina (1982): se envía ELECTION a los procesos con identificador mayor.'],
  ['Algoritmo de anillo', 'No usa token; el mensaje acumula el número de cada proceso.'],
  ['Mensaje ELECTION', 'En el Bully, lo envía el proceso que inicia la elección a los de identificador mayor.'],
  ['Mensaje COORDINADOR', 'En el anillo, circula una vez más para informar que el coordinador es el miembro con el número mayor.']
], [
  ['Algoritmo de elección concebido por García-Molina:', 0],
  ['Algoritmo de elección cuyo mensaje agrega el número de cada proceso por donde pasa:', 1],
  ['Mensaje que un proceso envía a los de identificador mayor al iniciar una elección Bully:', 2],
  ['Mensaje con el que el anillo informa quién es el coordinador:', 3]
]);

// ───────────────────────── Siglas y sinónimos ─────────────────────────
SET('CM', 'siglas-1', 'sinonimos', 'CEN-04 · Siglas', [
  ['IDL', 'Lenguaje de definición de interfaz.'],
  ['RPC', 'Llamada a procedimiento remoto.'],
  ['DCE', 'Distributed Computing Environment.'],
  ['MQM', 'Modelo de colas de mensajes (Message-Queuing Model).']
], [
  ['Sigla de «lenguaje de definición de interfaz»:', 0],
  ['Sigla de «llamada a procedimiento remoto»:', 1],
  ['Sigla de «Distributed Computing Environment»:', 2],
  ['Sigla de «Message-Queuing Model», el modelo de colas de mensajes:', 3]
], {s: 'alias'});

SET('RD', 'siglas-2', 'sinonimos', 'CEN-04 · Siglas', [
  ['ISO', 'Organización Internacional de Estandarización.'],
  ['OSI', 'Open Systems Interconnection.'],
  ['SAP', 'Punto de acceso al servicio.'],
  ['PDU', 'Unidad de datos del protocolo.']
], [
  ['Sigla de la Organización Internacional de Estandarización:', 0],
  ['Sigla de Open Systems Interconnection:', 1],
  ['Sigla de «punto de acceso al servicio»:', 2],
  ['Sigla de «unidad de datos del protocolo»:', 3]
], {s: 'alias'});

SET('RD', 'siglas-3', 'sinonimos', 'CEN-04 · Siglas', [
  ['QoS', 'Calidad de Servicio: caudal, retardo y confiabilidad.'],
  ['TSAP', 'Punto de acceso al servicio de transporte.'],
  ['SDU', 'Unidad de datos del servicio.'],
  ['PCI', 'Información de control que agrega el protocolo a la SDU.']
], [
  ['Sigla de «Calidad de Servicio»:', 0],
  ['Sigla del punto de acceso al servicio de transporte:', 1],
  ['Sigla de «unidad de datos del servicio»:', 2],
  ['Sigla de la información de control que agrega el protocolo a la SDU:', 3]
], {s: 'alias'});

SET('PH', 'siglas-4', 'sinonimos', 'CEN-03 · Siglas', [
  ['ULT', 'Hilos a nivel de usuario (User-Level Threads).'],
  ['KLT', 'Hilos a nivel de núcleo (Kernel-Level Threads).'],
  ['BCP', 'Bloque de Control de Proceso.'],
  ['PID', 'Identificador del proceso.']
], [
  ['Sigla de los hilos a nivel de usuario:', 0],
  ['Sigla de los hilos a nivel de núcleo:', 1],
  ['Sigla del Bloque de Control de Proceso:', 2],
  ['Sigla del identificador del proceso:', 3]
], {s: 'alias'});

SET('CO', 'sinonimos-en', 'sinonimos', 'CEN-05 · Términos claves', [
  ['Deadlock', 'Interbloqueo.'],
  ['Livelock', 'Círculo vicioso.'],
  ['Starvation', 'Inanición.'],
  ['Race condition', 'Condición de carrera.']
], [
  ['Nombre en inglés del interbloqueo:', 0],
  ['Nombre en inglés del círculo vicioso:', 1],
  ['Nombre en inglés de la inanición:', 2],
  ['Nombre en inglés de la condición de carrera:', 3]
], {s: 'alias'});

SET('CO', 'sinonimos-2', 'sinonimos', 'CEN-05 · Sinónimos', [
  ['Algoritmo Bully', 'Es el algoritmo del grandullón.'],
  ['Happened-before', 'Es la relación «ocurre-antes» de Lamport.'],
  ['Solicitud-respuesta', 'Es la interacción básica cliente-servidor.'],
  ['Upcall', 'Es la llamada excepcional que una capa hace a una capa de nivel superior.']
], [
  ['Otro nombre del algoritmo del grandullón:', 0],
  ['Nombre en inglés de la relación «ocurre-antes»:', 1],
  ['Otro nombre de la interacción básica cliente-servidor:', 2],
  ['Nombre de la llamada excepcional que una capa hace a una capa de nivel superior:', 3]
], {s: 'alias'});

// ───────────────────────── Extra: final de CEN-05 (se puede excluir con el interruptor del temario) ─────────────────────────
SET('GR', 'multidif-prop', 'grupo', 'CEN-05 · Multidifusión fiable', [
  ['Integridad', 'Un proceso correcto entrega a lo sumo una vez cada mensaje, y debe venir de una operación multicast.'],
  ['Validez', 'Si un proceso difunde un mensaje m, al final m será entregado.'],
  ['Acuerdo', 'Si un proceso correcto entrega m, el resto de procesos correctos del grupo también lo entregan (todo o nada).'],
  ['Ordenación total', 'Si un proceso entrega m antes que m′, cualquier otro que entregue m′ habrá entregado antes m.']
], [
  ['Propiedad de la multidifusión fiable: un proceso correcto entrega a lo sumo una vez cada mensaje:', 0],
  ['Propiedad de la multidifusión fiable: si un proceso difunde m, al final m será entregado:', 1]
], {x: true});
