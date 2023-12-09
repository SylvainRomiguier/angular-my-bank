import { Route } from "@angular/router";

export const customersRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('./customers.page').then(m => m.CustomerPageComponent),
    },
    {
        path: ':customerId',
        loadComponent: () => import('./customer/customer.page').then(m => m.CustomerPageComponent),
    },
    // {
    //     path: ':customerId/accounts/:accountId',
    //     component: AccountDetailsComponent
    // },
    // {
    //     path: ':customerId/accounts/:accountId/transactions',
    //     component: TransactionListComponent
    // },
    // {
    //     path: ':customerId/accounts/:accountId/transactions/:transactionId',
    //     component: TransactionDetailsComponent
    // }
];