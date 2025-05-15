import { Routes } from '@angular/router';
import { HomeComponent } from '../shared/components/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },

    //   {
    //     path: 'projects',
    //     children: [
    //       {
    //         path: 'language',
    //         loadChildren: () => import('./projects/language/language.module').then(m => m.LanguageModule),
    //       },
    //       {
    //         path: 'code',
    //         loadChildren: () => import('./projects/code/code.module').then(m => m.CodeModule),
    //       },
    //       {
    //         path: 'others',
    //         loadChildren: () => import('./projects/others/others.module').then(m => m.OthersModule),
    //       },
    //     ],
    //   },
    { path: '**', redirectTo: 'home' },
];

