import { NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Transaction } from 'src/app/models';
import { TransactionComponent } from 'src/app/pages/account/components/transaction/transaction.component';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  imports: [TransactionComponent, NgForOf],
})
export class TransactionListComponent {
  @Input() transactions: Transaction[] = [];
}
