import { ProjectCategoryContent, ProjectContent } from '@core/models';

export const PROJECT_CATEGORIES: readonly ProjectCategoryContent[] = [
  {
    id: 'full-stack',
    name: { en: 'Full Stack', es: 'Full Stack' },
    description: {
      en: 'End-to-end product work spanning interface, business logic, and deployment.',
      es: 'Trabajo de producto de punta a punta: interfaz, lógica de negocio y despliegue.',
    },
    icon: 'layers',
    accent: '#818cf8',
  },
  {
    id: 'frontend',
    name: { en: 'Frontend', es: 'Frontend' },
    description: {
      en: 'Interface design, product storytelling, interaction design, and responsive UX.',
      es: 'Diseño de interfaces, narrativa de producto, diseño de interacción y UX responsive.',
    },
    icon: 'monitor',
    accent: '#f472b6',
  },
  {
    id: 'backend',
    name: { en: 'Backend', es: 'Backend' },
    description: {
      en: 'API design, business rules, integrations, and service reliability for complex platforms.',
      es: 'Diseño de APIs, reglas de negocio, integraciones y confiabilidad de servicios para plataformas complejas.',
    },
    icon: 'server',
    accent: '#2dd4bf',
  },
  {
    id: 'data-ai',
    name: { en: 'Data & AI', es: 'Datos e IA' },
    description: {
      en: 'Decision-support systems, analytics, automation, and machine-aided workflows.',
      es: 'Sistemas de apoyo a decisiones, analítica, automatización y flujos asistidos por máquinas.',
    },
    icon: 'chart',
    accent: '#fbbf24',
  },
  {
    id: 'devops',
    name: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    description: {
      en: 'Reliable delivery pipelines, infrastructure automation, and production-ready deployment flows.',
      es: 'Pipelines de entrega confiables, automatización de infraestructura y flujos de despliegue listos para producción.',
    },
    icon: 'cloud',
    accent: '#34d399',
  },
];

