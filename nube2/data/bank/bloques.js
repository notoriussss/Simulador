// Bloques de preguntas de Computación en la Nube (Parcial 2): de 2 a 4 preguntas SEGUIDAS que comparten las MISMAS 4 opciones,
// cada una con una respuesta distinta (así las arma el profesor). Formato y uso: js/schema.js.
// La frase de cada opción sirve de explicación si es la correcta y de «por qué no» si no lo es.
// Para no perder el progreso guardado, agrega bloques nuevos AL FINAL de este archivo.
const SET = Sim.addSet;
const X = { x: true }; // sale solo de diagramas o fotos de clase

// ───────────────────────── CEN-06 · Origen y definición ─────────────────────────
SET('FU', 'hitos-anios', 'hitos', 'CEN-06 · lám. 7-10 · Origen y evolución', [
  ['1961', 'John McCarthy, en una conferencia en el MIT, enuncia por primera vez «time sharing».'],
  ['1999', 'Salesforce.com entrega aplicaciones empresariales por una página web: punto de partida práctico de la nube.'],
  ['2002', 'Amazon lanza Amazon Web Service, el siguiente eslabón de la cadena.'],
  ['2006', 'Amazon presenta EC2 y Google presenta Google Docs.']
], [
  ['Año en que se enunció por primera vez el término time sharing (tiempo compartido):', 0],
  ['Año considerado el punto de partida práctico y de negocio de la nube:', 1],
  ['Año en que Amazon lanzó Amazon Web Service:', 2],
  ['Año en que Amazon presentó Elastic Compute Cloud (EC2):', 3]
], { s: 'dato' });

SET('FU', 'hitos-empresas', 'hitos', 'CEN-06 · lám. 8-10 · Origen y evolución', [
  ['Salesforce.com', 'Acuñó «software bajo demanda» (1999), que luego se transformó en software como servicio.'],
  ['Amazon', 'Lanzó Amazon Web Service (2002) y Elastic Compute Cloud, EC2 (2006).'],
  ['Google', 'Presentó Google Docs (2006): ofimática sin instalar nada en la PC.'],
  ['IBM', 'En 2007 comenzó, junto con Google y universidades de EE. UU., a trabajar en servicios alojados en sus «nubes».']
], [
  ['Empresa que acuñó el término «software bajo demanda»:', 0],
  ['Empresa que permitió a pequeñas empresas alquilar equipos para ejecutar sus propias aplicaciones:', 1],
  ['Empresa que mostró al gran público que se podían usar aplicaciones ofimáticas desde un sitio web:', 2],
  ['Empresa que en 2007 empezó a trabajar con Google y varias universidades en provisión de servicios alojados:', 3]
]);

SET('FU', 'definiciones', 'defs', 'CEN-06 · lám. 7, 18-19 · Definiciones', [
  ['NIST', 'Su definición es la más referenciada: acceso ubicuo, adaptado y bajo demanda a recursos configurables compartidos.'],
  ['Universidad de Berkeley', 'Definición complementaria: aplicaciones entregadas como servicio + hardware y software del centro de datos (la nube).'],
  ['MIT', 'Allí, en 1961, McCarthy enunció el término time sharing.'],
  ['Cloud Security Alliance', 'Organización de seguridad que en 2011 definió la seguridad como servicio (SecaaS).']
], [
  ['Institución de EE. UU. autora de la definición de nube más referenciada:', 0],
  ['Autora de la definición que separa las aplicaciones (SaaS) del hardware y software del centro de datos:', 1],
  ['Lugar de la conferencia de 1961 donde se habló por primera vez de tiempo compartido:', 2]
]);

SET('FU', 'categorias-nist', 'nist5', 'CEN-06 · lám. 23, 26, 38 · Modelo NIST', [
  ['Modelos de despliegue', 'Se refieren a la localización y gestión de la infraestructura: pública, privada, comunitaria, híbrida.'],
  ['Modelos de servicio', 'Se refieren a los servicios específicos a los que se accede: SaaS, PaaS, IaaS.'],
  ['Características esenciales', 'Las 5 del NIST: autoservicio, acceso amplio a la red, compartición, rápida elasticidad, servicio medido.'],
  ['Características comunes', 'Las 8 del diagrama: escalamiento masivo, homogeneidad, virtualización, software de bajo costo, etc.']
], [
  ['Parte del modelo NIST formada por pública, privada, comunitaria e híbrida:', 0],
  ['Parte del modelo NIST formada por Software, Plataforma e Infraestructura como servicio:', 1],
  ['Parte del modelo NIST que incluye el autoservicio bajo demanda y el servicio medido:', 2],
  ['En el diagrama, grupo al que pertenecen la homogeneidad y la computación resistente:', 3]
]);

