import { ServiceOfferingContent } from '@core/models';

export const SERVICE_OFFERINGS: readonly ServiceOfferingContent[] = [
  {
    id: 'web-development',
    title: { en: 'Web Development', es: 'Desarrollo web' },
    description: {
      en: 'Responsive, accessible, and fast web applications built with modern Angular and TypeScript.',
      es: 'Aplicaciones web responsive, accesibles y rápidas, construidas con Angular y TypeScript modernos.',
    },
    icon: 'code',
  },
  {
    id: 'software-engineering',
    title: { en: 'Software Engineering', es: 'Ingeniería de software' },
    description: {
      en: 'Scalable architectures, clean APIs, and maintainable codebases designed to grow with the product.',
      es: 'Arquitecturas escalables, APIs limpias y código mantenible, diseñados para crecer junto al producto.',
    },
    icon: 'layers',
  },
  {
    id: 'cloud-delivery',
    title: { en: 'Cloud & Delivery', es: 'Cloud y entrega' },
    description: {
      en: 'CI/CD pipelines and cloud deployments that make shipping reliable and repeatable.',
      es: 'Pipelines de CI/CD y despliegues en la nube que hacen las entregas confiables y repetibles.',
    },
    icon: 'cloud',
  },
  {
    id: 'english-for-tech',
    title: { en: 'English for Tech', es: 'Inglés para tecnología' },
    description: {
      en: 'English language coaching for professionals working in technology and engineering teams.',
      es: 'Clases de inglés para profesionales que trabajan en equipos de tecnología e ingeniería.',
    },
    icon: 'globe',
  },
];
