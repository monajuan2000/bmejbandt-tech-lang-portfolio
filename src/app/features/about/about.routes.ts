import { Routes } from '@angular/router';

import { PageTitleKey } from '@core/i18n';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    title: 'about' satisfies PageTitleKey,
    loadComponent: () => import('./about-page.component').then((m) => m.AboutPageComponent),
  },
];