// ───────────────────────── CEN-06 · Características ─────────────────────────
SET('CA', 'nist5-a', 'nist5', 'CEN-06 · lám. 32-36 · Características NIST', [
  ['Autoservicio bajo demanda', 'El usuario obtiene capacidades automáticamente, sin interacción humana con el proveedor.'],
  ['Acceso amplio a la red', 'Recursos accesibles por mecanismos estándar desde muchos tipos de dispositivos (acceso ubicuo).'],
  ['Compartición de recursos', 'Los recursos del proveedor se agrupan para servir a múltiples consumidores, con independencia de la posición.'],
  ['Rápida elasticidad', 'Los recursos se proveen y liberan elásticamente; parecen ilimitados y siempre disponibles.']
], [
  ['Característica NIST: se obtiene tiempo de servidor y almacenamiento en red sin hablar con nadie del proveedor:', 0],
  ['Característica NIST: se accede desde smartphones, laptops, Smart TV o videoconsolas por mecanismos estándar:', 1],
  ['Característica NIST: almacenamiento, memoria y ancho de banda se asignan dinámicamente a múltiples consumidores:', 2],
  ['Característica NIST: los servicios se amplían en cantidad y calidad de forma rápida a medida que el cliente los necesita:', 3]
]);

SET('CA', 'nist5-b', 'nist5', 'CEN-06 · lám. 32-37 · Características NIST', [
  ['Servicio medido', 'El proveedor mide el servicio entregado a cada usuario; ambos ven el consumo real y se paga por uso efectivo.'],
  ['Rápida elasticidad', 'Da al usuario la impresión de recursos ilimitados, provistos y liberados muchas veces automáticamente.'],
  ['Autoservicio bajo demanda', 'El usuario toma capacidades a medida que las requiere, sin interacción humana.'],
  ['Compartición de recursos', 'El cliente no conoce la posición exacta de los recursos, pero puede indicar país, estado o centro de datos.']
], [
  ['Característica NIST que posibilita el pago por el uso efectivo de los servicios:', 0],
  ['Característica NIST que hace parecer que los recursos son ilimitados:', 1],
  ['Característica NIST que incluye la independencia de la posición de los recursos:', 3]
]);

SET('CA', 'complem-a', 'complem', 'CEN-06 · lám. 39-41 · Complementarias', [
  ['Costes más bajos', 'Reducciones de costes frente a otros productos similares del mercado.'],
  ['Facilidad de utilización', 'Normalmente no se requieren licencias de hardware ni software; a lo sumo pequeños cursos de formación.'],
  ['Calidad de servicio (QoS)', 'Se obtiene, por lo general, mediante contrato con el proveedor.'],
  ['Fiabilidad', 'La potencia y escalamiento de las redes del proveedor la garantizan; tan alta o más que la de Oracle, SAP o IBM.']
], [
  ['Característica complementaria: reducción de costes comparada con productos similares del mercado:', 0],
  ['Característica complementaria: no se requieren licencias y los productos están adaptados al usuario normal:', 1],
  ['Característica complementaria que se obtiene mediante contrato con el proveedor:', 2],
  ['Característica complementaria garantizada por la potencia y escalamiento de las redes del proveedor:', 3]
]);

