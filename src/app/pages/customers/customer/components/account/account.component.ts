import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ButtonDangerComponent } from 'src/app/components/molecules/button-danger/button-danger.component';
import { Account } from 'src/app/models';
import { CustomerService } from 'src/app/services/Customer.abstract';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports: [CurrencyPipe, ButtonDangerComponent],
})
export class AccountComponent {
  @Input() account!: Account;
  private customerService = inject(CustomerService);
  onDelete() {
    this.customerService.removeAccountFromCustomer(this.account.customerId, this.account.accountId);
  }
}
