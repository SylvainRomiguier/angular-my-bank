// customer-list.component.ts

import { Component, inject } from '@angular/core';
import { CustomerService } from '../../../../services/Customer.abstract';
import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { RouterLink } from '@angular/router';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { Customer } from 'src/app/models';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [
    DatePipe,
    CurrencyPipe,
    NgForOf,
    NgIf,
    CustomerComponent,
    RouterLink,
    CustomerFormComponent,
  ],
})
export class CustomerListComponent {
  customerService = inject(CustomerService);
  customers = this.customerService.getCustomers();
  edit = false;

  onEdit() {
    this.edit = !this.edit;
  }

  onSaveCustomer(customer: Customer) {
    this.customerService.createCustomer(
      customer.customerId,
      customer.firstName,
      customer.lastName,
      customer.address,
      customer.phoneNumber,
      customer.email,
      customer.dateOfBirth
    );
    this.edit = false;
  }
}