SET('CA', 'complem-b', 'complem', 'CEN-06 · lám. 42-43 · Complementarias', [
  ['Administración externalizada de TI', 'Outsourcing de TI: se gestiona la infraestructura mientras se gestionan en paralelo los negocios.'],
  ['Simplificación de la actualización y mantenimiento', 'Al ser centralizado, se aplican fácilmente parches y upgrades.'],
  ['Facilidad para superar barreras', 'Rompe barreras físicas y virtuales; ideal para emprendedores y start-ups.'],
  ['Costes más bajos', 'Reducción de costes frente a productos similares del mercado.']
], [
  ['Característica complementaria que consiste en un modelo de outsourcing de TI:', 0],
  ['Característica complementaria que se debe a que el sistema es centralizado:', 1],
  ['Característica complementaria que rompe barreras físicas y virtuales:', 2]
]);

// ───────────────────────── CEN-06 · Serverless ─────────────────────────
SET('SL', 'serverless-capas', 'serverless', 'CEN-06 · lám. 46 · Diagrama serverless', [
  ['FaaS', 'Función como servicio: las Cloud Functions, parte serverless del diagrama.'],
  ['BaaS', 'Backend como servicio: Object Storage y Database, también serverless.'],
  ['IaaS', 'Parte «serverful»: Virtual Machines y Virtual Private Cloud.'],
  ['SaaS', 'Software de aplicación listo para usar; no aparece como capa del diagrama.']
], [
  ['En el diagrama de serverless, capa que contiene las Cloud Functions:', 0],
  ['En el diagrama de serverless, capa que contiene Object Storage y Database:', 1],
  ['En el diagrama de serverless, capa «serverful» con Virtual Machines y Virtual Private Cloud:', 2]
], X);

SET('SL', 'serverless-vs', 'serverless', 'CEN-06 · lám. 6, 44 · CEN-10 · lám. 10, 19', [
  ['Computación sin servidor', 'Se diseñan y ejecutan aplicaciones sin gestionar servidores; solo se empaqueta el código en contenedores.'],
  ['Utility computing', 'Se paga al proveedor solo por la capacidad de cómputo usada, cuando se requiere.'],
  ['Bare Metal como servicio', 'Acceso directo al hardware sin virtualizar, con el mayor rendimiento potencial.'],
  ['Plataforma como servicio', 'Plataforma completa (hardware, software e infraestructura) para desarrollar, ejecutar y gestionar aplicaciones.']
], [
  ['Modelo en el que el desarrollador solo empaqueta su código en contenedores y no gestiona servidores:', 0],
  ['Servicio en el que se paga únicamente por los recursos utilizados, también llamado computación bajo demanda:', 1],
  ['Servicio sin virtualización, valioso para casos de uso de HPC:', 2],
  ['Modelo que incluye infraestructura en la nube, software para crear aplicaciones y una interfaz para DevOps:', 3]
]);

// ───────────────────────── CEN-07 · Arquitectura de referencia ─────────────────────────
SET('AQ', 'actores', 'actores', 'CEN-07 · lám. 5 · Actores (NIST)', [
  ['Consumidor de la nube', 'Persona u organización que usa los servicios de un proveedor.'],
  ['Proveedor de la nube', 'Organización que pone los servicios a disposición: despliegue, orquestación, gestión, seguridad y privacidad.'],
  ['Auditor de la nube', 'Hace una evaluación independiente de los servicios, su rendimiento y su seguridad.'],
  ['Broker de la nube', 'Intermediario que gestiona el uso, rendimiento y entrega de servicios entre proveedores y consumidores.']
], [
  ['Actor NIST que usa los servicios de la nube:', 0],
  ['Actor NIST encargado de Service Deployment, Service Orchestration y Cloud Service Management:', 1],
  ['Actor NIST que realiza una evaluación independiente de los servicios de la nube:', 2],
  ['Actor NIST que actúa como intermediario entre consumidores y proveedores:', 3]
], X);

SET('AQ', 'consumidores', 'actores', 'CEN-07 · lám. 7 · Consumidor', [
  ['SaaS Consumer', 'Usa aplicaciones de negocio: ERP, CRM, Sales, Billing, Collaboration, Human Resources.'],
  ['PaaS Consumer', 'Usa Business Intelligence, Database, Development & Testing, Application Deployment, Integration.'],
  ['IaaS Consumer', 'Usa Storage, CDN, Backup & Recovery, Compute, Services Management, Platform Hosting.'],
  ['Cloud Carrier', 'Da la conectividad y el transporte de los servicios; no es un tipo de consumidor.']
], [
  ['Tipo de consumidor que usa Sales, Human Resources y Content Management:', 0],
  ['Tipo de consumidor que usa Application Deployment e Integration:', 1],
  ['Tipo de consumidor que usa Platform Hosting y Services Management:', 2]
], X);

