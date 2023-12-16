import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from 'src/app/services/Customer.abstract';
import { CustomerComponent } from 'src/app/components/customer/customer.component';
import { CustomerFormComponent } from 'src/app/components/customer-form/customer-form.component';
import { Account, Customer } from 'src/app/models';
import { NgIf } from '@angular/common';
import { AccountListComponent } from './components/account-list/account-list.component';
import { SnackbarComponent } from 'src/app/components/snackbar/snackbar.component';
import { NotificationService } from 'src/app/services/NotificationService';

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
    SnackbarComponent,
  ],
})
export class CustomerPageComponent {
  private route = inject(ActivatedRoute);
  private customerId = this.route.snapshot.params['customerId'];
  private customerService = inject(CustomerService);
  private router = inject(Router);
  private notificationService = inject(NotificationService);
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
    try {
      this.customer.set(this.customerService.getCustomerById(this.customerId));
    } catch (e) {
      this.router.navigate(['/customers']);
      this.notificationService.notify({
        message: (e as Error).message,
        action: 'error',
      });
    }
  }

  onEdit() {
    this.edit = !this.edit;
  }

  saveCustomer(customer: Customer) {
    try {
      this.customerService.updateCustomer(customer);
      this.customer.set(customer);
      this.edit = false;
      this.notificationService.notify({
        message: 'Customer updated successfully',
        action: 'success',
      });
    } catch (e) {
      this.notificationService.notify({
        message: (e as Error).message,
        action: 'error',
      });
    }
  }

  addAcount(account: Account) {
    try {
      const updatedCustomer = this.customerService.addAccountToCustomer(
        this.customer()!.customerId,
        account
      );
      this.customer.set(updatedCustomer);
      this.notificationService.notify({
        message: 'Account created successfully',
        action: 'success',
      });
    } catch (e) {
      this.notificationService.notify({
        message: (e as Error).message,
        action: 'error',
      });
    }
  }

  deleteAccount(account: Account) {
    try {
      const updatedCustomer = this.customerService.removeAccountFromCustomer(
        this.customer()!.customerId,
        account.accountId
      );
      this.customer.set(updatedCustomer);
      this.notificationService.notify({
        message: 'Account deleted successfully',
        action: 'success',
      });
    } catch (e) {
      this.notificationService.notify({
        message: (e as Error).message,
        action: 'error',
      });
    }
  }
}
