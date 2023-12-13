import { Route } from "@angular/router";

export const customersRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('src/app/pages/customers/customers.page').then(m => m.CustomersPageComponent),
    },
    {
        path: ':customerId',
        loadComponent: () => import('src/app/pages/customer/customer.page').then(m => m.CustomerPageComponent),
    },
    {
        path: ':customerId/accounts/:accountId',
        loadComponent: () => import('src/app/pages/account/account.page').then(m => m.AccountPageComponent),
    },
    // {
    //     path: ':customerId/accounts/:accountId/transactions',
    //     component: TransactionListComponent
    // },
    // {
    //     path: ':customerId/accounts/:accountId/transactions/:transactionId',
    //     component: TransactionDetailsComponent
    // }
];