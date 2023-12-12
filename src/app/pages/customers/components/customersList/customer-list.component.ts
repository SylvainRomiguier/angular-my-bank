// customer-list.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() customers: Customer[] = [];
  @Output() onAddCustomer = new EventEmitter<Customer>();
  @Output() onDeleteCustomer = new EventEmitter<Customer>();
  @Output() onReloadCustomers = new EventEmitter<void>();
  edit = false;

  onEdit() {
    this.edit = !this.edit;
  }

  saveNewCustomer(customer: Customer) {
    this.onAddCustomer.emit(customer);
    this.edit = false;
  }

  deleteCustomer(customer: Customer) {
    this.onDeleteCustomer.emit(customer);
  }

  reloadCustomers() {
    this.onReloadCustomers.emit();
  }
}
