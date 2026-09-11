export type Lang = "es" | "en" | "fr";

export const langNames: Record<Lang, string> = {
  es: "Español",
  en: "English",
  fr: "Français",
};

export const langFlags: Record<Lang, string> = {
  es: "ES",
  en: "EN",
  fr: "FR",
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
      description: string;
      metrics: string;
    }[];
  };
  experience: {
    label: string;
    headingPre: string;
    headingHighlight: string;
    location: string;
    items: { role: string; description: string; achievements: string[] }[];
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
      location: "Madrid, Spain · Remote",
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
        "The best software doesn't just work — it gets out of the way. When an ERP feels effortless, that's when you know every layer, from SQL to UI, is doing its job.",
      quoteRole: "Full-Stack Developer · React & .NET",
      techTitle: "Tech I Work With",
      quickFactsTitle: "Quick Facts",
      facts: [
        { label: "Currently", value: "Full-Stack Dev @ CTF Code to Fit" },
        { label: "Focus", value: "React, .NET, ERP Systems" },
        { label: "Open to", value: "New opportunities" },
        { label: "Location", value: "Madrid, Spain · Remote" },
        { label: "Languages", value: "Spanish, English" },
      ],
    },
    skills: {
      label: "Skills & Expertise",
      headingPre: "What I bring to",
      headingHighlight: "the table",
      categories: ["Front-End", "Back-End & Cloud"],
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
          description:
            "A full rental management ERP with modules for clients, companies, landlords, contracts, renewals, and users. Built with React and .NET, deployed on Azure.",
          metrics: "8+ modules",
        },
        {
          title: "Credit Check & Bank Reconciliation",
          category: "ERP Module",
          description:
            "Implemented credit check workflows and bank reconciliation features integrated with the rental ERP, handling payment matching and financial data processing.",
          metrics: "Financial grade",
        },
        {
          title: "Electronic Invoicing & Subscriptions",
          category: "ERP Module",
          description:
            "Built electronic invoicing and subscription management features, including automated billing cycles and integration with external invoicing systems via REST APIs.",
          metrics: "Automated billing",
        },
        {
          title: "ERP Frontend Integration",
          category: "Web Application",
          description:
            "Integrated the React frontend with existing REST APIs and legacy SOAP services, building a unified interface for multiple business workflows and projects.",
          metrics: "Multi-project",
        },
        {
          title: "SQL Query Optimization",
          category: "Database",
          description:
            "Optimized relational database queries in high-load ERP systems, improving response times and ensuring data integrity across complex business operations.",
          metrics: "High-load ready",
        },
        {
          title: "Responsive ERP Interfaces",
          category: "UI/UX",
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
      location: "Madrid, Spain · Remote",
      items: [
        {
          role: "Full-Stack Developer · React & .NET",
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
      location: "Madrid, España · Remoto",
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
        "El mejor software no solo funciona — se aparta del camino. Cuando un ERP se siente sin esfuerzo, es cuando sabes que cada capa, desde SQL hasta la UI, está haciendo su trabajo.",
      quoteRole: "Desarrollador Full-Stack · React & .NET",
      techTitle: "Tecnologías que uso",
      quickFactsTitle: "Datos Rápidos",
      facts: [
        { label: "Actualmente", value: "Full-Stack Dev @ CTF Code to Fit" },
        { label: "Enfoque", value: "React, .NET, Sistemas ERP" },
        { label: "Abierto a", value: "Nuevas oportunidades" },
        { label: "Ubicación", value: "Madrid, España · Remoto" },
        { label: "Idiomas", value: "Español, Inglés" },
      ],
    },
    skills: {
      label: "Habilidades y Experiencia",
      headingPre: "Lo que aporto a",
      headingHighlight: "la mesa",
      categories: ["Front-End", "Back-End y Cloud"],
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
          description:
            "Un ERP completo de gestión de alquileres con módulos para clientes, empresas, propietarios, contratos, renovaciones y usuarios. Construido con React y .NET, desplegado en Azure.",
          metrics: "8+ módulos",
        },
        {
          title: "Verificación de Crédito y Conciliación Bancaria",
          category: "Módulo ERP",
          description:
            "Implementación de flujos de verificación de crédito y conciliación bancaria integrados con el ERP de alquileres, gestionando emparejamiento de pagos y procesamiento de datos financieros.",
          metrics: "Nivel financiero",
        },
        {
          title: "Facturación Electrónica y Suscripciones",
          category: "Módulo ERP",
          description:
            "Funcionalidad de facturación electrónica y gestión de suscripciones, incluyendo ciclos de facturación automatizados e integración con sistemas externos vía APIs REST.",
          metrics: "Facturación automática",
        },
        {
          title: "Integración Frontend del ERP",
          category: "Aplicación Web",
          description:
            "Integración del frontend en React con APIs REST existentes y servicios SOAP heredados, construyendo una interfaz unificada para múltiples flujos de trabajo y proyectos.",
          metrics: "Multi-proyecto",
        },
        {
          title: "Optimización de Consultas SQL",
          category: "Base de Datos",
          description:
            "Optimización de consultas en bases de datos relacionales para sistemas ERP de alta carga, mejorando tiempos de respuesta y asegurando integridad de datos.",
          metrics: "Alta carga",
        },
        {
          title: "Interfaces ERP Responsivas",
          category: "UI/UX",
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
      location: "Madrid, España · Remoto",
      items: [
        {
          role: "Desarrollador Full-Stack · React & .NET",
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
      location: "Madrid, Espagne · Télétravail",
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
        "Le meilleur logiciel ne fait pas que fonctionner — il se fait oublier. Quand un ERP semble sans effort, c'est que chaque couche, de SQL à l'UI, fait son travail.",
      quoteRole: "Développeur Full-Stack · React & .NET",
      techTitle: "Technologies que j'utilise",
      quickFactsTitle: "Faits Rapides",
      facts: [
        { label: "Actuellement", value: "Full-Stack Dev @ CTF Code to Fit" },
        { label: "Focus", value: "React, .NET, Systèmes ERP" },
        { label: "Ouvert à", value: "Nouvelles opportunités" },
        { label: "Localisation", value: "Madrid, Espagne · Télétravail" },
        { label: "Langues", value: "Espagnol, Anglais" },
      ],
    },
    skills: {
      label: "Compétences et Expertise",
      headingPre: "Ce que j'apporte à",
      headingHighlight: "la table",
      categories: ["Front-End", "Back-End et Cloud"],
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
          description:
            "Un ERP complet de gestion de location avec des modules pour les clients, entreprises, propriétaires, contrats, renouvellements et utilisateurs. Construit avec React et .NET, déployé sur Azure.",
          metrics: "8+ modules",
        },
        {
          title: "Vérification de Crédit et Rapprochement Bancaire",
          category: "Module ERP",
          description:
            "Implémentation de flux de vérification de crédit et de rapprochement bancaire intégrés à l'ERP de location, gérant la correspondance des paiements et le traitement des données financières.",
          metrics: "Niveau financier",
        },
        {
          title: "Facturation Électronique et Abonnements",
          category: "Module ERP",
          description:
            "Fonctionnalités de facturation électronique et de gestion d'abonnements, incluant des cycles de facturation automatisés et l'intégration avec des systèmes externes via des APIs REST.",
          metrics: "Facturation auto",
        },
        {
          title: "Intégration Frontend ERP",
          category: "Application Web",
          description:
            "Intégration du frontend React avec les APIs REST existantes et les services SOAP hérités, construisant une interface unifiée pour plusieurs flux de travail et projets.",
          metrics: "Multi-projet",
        },
        {
          title: "Optimisation de Requêtes SQL",
          category: "Base de Données",
          description:
            "Optimisation des requêtes de bases de données relationnelles pour des systèmes ERP à forte charge, améliorant les temps de réponse et assurant l'intégrité des données.",
          metrics: "Forte charge",
        },
        {
          title: "Interfaces ERP Responsives",
          category: "UI/UX",
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
      location: "Madrid, Espagne · Télétravail",
      items: [
        {
          role: "Développeur Full-Stack · React & .NET",
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
  },
};