SET('AQ', 'act-consumidor', 'stack', 'CEN-07 · lám. 8 · Modelos de servicios', [
  ['SaaS', 'Consumidor: usa la aplicación o servicio para operaciones de procesos de negocio.'],
  ['PaaS', 'Consumidor: desarrolla, prueba, despliega y gestiona aplicaciones alojadas en un sistema en la nube.'],
  ['IaaS', 'Consumidor: crea/instala, gestiona y monitorea servicios para operaciones de infraestructura de TI.'],
  ['BMaaS', 'Bare Metal como servicio: acceso directo al hardware; no aparece en la tabla de actividades.']
], [
  ['Modelo en el que el consumidor «usa la aplicación/servicio para operaciones de procesos de negocio»:', 0],
  ['Modelo en el que el consumidor «desarrolla, prueba, despliega y gestiona aplicaciones alojadas en la nube»:', 1],
  ['Modelo en el que el consumidor «crea, instala, gestiona y monitorea servicios para operaciones de infraestructura de TI»:', 2]
], X);

SET('AQ', 'act-proveedor', 'stack', 'CEN-07 · lám. 8 · Modelos de servicios', [
  ['SaaS', 'Proveedor: instala, gestiona, mantiene y da soporte a la aplicación de software sobre una infraestructura en la nube.'],
  ['PaaS', 'Proveedor: aprovisiona y gestiona infraestructura y middleware, y da herramientas de desarrollo, despliegue y administración.'],
  ['IaaS', 'Proveedor: aprovisiona y gestiona procesamiento físico, almacenamiento, red y el entorno de hospedaje.'],
  ['On-premises', 'Tradicional: la propia organización gestiona todo; no hay proveedor de nube.']
], [
  ['Modelo en el que el proveedor «instala, gestiona, mantiene y da soporte a la aplicación de software»:', 0],
  ['Modelo en el que el proveedor da infraestructura, middleware y herramientas de desarrollo y despliegue:', 1],
  ['Modelo en el que el proveedor aprovisiona procesamiento físico, almacenamiento, red y entorno de hospedaje:', 2]
], X);

SET('AQ', 'seis-capas', 'capas', 'CEN-07 · lám. 9 · Seis capas', [
  ['Physical Layer', 'La capa más baja del backend: el hardware físico.'],
  ['Virtualization Layer', 'Directamente sobre la capa física y debajo de los servicios en la nube.'],
  ['Layer of cloud services', 'Contiene Software, Platform e Infrastructure as a Service.'],
  ['Scheduling, provisioning, metering, pricing', 'La capa más alta del backend: planificación, aprovisionamiento, medición y precios.']
], [
  ['Capa más baja del backend en el modelo de seis capas:', 0],
  ['Capa del modelo de seis capas ubicada directamente sobre la capa física:', 1],
  ['Capa del modelo de seis capas que contiene SaaS, PaaS e IaaS:', 2],
  ['Capa del backend encargada de la medición y los precios de los servicios:', 3]
], X);

// ───────────────────────── CEN-08 · Virtualización ─────────────────────────
SET('VI', 'instr', 'instr', 'CEN-08 · lám. 10, 15-16 · Instrucciones e hipervisores', [
  ['Instrucciones sensibles', 'Solo se pueden ejecutar en modo kernel, como las de E/S.'],
  ['Instrucciones privilegiadas', 'Producen una trampa (interrupción) si se ejecutan en modo usuario.'],
  ['Traducción binaria', 'Técnica del tipo 2: sustituye instrucciones sensibles por llamadas a procedimientos que las emulan.'],
  ['Llamadas al hipervisor', 'Lo que hace un SO paravirtualizado en lugar de ejecutar instrucciones sensibles.']
], [
  ['Instrucciones que, como las operaciones de E/S, solo pueden ejecutarse en modo kernel:', 0],
  ['Instrucciones que causan una interrupción si se intentan ejecutar en modo usuario:', 1],
  ['Lo que usa el hipervisor de tipo 2 para funcionar incluso en hardware no virtualizable:', 2],
  ['Lo que ejecuta un sistema operativo invitado modificado en vez de instrucciones sensibles:', 3]
]);

