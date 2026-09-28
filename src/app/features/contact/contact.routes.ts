import { Routes } from '@angular/router';

import { PageTitleKey } from '@core/i18n';

export const CONTACT_ROUTES: Routes = [
  {
    path: '',
    title: 'contact' satisfies PageTitleKey,
    loadComponent: () => import('./contact-page.component').then((m) => m.ContactPageComponent),
  },
];
