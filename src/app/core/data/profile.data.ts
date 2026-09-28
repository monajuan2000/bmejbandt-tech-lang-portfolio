import { Profile } from '@core/models';

// TODO: replace the placeholder email and LinkedIn URL with your real ones.
const EMAIL = 'hello@example.com';

export const PROFILE: Profile = {
  fullName: 'Juan Esteban Mona',
  initials: 'JM',
  role: 'Software Engineer',
  availability: 'Open to new opportunities',
  headline: 'Building products, systems, and experiences that',
  headlineHighlight: 'move ideas forward.',
  summary:
    'I design and develop digital products across product strategy, front-end engineering, backend systems, and cloud delivery.',
  about: [
    'I work at the intersection of design, engineering, and business goals. I enjoy turning abstract ideas into useful products with clear strategy, strong execution, and measurable value.',
    'Beyond software, I help professionals in technology and engineering communicate with confidence in English, bridging technical skills and global collaboration.',
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
