import { ProcessStepContent } from '@core/models';

/** Ordered stages of how a project is run, rendered as a numbered timeline. */
export const WORK_PROCESS_STEPS: readonly ProcessStepContent[] = [
  {
    id: 'discover',
    title: { en: 'Discover', es: 'Descubrir' },
    description: {
      en: 'I learn your goals, users, and constraints before writing a single line of code.',
      es: 'Entiendo tus objetivos, usuarios y restricciones antes de escribir una sola línea de código.',
    },
    icon: 'search',
  },
  {
    id: 'design',
    title: { en: 'Design', es: 'Diseñar' },
    description: {
      en: 'I shape the architecture, flows, and scope so the plan is clear and measurable.',
      es: 'Defino la arquitectura, los flujos y el alcance para que el plan sea claro y medible.',
    },
    icon: 'pen',
  },
  {
    id: 'build',
    title: { en: 'Build', es: 'Construir' },
    description: {
      en: 'I build in short iterations with clean code, tests, and visible progress.',
      es: 'Desarrollo en iteraciones cortas con código limpio, pruebas y avances visibles.',
    },
    icon: 'code',
  },
  {
    id: 'deliver',
    title: { en: 'Deliver', es: 'Entregar' },
    description: {
      en: 'I ship through CI/CD, document the work, and support the launch so the product keeps growing.',
      es: 'Despliego con CI/CD, documento el trabajo y acompaño el lanzamiento para que el producto siga creciendo.',
    },
    icon: 'rocket',
  },
];
