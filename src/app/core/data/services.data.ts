import { ServiceOfferingContent } from '@core/models';

export const SERVICE_OFFERINGS: readonly ServiceOfferingContent[] = [
  {
    id: 'web-development',
    title: { en: 'Web Development', es: 'Desarrollo web' },
    description: {
      en: 'Responsive, accessible, and fast web applications built with modern Angular and TypeScript.',
      es: 'Aplicaciones web responsive, accesibles y rápidas, construidas con Angular y TypeScript modernos.',
    },
    tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
    icon: 'code',
    accent: '#f472b6',
  },
  {
    id: 'software-engineering',
    title: { en: 'Software Engineering', es: 'Ingeniería de software' },
    description: {
      en: 'Scalable architectures, clean APIs, and maintainable codebases designed to grow with the product.',
      es: 'Arquitecturas escalables, APIs limpias y código mantenible, diseñados para crecer junto al producto.',
    },
    tags: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
    icon: 'layers',
    accent: '#818cf8',
  },
  {
    id: 'cloud-delivery',
    title: { en: 'Cloud & Delivery', es: 'Cloud y entrega' },
    description: {
      en: 'CI/CD pipelines and cloud deployments that make shipping reliable and repeatable.',
      es: 'Pipelines de CI/CD y despliegues en la nube que hacen las entregas confiables y repetibles.',
    },
    tags: ['GitHub Actions', 'Docker', 'Azure', 'Terraform'],
    icon: 'cloud',
    accent: '#2dd4bf',
  },
  {
    id: 'english-for-tech',
    title: { en: 'English for Tech', es: 'Inglés para tecnología' },
    description: {
      en: 'English language coaching for professionals working in technology and engineering teams.',
      es: 'Clases de inglés para profesionales que trabajan en equipos de tecnología e ingeniería.',
    },
    tags: [
      { en: 'Technical interviews', es: 'Entrevistas técnicas' },
      { en: 'Meetings & stand-ups', es: 'Reuniones y dailies' },
      { en: 'Technical writing', es: 'Redacción técnica' },
    ],
    icon: 'globe',
    accent: '#d4af37',
    featured: true,
  },
];