export const PROJECTS: readonly ProjectContent[] = [
  {
    id: 'beat-and-beach-colombia',
    categoryId: 'frontend',
    title: 'Beat and Beach Colombia',
    description: {
      en: 'A tourism-oriented digital experience designed to promote beach destinations and travel inspiration across Colombia with an engaging and conversion-focused brand presence.',
      es: 'Una experiencia digital orientada al turismo, diseñada para promover destinos de playa e inspirar viajes por Colombia con una presencia de marca atractiva y enfocada en la conversión.',
    },
    type: { en: 'Tourism Platform', es: 'Plataforma de turismo' },
    technologies: ['Angular', 'Responsive Design', 'Travel UX', 'Brand Experience'],
    links: { live: 'https://monajuan2000.github.io/beatandbeach-colombia-web-app/' },
    image: {
      src: 'assets/images/BEATANDBEACH_COLOMBIA_MAINLOGO.png',
      alt: { en: 'Beat and Beach Colombia main logo', es: 'Logo principal de Beat and Beach Colombia' },
      width: 1154,
      height: 912,
    },
    featured: true,
    announcement: {
      badge: { en: 'New survey', es: 'Nueva encuesta' },
      title: { en: 'Guatapé cultural interpretation', es: 'Interpretación cultural de Guatapé' },
      description: {
        en: 'Help shape how travelers discover the culture of Guatapé. Share your experience in this short survey.',
        es: 'Ayuda a definir cómo los viajeros descubren la cultura de Guatapé. Comparte tu experiencia en esta breve encuesta.',
      },
      actionLabel: { en: 'Take the survey', es: 'Responder encuesta' },
      url: 'https://monajuan2000.github.io/beatandbeach-colombia-web-app/#/surveys/guatape-cultural-interpretation',
      icon: 'survey',
    },
  },
  {
    id: 'shotshroom-lab',
    categoryId: 'frontend',
    title: 'ShotShroom Lab',
    description: {
      en: 'A cocktail discovery web app featuring classic recipes and a guide to the spirits behind them, with fast search, filtering, and a responsive, content-rich interface.',
      es: 'Una aplicación web para descubrir coctelería, con recetas clásicas y una guía de los licores que las componen, búsqueda rápida, filtros y una interfaz responsive rica en contenido.',
    },
    type: { en: 'Cocktail & Spirits Guide', es: 'Guía de cócteles y licores' },
    technologies: ['React', 'Vite', 'CSS Modules', 'Search & Filters'],
    links: { live: 'https://monajuan2000.github.io/shotshroomlab-web-app/' },
    image: {
      src: 'assets/images/SHOTSHROOM_LAB_LOGO.svg',
      alt: { en: 'ShotShroom Lab logo', es: 'Logo de ShotShroom Lab' },
      width: 64,
      height: 64,
    },
    featured: true,
  },
  {
    id: 'operations-dashboard',
    categoryId: 'full-stack',
    title: 'Operations Dashboard',
    description: {
      en: 'A monitoring platform for internal teams to track business KPIs and operational health.',
      es: 'Una plataforma de monitoreo para que los equipos internos sigan los KPIs del negocio y la salud operativa.',
    },
    type: { en: 'Web App', es: 'Aplicación web' },
    technologies: ['Angular', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'client-portal',
    categoryId: 'full-stack',
    title: 'Client Portal',
    description: {
      en: 'A secure portal for customers to review data, upload files, and manage workflows.',
      es: 'Un portal seguro para que los clientes revisen datos, suban archivos y gestionen flujos de trabajo.',
    },
    type: { en: 'Platform', es: 'Plataforma' },
    technologies: ['Angular', 'REST API', 'RxJS'],
  },
  {
    id: 'brand-experience-site',
    categoryId: 'frontend',
    title: 'Brand Experience Site',
    description: {
      en: 'A polished marketing experience designed to present product value and drive onboarding.',
      es: 'Una experiencia de marketing pulida, diseñada para presentar el valor del producto e impulsar el onboarding.',
    },
    type: { en: 'Marketing Site', es: 'Sitio de marketing' },
    technologies: ['Angular', 'SCSS', 'Accessibility'],
  },
  {
    id: 'learning-journey-ui',
    categoryId: 'frontend',
    title: 'Learning Journey UI',
    description: {
      en: 'A modular educational interface built to guide users through structured learning paths.',
      es: 'Una interfaz educativa modular creada para guiar a los usuarios por rutas de aprendizaje estructuradas.',
    },
    type: { en: 'UX Flow', es: 'Flujo UX' },
    technologies: ['Angular Material', 'Animations', 'Design Systems'],
  },
  {
    id: 'workflow-engine',
    categoryId: 'backend',
    title: 'Workflow Engine',
    description: {
      en: 'An orchestration service that coordinates domain events and downstream integrations.',
      es: 'Un servicio de orquestación que coordina eventos de dominio e integraciones posteriores.',
    },
    type: { en: 'API', es: 'API' },
    technologies: ['TypeScript', 'Express', 'Queueing'],
  },
  {
    id: 'integration-layer',
    categoryId: 'backend',
    title: 'Integration Layer',
    description: {
      en: 'A reusable integration layer connecting internal services with external third-party APIs.',
      es: 'Una capa de integración reutilizable que conecta servicios internos con APIs externas de terceros.',
    },
    type: { en: 'Service', es: 'Servicio' },
    technologies: ['Node.js', 'REST', 'JWT'],
  },
  {
    id: 'insights-hub',
    categoryId: 'data-ai',
    title: 'Insights Hub',
    description: {
      en: 'A data visualization workspace enabling teams to analyze trends and customer signals.',
      es: 'Un espacio de visualización de datos que permite a los equipos analizar tendencias y señales de clientes.',
    },
    type: { en: 'Analytics', es: 'Analítica' },
    technologies: ['Python', 'Power BI', 'SQL'],
  },
  {
    id: 'automated-reporting',
    categoryId: 'data-ai',
    title: 'Automated Reporting',
    description: {
      en: 'A reporting workflow that transforms raw business data into executive-ready summaries.',
      es: 'Un flujo de reportes que transforma datos de negocio en bruto en resúmenes listos para la gerencia.',
    },
    type: { en: 'Automation', es: 'Automatización' },
    technologies: ['Python', 'ETL', 'Scheduling'],
  },
  {
    id: 'ci-cd-foundation',
    categoryId: 'devops',
    title: 'CI/CD Foundation',
    description: {
      en: 'A streamlined pipeline that standardizes validation, quality checks, and deployment.',
      es: 'Un pipeline optimizado que estandariza la validación, los controles de calidad y el despliegue.',
    },
    type: { en: 'DevOps', es: 'DevOps' },
    technologies: ['GitHub Actions', 'Docker', 'Azure'],
  },
  {
    id: 'infrastructure-as-code',
    categoryId: 'devops',
    title: 'Infrastructure as Code',
    description: {
      en: 'Declarative platform automation for repeatable environments and lower operational risk.',
      es: 'Automatización declarativa de plataformas para entornos reproducibles y menor riesgo operativo.',
    },
    type: { en: 'Platform', es: 'Plataforma' },
    technologies: ['Terraform', 'Cloud', 'Monitoring'],
  },
];
