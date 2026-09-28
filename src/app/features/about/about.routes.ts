import { Routes } from '@angular/router';

export const ABOUT_ROUTES: Routes = [
  {
    path: '',
    title: 'About',
    loadComponent: () => import('./about-page.component').then((m) => m.AboutPageComponent),
  },
];
