import { AppPageComponent } from './app/app.page';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { CustomerService } from './app/services/Customer.abstract';
import { LocalStorageCustomerService } from './app/services/Customer.LocalStorage.service';
import { appRoutes } from './app/app.routes';
import { AuthService } from './app/services/Auth.abstract';
import { InMemoryAuthService } from './app/services/Auth.InMemory.service';


// this is the IOC container, you can use any implementation corresponding to an abstract class injected in the application
// for example, you can use the LocalStorageCustomerService and later you can implement a CustomerService that uses a REST API
// there is an example there with the AuthServiceMock used in a test.
bootstrapApplication(AppPageComponent, {
  providers: [
    provideRouter(appRoutes),
    {provide: AuthService, useClass: InMemoryAuthService},
    { provide: CustomerService, useClass: LocalStorageCustomerService },
  ],
});
