import { NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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
  edit = false;
  onClose() {
    this.edit = false;
  }

  onOpen() {
    this.edit = true;
  }

  onSubmit() {
    this.edit = false;
  }
}
