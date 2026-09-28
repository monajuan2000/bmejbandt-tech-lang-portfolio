/**
 * UI copy (labels, headings, buttons, accessibility text) in English.
 * This object defines the shape every other language must implement.
 * Portfolio content (projects, services, profile) lives in `core/data` as `LocalizedText`.
 */
export const EN_TRANSLATIONS = {
  common: {
    portfolio: 'Portfolio',
    skipToContent: 'Skip to content',
    projectCount: (count: number) => `${count} ${count === 1 ? 'project' : 'projects'}`,
  },
  pageTitles: {
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    notFound: 'Page not found',
  },
  header: {
    homeLink: (name: string) => `${name} — home`,
    primaryNavigation: 'Primary',
    switchToLightTheme: 'Switch to light theme',
    switchToDarkTheme: 'Switch to dark theme',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSwitcher: 'Change language',
  },
  footer: {
    rights: 'All rights reserved.',
    socialLinks: 'Social links',
  },
  hero: {
    exploreProjects: 'Explore projects',
    getInTouch: 'Get in touch',
    projectsStat: 'Projects',
    disciplinesStat: 'Disciplines',
    servicesStat: 'Services',
  },
  featuredProject: {
    eyebrow: 'Currently working on',
    visitProject: 'Visit project',
    seeAllProjects: 'See all projects',
  },
  servicesSection: {
    eyebrow: 'What I do',
    title: 'Technology, engineering and language',
    description: 'A blend of product engineering and communication skills to help teams ship with clarity.',
  },
  categoriesSection: {
    eyebrow: 'Disciplines',
    title: 'Work across the whole stack',
    description: 'Pick a discipline to jump straight into the related projects.',
  },
  callToAction: {
    title: "Let's build something meaningful.",
    description:
      "I'm open to product, engineering, and collaboration opportunities across digital experiences and platforms.",
    action: 'Get in touch',
  },
  projectsPage: {
    eyebrow: 'Projects',
    title: 'Selected work across disciplines',
    description:
      'A structured overview of the initiatives I have worked on across product, engineering, data, and platform delivery.',
    filterLabel: 'Filter projects by discipline',
    allFilter: 'All',
    empty: 'No projects in this discipline yet.',
  },
  projectCard: {
    liveSite: 'Live site',
    source: 'Source',
    technologies: 'Technologies',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'Creating thoughtful digital experiences with a product mindset.',
    skillsEyebrow: 'Toolkit',
    skillsTitle: 'Skills & technologies',
    experienceEyebrow: 'Journey',
    experienceTitle: 'Experience',
    skillGroupLabel: (groupName: string) => `${groupName} skills`,
  },
  contactPage: {
    eyebrow: 'Contact',
    title: "Let's build something meaningful.",
    description:
      "I'm open to product, engineering, and collaboration opportunities across digital experiences and platforms.",
    preferredChannel: 'Preferred channel',
    sendEmail: 'Send with Gmail',
    chatOnWhatsApp: 'Chat on WhatsApp',
    emailSubject: 'Hello from your portfolio',
    copyEmail: 'Copy email',
    copied: 'Copied!',
    copiedAnnouncement: 'Email copied to clipboard',
  },
  notFoundPage: {
    title: 'This page drifted out to sea.',
    description: 'The page you are looking for does not exist or has been moved.',
    backHome: 'Back to home',
  },
};

export type Translations = typeof EN_TRANSLATIONS;

export type PageTitleKey = keyof Translations['pageTitles'];
