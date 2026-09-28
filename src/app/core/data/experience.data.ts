import { ExperienceContent } from '@core/models';

/**
 * Professional timeline rendered on the About page. The section stays hidden while this list is empty.
 *
 * Example entry:
 * {
 *   id: 'company-role',
 *   role: { en: 'Software Engineer', es: 'Ingeniero de Software' },
 *   organization: 'Company Name',
 *   period: { en: '2023 — Present', es: '2023 — Actualidad' },
 *   description: { en: 'Scope of the role.', es: 'Alcance del rol.' },
 *   highlights: [{ en: 'Measurable achievement', es: 'Logro medible' }],
 * }
 */
export const EXPERIENCE: readonly ExperienceContent[] = [];
