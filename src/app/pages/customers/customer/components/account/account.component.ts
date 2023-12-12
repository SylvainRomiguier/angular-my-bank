import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonDangerComponent } from 'src/app/components/molecules/button-danger/button-danger.component';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports: [CurrencyPipe, ButtonDangerComponent],
})
export class AccountComponent {
  @Input() account!: Account;
  @Output() onDeleteAccount = new EventEmitter<Account>();

  delete() {
    this.onDeleteAccount.emit(this.account);
  }
}
