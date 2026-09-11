export type Lang = "es" | "en" | "fr" | "kr";

export const langNames: Record<Lang, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
  kr: "한국어",
};

export const langFlags: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
  kr: "KR",
};

export type TranslationSet = {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    letsTalk: string;
  };
  hero: {
    availability: string;
    greeting: string;
    roles: string[];
    bio: string;
    viewWork: string;
    downloadCV: string;
    location: string;
    codeComment: string;
    codeFocus: string;
    stats: { value: string; label: string }[];
  };
  about: {
    label: string;
    headingPre: string;
    headingHighlight: string;
    paragraphs: string[];
    erpModulesTitle: string;
    erpModules: string[];
    quote: string;
    quoteRole: string;
    techTitle: string;
    quickFactsTitle: string;
    facts: { label: string; value: string }[];
  };
  skills: {
    label: string;
    headingPre: string;
    headingHighlight: string;
    stackTitle: string;
    categories: string[];
    expertise: { title: string; desc: string }[];
  };
  projects: {
    label: string;
    headingPre: string;
    headingHighlight: string;
    all: string;
    featured: string;
    githubLink: string;
    items: {
      title: string;
      category: string;
      image: string;
      description: string;
      metrics: string;
    }[];
  };
  experience: {
    label: string;
    headingPre: string;
    headingHighlight: string;
    items: {
      role: string;
      location: string;
      description: string;
      achievements: string[];
    }[];
  };
  contact: {
    label: string;
    headingPre: string;
    headingHighlight: string;
    description: string;
    email: string;
    location: string;
    responseTime: string;
    responseValue: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  footer: {
    navigation: string;
    connect: string;
    crafted: string;
    backToTop: string;
  };
  chatbot: {
    greeting: string;
    limitReached: string;
    limitDescription: string;
    contactEmail: string;
    questionsAvailable: string;
    questionsUsed: string;
    inputLimit: string;
    inputThinking: string;
    inputPlaceholder: string;
    timeout: string;
    error: string;
    close: string;
    open: string;
  };
};

