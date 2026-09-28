import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    title: 'Projects',
    loadComponent: () => import('./projects-page.component').then((m) => m.ProjectsPageComponent),
  },
];
