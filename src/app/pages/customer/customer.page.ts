import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from 'src/app/services/Customer.abstract';
import { CustomerComponent } from 'src/app/components/customer/customer.component';
import { CustomerFormComponent } from 'src/app/components/customer-form/customer-form.component';
import { Account, Customer } from 'src/app/models';
import { NgIf } from '@angular/common';
import { AccountListComponent } from './components/account-list/account-list.component';

@Component({
  selector: 'app-customer-page',
  standalone: true,
  templateUrl: `./customer.page.html`,
  styleUrls: ['./customer.page.css'],
  imports: [
    CustomerComponent,
    CustomerFormComponent,
    NgIf,
    RouterLink,
    AccountListComponent,
  ],
})
export class CustomerPageComponent {
  private route = inject(ActivatedRoute);
  private customerId = this.route.snapshot.params['customerId'];
  private customerService = inject(CustomerService);
  private router = inject(Router);
  customer = signal<Customer>({
    customerId: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: new Date(),
    accounts: [],
  });
  edit = false;

  constructor() {
    const loadedCustomer = this.customerService.getCustomerById(
      this.customerId
    );
    if (!loadedCustomer) {
      this.router.navigate(['/customers']);
      return;
    }
    this.customer.set(loadedCustomer);
  }

  onEdit() {
    this.edit = !this.edit;
  }

  saveCustomer(customer: Customer) {
    this.customerService.updateCustomer(customer);
    this.customer.set(customer);
    this.edit = false;
  }

  addAcount(account: Account) {
    const updatedCustomer = this.customerService.addAccountToCustomer(
      this.customer()!.customerId,
      account
    );
    this.customer.set(updatedCustomer);
  }

  deleteAccount(account: Account) {
    const updatedCustomer = this.customerService.removeAccountFromCustomer(
      this.customer()!.customerId,
      account.accountId
    );
    this.customer.set(updatedCustomer);
  }
}
