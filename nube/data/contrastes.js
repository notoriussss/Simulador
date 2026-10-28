/* Tablas de contraste. Cada una tiene un g que coincide con el grupo de las preguntas del banco que se refieren a ella. */
Sim.contrasts.push(
  {
    g: 'transp',
    title: 'Tipos de transparencia',
    lead: 'Tanenbaum (CEN-02) da 7; Coulouris (CEN-03) agrega movilidad, prestaciones y escalado. Fijate en la palabra que delata a cada una.',
    cols: ['Transparencia', 'Qué oculta', 'Palabra que la delata'],
    rows: [
      ['Acceso', 'Diferencias en la representación de datos y cómo se accede', '"representación", "forma de acceso", "local = remoto"'],
      ['Ubicación', 'Dónde está el objeto', '"dónde"'],
      ['Reubicación', 'Que se mueve MIENTRAS está en uso', '"mientras está en uso"'],
      ['Migración', 'Que puede moverse a otra ubicación', '"puede moverse" (sin "en uso")'],
      ['Replicación', 'Que hay copias', '"replicado"'],
      ['Concurrencia', 'Que varios usuarios lo comparten', '"compartido por varios usuarios"'],
      ['Fallos', 'La falla y la recuperación', '"falla y recuperación"'],
      ['Movilidad (CEN-03)', 'Reubicar recursos sin afectar la operación', 'término de Coulouris'],
      ['Prestaciones (CEN-03)', 'Reconfigurar según la carga', '"carga", "desempeño"'],
      ['Escalado (CEN-03)', 'Crecer sin cambiar estructura ni algoritmos', '"sin cambios en la estructura"']
    ]
  },
  {
    g: 'abierto',
    title: 'Sistema abierto',
    lead: 'Tres palabras que suenan parecido. Preguntate qué se mueve: ¿dos sistemas trabajan juntos, una app cambia de sistema, o cambian los componentes?',
    cols: ['Término', 'Qué significa', 'Pregunta para distinguirlo'],
    rows: [
      ['Interoperabilidad', 'Dos sistemas distintos coexisten y trabajan juntos según un estándar común', '¿Trabajan JUNTOS?'],
      ['Portabilidad', 'Una app corre sin modificaciones en otro sistema con las mismas interfaces', '¿Se MUDA la app?'],
      ['Extensibilidad', 'Agregar o reemplazar componentes sin afectar al resto', '¿Se AGREGAN o CAMBIAN piezas?'],
      ['Completa', 'Todo lo necesario para implementar está especificado', '¿Falta algo?'],
      ['Neutral', 'No prescribe cómo implementar', '¿Dice CÓMO hacerlo?']
    ]
  },
  {
    g: 'escal',
    title: 'Escalabilidad',
    lead: 'Las 3 dimensiones de Neuman miden; vertical y horizontal son formas de crecer.',
    cols: ['Término', 'Idea', 'Tipo'],
    rows: [
      ['De tamaño', 'Más usuarios y recursos sin perder rendimiento', 'Dimensión (Neuman)'],
      ['Geográfica', 'Usuarios y recursos lejos, casi sin notar los retrasos', 'Dimensión (Neuman)'],
      ['Administrativa', 'Fácil de administrar con muchas organizaciones', 'Dimensión (Neuman)'],
      ['Vertical (scale up)', 'Más CPU y RAM a la MISMA máquina', 'Forma de escalar'],
      ['Horizontal (scale out)', 'Más máquinas', 'Forma de escalar'],
      ['Técnicas', 'Ocultar latencias, distribuir el trabajo, replicar', 'Neuman, 1994']
    ]
  },
  {
    g: 'acopl',
    title: 'Acoplamiento y coordinación',
    lead: 'Referencial = sé QUIÉN es el otro. Temporal = tiene que estar vivo AHORA.',
    cols: ['', 'Temporalmente acoplados', 'Temporalmente desacoplados'],
    rows: [
      ['Referencialmente acoplados', 'Coordinación directa', 'Coordinación de buzón'],
      ['Referencialmente desacoplados', 'Coordinación basada en eventos (pub-sub)', 'Espacio de datos compartido']
    ]
  },
  {
    g: 'arq',
    title: 'Estilos de arquitectura',
    lead: 'Cuidado con los "buses" y "brokers": cada uno pertenece a un tema distinto.',
    cols: ['Estilo', 'Unidad', 'Cómo se comunican'],
    rows: [
      ['SOA', 'Servicios', 'Bus de servicio empresarial (ESB)'],
      ['Microservicios', 'Servicios pequeños y autónomos, uno por funcionalidad de negocio', 'Contratos de API'],
      ['Orientada a recursos (ROA)', 'Recurso con estado y URI', 'Interfaz uniforme (GET, PUT, POST, DELETE); amplía REST'],
      ['Basada en objetos', 'Objeto = componente', 'Llamada a procedimiento (proxy del cliente / skeleton)'],
      ['En capas', 'Capas Li < Lj', 'Llamadas descendentes; upcall solo excepcional'],
      ['Monolítico', 'Un gran programa', 'Separación solo lógica'],
      ['Message broker (CEN-04)', 'Colas de mensajes', 'Convierte mensajes al formato del destino']
    ]
  },
  {
    g: 'hilos',
    title: 'Procesos e hilos',
    lead: 'El proceso es dueño de los recursos; el hilo es solo la traza de ejecución.',
    cols: ['Concepto', 'Qué es', 'Detalle clave'],
    rows: [
      ['Programa', 'Entidad pasiva', 'El código'],
      ['Proceso', 'Programa en ejecución (entidad activa)', 'Tiene BCP: PID, estado, PC'],
      ['Hilo / hebra / thread / LWP', 'Traza de ejecución que comparte recursos', 'PC + registros + pila; tiene BCH'],
      ['ULT', 'Hilos de biblioteca a nivel de usuario', 'El núcleo NO los conoce'],
      ['KLT', 'Hilos del núcleo', 'El núcleo planifica por hilos (Linux, OS/2)'],
      ['Cliente multihilo', '—', 'Esconder la latencia de red'],
      ['Servidor multihilo', '—', 'Mejorar desempeño y estructura']
    ]
  },
  {
    g: 'complej',
    title: 'Complejidad de las comunicaciones',
    lead: 'Problema → solución. Las dos saturaciones son la trampa más común.',
    cols: ['Problema', 'Solución', ''],
    rows: [
      ['Identificación del destino', 'Direccionamiento', 'QUIÉN'],
      ['Localización del destino', 'Enrutamiento', 'POR DÓNDE'],
      ['Manejo de errores', 'Detección y corrección', ''],
      ['Pérdidas de secuencia', 'Reordenación', ''],
      ['Saturación del RECEPTOR', 'Control de flujo', 'XON/XOFF, ventana'],
      ['Saturación de la RED', 'Control de congestión', ''],
      ['Eficiencia de uso de la red', 'Multiplexado', ''],
      ['Diferencias de longitud', 'Segmentación', ''],
      ['Representación de la información', 'Sintaxis común', '']
    ]
  },
  {
    g: 'osi',
    title: 'Capas OSI',
    lead: 'De abajo hacia arriba. Enlace y transporte son "fiables" los dos: enlace salto a salto, transporte extremo a extremo.',
    cols: ['Capa', 'Función', 'Protocolos de ejemplo'],
    rows: [
      ['7 Aplicación', 'Acceso al entorno OSI para los usuarios', 'FTP, Telnet, email'],
      ['6 Presentación', 'Independencia de la representación (sintaxis)', '—'],
      ['5 Sesión', 'Establece, gestiona y cierra sesiones entre aplicaciones', '—'],
      ['4 Transporte', 'Fiable extremo a extremo, control de flujo origen-destino', 'TP0-TP4, TCP, UDP'],
      ['3 Red', 'Independencia de la conmutación y la transmisión', 'IP, IPX'],
      ['2 Enlace de datos', 'Tramas: sincronización, errores y flujo sobre el enlace', 'HDLC, LAPB, PPP'],
      ['1 Física', 'Interfaz mecánica, eléctrica, funcional y de procedimiento', 'RS-232-C, X.21']
    ]
  },
  {
    g: 'prim',
    title: 'Primitivas de servicio',
    lead: 'Dos preguntas: ¿quién la emite (usuario o proveedor)? ¿abre o cierra?',
    cols: ['Primitiva', 'La emite', 'Para qué'],
    rows: [
      ['Solicitud', 'Usuario', 'Invocar un servicio'],
      ['Indicación', 'Proveedor', 'Avisar al usuario par que lo invocaron (o una acción del proveedor)'],
      ['Respuesta', 'Usuario', 'Completar algo que llegó por INDICACIÓN'],
      ['Confirmación', 'Proveedor', 'Completar algo que empezó con una SOLICITUD']
    ]
  },
  {
    g: 'pdu',
    title: 'Unidades de datos y conceptos OSI',
    lead: 'Las siglas con "I" de interfaz viajan en vertical; las de "P" de protocolo, entre pares.',
    cols: ['Sigla', 'Significado', 'Relación'],
    rows: [
      ['SDU', 'Unidad de datos del servicio', 'Los datos útiles'],
      ['ICI', 'Información de control de la interfaz', 'Viaja entre capas adyacentes'],
      ['IDU', 'Unidad de datos de la interfaz', 'IDU = ICI + SDU'],
      ['PCI', 'Información de control del protocolo', 'El header'],
      ['PDU', 'Unidad de datos del protocolo', '(N)PDU = (N)PCI + SDU'],
      ['SAP', 'Punto de acceso al servicio', 'TSAP (transporte), NSAP (red)'],
      ['Entidades pares', 'Misma capa en máquinas distintas', 'Hablan por protocolo (horizontal, ficticia)']
    ]
  },
  {
    g: 'entrega',
    title: 'Semánticas y tipos de comunicación',
    lead: 'Persistente o transitoria habla de ALMACENAR; síncrona o asíncrona habla de BLOQUEARSE. Son ejes distintos.',
    cols: ['Término', 'Idea', 'Detalle'],
    rows: [
      ['Al-menos-una-vez', 'Reintenta; puede duplicar', 'Requiere operaciones idempotentes; Sun NFS'],
      ['A-lo-más-una-vez', 'Detecta y reporta la falla; nunca duplica', 'Sesión con IDs únicos'],
      ['Exactamente-una-vez', 'Imposible ante amnesia total', '—'],
      ['Persistente', 'El middleware guarda el mensaje hasta entregarlo', 'Colas de mensajes, email'],
      ['Transitoria', 'Si el receptor no corre, se descarta', '—'],
      ['Asíncrona', 'El emisor sigue de inmediato', '—'],
      ['Síncrona', 'Se bloquea: hasta el middleware, la entrega o el procesamiento', '3 puntos'],
      ['Discreta / Flujo', 'Unidad completa / secuencia con relación temporal', '—'],
      ['Marshalling', 'Datos → representación externa', 'Unmarshalling es el inverso']
    ]
  },
  {
    g: 'param',
    title: 'Paso de parámetros',
    lead: 'Lo que importa: ¿el original cambia? ¿cuándo?',
    cols: ['Modo', 'Qué va a la pila', '¿Cambia el original?'],
    rows: [
      ['Por valor', 'Copia del valor', 'No'],
      ['Por referencia', 'Puntero', 'Sí, inmediatamente'],
      ['Por copia/restauración', 'Copia del valor', 'Sí, al terminar (se copia de vuelta)'],
      ['Por nombre (en clase)', 'La expresión, que se reevalúa en cada uso', 'Depende']
    ]
  },
  {
    g: 'conc',
    title: 'Términos de concurrencia',
    lead: 'Deadlock: nadie se mueve. Livelock: todos se mueven sin avanzar. Starvation: uno solo se queda sin turno.',
    cols: ['Término', 'Alias', 'Idea'],
    rows: [
      ['Interbloqueo', 'Deadlock', 'Cada uno espera al otro'],
      ['Círculo vicioso', 'Livelock', 'Cambian de estado sin trabajo útil'],
      ['Inanición', 'Starvation', 'Listo pero nunca elegido'],
      ['Condición de carrera', 'Race condition', 'El resultado depende del orden'],
      ['Sección crítica', 'Critical section', 'Código que accede a recursos compartidos'],
      ['Exclusión mutua', 'Mutual exclusion', 'REQUISITO: uno a la vez en la sección crítica'],
      ['Operación atómica', 'Atomic operation', 'No se interrumpe']
    ]
  },
  {
    g: 'reloj',
    title: 'Sincronización de relojes',
    lead: 'NTP y Berkeley ajustan tiempo físico; Lamport solo ordena eventos.',
    cols: ['Algoritmo', 'Cómo funciona', 'Clave'],
    rows: [
      ['NTP', 'El cliente pide la hora a un servidor: T1, T2, T3, T4', 'θ = ((T2−T1)+(T3−T4))/2 ; δ = ((T2−T1)+(T4−T3))/2 ; supone tránsito simétrico; estratos; mínimo δ de 8 pares'],
      ['Berkeley', 'Un demonio pregunta a todos y les dice cuánto ajustar', 'Servidor activo'],
      ['Lamport', 'Contador lógico por proceso', 'Ci+1 antes de cada evento; al recibir: max(Cj, ts) y luego +1; si a→b entonces C(a)<C(b)']
    ]
  },
  {
    g: 'mutex',
    title: 'Exclusión mutua distribuida',
    lead: 'Mirá quién da el permiso y qué pasa si alguien cae.',
    cols: ['Algoritmo', 'Permiso de', 'Ventaja', 'Desventaja'],
    rows: [
      ['Centralizado', 'Un coordinador (no responde si está ocupado)', 'Justo, sin inanición, 3 mensajes', 'Punto único de falla, cuello de botella'],
      ['Descentralizado', 'Mayoría m > n/2 de n coordinadores (avisan si niegan)', 'Tolera fallas de coordinadores', 'Muchos mensajes'],
      ['Distribuido (Lamport 1978, Ricart-Agrawala 1981)', 'TODOS los procesos; gana la menor marca de tiempo', 'Menos mensajes que el descentralizado', 'N puntos de falla'],
      ['Anillo con token', 'Quien tenga el token', 'Justo, sin inanición', 'Pérdida del token']
    ]
  },
  {
    g: 'elec',
    title: 'Algoritmos de elección',
    lead: 'Ambos eligen al de mayor número. El de anillo NO usa token, a diferencia del anillo de exclusión mutua.',
    cols: ['Algoritmo', 'Mecanismo', 'Detalle'],
    rows: [
      ['Bully (grandullón)', 'ELECTION a los de ID mayor; si nadie responde, gano', 'García-Molina, 1982'],
      ['Anillo (elección)', 'Mensaje ELECCIÓN acumula IDs; al volver pasa a COORDINADOR', 'Sin token; salta a los caídos'],
      ['Anillo con token (mutex)', 'Circula un token para acceder al recurso', 'Es de EXCLUSIÓN MUTUA, no de elección']
    ]
  },
  {
    g: 'clase',
    title: 'Lo que el profesor mencionó en clase',
    lead: 'No están en las láminas, pero los anotaste como "para el examen". Repasalos.',
    cols: ['Término', 'Qué es', 'No confundir con'],
    rows: [
      ['Síndrome de la ventana tonta', 'Silly window syndrome: segmentos TCP diminutos por ventanas anunciadas muy pequeñas', 'Ventana deslizante (sliding window)'],
      ['Frame Relay', 'Conmutación de paquetes que reemplazó a X.25', 'HDLC, LAPB'],
      ['XON/XOFF', 'Control de FLUJO por software con caracteres de control', 'Control de congestión'],
      ['Erlang', 'Unidad de intensidad de tráfico', 'Baudio, bps'],
      ['IBM SNA', 'Arquitectura de red propietaria de IBM', 'OSI'],
      ['XDR', 'Representación externa de datos de Sun', 'IDL (define interfaces)'],
      ['Paso por nombre', 'Se pasa la expresión y se reevalúa', 'Paso por referencia']
    ]
  },
  {
    g: 'replica',
    title: 'Replicación',
    lead: 'Final de CEN-05. Pasivo o activo se decide por quién ejecuta las peticiones.',
    cols: ['Concepto', 'Idea', 'Número clave'],
    rows: [
      ['Modelo pasivo (primario-respaldo)', 'Un primario ejecuta y propaga a los respaldos', 'f + 1 RM para f caídas'],
      ['Modelo activo', 'Todos los RM procesan en orden total', '2f + 1 RM para f bizantinas'],
      ['Disponibilidad', 'Falla solo si caen todos', '1 − pⁿ'],
      ['Cinco fases', 'Petición, coordinación, ejecución, acuerdo, respuesta', '—']
    ]
  },
  {
    g: 'sinonimos',
    title: 'Siglas y sinónimos',
    lead: 'El profesor pregunta el otro nombre de un concepto o lo que significa una sigla. Cada fila es un par que las láminas escriben entre paréntesis o con «también».',
    cols: ['Término', 'También se llama / significa', 'Tema'],
    rows: [
      ['Nodo', 'Dispositivo de hardware o proceso de software', 'Fundamentos'],
      ['IDL', 'Lenguaje de definición de interfaz', 'Sistema abierto'],
      ['ESB', 'Bus de Servicio Empresarial', 'Arquitecturas'],
      ['SOA', 'Arquitectura orientada a servicios', 'Arquitecturas'],
      ['Hilo', 'Hebra, thread o proceso ligero (LWP)', 'Procesos e hilos'],
      ['ULT / KLT', 'Hilos a nivel de usuario / de núcleo', 'Procesos e hilos'],
      ['BCP / PID', 'Bloque de Control de Proceso / identificador del proceso', 'Procesos e hilos'],
      ['ISO / OSI', 'Organización Internacional de Estandarización / Open Systems Interconnection', 'Redes'],
      ['SAP / TSAP', 'Punto de acceso al servicio / punto de acceso al servicio de transporte', 'Redes'],
      ['PDU / SDU / PCI', 'Unidad de datos del protocolo / del servicio / información de control del protocolo', 'Redes'],
      ['QoS', 'Calidad de Servicio (caudal, retardo, confiabilidad)', 'Redes'],
      ['RPC', 'Llamada a procedimiento remoto', 'Comunicación'],
      ['DCE', 'Distributed Computing Environment', 'Comunicación'],
      ['MQM', 'Modelo de colas de mensajes (Message-Queuing Model)', 'Comunicación'],
      ['Solicitud-respuesta', 'Interacción básica cliente-servidor', 'Comunicación'],
      ['Upcall', 'Llamada excepcional a una capa de nivel superior', 'Arquitecturas en capas'],
      ['Deadlock / livelock / starvation', 'Interbloqueo / círculo vicioso / inanición', 'Concurrencia'],
      ['Race condition', 'Condición de carrera', 'Concurrencia'],
      ['Happened-before', 'Relación «ocurre-antes» (→) de Lamport', 'Relojes'],
      ['Algoritmo Bully', 'Algoritmo del grandullón', 'Elección']
    ]
  },
  {
    g: 'deutsch',
    title: 'Las ocho suposiciones falsas de Deutsch',
    lead: 'Peter Deutsch (Sun Microsystems). Todas empiezan igual: «se asume que…» y todas son falsas.',
    cols: ['Suposición falsa', 'Por qué es falsa'],
    rows: [
      ['La red es confiable', 'Los mensajes pueden perderse y la red puede fallar'],
      ['La red es segura', 'Hay amenazas y hay que proteger los recursos'],
      ['La red es homogénea', 'Hay nodos y enlaces de muchos tipos'],
      ['La topología no cambia', 'Los nodos entran y salen y la estructura cambia'],
      ['La latencia es cero', 'Las comunicaciones toman tiempo'],
      ['El ancho de banda es infinito', 'Hay un límite de datos por unidad de tiempo'],
      ['El costo de transporte es cero', 'Mover datos cuesta recursos'],
      ['Hay un solo administrador', 'Hay varias organizaciones administrativas']
    ]
  },
  {
    g: 'objetivos',
    title: 'Los cuatro objetivos de diseño',
    lead: 'Para que valga la pena construir un sistema distribuido debe cumplir estos cuatro.',
    cols: ['Objetivo', 'Qué exige'],
    rows: [
      ['Compartir recursos', 'Que los recursos sean fácilmente accesibles; razón obvia: la economía'],
      ['Transparencia de distribución', 'Ocultar que procesos y recursos están distribuidos físicamente'],
      ['Ser abierto', 'Adherirse a reglas estándar con interfaces (IDL), interoperable, portable y extensible'],
      ['Ser escalable', 'En tamaño, en geografía y en administración']
    ]
  },
  {
    g: 'mw',
    title: 'Servicios de middleware',
    lead: 'El middleware es para un sistema distribuido lo que el sistema operativo para una computadora: un administrador de recursos.',
    cols: ['Servicio', 'Ejemplo o idea'],
    rows: [
      ['Comunicación', 'Llamada a procedimiento remoto (RPC)'],
      ['Transacciones', 'Operaciones de todo o nada'],
      ['Composición del servicio', 'Unir programas existentes, por ejemplo aplicaciones web'],
      ['Confiabilidad', 'Horus: un mensaje lo reciben todos o ninguno'],
      ['Otros servicios', 'Seguridad, contabilidad, enmascaramiento y recuperación de fallas']
    ]
  },
  {
    g: 'rpc',
    title: 'RPC: pasos de una llamada y vinculación en DCE',
    lead: 'Diez pasos de una llamada remota, de lado a lado. Y los cinco pasos de la vinculación cliente-servidor en DCE.',
    cols: ['Paso', 'Quién hace qué'],
    rows: [
      ['1', 'El procedimiento del cliente llama al stub del cliente de la manera habitual'],
      ['2', 'El stub del cliente construye un mensaje y llama al sistema operativo local'],
      ['3', 'El SO del cliente envía el mensaje al SO remoto'],
      ['4', 'El SO remoto entrega el mensaje al stub del servidor'],
      ['5', 'El stub del servidor desempaqueta los parámetros y llama al servidor'],
      ['6', 'El servidor realiza el trabajo y devuelve el resultado al stub'],
      ['7', 'El stub del servidor lo empaqueta en un mensaje y llama a su SO local'],
      ['8', 'El SO del servidor envía el mensaje al SO del cliente'],
      ['9', 'El SO del cliente entrega el mensaje al stub del cliente'],
      ['10', 'El stub del cliente desempaqueta el resultado y lo devuelve al cliente'],
      ['DCE 1 a 5', 'Registrar el punto final · Registrar el servicio · Buscar el servidor · Solicitar el punto final · Ejecutar la llamada RPC'],
      ['Servicios de DCE', 'Archivos distribuidos · Directorio · Tiempo distribuido; el programa uuidgen genera un identificador único de 128 bits']
    ]
  },
  {
    g: 'colas',
    title: 'Colas de mensajes: primitivas y combinaciones',
    lead: 'Comunicación persistente y débilmente acoplada: nadie tiene que estar activo al mismo tiempo.',
    cols: ['Elemento', 'Significado'],
    rows: [
      ['Put', 'Añade un mensaje a una cola'],
      ['Get', 'Se bloquea hasta que la cola tenga mensajes y extrae el primero'],
      ['Poll', 'Comprueba si hay mensajes y extrae el primero; nunca se bloquea'],
      ['Notify', 'Instala un manejador que se invoca al colocar un mensaje'],
      ['Emisor en ejecución · receptor en ejecución', 'El receptor consume de inmediato'],
      ['Emisor en ejecución · receptor pasivo', 'El mensaje espera hasta que el receptor se active'],
      ['Emisor pasivo · receptor en ejecución', 'El receptor procesa un mensaje que dejó un emisor ya inactivo'],
      ['Emisor pasivo · receptor pasivo', 'El mensaje queda almacenado en la cola']
    ]
  },
  {
    g: 'sna',
    title: 'IBM SNA: las siete capas',
    lead: 'La arquitectura propietaria de IBM que se compara con el modelo OSI.',
    cols: ['Capa', 'Función'],
    rows: [
      ['1. Física', 'No define protocolos: se puede usar cualquier estándar'],
      ['2. Control de enlace de datos (DLC)', 'Incluye el Synchronous Data Link Control (SDLC)'],
      ['3. Control de ruta (Path Control)', 'Encaminamiento'],
      ['4. Control de transmisión', 'Conexión punta a punta confiable y servicios de cifrado'],
      ['5. Control de flujo de datos', 'Gestiona el procesamiento de peticiones y respuestas'],
      ['6. Servicios de presentación', 'Formatos y transformación de datos'],
      ['7. Servicios de transacción', 'Servicios de aplicación en procesamiento distribuido']
    ]
  },
  {
    g: 'sock',
    title: 'Primitivas de socket (TCP/IP)',
    lead: 'Un socket es un punto final de comunicación para E/S, en la capa de transporte.',
    cols: ['Primitiva', 'Quién la usa', 'Significado'],
    rows: [
      ['Socket', 'Servidor y cliente', 'Crea un nuevo punto final de comunicación'],
      ['Bind', 'Servidor', 'Asocia una dirección local (IP y puerto) con el socket'],
      ['Listen', 'Servidor', 'Anuncia que aceptará conexiones'],
      ['Accept', 'Servidor', 'Se bloquea hasta que llega una solicitud de conexión'],
      ['Connect', 'Cliente', 'Intenta establecer la conexión de forma activa']
    ]
  },
  {
    g: 'conexion',
    title: 'Tipos de servicio y calidad de servicio',
    lead: 'Se distinguen por la conexión y por la confirmación de recepción.',
    cols: ['Servicio', 'Rasgo', 'Ejemplo'],
    rows: [
      ['Orientado a conexión', 'Establecer · usar · liberar', 'Llamada telefónica'],
      ['No orientado a conexión, sin confirmación', 'Sin confirmación de recepción', 'Carta'],
      ['No orientado a conexión, con confirmación', 'Con confirmación de recepción', 'Carta certificada'],
      ['Calidad de Servicio (QoS)', 'Caudal, retardo, confiabilidad; negociación con la capa de red', '—']
    ]
  },
  {
    g: 'grupo',
    title: 'Multidifusión fiable y ordenación',
    lead: 'Las propiedades de la fiabilidad y los tres órdenes de entrega.',
    cols: ['Término', 'Significado'],
    rows: [
      ['Integridad', 'Un proceso correcto entrega a lo sumo una vez cada mensaje'],
      ['Validez', 'Si un proceso difunde m, al final m será entregado'],
      ['Acuerdo', 'Si un proceso correcto entrega m, los demás correctos del grupo también (todo o nada)'],
      ['Ordenación FIFO', 'Si un proceso hace multicast de m y luego de m′, quien entregue m′ habrá entregado m'],
      ['Ordenación causal', 'Si multicast(m) → multicast(m′), quien entregue m′ habrá entregado m'],
      ['Ordenación total', 'Si un proceso entrega m antes que m′, cualquier otro que entregue m′ habrá entregado m antes']
    ]
  }
);
