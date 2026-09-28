import { ProfileContent } from '@core/models';

// TODO: replace the placeholder email and LinkedIn URL with your real ones.
const EMAIL = 'hello@example.com';

export const PROFILE: ProfileContent = {
  fullName: 'Juan Esteban Mona',
  initials: 'JM',
  role: { en: 'Software Engineer', es: 'Ingeniero de Software' },
  availability: { en: 'Open to new opportunities', es: 'Disponible para nuevas oportunidades' },
  headline: {
    en: 'Building products, systems, and experiences that',
    es: 'Construyo productos, sistemas y experiencias que',
  },
  headlineHighlight: { en: 'move ideas forward.', es: 'impulsan las ideas.' },
  summary: {
    en: 'I design and develop digital products across product strategy, front-end engineering, backend systems, and cloud delivery.',
    es: 'Diseño y desarrollo productos digitales abarcando estrategia de producto, ingeniería front-end, sistemas backend y entrega en la nube.',
  },
  about: [
    {
      en: 'I work at the intersection of design, engineering, and business goals. I enjoy turning abstract ideas into useful products with clear strategy, strong execution, and measurable value.',
      es: 'Trabajo en la intersección entre diseño, ingeniería y objetivos de negocio. Disfruto convertir ideas abstractas en productos útiles con una estrategia clara, una ejecución sólida y un valor medible.',
    },
    {
      en: 'Beyond software, I help professionals in technology and engineering communicate with confidence in English, bridging technical skills and global collaboration.',
      es: 'Más allá del software, ayudo a profesionales de tecnología e ingeniería a comunicarse con confianza en inglés, conectando sus habilidades técnicas con la colaboración global.',
    },
  ],
  email: EMAIL,
  socialLinks: [
    { platform: 'email', label: 'Email', handle: EMAIL, url: `mailto:${EMAIL}`, icon: 'mail' },
    {
      platform: 'github',
      label: 'GitHub',
      handle: '@monajuan2000',
      url: 'https://github.com/monajuan2000',
      icon: 'github',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      handle: 'Juan Esteban Mona',
      url: 'https://www.linkedin.com',
      icon: 'linkedin',
    },
  ],
};
