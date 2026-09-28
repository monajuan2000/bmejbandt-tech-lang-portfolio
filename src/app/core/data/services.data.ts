import { ServiceOffering } from '@core/models';

export const SERVICE_OFFERINGS: readonly ServiceOffering[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Responsive, accessible, and fast web applications built with modern Angular and TypeScript.',
    icon: 'code',
  },
  {
    id: 'software-engineering',
    title: 'Software Engineering',
    description: 'Scalable architectures, clean APIs, and maintainable codebases designed to grow with the product.',
    icon: 'layers',
  },
  {
    id: 'cloud-delivery',
    title: 'Cloud & Delivery',
    description: 'CI/CD pipelines and cloud deployments that make shipping reliable and repeatable.',
    icon: 'cloud',
  },
  {
    id: 'english-for-tech',
    title: 'English for Tech',
    description: 'English language coaching for professionals working in technology and engineering teams.',
    icon: 'globe',
  },
];
