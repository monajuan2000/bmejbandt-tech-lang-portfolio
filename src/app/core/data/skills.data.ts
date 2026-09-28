import { SkillGroupContent } from '@core/models';

export const SKILL_GROUPS: readonly SkillGroupContent[] = [
  {
    id: 'frontend',
    name: { en: 'Frontend', es: 'Frontend' },
    icon: 'monitor',
    skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Angular Material', 'Accessibility'],
  },
  {
    id: 'backend',
    name: { en: 'Backend', es: 'Backend' },
    icon: 'server',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'PostgreSQL'],
  },
  {
    id: 'data',
    name: { en: 'Data & AI', es: 'Datos e IA' },
    icon: 'chart',
    skills: ['Python', 'SQL', 'Power BI', 'ETL'],
  },
  {
    id: 'cloud',
    name: { en: 'Cloud & DevOps', es: 'Cloud y DevOps' },
    icon: 'cloud',
    skills: ['GitHub Actions', 'Docker', 'Azure', 'Terraform'],
  },
];
