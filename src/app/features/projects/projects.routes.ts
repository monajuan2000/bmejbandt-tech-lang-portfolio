import { Routes } from '@angular/router';

import { PageTitleKey } from '@core/i18n';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    title: 'projects' satisfies PageTitleKey,
    loadComponent: () => import('./projects-page.component').then((m) => m.ProjectsPageComponent),
  },
];
