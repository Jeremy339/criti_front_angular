import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'admin', loadChildren:()=>import('./admin/admin.module').then(adm=>adm.AdminModule)},
    {path: 'auth', loadChildren:()=>import('./auth/auth.module').then(aut=>aut.AuthModule)},
    {path: 'web', loadChildren:()=>import('./web/web.module').then(aut=>aut.WebModule)},
];
