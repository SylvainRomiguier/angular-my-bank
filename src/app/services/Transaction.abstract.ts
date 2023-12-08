import { Injectable } from '@angular/core';
import { Account, Transaction, TransactionType } from '../models';
import { InMemoryTransactionService } from './Transaction.InMemory.service';

@Injectable({
    providedIn: 'root',
    useClass: InMemoryTransactionService
  })
export abstract class TransactionService {
  // Add a new transaction to the account
  abstract addTransaction(
    account: Account,
    type: TransactionType,
    amount: number
  ): void;
  // Remove a transaction from the account (if needed)
  abstract removeTransaction(account: Account, transaction: Transaction): void;
}
