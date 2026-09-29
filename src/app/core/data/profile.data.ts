import { ProfileContent } from '@core/models';

// TODO: replace the placeholder LinkedIn URL with your real one.
const EMAIL = 'monajuan1000@gmail.com';
const PHONE_NUMBER = '+57 324 576 9762';

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
  emailSubject: { en: 'Hello from your portfolio', es: 'Hola desde tu portafolio' },
  phoneNumber: PHONE_NUMBER,
  whatsAppGreeting: {
    en: "Hi Juan! I saw your portfolio and I'd like to talk with you.",
    es: '¡Hola Juan! Vi tu portafolio y me gustaría hablar contigo.',
  },
  socialLinks: [
    { platform: 'email', label: { en: 'Email', es: 'Correo' }, handle: EMAIL, icon: 'mail' },
    { platform: 'whatsapp', label: { en: 'WhatsApp', es: 'WhatsApp' }, handle: PHONE_NUMBER, icon: 'whatsapp' },
    {
      platform: 'github',
      label: { en: 'GitHub', es: 'GitHub' },
      handle: '@monajuan2000',
      url: 'https://github.com/monajuan2000',
      icon: 'github',
    },
    {
      platform: 'linkedin',
      label: { en: 'LinkedIn', es: 'LinkedIn' },
      handle: 'Juan Esteban Mona',
      url: 'https://www.linkedin.com',
      icon: 'linkedin',
    },
  ],
};
