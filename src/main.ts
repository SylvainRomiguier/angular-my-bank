import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CustomerService } from './app/services/Customer.abstract';
// import { InMemoryCustomerService } from './app/services/Customer.InMemory.service';
import { LocalStorageCustomerService } from './app/services/Customer.LocalStorage.service';
import { AccountService } from './app/services/Account.abstract';
import { InMemoryAccountService } from './app/services/Account.InMemory.service';
import { TransactionService } from './app/services/Transaction.abstract';
import { InMemoryTransactionService } from './app/services/Transaction.InMemory.service';
import { appRoutes } from './app/app.routes';
import { AuthService } from './app/services/Auth.abstract';
import { InMemoryAuthService } from './app/services/Auth.InMemory.service';


// this is the IOC container, you can use any implementation corresponding to an abstract class injected in the application
// for example, you can use the InMemoryCustomerService instead of the LocalStorageCustomerService
// later you can implement a CustomerService that uses a REST API
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    {provide: AuthService, useClass: InMemoryAuthService},
    { provide: CustomerService, useClass: LocalStorageCustomerService },
    { provide: AccountService, useClass: InMemoryAccountService },
    { provide: TransactionService, useClass: InMemoryTransactionService },
  ],
});
