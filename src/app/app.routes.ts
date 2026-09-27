import { Routes } from '@angular/router';

import { AboutComponent } from './features/about/about.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './features/home/home.component';
import { ProjectsComponent } from './features/projects/projects.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'home' },
];

