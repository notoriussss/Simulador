/* Tablas de contraste. Cada una tiene un g que coincide con el grupo de las preguntas del banco que se refieren a ella. */
Sim.contrasts.push(
  {
    g: 'hitos',
    title: 'Fechas y nombres',
    lead: 'Preguntas fáciles de poner y de confundir. Fijate en el par año ↔ quién.',
    cols: ['Año', 'Quién', 'Qué'],
    rows: [
      ['1961', 'John McCarthy (MIT)', 'Enuncia «time sharing», tiempo compartido'],
      ['1999', 'Salesforce.com', 'Apps empresariales por web; acuña «software bajo demanda» → SaaS'],
      ['2000', 'FreeBSD 4.0', 'Jails, primer sistema con contenedores (antecedente: chroot())'],
      ['2002', 'Amazon', 'Amazon Web Service'],
      ['2006', 'Amazon / Google', 'EC2 (alquiler de equipos) / Google Docs (ofimática en la web)'],
      ['2007', 'IBM, Google y universidades de EE. UU.', 'Servicios alojados en sus «nubes»'],
      ['2008', 'Business Week (4 ago) y The Economist (25 oct)', 'Suplementos que llevan la nube al gran público'],
      ['2010', 'The Economist y Forbes', 'Vuelven a insistir en el impacto de la nube'],
      ['2011', 'Cloud Security Alliance', 'Consejo de Seguridad como Servicio (SecaaS)'],
      ['2015', 'Open Container Initiative', 'Estándares abiertos de contenedores']
    ]
  },
  {
    g: 'defs',
    title: 'Definiciones de base',
    lead: 'Quién dijo qué. El NIST es la más referenciada; Berkeley es la complementaria.',
    cols: ['Término', 'Idea clave', 'Trampa'],
    rows: [
      ['Utility computing', 'Computación bajo demanda: pagar solo por lo que se usa', 'No es time sharing'],
      ['Time sharing', 'Tiempo compartido, McCarthy 1961', 'Es el ORIGEN histórico, no el modelo de pago'],
      ['Definición NIST', 'Acceso ubicuo, adaptado y bajo demanda a recursos configurables compartidos', 'La más referenciada'],
      ['Definición Berkeley', 'Apps como servicio (SaaS) + hardware/software del centro de datos (la nube)', 'Complementaria'],
      ['Multitenancy', 'Empresas diferentes comparten los mismos recursos', 'No confundir con multinube (varios proveedores)'],
      ['Tecnologías que forman la nube', 'Virtualización, almacenamiento en centros de datos, banda ancha fija y móvil', 'La nube no incorpora tecnologías nuevas']
    ]
  },
  {
    g: 'nist5',
    title: 'Características de la nube',
    lead: 'El NIST define 5 esenciales (+ 3 modelos de servicio + 4 de despliegue). El diagrama de clase agrega 8 comunes. Que no te mezclen las listas.',
    cols: ['Lista', 'Elementos', 'Palabra que la delata'],
    rows: [
      ['Esencial: Autoservicio bajo demanda', 'Capacidades automáticas, sin interacción humana con el proveedor', '«sin interacción humana»'],
      ['Esencial: Acceso amplio a la red', 'Mecanismos estándar desde muchos dispositivos (acceso ubicuo)', '«ubicuo», «dispositivos»'],
      ['Esencial: Compartición de recursos', 'Pool para múltiples consumidores; independencia de la posición', '«país, estado o centro de datos»'],
      ['Esencial: Rápida elasticidad', 'Recursos que parecen ilimitados', '«ilimitados»'],
      ['Esencial: Servicio medido', 'Medir el consumo para pagar por uso efectivo', '«pago por uso efectivo»'],
      ['Comunes (8, diagrama)', 'Escalamiento masivo, homogeneidad, virtualización, software de bajo costo, computación resistente, distribución geográfica, orientado al servicio, seguridad avanzada', 'Vienen del diagrama, no del NIST']
    ]
  },
  {
    g: 'complem',
    title: 'Características complementarias',
    lead: 'Además de las del NIST, la lámina agrega 7 que añaden ventajas. Cada una tiene un ejemplo o razón que la delata.',
    cols: ['Característica', 'Qué dice', 'Pista'],
    rows: [
      ['Costes más bajos', 'Reducción de costes frente a productos similares', '«reducciones de costes»'],
      ['Facilidad de utilización', 'Sin licencias de hardware ni software; pequeños cursos', '«licencias»'],
      ['Calidad de servicio (QoS)', 'Se obtiene mediante contrato con el proveedor', '«contrato»'],
      ['Fiabilidad', 'Tan alta o más que proveedores clásicos', '«Oracle, SAP, IBM»'],
      ['Administración externalizada de TI', 'Gestionar infraestructura y negocio en paralelo', '«outsourcing»'],
      ['Simplificación de la actualización y mantenimiento', 'Parches y upgrades fáciles', '«centralizado»'],
      ['Facilidad para superar barreras', 'Rompe barreras físicas y virtuales', '«start-ups», «emprendedores»']
    ]
  },
  {
    g: 'serverless',
    title: 'Serverless frente a sus vecinos',
    lead: 'Serverless no es «sin servidores»: los servidores existen pero los gestiona el proveedor.',
    cols: ['Término', 'Qué es', 'Cómo se paga / qué gestiona el cliente'],
    rows: [
      ['Computación sin servidor', 'Diseñar y ejecutar apps sin gestionar servidores', 'Por eventos; inactiva = sin cargo. El cliente solo empaqueta el código en contenedores'],
      ['FaaS', 'Cloud Functions', 'Parte serverless del diagrama'],
      ['BaaS', 'Object Storage, Database', 'Parte serverless del diagrama'],
      ['IaaS («serverful»)', 'Virtual Machines, Virtual Private Cloud', 'El cliente gestiona SO y lo de arriba'],
      ['Utility computing', 'Pagar solo la capacidad usada', 'Paradigma de pago, no un modelo de ejecución']
    ]
  },
  {
    g: 'actores',
    title: 'Actores y consumidores (CEN-07)',
    lead: 'Sale de diagramas. Del proveedor importan sus 5 actividades; del consumidor, qué usa cada tipo.',
    cols: ['Actor / tipo', 'Qué hace o usa', 'Ejemplos del diagrama'],
    rows: [
      ['Consumidor', 'Usa los servicios de la nube', 'SaaS, PaaS o IaaS consumer'],
      ['Proveedor', 'Pone los servicios a disposición', 'Service Deployment, Service Orchestration, Cloud Service Management, Security, Privacy'],
      ['Auditor', 'Evaluación independiente', '—'],
      ['Broker', 'Intermediario entre consumidores y proveedores', '—'],
      ['Carrier', 'Conectividad y transporte', '—'],
      ['SaaS Consumer', 'Aplicaciones de negocio', 'ERP, CRM, Billing, Sales, Collaboration, HR, Email & Office'],
      ['PaaS Consumer', 'Desarrollo y datos', 'Business Intelligence, Database, Development & Testing, Application Deployment, Integration'],
      ['IaaS Consumer', 'Infraestructura', 'Storage, CDN, Backup & Recovery, Compute, Platform Hosting']
    ]
  },
  {
    g: 'capas',
    title: 'Modelo de seis capas de servicios',
    lead: 'De arriba hacia abajo. Management y Security son verticales: atraviesan todo el backend.',
    cols: ['Capa', 'Contenido'],
    rows: [
      ['Front end', 'Usuarios con PCs, laptops, smartphones, IoT o dispositivos conectados'],
      ['Acceso a red', 'Internet y APIs públicas (pública) · LAN privada y APIs (privada) · ambas (híbrida)'],
      ['Scheduling, provisioning, metering, pricing', 'Primera capa del backend'],
      ['Layer of cloud services', 'SaaS, PaaS, IaaS'],
      ['Virtualization Layer', 'Sobre la física'],
      ['Physical Layer', 'Hardware, al fondo']
    ]
  },
  {
    g: 'stack',
    title: 'Quién gestiona qué',
    lead: 'Nueve capas: Applications, Data, Runtime, Middleware, O/S, Virtualization, Servers, Storage, Networking. Contá cuántas quedan del lado del cliente.',
    cols: ['Modelo', 'Gestiona el cliente', 'Gestiona el proveedor', 'Actividad del consumidor'],
    rows: [
      ['On-premises', 'Las 9 capas', 'Nada', '—'],
      ['IaaS', 'Applications, Data, Runtime, Middleware, O/S', 'Virtualization, Servers, Storage, Networking', 'Crea, instala, gestiona y monitorea servicios de infraestructura de TI'],
      ['PaaS', 'Applications, Data', 'Runtime hacia abajo', 'Desarrolla, prueba, despliega y gestiona aplicaciones'],
      ['SaaS', 'Nada (solo configuraciones de usuario)', 'Las 9 capas', 'Usa la aplicación para procesos de negocio']
    ]
  },
  {
    g: 'servicio',
    title: 'Modelos de servicio',
    lead: 'IaaS, PaaS y SaaS no son mutuamente excluyentes. Fijate en qué controla el usuario.',
    cols: ['Modelo', 'Qué recibe el usuario', 'Qué controla', 'Ejemplo / dato'],
    rows: [
      ['SaaS', 'Aplicaciones del proveedor por navegador', 'Solo configuraciones de usuario', 'Gmail, Yahoo; «servicios de aplicaciones en la nube»'],
      ['PaaS', 'Plataforma para desplegar apps propias', 'Sus aplicaciones y datos', 'Tres partes: infraestructura, software de desarrollo, interfaz DevOps; AIPaaS'],
      ['IaaS', 'Procesamiento, almacenamiento, comunicaciones', 'SO, almacenamiento, apps; red limitada (host firewalls)', 'Centros de datos, red, almacenamiento (bloque/archivos/objetos), computación'],
      ['FaaS', 'Funciones que corren por eventos', 'Solo el código', 'Cloud Functions (serverless)'],
      ['DaaS', 'Datos como servicio y Escritorio como servicio', '—', 'Misma sigla para dos modelos']
    ]
  },
  {
    g: 'baremetal',
    title: 'Siglas de CEN-10 y CEN-11',
    lead: 'Siglas parecidas que el profesor puede poner juntas.',
    cols: ['Sigla', 'Significa', 'Idea clave'],
    rows: [
      ['BMaaS', 'Bare Metal como servicio', 'Hardware sin virtualizar; máximo rendimiento (HPC); pierde el escalado rápido'],
      ['VPC', 'Nube privada virtual', 'Red privada DENTRO de una nube pública: subredes, VPN sitio a sitio'],
      ['AIPaaS', 'PaaS para IA', 'Modelos preentrenados y APIs (habla, voz a texto)'],
      ['SecaaS', 'Seguridad como servicio', 'Categorías de la CSA (2011)'],
      ['SLA', 'Acuerdo de nivel de servicio', 'Condición indispensable antes de usar la nube']
    ]
  },
  {
    g: 'instr',
    title: 'Instrucciones sensibles y privilegiadas',
    lead: 'Condición para virtualizar: sensibles ⊆ privilegiadas.',
    cols: ['Tipo', 'Definición', 'Pista'],
    rows: [
      ['Sensibles', 'Solo se pueden ejecutar en modo kernel (E/S)', '«solo en modo kernel»'],
      ['Privilegiadas', 'Producen una trampa si se ejecutan en modo usuario', '«trampa», «interrupción»'],
      ['Traducción binaria', 'Tipo 2: sustituye sensibles por llamadas a procedimientos', 'Funciona en hardware no virtualizable'],
      ['Llamadas al hipervisor', 'Paravirtualización: el SO invitado las usa en vez de sensibles', 'SO modificado']
    ]
  },
  {
    g: 'hiper',
    title: 'Hipervisores y paravirtualización',
    lead: 'Ojo con los nombres invertidos: tipo 1 = Monitor de Máquina Virtual; tipo 2 = Máquina Virtual.',
    cols: ['Método', 'Otro nombre / sobre qué corre', 'Cómo trata las instrucciones sensibles'],
    rows: [
      ['Hipervisor tipo 1', 'Monitor de Máquina Virtual; sobre hardware virtualizable (IBM/370), en modo kernel', 'Las atrapa (con VT) y las inspecciona'],
      ['Hipervisor tipo 2', 'Máquina Virtual; sobre un SO anfitrión', 'Traducción binaria'],
      ['Paravirtualización', 'El hipervisor se vuelve microkernel', 'El SO invitado modificado hace llamadas al hipervisor'],
      ['VMI', 'Capa genérica de bajo nivel', 'VMI Linux sobre HW, VMware o Xen'],
      ['Modo kernel virtual', 'Donde cree estar el SO invitado del tipo 1', 'En realidad está en modo usuario']
    ]
  },
  {
    g: 'vmcont',
    title: 'Máquina virtual frente a contenedor',
    lead: 'La diferencia de fondo: la VM trae su propio SO; el contenedor comparte el kernel.',
    cols: ['Aspecto', 'Máquina virtual', 'Contenedor'],
    rows: [
      ['Sistemas operativos', 'Cada VM puede tener uno distinto', 'Uno solo, el mismo para anfitrión y huésped'],
      ['Otro nombre', '—', 'Virtualización a nivel sistema operativo'],
      ['Aislamiento', 'Hipervisor', 'Grupos o contextos de seguridad del núcleo'],
      ['Qué ejecuta', 'SO completo + apps', 'Solo la app y sus dependencias (librerías, variables de entorno)'],
      ['Tamaño y despliegue', 'Más pesada', 'Más pequeño y más rápido de desplegar'],
      ['Origen', 'Solución de 40 años (IBM/370)', 'chroot() → FreeBSD Jails (2000)']
    ]
  },
  {
    g: 'orq',
    title: 'Herramientas de contenedores',
    lead: 'Docker CREA y ejecuta contenedores; Kubernetes los ORQUESTA.',
    cols: ['Herramienta', 'Rol'],
    rows: [
      ['Docker', 'Crear y ejecutar contenedores Linux; casi sinónimo de contenedor'],
      ['Kubernetes', 'Orquestación más popular; servicios administrados en AWS, GCP, IBM Cloud y Azure; base de PaaS'],
      ['Docker Swarm', 'Otra herramienta de orquestación'],
      ['Apache Mesos', 'Otra herramienta de orquestación'],
      ['OCI', 'Estándares abiertos (2015), no es herramienta']
    ]
  },
  {
    g: 'despliegue',
    title: 'Modelos de despliegue',
    lead: 'El NIST define 4; la mayoría solo acepta 3 (sin la comunitaria). Multinube no es híbrida.',
    cols: ['Modelo', 'Para quién', 'Pista'],
    rows: [
      ['Privada', 'Una única organización con múltiples consumidores', '«exclusiva», «no se ofrece al público»; inconveniente: más costes'],
      ['Pública', 'El público en general', '«on premise del proveedor»; académica, empresa o gobierno'],
      ['Híbrida', 'Combinación de 2+ nubes que siguen siendo entidades únicas', '«portar datos o aplicaciones»; lo crítico en la privada'],
      ['Comunitaria', 'Comunidad con objetivos comunes', '«misión, políticas, seguridad, compliance»; solo la recoge el NIST'],
      ['Multinube', 'Servicios de más de un proveedor', '«vendor lock-in»; Salesforce + Workday; Kubernetes']
    ]
  },
  {
    g: 'nistterm',
    title: 'Términos recomendados por el NIST',
    lead: 'Consumidor es una persona u organización; cliente es una máquina o aplicación.',
    cols: ['Término', 'Qué es'],
    rows: [
      ['Consumidor de la nube', 'Persona u organización cliente de una nube'],
      ['Cliente', 'Máquina o aplicación de software que accede por red'],
      ['Proveedor de la nube', 'Organización que proporciona servicios de la nube']
    ]
  },
  {
    g: 'adoptar',
    title: 'Adoptar la nube',
    lead: 'Las cuatro cosas a considerar y lo que la lámina dice de cada una.',
    cols: ['Consideración', 'Qué incluye'],
    rows: [
      ['Económicas', 'Pública = alquiler externalizado; privada = más costes; híbrida = lo crítico en la privada'],
      ['Características operacionales', 'Rendimiento (performance) y fiabilidad'],
      ['Organizacionales', 'Gran dependencia de la conectividad, dispositivos y ancho de banda'],
      ['SLA', 'Define la relación legal; firmarlo es condición indispensable'],
      ['Seguridad', 'Tríada CIA, privacidad y cumplimiento (compliance)']
    ]
  },
  {
    g: 'cia',
    title: 'Seguridad en la nube',
    lead: 'La tríada son tres; todo lo demás es complementario. El responsable de los datos es el cliente.',
    cols: ['Grupo', 'Elementos'],
    rows: [
      ['Tríada CIA', 'Confidencialidad, integridad, disponibilidad'],
      ['Complementarios', 'Autenticación, autorización, auditoría, responsabilidad (accountability), privacidad'],
      ['Preguntas clave', '¿Dónde estarán los datos? ¿Con qué protección? ¿Quién es responsable? (el cliente)'],
      ['IBM', '«Secure by design»: seguridad personalizada que parte del cliente'],
      ['Activos', 'Los datos y las aplicaciones']
    ]
  },
  {
    g: 'secaas',
    title: 'Categorías SecaaS (CSA, 2011)',
    lead: 'Diez categorías. Si te dan una sigla, buscá la categoría.',
    cols: ['Categoría', 'Sigla habitual'],
    rows: [
      ['Gestión de identidades y acceso', 'IAM'],
      ['Prevención de pérdida de datos', 'DLP'],
      ['Seguridad en la Web', '—'],
      ['Seguridad para el correo electrónico', '—'],
      ['Evaluación de la seguridad', '—'],
      ['Gestión de intrusiones', '—'],
      ['Seguridad de la información y gestión de eventos', 'SIEM'],
      ['Cifrado', '—'],
      ['Continuidad del negocio y recuperación de desastres', 'BC/DR'],
      ['Red de seguridad', '—']
    ]
  },
  {
    g: 'movil',
    title: 'Nube móvil',
    lead: 'Tres ideas: el móvil es pantalla, hace falta buena conexión y lo clave es sincronizar.',
    cols: ['Idea', 'Detalle'],
    rows: [
      ['Definición', 'Datos en la nube; el móvil actúa como terminal de presentación'],
      ['Conexión', 'Al menos 3G (HSDPA, HSUPA, HSPA+) o 4G'],
      ['Asunto clave', 'Sincronización entre dispositivos'],
      ['Ejemplo', 'iCloud de Apple']
    ]
  }
);
