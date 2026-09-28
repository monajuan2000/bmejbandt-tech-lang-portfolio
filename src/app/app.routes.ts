import { Routes } from '@angular/router';

import { PageTitleKey } from '@core/i18n';

/** Each feature owns its routes and is lazy loaded into its own bundle. */
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('@features/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'projects',
    loadChildren: () => import('@features/projects/projects.routes').then((m) => m.PROJECTS_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () => import('@features/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () => import('@features/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
  {
    path: '**',
    title: 'notFound' satisfies PageTitleKey,
    loadComponent: () => import('@features/not-found/not-found-page.component').then((m) => m.NotFoundPageComponent),
  },
];
