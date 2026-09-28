import { Experience } from '@core/models';

/**
 * Professional timeline rendered on the About page. The section stays hidden while this list is empty.
 *
 * Example entry:
 * {
 *   id: 'company-role',
 *   role: 'Software Engineer',
 *   organization: 'Company Name',
 *   period: '2023 — Present',
 *   description: 'One sentence about the scope of the role.',
 *   highlights: ['Measurable achievement', 'Another achievement'],
 * }
 */
export const EXPERIENCE: readonly Experience[] = [];
