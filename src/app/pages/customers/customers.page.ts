import { Component, inject, signal } from '@angular/core';
import { CustomerListComponent } from './components/customersList/customer-list.component';
import { CustomerService } from 'src/app/services/Customer.abstract';
import { Customer } from 'src/app/models';

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
  errorMessage = signal<string>('');
  private customerService = inject(CustomerService);

  constructor() {
    try {
      this.customers.set(this.customerService.getCustomers());
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    }
  }

  addCustomer(customer: Customer) {
    try {
      this.customerService.createCustomer(customer);
      this.customers.set(this.customerService.getCustomers());
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    }
  }
  deleteCustomer(customer: Customer) {
    try {
      this.customerService.removeCustomer(customer.customerId);
      this.customers.set(this.customerService.getCustomers());
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    }
  }
  reloadCustomers() {
    try {
      this.customerService.loadCustomers();
      this.customers.set(this.customerService.getCustomers());
    } catch (error) {
      this.errorMessage.set((error as Error).message);
    }
  }
}