SET('VI', 'hiper-tipos', 'hiper', 'CEN-08 · lám. 8-16 · CEN-09 · lám. 4', [
  ['Hipervisor de tipo 1', 'Monitor de Máquina Virtual: corre en modo kernel sobre hardware virtualizable (IBM/370).'],
  ['Hipervisor de tipo 2', 'Máquina Virtual: corre sobre un SO anfitrión y usa traducción binaria.'],
  ['Paravirtualización', 'El SO invitado se modifica para llamar al hipervisor, que se vuelve un microkernel.'],
  ['Contenedores', 'Un solo SO compartido por anfitrión y huésped; virtualización a nivel de SO.']
], [
  ['Llamado Monitor de Máquina Virtual, trabaja sobre hardware virtualizable tipo IBM/370:', 0],
  ['Se ejecuta sobre un sistema operativo anfitrión y puede funcionar en hardware que no se puede virtualizar:', 1],
  ['Convierte al hipervisor en un microkernel al modificar el sistema operativo invitado:', 2],
  ['Estrategia en la que solo se ejecuta un sistema operativo, el mismo para anfitrión y huésped:', 3]
]);

SET('VI', 'modos-t1', 'hiper', 'CEN-08 · lám. 12-13 · Tipo 1', [
  ['Modo kernel', 'Ahí trabaja el hipervisor de tipo 1.'],
  ['Modo kernel virtual', 'Donde el SO invitado cree estar; en realidad está en modo usuario.'],
  ['Modo usuario virtual', 'Donde corren los procesos de usuario dentro de la máquina virtual (y sí están en modo usuario).'],
  ['Modo usuario', 'La máquina virtual completa se ejecuta como un proceso de usuario en este modo.']
], [
  ['En el hipervisor de tipo 1, el hipervisor trabaja en:', 0],
  ['En el hipervisor de tipo 1, el SO invitado cree estar en modo kernel; a ese modo se le llama:', 1],
  ['En el diagrama del tipo 1, modo en el que corren los procesos de usuario de la máquina virtual:', 2],
  ['En el hipervisor de tipo 1, la máquina virtual completa se ejecuta como un proceso en:', 3]
]);

SET('VI', 'virt-verdadera', 'hiper', 'CEN-08 · lám. 13, 17-18 · Paravirtualización', [
  ['Virtualización verdadera', 'El SO invitado no se modifica (Windows sin modificar); se atrapa por instrucciones sensibles.'],
  ['Paravirtualización', 'El SO invitado se modifica (Linux modificado); se atrapa por llamadas al hipervisor.'],
  ['VMI', 'Capa genérica de bajo nivel para soportar el hardware real y múltiples hipervisores (VMI Linux).'],
  ['VT', 'Tecnología de Virtualización de la CPU: la instrucción sensible del invitado produce una interrupción en el kernel.']
], [
  ['En el diagrama, Windows sin modificar sobre un hipervisor tipo 1, atrapado por instrucciones sensibles:', 0],
  ['En el diagrama, Linux modificado sobre un microkernel, atrapado por llamadas al hipervisor:', 1],
  ['Permite que una misma versión de Linux corra sobre el hardware, sobre VMware o sobre Xen:', 2],
  ['Soporte de la CPU que hace que el hipervisor pueda inspeccionar cada instrucción sensible del invitado:', 3]
]);

// ───────────────────────── CEN-09 · Contenedores ─────────────────────────
SET('CT', 'cont-hist', 'hitos', 'CEN-09 · lám. 5, 11, 17', [
  ['chroot()', 'Llamada al sistema que restringe la visión del sistema de archivos de un proceso: el origen de los contenedores.'],
  ['FreeBSD Jails', 'Primer subsistema de contenedores, desde FreeBSD 4.0 (año 2000).'],
  ['Docker', 'La herramienta más popular para crear y ejecutar contenedores Linux; casi sinónimo de contenedor.'],
  ['Open Container Initiative', 'Asociación fundada en 2015 para estándares abiertos de virtualización a nivel de SO.']
], [
  ['Llamada al sistema a la que se puede rastrear el desarrollo histórico de los contenedores:', 0],
  ['Primer sistema en incorporar contenedores, en el año 2000:', 1],
  ['Tan predominante que es prácticamente sinónimo de contenedores:', 2],
  ['Busca que las plataformas de contenedores no estén vinculadas a ninguna empresa o proyecto concreto:', 3]
]);

