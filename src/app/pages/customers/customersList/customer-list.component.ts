// customer-list.component.ts

import { Component, inject } from '@angular/core';
import { CustomerService } from '../../../services/Customer.abstract';
import { Customer } from 'src/app/models';
import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [DatePipe, CurrencyPipe, NgForOf, NgIf],
})
export class CustomerListComponent {
  customers = inject(CustomerService).getCustomers();
  selectedCustomer: Customer | undefined;
}
