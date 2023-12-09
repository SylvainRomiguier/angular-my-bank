import { Route } from '@angular/router';
import { isAuthenticated } from "src/app/middlewares/isAuthenticated";

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'customers',
        loadChildren: () => import('./pages/customers/customers.routes').then(m => m.customersRoutes),
        canActivate: [isAuthenticated]
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.page').then(m => m.LoginComponent)
    },
    {
        path: '**',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];