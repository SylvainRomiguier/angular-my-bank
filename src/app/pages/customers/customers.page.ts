import { Component, OnInit, inject, signal } from '@angular/core';
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
  private customerService = inject(CustomerService);

  constructor() {
    this.customers.set(this.customerService.getCustomers());
  }

  addCustomer(customer: Customer) {
    this.customerService.createCustomer(customer);
    this.customers.set(this.customerService.getCustomers());
  }
  deleteCustomer(customer: Customer) {
    this.customerService.removeCustomer(customer.customerId);
    this.customers.set(this.customerService.getCustomers());
  }
  reloadCustomers() {
    this.customerService.loadCustomers();
    this.customers.set(this.customerService.getCustomers());
  }
}
