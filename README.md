# Bank

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2 and migrated to version 16.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Architecture
```
├── app
│   ├── app.page.spec.ts
│   ├── app.page.ts
│   ├── app.routes.ts
│   ├── components
│   │   ├── account
│   │   │   ├── account.component.css
│   │   │   ├── account.component.html
│   │   │   ├── account.component.spec.ts
│   │   │   └── account.component.ts
│   │   ├── account-form
│   │   │   ├── account-form.component.css
│   │   │   ├── account-form.component.html
│   │   │   ├── account-form.component.spec.ts
│   │   │   └── account-form.component.ts
│   │   ├── button-danger
│   │   │   ├── button-danger.component.spec.ts
│   │   │   └── button-danger.component.ts
│   │   ├── customer
│   │   │   ├── customer.component.css
│   │   │   ├── customer.component.html
│   │   │   ├── customer.component.spec.ts
│   │   │   └── customer.component.ts
│   │   ├── customer-form
│   │   │   ├── customer-form.component.css
│   │   │   ├── customer-form.component.html
│   │   │   ├── customer-form.component.spec.ts
│   │   │   └── customer-form.component.ts
│   │   ├── label-value.component.ts
│   │   ├── layout
│   │   │   ├── layout.component.css
│   │   │   ├── layout.component.html
│   │   │   ├── layout.component.spec.ts
│   │   │   └── layout.component.ts
│   │   └── snackbar
│   │       ├── snackbar.component.css
│   │       ├── snackbar.component.html
│   │       ├── snackbar.component.spec.ts
│   │       └── snackbar.component.ts
│   ├── middlewares
│   │   └── isAuthenticated.ts
│   ├── models
│   │   ├── Account.ts
│   │   ├── AccountType.ts
│   │   ├── Customer.ts
│   │   ├── errors
│   │   │   ├── DuplicateError.ts
│   │   │   ├── index.ts
│   │   │   └── NotFoundError.ts
│   │   ├── index.ts
│   │   ├── Transaction.ts
│   │   └── TransactionType.ts
│   ├── pages
│   │   ├── account
│   │   │   ├── account.page.css
│   │   │   ├── account.page.html
│   │   │   ├── account.page.ts
│   │   │   └── components
│   │   │       ├── transaction
│   │   │       │   ├── transaction.component.css
│   │   │       │   ├── transaction.component.html
│   │   │       │   ├── transaction.component.spec.ts
│   │   │       │   └── transaction.component.ts
│   │   │       ├── transaction-form
│   │   │       │   ├── transaction-form.component.css
│   │   │       │   ├── transaction-form.component.html
│   │   │       │   ├── transaction-form.component.spec.ts
│   │   │       │   └── transaction-form.component.ts
│   │   │       └── transaction-list
│   │   │           ├── transaction-list.component.css
│   │   │           ├── transaction-list.component.html
│   │   │           ├── transaction-list.component.spec.ts
│   │   │           └── transaction-list.component.ts
│   │   ├── customer
│   │   │   ├── components
│   │   │   │   └── account-list
│   │   │   │       ├── account-list.component.css
│   │   │   │       ├── account-list.component.html
│   │   │   │       ├── account-list.component.spec.ts
│   │   │   │       └── account-list.component.ts
│   │   │   ├── customer.page.css
│   │   │   ├── customer.page.html
│   │   │   └── customer.page.ts
│   │   ├── customers
│   │   │   ├── components
│   │   │   │   └── customersList
│   │   │   │       ├── customer-list.component.css
│   │   │   │       ├── customer-list.component.html
│   │   │   │       └── customer-list.component.ts
│   │   │   ├── customers.page.ts
│   │   │   └── customers.routes.ts
│   │   └── login
│   │       ├── login.page.html
│   │       └── login.page.ts
│   └── services
│       ├── Auth.abstract.ts
│       ├── Auth.InMemory.service.ts
│       ├── Auth.Mock.service.ts
│       ├── Customer.abstract.ts
│       ├── Customer.LocalStorage.service.ts
│       ├── customers.sample.json
│       └── NotificationService.ts
├── assets
│   └── fontawesome
│       ├── css
│       │   ├── all.css
│       │   ├── all.min.css
│       │   ├── brands.css
│       │   ├── brands.min.css
│       │   ├── fontawesome.css
│       │   ├── fontawesome.min.css
│       │   ├── regular.css
│       │   ├── regular.min.css
│       │   ├── solid.css
│       │   ├── solid.min.css
│       │   ├── svg-with-js.css
│       │   ├── svg-with-js.min.css
│       │   ├── v4-font-face.css
│       │   ├── v4-font-face.min.css
│       │   ├── v4-shims.css
│       │   ├── v4-shims.min.css
│       │   ├── v5-font-face.css
│       │   └── v5-font-face.min.css
│       └── webfonts
│           ├── fa-brands-400.ttf
│           ├── fa-brands-400.woff2
│           ├── fa-regular-400.ttf
│           ├── fa-regular-400.woff2
│           ├── fa-solid-900.ttf
│           ├── fa-solid-900.woff2
│           ├── fa-v4compatibility.ttf
│           └── fa-v4compatibility.woff2
├── favicon.ico
├── index.html
├── main.ts
└── styles.css
```

Top level components folder contains shared components across further pages.

Pages folder contains a folder for each page.

Injected services calls and main entity wrapped in a signal are only located in pages, all the children components only use the signal consumer and emit events to the page to call external services and mutate the entity, which, wrapped in a signal, will then propagate the mutation to all signal consumers in children components.

This way components are decoupled from fetching logic, only pages should handle this logic.

Each pages folder includes a components folder used only in this page (scoped domain).

Services are defined through implementations of an abstract class. This allows to easily switch from one implementation to an other in the IOC definition in main.ts - for example from a fetch API implementation to an In Memory implementation for testing purposes -.
