import { Routes } from '@angular/router';

import { PageTitleKey } from '@core/i18n';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    title: 'home' satisfies PageTitleKey,
    loadComponent: () => import('./home-page.component').then((m) => m.HomePageComponent),
  },
];
