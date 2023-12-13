import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models';

@Component({
  selector: 'app-transaction',
  standalone: true,
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  imports: [DatePipe, CurrencyPipe],
})
export class TransactionComponent {
  @Input() transaction!: Transaction;
}
