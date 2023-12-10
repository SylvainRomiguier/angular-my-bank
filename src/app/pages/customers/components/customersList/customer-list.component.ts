// customer-list.component.ts

import { Component, inject } from '@angular/core';
import { CustomerService } from '../../../../services/Customer.abstract';
import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';
import { CustomerComponent } from '../customer/customer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  imports: [DatePipe, CurrencyPipe, NgForOf, NgIf, CustomerComponent, RouterLink],
})
export class CustomerListComponent {
  customerService = inject(CustomerService);
  customers = this.customerService.getCustomers();
}