SET('CT', 'vm-vs-cont', 'vmcont', 'CEN-08 · lám. 4, 8 · CEN-09 · lám. 7, 13', [
  ['Máquina virtual', 'Varias en una sola computadora, cada una puede ejecutar un sistema operativo distinto.'],
  ['Contenedor', 'Comparte el kernel del SO subyacente y solo ejecuta la aplicación y sus dependencias.'],
  ['Hipervisor', 'Su tarea es dar con eficiencia la ilusión de que las máquinas virtuales son hardware real.'],
  ['Orquestador', 'Administra el ciclo de vida: escalabilidad, balanceo de carga, reubicación y monitoreo de contenedores.']
], [
  ['Cada una puede llegar a ejecutar un sistema operativo distinto en la misma computadora:', 0],
  ['Más pequeño y más rápido de desplegar porque comparte el kernel del sistema operativo:', 1],
  ['Debe hacer que las máquinas virtuales actúen justo igual que el hardware real:', 2],
  ['Garantiza disponibilidad y rendimiento mediante la reubicación de los contenedores:', 3]
]);

// ───────────────────────── CEN-10 · Modelos de servicio ─────────────────────────
SET('MS', 'servicio-nist', 'servicio', 'CEN-10 · lám. 7, 9, 14 · CEN-06 · lám. 46', [
  ['SaaS', 'Aplicaciones del proveedor accesibles por navegador; el usuario no controla ni la infraestructura ni la aplicación.'],
  ['PaaS', 'Despliegue de aplicaciones propias con lenguajes y herramientas que soporta el proveedor.'],
  ['IaaS', 'Procesamiento, almacenamiento y comunicaciones; el consumidor controla SO, almacenamiento y aplicaciones.'],
  ['FaaS', 'Función como servicio: Cloud Functions que se ejecutan por eventos (serverless).']
], [
  ['Modelo cuyo ejemplo es el correo web como Gmail o Yahoo:', 0],
  ['Modelo en el que se despliegan aplicaciones propias creadas con lenguajes y herramientas soportadas por el proveedor:', 1],
  ['Modelo en el que el consumidor puede desplegar y ejecutar incluso sistemas operativos:', 2],
  ['Modelo de las Cloud Functions, dentro de la computación sin servidor:', 3]
]);

SET('MS', 'servicio-control', 'stack', 'CEN-07 · lám. 10 · CEN-10 · lám. 12', [
  ['Tradicional on-premises', 'El cliente gestiona todo: aplicaciones, datos, runtime, middleware, SO, virtualización, servidores, almacenamiento y red.'],
  ['Infraestructura como servicio', 'El cliente gestiona aplicaciones, datos, runtime, middleware y SO; el proveedor, de la virtualización hacia abajo.'],
  ['Plataforma como servicio', 'El cliente solo gestiona aplicaciones y datos.'],
  ['Software como servicio', 'El proveedor gestiona todo el stack.']
], [
  ['Esquema en el que el cliente gestiona las nueve capas, de la red a las aplicaciones:', 0],
  ['Esquema en el que el cliente gestiona desde el sistema operativo hacia arriba:', 1],
  ['Esquema en el que el cliente conserva solo la gestión de aplicaciones y datos:', 2],
  ['Esquema en el que el proveedor gestiona incluso las aplicaciones y los datos:', 3]
]);

