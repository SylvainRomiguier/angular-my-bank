import { NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from 'src/app/models';
import { AccountComponent } from '../account/account.component';
import { AccountFormComponent } from '../account-form/account-form.component';

@Component({
  selector: 'app-account-list',
  standalone: true,
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  imports: [NgForOf, AccountComponent, AccountFormComponent, NgIf],
})
export class AccountListComponent {
  @Input() customerId!: string;
  @Input() accounts: Account[] = [];
  @Output() onAddAccount = new EventEmitter<Account>();
  @Output() onDeleteAccount = new EventEmitter<Account>();
  edit = false;
  onClose() {
    this.edit = false;
  }

  onOpen() {
    this.edit = true;
  }

  onSubmit(account:Account) {
    this.onAddAccount.emit(account);
    this.edit = false;
  }

  onDelete(account:Account) {
    this.onDeleteAccount.emit(account);
  }
}
