import { SkillGroup } from '@core/models';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'monitor',
    skills: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'Angular Material', 'Accessibility'],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT', 'PostgreSQL'],
  },
  {
    id: 'data',
    name: 'Data & AI',
    icon: 'chart',
    skills: ['Python', 'SQL', 'Power BI', 'ETL'],
  },
  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    icon: 'cloud',
    skills: ['GitHub Actions', 'Docker', 'Azure', 'Terraform'],
  },
];
