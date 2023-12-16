import { Component, inject, signal } from '@angular/core';
import { Account, Transaction } from 'src/app/models';
import { AccountComponent } from 'src/app/components/account/account.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from 'src/app/services/Customer.abstract';
import { CurrencyPipe, NgIf } from '@angular/common';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { AccountFormComponent } from 'src/app/components/account-form/account-form.component';
import { NotificationService } from 'src/app/services/NotificationService';

@Component({
  selector: 'app-account-page',
  standalone: true,
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.css'],
  imports: [
    AccountComponent,
    AccountFormComponent,
    RouterLink,
    NgIf,
    TransactionListComponent,
    TransactionFormComponent,
    CurrencyPipe,
  ],
})
export class AccountPageComponent {
  private route = inject(ActivatedRoute);
  private customerId = this.route.snapshot.params['customerId'];
  private accountId = this.route.snapshot.params['accountId'];
  private router = inject(Router);
  private customerService = inject(CustomerService);
  private notificationService = inject(NotificationService);

  account = signal<Account>({
    accountId: '',
    customerId: '',
    name: '',
    accountType: 'Checking',
    balance: 0,
    transactions: [],
  });
  edit = false;

  constructor() {
    try {
      this.account.set(
        this.customerService.getAccountById(this.customerId, this.accountId)
      );
    } catch (e) {
      this.notificationService.notify({
        message: (e as Error).message,
        action: 'error',
      });
      this.router.navigate([`/customers/${this.customerId}`]);
    }
  }

  onEdit() {
    this.edit = !this.edit;
  }

  onTransactionSubmit(transaction: Transaction) {
    try {
      this.account.set(
        this.customerService.performTransaction(
          this.account(),
          transaction.title,
          transaction.date,
          transaction.type,
          transaction.amount
        )
      );
      this.notificationService.notify({
        message: 'Transaction successful',
        action: 'success',
      });
    } catch (e) {
      this.notificationService.notify({
        message: (e as Error).message,
        action: 'error',
      });
    }
  }

  onSubmit(account: Account) {
    try {
      const customer = this.customerService.getCustomerById(this.customerId);
      this.customerService.updateAccount(customer, account);
      this.account.set(account);
      this.edit = false;
      this.notificationService.notify({
        message: 'Account updated',
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