SET('MS', 'siglas', 'baremetal', 'CEN-10 · lám. 13, 19-20 · CEN-11 · lám. 35', [
  ['BMaaS', 'Bare Metal como servicio: acceso directo al hardware sin virtualizar.'],
  ['VPC', 'Nube privada virtual: red privada creada dentro de una nube pública.'],
  ['AIPaaS', 'PaaS para inteligencia artificial: modelos preentrenados y APIs de IA.'],
  ['SecaaS', 'Seguridad como servicio: categorías definidas por la Cloud Security Alliance.']
], [
  ['Sigla del servicio que da a los usuarios control casi total de sus especificaciones de hardware:', 0],
  ['Sigla de lo que permite crear subredes y VPN de sitio a sitio dentro de una nube pública:', 1],
  ['Sigla del servicio que incluye APIs de reconocimiento del habla o voz a texto:', 2],
  ['Sigla del servicio cuyas categorías incluyen cifrado y gestión de intrusiones:', 3]
]);

SET('MS', 'iaas-comp', 'servicio', 'CEN-10 · lám. 15-18 · IaaS', [
  ['Centros de datos físicos', 'Grandes centros, normalmente en todo el mundo, con las máquinas físicas; el usuario no interactúa con ellos.'],
  ['Red', 'Red definida por software: enrutadores y conmutadores disponibles mediante programación.'],
  ['Almacenamiento', 'Tres tipos principales: en bloque, de archivos y de objetos.'],
  ['Computación', 'Recursos virtualizados: los proveedores gestionan hipervisores y el usuario aprovisiona instancias.']
], [
  ['Componente de IaaS con las máquinas físicas que alimentan las capas de abstracción:', 0],
  ['Componente de IaaS en el que el hardware de red tradicional está disponible mediante programación:', 1],
  ['Componente de IaaS que puede ser en bloque, de archivos o de objetos:', 2],
  ['Componente de IaaS en el que se aprovisionan «instancias» virtuales con cómputo y memoria:', 3]
]);

// ───────────────────────── CEN-11 · Modelos de despliegue ─────────────────────────
SET('MD', 'despliegue-4', 'despliegue', 'CEN-11 · lám. 6-9 · Modelos de despliegue', [
  ['Nube privada', 'Exclusiva de una única organización, con múltiples consumidores; no se ofrece al público.'],
  ['Nube pública', 'Operada por un proveedor que ofrece servicios al público en general.'],
  ['Nube híbrida', 'Combinación de dos o más nubes que siguen siendo entidades únicas pero permiten portar datos o aplicaciones.'],
  ['Nube comunitaria', 'Sirve a un propósito común de una comunidad con misión, políticas y seguridad compartidas.']
], [
  ['Modelo de despliegue íntegramente gestionado por una organización y no ofrecido al público:', 0],
  ['Modelo de despliegue que ofrece servicios al público en general:', 1],
  ['Modelo de despliegue que permite portar datos o aplicaciones entre nubes individuales:', 2],
  ['Modelo de despliegue organizado para una comunidad con necesidades comunes de cumplimiento regulatorio:', 3]
]);

SET('MD', 'despliegue-b', 'despliegue', 'CEN-11 · lám. 7, 9, 16 · foto de clase', [
  ['Nube híbrida', 'Muchas organizaciones la eligen: lo menos crítico en la pública y lo más crítico en la privada.'],
  ['Multinube', 'Servicios de más de un proveedor; evita el vendor lock-in.'],
  ['Nube comunitaria', 'La pueden administrar las organizaciones constituyentes o terceras partes; solo la recoge el NIST.'],
  ['Nube pública', 'Existe en la propia infraestructura (on premise) del proveedor.']
], [
  ['Modelo que elige una empresa para dejar sus servicios críticos en la privada y el resto en la pública:', 0],
  ['Modelo que permite optimizar rendimiento y controlar costos evitando la dependencia de un proveedor:', 1],
  ['Modelo que la mayoría de organizaciones no incluye, porque solo dividen en pública, privada e híbrida:', 2],
  ['Modelo que puede ser propiedad de una organización académica, empresa o gobierno y vive en la infraestructura del proveedor:', 3]
]);

SET('MD', 'nistterm', 'nistterm', 'CEN-11 · lám. 5 · Términos NIST', [
  ['Consumidor de la nube', 'Persona u organización que es cliente de una nube.'],
  ['Cliente', 'Máquina o aplicación de software que accede a una nube por una conexión de red.'],
  ['Proveedor de la nube', 'Organización que proporciona servicios de la nube.'],
  ['Auditor de la nube', 'Actor de la arquitectura NIST que evalúa servicios; no es uno de los tres términos de CEN-11.']
], [
  ['Término NIST para una persona u organización que usa una nube:', 0],
  ['Término NIST para una máquina o aplicación de software que accede a una nube:', 1],
  ['Término NIST para la organización que proporciona servicios de la nube:', 2]
]);

