import { Translations } from './en.translations';

/** UI copy in Spanish. Typed against the English shape, so a missing key fails the build. */
export const ES_TRANSLATIONS: Translations = {
  common: {
    portfolio: 'Portafolio',
    skipToContent: 'Saltar al contenido',
    projectCount: (count: number) => `${count} ${count === 1 ? 'proyecto' : 'proyectos'}`,
  },
  pageTitles: {
    home: 'Inicio',
    projects: 'Proyectos',
    about: 'Sobre mí',
    contact: 'Contacto',
    notFound: 'Página no encontrada',
  },
  header: {
    homeLink: (name: string) => `${name} — inicio`,
    primaryNavigation: 'Principal',
    switchToLightTheme: 'Cambiar a tema claro',
    switchToDarkTheme: 'Cambiar a tema oscuro',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    languageSwitcher: 'Cambiar idioma',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    socialLinks: 'Redes sociales',
  },
  hero: {
    exploreProjects: 'Explorar proyectos',
    getInTouch: 'Contáctame',
    projectsStat: 'Proyectos',
    disciplinesStat: 'Disciplinas',
    servicesStat: 'Servicios',
  },
  featuredProject: {
    eyebrow: 'Trabajando actualmente en',
    visitProject: 'Visitar proyecto',
    seeAllProjects: 'Ver todos los proyectos',
  },
  servicesSection: {
    eyebrow: 'Lo que hago',
    title: 'Tecnología, ingeniería e idiomas',
    description:
      'Una combinación de ingeniería de producto y habilidades de comunicación para ayudar a los equipos a entregar con claridad.',
  },
  categoriesSection: {
    eyebrow: 'Disciplinas',
    title: 'Trabajo en todo el stack',
    description: 'Elige una disciplina para ir directo a los proyectos relacionados.',
  },
  callToAction: {
    title: 'Construyamos algo significativo.',
    description:
      'Estoy abierto a oportunidades de producto, ingeniería y colaboración en experiencias y plataformas digitales.',
    action: 'Contáctame',
  },
  projectsPage: {
    eyebrow: 'Proyectos',
    title: 'Trabajo seleccionado en distintas disciplinas',
    description:
      'Una vista estructurada de las iniciativas en las que he trabajado en producto, ingeniería, datos y entrega de plataformas.',
    filterLabel: 'Filtrar proyectos por disciplina',
    allFilter: 'Todos',
    empty: 'Aún no hay proyectos en esta disciplina.',
  },
  projectCard: {
    liveSite: 'Ver sitio',
    source: 'Código',
    technologies: 'Tecnologías',
  },
  aboutPage: {
    eyebrow: 'Sobre mí',
    title: 'Creando experiencias digitales cuidadas con mentalidad de producto.',
    skillsEyebrow: 'Herramientas',
    skillsTitle: 'Habilidades y tecnologías',
    experienceEyebrow: 'Trayectoria',
    experienceTitle: 'Experiencia',
    skillGroupLabel: (groupName: string) => `Habilidades de ${groupName}`,
  },
  contactPage: {
    eyebrow: 'Contacto',
    title: 'Construyamos algo significativo.',
    description:
      'Estoy abierto a oportunidades de producto, ingeniería y colaboración en experiencias y plataformas digitales.',
    preferredChannel: 'Canal preferido',
    sendEmail: 'Enviar con Gmail',
    chatOnWhatsApp: 'Escribir por WhatsApp',
    copyEmail: 'Copiar email',
    copied: '¡Copiado!',
    copiedAnnouncement: 'Email copiado al portapapeles',
  },
  notFoundPage: {
    title: 'Esta página se fue mar adentro.',
    description: 'La página que buscas no existe o fue movida.',
    backHome: 'Volver al inicio',
  },
};
