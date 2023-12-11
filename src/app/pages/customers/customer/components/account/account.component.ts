import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account',
  standalone: true,
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  imports: [CurrencyPipe],
})
export class AccountComponent {
  @Input() account!: Account;
}