// ───────────────────────── CEN-11 · Adopción y seguridad ─────────────────────────
SET('AD', 'consideraciones', 'adoptar', 'CEN-11 · lám. 14 · Adaptar la nube', [
  ['Consideraciones económicas', 'Las oportunidades económicas y los riesgos de usar estos servicios.'],
  ['Características operacionales', 'Las características técnicas de los servicios: rendimiento (performance) y fiabilidad.'],
  ['Acuerdo de nivel de servicios', 'Los términos normales de servicio (SLA).'],
  ['Seguridad', 'Las oportunidades y riesgos de seguridad.']
], [
  ['Al adoptar la nube: las oportunidades económicas y los riesgos de usar los servicios:', 0],
  ['Al adoptar la nube: el rendimiento (performance) y la fiabilidad de los servicios:', 1],
  ['Al adoptar la nube: los términos normales de servicio:', 2],
  ['Al adoptar la nube: la protección de los datos, la privacidad y el cumplimiento (compliance):', 3]
]);

SET('AD', 'cia', 'cia', 'CEN-11 · lám. 23, 34 · Tríada CIA', [
  ['Confidencialidad', 'Solo quien está autorizado puede acceder a la información.'],
  ['Integridad', 'La información no se altera sin autorización y se mantiene exacta.'],
  ['Disponibilidad', 'La información y los servicios están accesibles cuando se necesitan.'],
  ['Responsabilidad', 'Accountability: principio complementario, no parte de la tríada.']
], [
  ['Principio de la tríada CIA: solo quien está autorizado accede a la información:', 0],
  ['Principio de la tríada CIA: la información no se modifica sin autorización:', 1],
  ['Principio de la tríada CIA: los servicios están accesibles cuando se necesitan:', 2]
]);

SET('AD', 'secaas-cat', 'secaas', 'CEN-11 · lám. 36 · SecaaS', [
  ['Gestión de identidades y acceso', 'Categoría SecaaS que controla quién es cada usuario y a qué puede acceder (IAM).'],
  ['Prevención de pérdida de datos', 'Categoría SecaaS que evita que datos sensibles salgan de la organización (DLP).'],
  ['Seguridad de la información y gestión de eventos', 'Categoría SecaaS que recolecta y correlaciona eventos de seguridad (SIEM).'],
  ['Continuidad del negocio y recuperación de desastres', 'Categoría SecaaS que mantiene la operación y recupera tras un desastre (BC/DR).']
], [
  ['Categoría SecaaS de la CSA conocida por la sigla IAM:', 0],
  ['Categoría SecaaS de la CSA conocida por la sigla DLP:', 1],
  ['Categoría SecaaS de la CSA conocida por la sigla SIEM:', 2],
  ['Categoría SecaaS de la CSA conocida por la sigla BC/DR:', 3]
]);

SET('AD', 'movil', 'movil', 'CEN-11 · lám. 24-26 · Nube móvil', [
  ['Nube móvil', 'Los datos están en la nube y el dispositivo móvil actúa como terminal de presentación.'],
  ['Sincronización', 'El asunto clave actual: usar mensajes, llamadas y contenidos desde múltiples dispositivos.'],
  ['iCloud', 'Plataforma de Apple que revolucionó la sincronización, llevando el consumo al gran público.'],
  ['HSDPA, HSUPA o HSPA+', 'Protocolos de teléfonos 3G, el mínimo de conexión que pide la nube móvil.']
], [
  ['Modelo en el que el smartphone o la tableta actúan como pantalla de datos guardados en la nube:', 0],
  ['Según la lámina, el asunto clave actual de la nube móvil:', 1],
  ['Servicio que sube un dato desde un dispositivo y lo pone al alcance de toda la familia de dispositivos Apple:', 2],
  ['Protocolos de tercera generación que menciona la lámina como requisito mínimo de conexión:', 3]
]);