export const translations: Record<Lang, TranslationSet> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      availability: "Open to new opportunities",
      greeting: "Hi, I'm",
      roles: [
        "Full-Stack Developer",
        "React & .NET Engineer",
        "ERP System Builder",
        "Azure Cloud Deployer",
      ],
      bio: "Full-stack developer with 3+ years building enterprise web applications and ERP systems with React and .NET. I work across the entire stack — from responsive React interfaces and Next.js SEO optimization to REST APIs, SQL database tuning, and Azure deployments. I care about clean code, real-world usability, and shipping features that solve business problems.",
      viewWork: "View My Work",
      downloadCV: "Download CV",
      location: "Madrid, Spain · On-site / Remote",
      codeComment: "// Full-Stack Developer · React & .NET",
      codeFocus: "ERP systems",
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "8+", label: "ERP Modules Built" },
        { value: "React + .NET", label: "Tech Stack" },
        { value: "Remote", label: "Work Mode" },
      ],
    },
    about: {
      label: "About Me",
      headingPre: "Building ERP systems that",
      headingHighlight: "businesses rely on",
      paragraphs: [
        "I'm a full-stack developer with 3+ years of experience building enterprise web applications and ERP systems. My day-to-day spans the entire stack — from responsive React interfaces and Next.js performance optimization to .NET APIs, SQL database tuning, and Azure deployments.",
        "I currently develop and maintain a rental management ERP used in production, building modules for clients, contracts, payments, electronic invoicing, and bank reconciliation. I care about code that solves real business problems and interfaces that real people can use without friction. My north star is simple: make it work, make it reliable, make it usable.",
        "I work remotely from Madrid and collaborate closely with cross-functional teams to ship features end-to-end — from database schema to the final pixel. I believe the best software is built by people who understand both the technical and the business side.",
      ],
      erpModulesTitle: "ERP Modules I've Built",
      erpModules: [
        "Clients & Users",
        "Companies & Landlords",
        "Contracts & Renewals",
        "Payments",
        "Electronic Invoicing",
        "Bank Reconciliation",
      ],
      quote:
        "I have a very serious relationship with coffee, but we haven't talked about marriage yet.",
      quoteRole: "Full-Stack Developer · React & .NET",
      techTitle: "Tech I Work With",
      quickFactsTitle: "Quick Facts",
      facts: [
        { label: "Currently", value: "Full-Stack Dev @ CTF Code to Fit" },
        { label: "Focus", value: "React, .NET, ERP Systems" },
        { label: "Open to", value: "New opportunities" },
        { label: "Location", value: "Madrid, Spain · On-site / Remote" },
        { label: "Languages", value: "Spanish, French, English, Korean" },
      ],
    },
    skills: {
      label: "Skills & Expertise",
      headingPre: "What I bring to",
      headingHighlight: "the table",
      stackTitle: "Tech Stack",
      categories: ["Front-End", "Back-End & Cloud", "Testing & Tools"],
      expertise: [
        {
          title: "ERP Development",
          desc: "Building enterprise modules — clients, contracts, payments, invoicing — that businesses run on daily.",
        },
        {
          title: "Server State",
          desc: "TanStack Query for caching, synchronization, and efficient data fetching across complex ERP workflows.",
        },
        {
          title: "Performance & SEO",
          desc: "Next.js SSR/SSG optimization for speed, Core Web Vitals, and search engine positioning.",
        },
        {
          title: "Usability & a11y",
          desc: "Responsive interfaces with Tailwind, focused on usability and accessibility for real users.",
        },
        {
          title: "Full-Stack Delivery",
          desc: "React front-ends backed by .NET APIs, SQL databases, and Azure cloud deployments.",
        },
        {
          title: "Testing & Quality",
          desc: "Unit and integration tests with Jest, plus hands-on production debugging and issue resolution.",
        },
      ],
    },
    projects: {
      label: "Selected Work",
      headingPre: "Projects I'm",
      headingHighlight: "proud of",
      all: "All",
      featured: "Featured",
      githubLink: "View all projects on GitHub",
      items: [
        {
          title: "Rental Management ERP",
          category: "Enterprise ERP",
          image: "/project/1.png",
          description:
            "A full rental management ERP with modules for clients, companies, landlords, contracts, renewals, and users. Built with React and .NET, deployed on Azure.",
          metrics: "8+ modules",
        },
        {
          title: "Credit Check & Bank Reconciliation",
          category: "ERP Module",
          image: "/project/2.png",

          description:
            "Implemented credit check workflows and bank reconciliation features integrated with the rental ERP, handling payment matching and financial data processing.",
          metrics: "Financial grade",
        },
        {
          title: "Electronic Invoicing & Subscriptions",
          category: "ERP Module",
          image: "/project/3.png",

          description:
            "Built electronic invoicing and subscription management features, including automated billing cycles and integration with external invoicing systems via REST APIs.",
          metrics: "Automated billing",
        },
        {
          title: "ERP Frontend Integration",
          category: "Web Application",
          image: "/project/4.png",

          description:
            "Integrated the React frontend with existing REST APIs and legacy SOAP services, building a unified interface for multiple business workflows and projects.",
          metrics: "Multi-project",
        },
        {
          title: "Multilingual Website for a Podiatry Clinic",
          category: "Corporate Website",
          image: "/project/Rebe.png",

          description:
            "Development of a multilingual corporate website for a podiatry clinic, featuring dedicated sections for services, clinic information, location and team. Responsive design focused on clear and accessible navigation.",
          metrics: "Multilingual Web",
        },
        {
          title: "Responsive ERP Interfaces",
          category: "UI/UX",
          image: "/project/6.png",
          description:
            "Designed and built responsive, accessible interfaces with Tailwind CSS and styled-components, adapted for different projects and business needs.",
          metrics: "Multi-project",
        },
      ],
    },
    experience: {
      label: "Career",
      headingPre: "Where I've",
      headingHighlight: "made an impact",
      items: [
        {
          role: "Full-Stack Developer · React & .NET",
          location: "Madrid, Spain · On-site / Remote",
          description:
            "Full-stack development and maintenance of a rental management ERP system using React and .NET. Working remotely from Madrid, I build and maintain modules across the entire stack — from React interfaces to .NET APIs, SQL databases, and Azure deployments.",
          achievements: [
            "Developed ERP modules for clients, companies, landlords, contracts, renewals, and users",
            "Implemented credit checks, bank reconciliation, payments, electronic invoicing, and subscriptions",
            "Built responsive interfaces with Tailwind CSS focused on usability and accessibility",
            "Developed complex web apps with React and Next.js, optimizing performance and SEO",
            "Implemented backend services with .NET and ASP.NET — REST and SOAP APIs for enterprise integration",
            "Optimized SQL queries for high-load systems, improving performance and data integrity",
            "Integrated React Query for efficient server state management, caching, and data fetching",
            "Wrote and maintained unit and integration tests with Jest, improving reliability and coverage",
            "Participated in deployment and maintenance of applications on Azure",
          ],
        },
        {
          role: "React Developer",
          location: "Chile · Remote",
          description:
            "Landing page and product UI development for a bank-loan FinTech. Full-time remote role focused on conversion, onboarding, and user engagement.",
          achievements: [
            "Designed and built landing pages, optimizing UX and conversion while aligning the design with brand identity and business goals",
            "Developed the user registration flow as an intuitive process following UX and usability best practices",
            "Built responsive web interfaces with React and Tailwind CSS for a consistent experience across devices",
            "Implemented dynamic automated emails, personalizing templates with user data and triggering sends from user actions to improve retention and engagement",
          ],
        },
      ],
    },
    contact: {
      label: "Get In Touch",
      headingPre: "Let's build something",
      headingHighlight: "great together",
      description:
        "I'm currently available for select freelance and consulting work. Whether you need help with a new project, a design system audit, or a performance overhaul — I'd love to hear about it.",
      email: "Email",
      location: "Location",
      responseTime: "Response Time",
      responseValue: "Usually within 24 hours",
      formName: "Your Name",
      formNamePlaceholder: "Jane Doe",
      formEmail: "Email Address",
      formEmailPlaceholder: "jane@example.com",
      formMessage: "Message",
      formMessagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
      error: "Something went wrong. Please try again.",
    },
    footer: {
      navigation: "Navigation",
      connect: "Connect",
      crafted: "Crafted with care.",
      backToTop: "Back to top",
    },
    chatbot: {
      greeting:
        "Hi 👋 I'm MinWoo's assistant. You can ask me about his experience, projects, or technologies.",
      limitReached: "You've reached the question limit",
      limitDescription:
        "If you'd like to know more about my experience, you can contact me directly.",
      contactEmail: "Contact me by email",
      questionsAvailable: "{{count}} questions available",
      questionsUsed: "{{count}}/{{max}} questions used",
      inputLimit: "Limit reached",
      inputThinking: "MinWoo AI is thinking...",
      inputPlaceholder: "Ask about MinWoo...",
      timeout:
        "Sorry, it seems I'm taking too long to respond. I'm not available right now. If you'd like to know more about my profile, you can contact me directly.",
      error:
        "Sorry, something went wrong. You can contact me directly by email.",
      close: "Close chatbot",
      open: "Open chatbot",
    },
  },

  es: {
    nav: {
      about: "Sobre Mí",
      skills: "Habilidades",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
      letsTalk: "Hablemos",
    },
    hero: {
      availability: "Abierto a nuevas oportunidades",
      greeting: "Hola, soy",
      roles: [
        "Desarrollador Full-Stack",
        "Ingeniero React & .NET",
        "Constructor de ERP",
        "Despliegue en Azure",
      ],
      bio: "Desarrollador full-stack con más de 3 años construyendo aplicaciones web empresariales y sistemas ERP con React y .NET. Trabajo en todo el stack — desde interfaces responsivas en React y optimización SEO con Next.js hasta APIs REST, ajuste de bases de datos SQL y despliegues en Azure. Me importa el código limpio, la usabilidad real y entregar funcionalidades que resuelven problemas de negocio.",
      viewWork: "Ver Mi Trabajo",
      downloadCV: "Descargar CV",
      location: "Madrid, España · Presencial / Remoto",
      codeComment: "// Desarrollador Full-Stack · React & .NET",
      codeFocus: "sistemas ERP",
      stats: [
        { value: "3+", label: "Años de Experiencia" },
        { value: "8+", label: "Módulos ERP Creados" },
        { value: "React + .NET", label: "Stack Tecnológico" },
        { value: "Remoto", label: "Modalidad" },
      ],
    },
    about: {
      label: "Sobre Mí",
      headingPre: "Construyendo sistemas ERP que",
      headingHighlight: "las empresas dependen",
      paragraphs: [
        "Soy desarrollador full-stack con más de 3 años de experiencia construyendo aplicaciones web empresariales y sistemas ERP. Mi día a día abarca todo el stack — desde interfaces responsivas en React y optimización de rendimiento con Next.js hasta APIs en .NET, ajuste de bases de datos SQL y despliegues en Azure.",
        "Actualmente desarrollo y mantengo un ERP de gestión de alquileres en producción, creando módulos para clientes, contratos, pagos, facturación electrónica y conciliación bancaria. Me importa el código que resuelve problemas reales de negocio e interfaces que las personas pueden usar sin fricción. Mi estrella guía es simple: que funcione, que sea fiable, que sea usable.",
        "Trabajo en remoto desde Madrid y colaboro estrechamente con equipos multifuncionales para entregar funcionalidades de principio a fin — desde el esquema de base de datos hasta el último píxel. Creo que el mejor software lo construyen personas que entienden tanto la parte técnica como la de negocio.",
      ],
      erpModulesTitle: "Módulos ERP que he construido",
      erpModules: [
        "Clientes y Usuarios",
        "Empresas y Propietarios",
        "Contratos y Renovaciones",
        "Pagos",
        "Facturación Electrónica",
        "Conciliación Bancaria",
      ],
      quote:
        "Tengo una relación muy seria con el café, pero todavía no hemos hablado de matrimonio.",
      quoteRole: "Desarrollador Full-Stack · React & .NET",
      techTitle: "Tecnologías que uso",
      quickFactsTitle: "Datos Rápidos",
      facts: [
        { label: "Actualmente", value: "Full-Stack Dev @ CTF Code to Fit" },
        { label: "Enfoque", value: "React, .NET, Sistemas ERP" },
        { label: "Abierto a", value: "Nuevas oportunidades" },
        { label: "Ubicación", value: "Madrid, España · Presencial / Remoto" },
        { label: "Idiomas", value: "Español, francés, inglés, coreano" },
      ],
    },
    skills: {
      label: "Habilidades y Experiencia",
      headingPre: "Lo que aporto a",
      headingHighlight: "la mesa",
      stackTitle: "Stack tecnológico",
      categories: ["Front-End", "Back-End & Cloud", "Testing & Tools"],
      expertise: [
        {
          title: "Desarrollo ERP",
          desc: "Construyendo módulos empresariales — clientes, contratos, pagos, facturación — que las empresas usan a diario.",
        },
        {
          title: "Estado del Servidor",
          desc: "TanStack Query para caché, sincronización y obtención eficiente de datos en flujos ERP complejos.",
        },
        {
          title: "Rendimiento y SEO",
          desc: "Optimización SSR/SSG con Next.js para velocidad, Core Web Vitals y posicionamiento en buscadores.",
        },
        {
          title: "Usabilidad y a11y",
          desc: "Interfaces responsivas con Tailwind, enfocadas en usabilidad y accesibilidad para usuarios reales.",
        },
        {
          title: "Entrega Full-Stack",
          desc: "Front-ends en React respaldados por APIs .NET, bases de datos SQL y despliegues en Azure.",
        },
        {
          title: "Testing y Calidad",
          desc: "Pruebas unitarias y de integración con Jest, más depuración de producción y resolución de incidencias.",
        },
      ],
    },
    projects: {
      label: "Trabajos Seleccionados",
      headingPre: "Proyectos de los que",
      headingHighlight: "estoy orgulloso",
      all: "Todos",
      featured: "Destacados",
      githubLink: "Ver todos los proyectos en GitHub",
      items: [
        {
          title: "ERP de Gestión de Alquileres",
          category: "ERP Empresarial",
          image: "/project/1.png",
          description:
            "Un ERP completo de gestión de alquileres con módulos para clientes, empresas, propietarios, contratos, renovaciones y usuarios. Construido con React y .NET, desplegado en Azure.",
          metrics: "8+ módulos",
        },
        {
          title: "Verificación de Crédito y Conciliación Bancaria",
          category: "Módulo ERP",
          image: "/project/2.png",

          description:
            "Implementación de flujos de verificación de crédito y conciliación bancaria integrados con el ERP de alquileres, gestionando emparejamiento de pagos y procesamiento de datos financieros.",
          metrics: "Nivel financiero",
        },
        {
          title: "Facturación Electrónica y Suscripciones",
          category: "Módulo ERP",
          image: "/project/3.png",

          description:
            "Funcionalidad de facturación electrónica y gestión de suscripciones, incluyendo ciclos de facturación automatizados e integración con sistemas externos vía APIs REST.",
          metrics: "Facturación automática",
        },
        {
          title: "Integración Frontend del ERP",
          category: "Aplicación Web",
          image: "/project/4.png",

          description:
            "Integración del frontend en React con APIs REST existentes y servicios SOAP heredados, construyendo una interfaz unificada para múltiples flujos de trabajo y proyectos.",
          metrics: "Multi-proyecto",
        },
        {
          title: "Web Multidioma para Clínica Podológica",
          category: "Web Corporativa",
          image: "/project/Rebe.png",

          description:
            "Desarrollo de una web corporativa y multidioma para una clínica podológica, con secciones de servicios, información sobre la clínica, ubicación y contenido sobre el equipo. Diseño responsive y orientado a una navegación clara y accesible.",
          metrics: "Web multidioma",
        },
        {
          title: "Interfaces ERP Responsivas",
          category: "UI/UX",
          image: "/project/6.png",

          description:
            "Diseño y construcción de interfaces responsivas y accesibles con Tailwind CSS y styled-components, adaptadas a diferentes proyectos y necesidades de negocio.",
          metrics: "Multi-proyecto",
        },
      ],
    },
    experience: {
      label: "Carrera",
      headingPre: "Dónde he",
      headingHighlight: "dejado huella",
      items: [
        {
          role: "Desarrollador Full-Stack · React & .NET",
          location: "Madrid, España · Presencial / Remoto",
          description:
            "Desarrollo y mantenimiento full-stack de un sistema ERP de gestión de alquileres usando React y .NET. Trabajando en remoto desde Madrid, construyo y mantengo módulos en todo el stack — desde interfaces en React hasta APIs .NET, bases de datos SQL y despliegues en Azure.",
          achievements: [
            "Desarrollo de módulos ERP para clientes, empresas, propietarios, contratos, renovaciones y usuarios",
            "Implementación de verificaciones de crédito, conciliación bancaria, pagos, facturación electrónica y suscripciones",
            "Construcción de interfaces responsivas con Tailwind CSS enfocadas en usabilidad y accesibilidad",
            "Desarrollo de aplicaciones web complejas con React y Next.js, optimizando rendimiento y SEO",
            "Implementación de servicios backend con .NET y ASP.NET — APIs REST y SOAP para integración empresarial",
            "Optimización de consultas SQL para sistemas de alta carga, mejorando rendimiento e integridad de datos",
            "Integración de React Query para gestión eficiente del estado del servidor, caché y obtención de datos",
            "Escritura y mantenimiento de pruebas unitarias y de integración con Jest, mejorando fiabilidad y cobertura",
            "Participación en despliegue y mantenimiento de aplicaciones en Azure",
          ],
        },
        {
          role: "React Developer",
          location: "Chile · En remoto",
          description:
            "Desarrollo de landing para una FinTech de préstamos bancarios. Jornada completa en remoto, centrada en conversión, registro de usuarios y engagement.",
          achievements: [
            "Maquetación y desarrollo de landing pages, optimizando la experiencia de usuario y la tasa de conversión, alineando el diseño con la identidad de marca y objetivos de negocio",
            "Desarrollo del flujo de registro de usuarios, creando procesos intuitivos y optimizados bajo buenas prácticas de UX y usabilidad",
            "Desarrollo de interfaces web responsivas con React y Tailwind CSS, asegurando una experiencia consistente en todos los dispositivos",
            "Implementación de correos electrónicos dinámicos y automatizados, personalizando plantillas con datos del usuario y activando envíos según acciones para mejorar la retención y el engagement",
          ],
        },
      ],
    },
    contact: {
      label: "Contacto",
      headingPre: "Construyamos algo",
      headingHighlight: "genial juntos",
      description:
        "Actualmente estoy disponible para trabajos freelance y consultoría selectos. Ya sea que necesites ayuda con un nuevo proyecto, una auditoría de sistema de diseño o una optimización de rendimiento — me encantaría saberlo.",
      email: "Correo",
      location: "Ubicación",
      responseTime: "Tiempo de Respuesta",
      responseValue: "Normalmente en 24 horas",
      formName: "Tu Nombre",
      formNamePlaceholder: "Juan Pérez",
      formEmail: "Correo Electrónico",
      formEmailPlaceholder: "juan@ejemplo.com",
      formMessage: "Mensaje",
      formMessagePlaceholder: "Cuéntame sobre tu proyecto...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "Algo salió mal. Por favor, inténtalo de nuevo.",
    },
    footer: {
      navigation: "Navegación",
      connect: "Conecta",
      crafted: "Hecho con cuidado.",
      backToTop: "Volver arriba",
    },
    chatbot: {
      greeting:
        "Hola 👋 Soy el asistente de MinWoo. Puedes preguntarme sobre su experiencia, proyectos o tecnologías.",
      limitReached: "Has alcanzado el límite de preguntas",
      limitDescription:
        "Si quieres saber más sobre mi experiencia, puedes contactar conmigo directamente.",
      contactEmail: "Contactar por email",
      questionsAvailable: "{{count}} preguntas disponibles",
      questionsUsed: "{{count}}/{{max}} preguntas utilizadas",
      inputLimit: "Límite alcanzado",
      inputThinking: "MinWoo AI está pensando...",
      inputPlaceholder: "Pregunta sobre MinWoo...",
      timeout:
        "Perdona, parece que estoy tardando demasiado en responder. Ahora mismo no estoy disponible. Si quieres saber más sobre mi perfil, puedes contactar directamente conmigo.",
      error:
        "Perdona, ha ocurrido un problema. Puedes contactar directamente conmigo por email.",
      close: "Cerrar chatbot",
      open: "Abrir chatbot",
    },
  },

  fr: {
    nav: {
      about: "À Propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
      letsTalk: "Discutons",
    },
    hero: {
      availability: "Ouvert aux nouvelles opportunités",
      greeting: "Salut, je suis",
      roles: [
        "Développeur Full-Stack",
        "Ingénieur React & .NET",
        "Créateur de ERP",
        "Déploiement Azure",
      ],
      bio: "Développeur full-stack avec plus de 3 ans d'expérience dans la création d'applications web d'entreprise et de systèmes ERP avec React et .NET. Je travaille sur toute la pile — des interfaces React responsives et l'optimisation SEO avec Next.js aux APIs REST, l'optimisation de bases de données SQL et les déploiements Azure. Je me soucie du code propre, de l'utilisabilité réelle et de la livraison de fonctionnalités qui résolvent des problèmes métier.",
      viewWork: "Voir Mon Travail",
      downloadCV: "Télécharger CV",
      location: "Madrid, Espagne · Présentiel / Télétravail",
      codeComment: "// Développeur Full-Stack · React & .NET",
      codeFocus: "systèmes ERP",
      stats: [
        { value: "3+", label: "Ans d'Expérience" },
        { value: "8+", label: "Modules ERP Créés" },
        { value: "React + .NET", label: "Stack Tech" },
        { value: "Télétravail", label: "Mode de Travail" },
      ],
    },
    about: {
      label: "À Propos",
      headingPre: "Je construis des systèmes ERP dont",
      headingHighlight: "les entreprises dépendent",
      paragraphs: [
        "Je suis développeur full-stack avec plus de 3 ans d'expérience dans la création d'applications web d'entreprise et de systèmes ERP. Mon quotidien couvre toute la pile — des interfaces React responsives et l'optimisation de performance avec Next.js aux APIs .NET, l'optimisation de bases de données SQL et les déploiements Azure.",
        "Je développe et maintiens actuellement un ERP de gestion de location en production, créant des modules pour les clients, contrats, paiements, facturation électronique et rapprochement bancaire. Je me soucie du code qui résout de vrais problèmes métier et d'interfaces que les gens peuvent utiliser sans friction. Mon étoile du berger est simple : que ça marche, que ce soit fiable, que ce soit utilisable.",
        "Je travaille en télétravail depuis Madrid et collabore étroitement avec des équipes pluridisciplinaires pour livrer des fonctionnalités de bout en bout — du schéma de base de données au dernier pixel. Je crois que les meilleurs logiciels sont construits par des personnes qui comprennent à la fois le technique et le métier.",
      ],
      erpModulesTitle: "Modules ERP que j'ai construits",
      erpModules: [
        "Clients et Utilisateurs",
        "Entreprises et Propriétaires",
        "Contrats et Renouvellements",
        "Paiements",
        "Facturation Électronique",
        "Rapprochement Bancaire",
      ],
      quote:
        "J'entretiens une relation très sérieuse avec le café, mais nous n'avons pas encore parlé de mariage.",
      quoteRole: "Développeur Full-Stack · React & .NET",
      techTitle: "Technologies que j'utilise",
      quickFactsTitle: "Faits Rapides",
      facts: [
        { label: "Actuellement", value: "Full-Stack Dev @ CTF Code to Fit" },
        { label: "Focus", value: "React, .NET, Systèmes ERP" },
        { label: "Ouvert à", value: "Nouvelles opportunités" },
        {
          label: "Localisation",
          value: "Madrid, Espagne ·Preésentiel / Télétravail",
        },
        { label: "Langues", value: "Espagnol, Français, Anglais, Coréen" },
      ],
    },
    skills: {
      label: "Compétences et Expertise",
      headingPre: "Ce que j'apporte à",
      headingHighlight: "la table",
      stackTitle: "Stack technologique",
      categories: ["Front-End", "Back-End & Cloud", "Testing & Tools"],
      expertise: [
        {
          title: "Développement ERP",
          desc: "Construire des modules d'entreprise — clients, contrats, paiements, facturation — que les entreprises utilisent quotidiennement.",
        },
        {
          title: "État Serveur",
          desc: "TanStack Query pour le cache, la synchronisation et la récupération efficace des données dans les flux ERP complexes.",
        },
        {
          title: "Performance et SEO",
          desc: "Optimisation SSR/SSG avec Next.js pour la vitesse, les Core Web Vitals et le positionnement dans les moteurs de recherche.",
        },
        {
          title: "Utilisabilité et a11y",
          desc: "Interfaces responsives avec Tailwind, axées sur l'utilisabilité et l'accessibilité pour les vrais utilisateurs.",
        },
        {
          title: "Livraison Full-Stack",
          desc: "Front-ends React soutenus par des APIs .NET, des bases de données SQL et des déploiements Azure.",
        },
        {
          title: "Tests et Qualité",
          desc: "Tests unitaires et d'intégration avec Jest, plus débogage de production et résolution de problèmes.",
        },
      ],
    },
    projects: {
      label: "Travaux Sélectionnés",
      headingPre: "Projets dont je suis",
      headingHighlight: "fier",
      all: "Tous",
      featured: "Vedette",
      githubLink: "Voir tous les projets sur GitHub",
      items: [
        {
          title: "ERP de Gestion de Location",
          category: "ERP d'Entreprise",
          image: "/project/1.png",

          description:
            "Un ERP complet de gestion de location avec des modules pour les clients, entreprises, propriétaires, contrats, renouvellements et utilisateurs. Construit avec React et .NET, déployé sur Azure.",
          metrics: "8+ modules",
        },
        {
          title: "Vérification de Crédit et Rapprochement Bancaire",
          category: "Module ERP",
          image: "/project/2.png",

          description:
            "Implémentation de flux de vérification de crédit et de rapprochement bancaire intégrés à l'ERP de location, gérant la correspondance des paiements et le traitement des données financières.",
          metrics: "Niveau financier",
        },
        {
          title: "Facturation Électronique et Abonnements",
          category: "Module ERP",
          image: "/project/3.png",

          description:
            "Fonctionnalités de facturation électronique et de gestion d'abonnements, incluant des cycles de facturation automatisés et l'intégration avec des systèmes externes via des APIs REST.",
          metrics: "Facturation auto",
        },
        {
          title: "Intégration Frontend ERP",
          category: "Application Web",
          image: "/project/4.png",

          description:
            "Intégration du frontend React avec les APIs REST existantes et les services SOAP hérités, construisant une interface unifiée pour plusieurs flux de travail et projets.",
          metrics: "Multi-projet",
        },
        {
          title: "Site web multilingue pour une clinique podologique",
          category: "Site web d'entreprise",
          image: "/project/Rebe.png",

          description:
            "Développement d'un site web d'entreprise multilingue pour une clinique podologique, avec des sections dédiées aux services, à la présentation de la clinique, à sa localisation et à l'équipe. Design responsive et navigation claire et accessible.",
          metrics: "Site multilingue",
        },
        {
          title: "Interfaces ERP Responsives",
          category: "UI/UX",
          image: "/project/6.png",

          description:
            "Conception et construction d'interfaces responsives et accessibles avec Tailwind CSS et styled-components, adaptées à différents projets et besoins métier.",
          metrics: "Multi-projet",
        },
      ],
    },
    experience: {
      label: "Carrière",
      headingPre: "Où j'ai eu un",
      headingHighlight: "impact",
      items: [
        {
          role: "Développeur Full-Stack · React & .NET",
          location: "Madrid, Espagne · Présentiel / Télétravail",
          description:
            "Développement et maintenance full-stack d'un système ERP de gestion de location utilisant React et .NET. En télétravail depuis Madrid, je construis et maintiens des modules sur toute la pile — des interfaces React aux APIs .NET, bases de données SQL et déploiements Azure.",
          achievements: [
            "Développement de modules ERP pour clients, entreprises, propriétaires, contrats, renouvellements et utilisateurs",
            "Implémentation de vérifications de crédit, rapprochement bancaire, paiements, facturation électronique et abonnements",
            "Construction d'interfaces responsives avec Tailwind CSS axées sur l'utilisabilité et l'accessibilité",
            "Développement d'applications web complexes avec React et Next.js, optimisant performance et SEO",
            "Implémentation de services backend avec .NET et ASP.NET — APIs REST et SOAP pour l'intégration d'entreprise",
            "Optimisation de requêtes SQL pour les systèmes à forte charge, améliorant performance et intégrité des données",
            "Intégration de React Query pour la gestion efficace de l'état serveur, du cache et de la récupération des données",
            "Écriture et maintenance de tests unitaires et d'intégration avec Jest, améliorant fiabilité et couverture",
            "Participation au déploiement et à la maintenance des applications sur Azure",
          ],
        },
        {
          role: "Développeur React",
          location: "Chili · Télétravail",
          description:
            "Développement de landing pages pour une FinTech de prêts bancaires. Poste à temps plein en télétravail, axé sur la conversion, l'inscription des utilisateurs et l'engagement.",
          achievements: [
            "Maquettage et développement de landing pages, en optimisant l'expérience utilisateur et le taux de conversion, et en alignant le design sur l'identité de marque et les objectifs business",
            "Développement du parcours d'inscription, avec des processus intuitifs suivant les bonnes pratiques UX et d'utilisabilité",
            "Développement d'interfaces web responsives avec React et Tailwind CSS, pour une expérience cohérente sur tous les appareils",
            "Mise en place d'e-mails dynamiques et automatisés, en personnalisant les templates avec les données utilisateur et en déclenchant les envois selon les actions pour améliorer la rétention et l'engagement",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      headingPre: "Construisons quelque chose de",
      headingHighlight: "super ensemble",
      description:
        "Je suis actuellement disponible pour du travail freelance et du conseil sélectif. Que vous ayez besoin d'aide pour un nouveau projet, un audit de système de design ou une optimisation de performance — j'adorerais en entendre parler.",
      email: "Courriel",
      location: "Localisation",
      responseTime: "Temps de Réponse",
      responseValue: "Généralement sous 24 heures",
      formName: "Votre Nom",
      formNamePlaceholder: "Jean Dupont",
      formEmail: "Adresse Courriel",
      formEmailPlaceholder: "jean@exemple.com",
      formMessage: "Message",
      formMessagePlaceholder: "Parlez-moi de votre projet...",
      send: "Envoyer le Message",
      sending: "Envoi...",
      success: "Message envoyé ! Je vous répondrai bientôt.",
      error: "Quelque chose s'est mal passé. Veuillez réessayer.",
    },
    footer: {
      navigation: "Navigation",
      connect: "Connectez-vous",
      crafted: "Fait avec soin.",
      backToTop: "Retour en haut",
    },
    chatbot: {
      greeting:
        "Bonjour 👋 Je suis l'assistant de MinWoo. Vous pouvez me poser des questions sur son expérience, ses projets ou ses technologies.",
      limitReached: "Vous avez atteint la limite de questions",
      limitDescription:
        "Si vous souhaitez en savoir plus sur mon expérience, vous pouvez me contacter directement.",
      contactEmail: "Me contacter par e-mail",
      questionsAvailable: "{{count}} questions disponibles",
      questionsUsed: "{{count}}/{{max}} questions utilisées",
      inputLimit: "Limite atteinte",
      inputThinking: "MinWoo AI réfléchit...",
      inputPlaceholder: "Posez une question sur MinWoo...",
      timeout:
        "Désolé, il semble que je mette trop de temps à répondre. Je ne suis pas disponible pour le moment. Si vous souhaitez en savoir plus sur mon profil, vous pouvez me contacter directement.",
      error:
        "Désolé, un problème est survenu. Vous pouvez me contacter directement par e-mail.",
      close: "Fermer le chatbot",
      open: "Ouvrir le chatbot",
    },
  },
  kr: {
    nav: {
      about: "소개",
      skills: "기술",
      projects: "프로젝트",
      experience: "경력",
      contact: "연락하기",
      letsTalk: "이야기 나누기",
    },

    hero: {
      availability: "새로운 기회를 찾고 있습니다",
      greeting: "안녕하세요, 저는",
      roles: [
        "풀스택 개발자",
        "React & .NET 엔지니어",
        "ERP 시스템 개발자",
        "Azure 클라우드 개발자",
      ],
      bio: "React와 .NET을 활용하여 엔터프라이즈 웹 애플리케이션과 ERP 시스템을 3년 이상 개발해 온 풀스택 개발자입니다. 반응형 React 인터페이스와 Next.js SEO 최적화부터 REST API, SQL 데이터베이스 최적화, Azure 배포까지 전체 기술 스택을 다룹니다. 깔끔한 코드와 실제 사용성을 중요하게 생각하며, 비즈니스 문제를 해결하는 기능을 만드는 데 집중합니다.",
      viewWork: "프로젝트 보기",
      downloadCV: "이력서 다운로드",
      location: "Madrid, España · 출근 / 원격",
      codeComment: "// 풀스택 개발자 · React & .NET",
      codeFocus: "ERP 시스템",
      stats: [
        { value: "3+", label: "경력 연차" },
        { value: "8+", label: "개발한 ERP 모듈" },
        { value: "React + .NET", label: "기술 스택" },
        { value: "Remote", label: "근무 방식" },
      ],
    },

    about: {
      label: "소개",
      headingPre: "기업이 신뢰할 수 있는",
      headingHighlight: "ERP 시스템을 만듭니다",
      paragraphs: [
        "엔터프라이즈 웹 애플리케이션과 ERP 시스템을 3년 이상 개발해 온 풀스택 개발자입니다. React 기반의 반응형 인터페이스와 Next.js 성능 최적화부터 .NET API, SQL 데이터베이스 최적화, Azure 배포까지 전체 기술 스택을 다루고 있습니다.",
        "현재 실제 운영 중인 임대 관리 ERP를 개발하고 유지보수하며, 고객, 계약, 결제, 전자세금계산서, 은행 대사 등의 모듈을 개발하고 있습니다. 실제 비즈니스 문제를 해결하는 코드와 사용자가 불편함 없이 사용할 수 있는 인터페이스를 중요하게 생각합니다. 제 개발 철학은 간단합니다. 제대로 작동하고, 안정적이며, 사용하기 쉬운 소프트웨어를 만드는 것입니다.",
        "마드리드에서 원격으로 근무하며 다양한 직군의 팀과 긴밀하게 협업하여 데이터베이스 설계부터 최종 UI까지 기능을 처음부터 끝까지 개발합니다. 좋은 소프트웨어는 기술적인 부분뿐만 아니라 비즈니스의 요구사항까지 이해하는 사람이 만든다고 생각합니다.",
      ],

      erpModulesTitle: "개발한 ERP 모듈",
      erpModules: [
        "고객 및 사용자",
        "기업 및 임대인",
        "계약 및 갱신",
        "결제",
        "전자세금계산서",
        "은행 대사",
      ],

      quote:
        "커피와는 아주 진지한 관계를 유지하고 있지만, 아직 결혼 이야기는 하지 않았습니다.",
      quoteRole: "풀스택 개발자 · React & .NET",

      techTitle: "사용 기술",
      quickFactsTitle: "주요 정보",

      facts: [
        {
          label: "현재",
          value: "Full-Stack Dev @ CTF Code to Fit",
        },
        {
          label: "주요 분야",
          value: "React, .NET, ERP 시스템",
        },
        {
          label: "관심 분야",
          value: "새로운 기회",
        },
        {
          label: "근무 지역",
          value: "Madrid, España · 출근 / 원격",
        },
        { label: "언어", value: "스페인어, 프랑스어, 영어, 한국어" },
      ],
    },

    skills: {
      label: "기술 및 전문성",
      headingPre: "제가 제공할 수 있는",
      headingHighlight: "가치",
      stackTitle: "기술 스택",
      categories: ["Front-End", "Back-End & Cloud", "Testing & Tools"],
      expertise: [
        {
          title: "ERP 개발",
          desc: "고객, 계약, 결제, 청구 등 기업의 일상적인 업무를 지원하는 엔터프라이즈 모듈을 개발합니다.",
        },
        {
          title: "서버 상태 관리",
          desc: "복잡한 ERP 업무 흐름에서 캐싱, 데이터 동기화 및 효율적인 데이터 조회를 위해 TanStack Query를 사용합니다.",
        },
        {
          title: "성능 및 SEO",
          desc: "속도, Core Web Vitals 및 검색 엔진 최적화를 위해 Next.js SSR/SSG를 활용합니다.",
        },
        {
          title: "사용성 및 접근성",
          desc: "실제 사용자를 고려하여 Tailwind를 활용한 반응형 인터페이스와 접근성 중심의 UI를 개발합니다.",
        },
        {
          title: "풀스택 개발",
          desc: "React 프론트엔드와 .NET API, SQL 데이터베이스 및 Azure 클라우드 환경을 연결하여 전체 기능을 개발합니다.",
        },
        {
          title: "테스트 및 품질",
          desc: "Jest를 활용한 단위 및 통합 테스트와 함께 실제 운영 환경에서의 디버깅 및 문제 해결 경험을 갖고 있습니다.",
        },
      ],
    },

    projects: {
      label: "주요 프로젝트",
      headingPre: "제가 자랑스럽게 생각하는",
      headingHighlight: "프로젝트",
      all: "전체",
      featured: "주요 프로젝트",
      githubLink: "GitHub에서 모든 프로젝트 보기",

      items: [
        {
          title: "임대 관리 ERP",
          category: "엔터프라이즈 ERP",
          image: "/project/1.png",

          description:
            "고객, 기업, 임대인, 계약, 갱신 및 사용자 관리 기능을 포함한 임대 관리 ERP입니다. React와 .NET으로 개발하고 Azure에 배포했습니다.",
          metrics: "8개 이상의 모듈",
        },
        {
          title: "신용 평가 및 은행 대사",
          category: "ERP 모듈",
          image: "/project/2.png",

          description:
            "임대 관리 ERP에 신용 평가 및 은행 대사 기능을 구현하여 결제 매칭과 금융 데이터 처리를 담당했습니다.",
          metrics: "금융 업무",
        },
        {
          title: "전자세금계산서 및 구독 관리",
          category: "ERP 모듈",
          image: "/project/3.png",

          description:
            "자동 청구 주기와 외부 청구 시스템의 REST API 연동을 포함한 전자세금계산서 및 구독 관리 기능을 개발했습니다.",
          metrics: "자동 청구",
        },
        {
          title: "ERP 프론트엔드 통합",
          category: "웹 애플리케이션",
          image: "/project/4.png",

          description:
            "기존 REST API 및 레거시 SOAP 서비스를 React 프론트엔드와 통합하여 여러 비즈니스 업무를 하나의 인터페이스에서 처리할 수 있도록 개발했습니다.",
          metrics: "멀티 프로젝트",
        },
        {
          title: "족부 클리닉 다국어 웹사이트",
          category: "기업 웹사이트",
          image: "/project/Rebe.png",

          description:
            "족부 클리닉을 위한 다국어 기업 웹사이트를 개발했습니다. 진료 서비스, 클리닉 소개, 위치 및 의료진 정보를 제공하며, 다양한 디바이스에 대응하는 반응형 디자인과 명확하고 접근성 높은 사용자 경험을 구현했습니다.",
          metrics: "다국어 웹",
        },
        {
          title: "반응형 ERP 인터페이스",
          category: "UI/UX",
          image: "/project/6.png",

          description:
            "Tailwind CSS와 styled-components를 활용하여 다양한 프로젝트와 비즈니스 요구사항에 맞는 반응형 및 접근성 중심의 인터페이스를 개발했습니다.",
          metrics: "멀티 프로젝트",
        },
      ],
    },

    experience: {
      label: "경력",
      headingPre: "제가",
      headingHighlight: "만들어 온 가치",

      items: [
        {
          role: "풀스택 개발자 · React & .NET",
          location: "Madrid, España · 대면 근무 / 원격 근무",
          description:
            "React와 .NET을 활용한 임대 관리 ERP 시스템의 풀스택 개발 및 유지보수를 담당하고 있습니다. 마드리드에서 원격으로 근무하며 React 인터페이스부터 .NET API, SQL 데이터베이스 및 Azure 배포까지 전체 기술 스택의 모듈을 개발하고 유지보수합니다.",

          achievements: [
            "고객, 기업, 임대인, 계약, 갱신 및 사용자 관리 ERP 모듈 개발",
            "신용 평가, 은행 대사, 결제, 전자세금계산서 및 구독 기능 구현",
            "사용성과 접근성을 고려한 Tailwind CSS 기반 반응형 인터페이스 개발",
            "React와 Next.js를 활용한 복잡한 웹 애플리케이션 개발 및 성능과 SEO 최적화",
            ".NET 및 ASP.NET 기반 REST 및 SOAP API를 활용한 엔터프라이즈 통합",
            "고부하 시스템의 SQL 쿼리를 최적화하여 성능 및 데이터 무결성 개선",
            "React Query를 활용한 서버 상태 관리, 캐싱 및 효율적인 데이터 조회",
            "Jest를 활용한 단위 및 통합 테스트 작성 및 유지보수",
            "Azure 환경에서 애플리케이션 배포 및 유지보수 참여",
          ],
        },

        {
          role: "React 개발자",
          location: "칠레 · 원격",
          description:
            "은행 대출 FinTech 기업의 랜딩 페이지 및 제품 UI를 개발했습니다. 전환율, 사용자 가입 및 사용자 참여를 중심으로 한 풀타임 원격 근무였습니다.",

          achievements: [
            "브랜드 아이덴티티와 비즈니스 목표에 맞춘 랜딩 페이지 개발 및 UX와 전환율 최적화",
            "UX 및 사용성 모범 사례를 적용한 직관적인 사용자 회원가입 플로우 개발",
            "React와 Tailwind CSS를 활용한 반응형 웹 인터페이스 개발",
            "사용자 데이터를 활용한 동적 이메일 템플릿 및 자동 이메일 발송 기능 구현",
          ],
        },
      ],
    },

    contact: {
      label: "연락하기",
      headingPre: "함께",
      headingHighlight: "멋진 것을 만들어 보세요",
      description:
        "현재 새로운 프로젝트와 선별적인 프리랜서 및 컨설팅 업무에 열려 있습니다. 새로운 프로젝트, 디자인 시스템 검토 또는 성능 개선이 필요하시다면 편하게 연락해 주세요.",
      email: "이메일",
      location: "위치",
      responseTime: "응답 시간",
      responseValue: "보통 24시간 이내",
      formName: "이름",
      formNamePlaceholder: "홍길동",
      formEmail: "이메일 주소",
      formEmailPlaceholder: "name@example.com",
      formMessage: "메시지",
      formMessagePlaceholder: "프로젝트에 대해 알려주세요...",
      send: "메시지 보내기",
      sending: "전송 중...",
      success: "메시지가 전송되었습니다! 곧 답변드리겠습니다.",
      error: "문제가 발생했습니다. 다시 시도해 주세요.",
    },

    footer: {
      navigation: "메뉴",
      connect: "연결",
      crafted: "정성을 담아 만들었습니다.",
      backToTop: "맨 위로",
    },

    chatbot: {
      greeting:
        "안녕하세요 👋 MinWoo의 AI 어시스턴트입니다. 경력, 프로젝트 또는 기술에 대해 질문하실 수 있습니다.",
      limitReached: "질문 한도에 도달했습니다.",
      limitDescription: "제 경력에 대해 더 알고 싶으시면 직접 연락해 주세요.",
      contactEmail: "이메일로 연락하기",
      questionsAvailable: "개의 질문이 남아 있습니다.",
      questionsUsed: "개의 질문을 사용했습니다.",
      inputLimit: "질문 한도 도달",
      inputThinking: "MinWoo AI가 답변을 준비하고 있습니다...",
      inputPlaceholder: "MinWoo에 대해 질문해 주세요...",
      timeout:
        "죄송합니다. 답변이 너무 오래 걸리고 있습니다. 현재 AI를 이용할 수 없습니다. 제 프로필에 대해 더 알고 싶으시면 직접 연락해 주세요.",
      error: "죄송합니다. 문제가 발생했습니다. 이메일로 직접 연락해 주세요.",
      close: "챗봇 닫기",
      open: "챗봇 열기",
    },
  },
};
