import { Component, inject, signal } from '@angular/core';
import { CustomerListComponent } from './components/customersList/customer-list.component';
import { CustomerService } from 'src/app/services/Customer.abstract';
import { Customer } from 'src/app/models';
import { NotificationService } from 'src/app/services/NotificationService';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  template: `<app-customer-list
    [customers]="customers()"
    (onAddCustomer)="addCustomer($event)"
    (onDeleteCustomer)="deleteCustomer($event)"
    (onReloadCustomers)="reloadCustomers()"
  ></app-customer-list>`,
  styles: [''],
  imports: [CustomerListComponent],
})
export class CustomersPageComponent {
  customers = signal<Customer[]>([]);
  private customerService = inject(CustomerService);
  private notificationService = inject(NotificationService);

  constructor() {
    try {
      this.customers.set(this.customerService.getCustomers());
    } catch (error) {
      this.notificationService.notify({
        message: (error as Error).message,
        action: 'error',
      });
    }
  }

  addCustomer(customer: Customer) {
    try {
      this.customerService.createCustomer(customer);
      this.customers.set(this.customerService.getCustomers());
      this.notificationService.notify({
        message: 'Customer created successfully',
        action: 'success',
      });
    } catch (error) {
      this.notificationService.notify({
        message: (error as Error).message,
        action: 'error',
      });
    }
  }
  deleteCustomer(customer: Customer) {
    try {
      this.customerService.removeCustomer(customer.customerId);
      this.customers.set(this.customerService.getCustomers());
      this.notificationService.notify({
        message: 'Customer deleted successfully',
        action: 'success',
      });
    } catch (error) {
      this.notificationService.notify({
        message: (error as Error).message,
        action: 'error',
      });
    }
  }
  reloadCustomers() {
    try {
      this.customerService.loadCustomers();
      this.customers.set(this.customerService.getCustomers());
      this.notificationService.notify({
        message: 'Customers reloaded successfully',
        action: 'success',
      });
    } catch (error) {
      this.notificationService.notify({
        message: (error as Error).message,
        action: 'error',
      });
    }
  }
}
