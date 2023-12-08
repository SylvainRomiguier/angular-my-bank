import { Transaction, Account, TransactionType } from '../models';
import { TransactionService } from './Transaction.abstract';

export class InMemoryTransactionService implements TransactionService {
  // Add a new transaction to the account
  addTransaction(
    account: Account,
    type: TransactionType,
    amount: number
  ): void {
    const newTransaction: Transaction = {
      transactionId: this.generateTransactionId(),
      accountId: account.accountId,
      type,
      amount,
      timestamp: new Date(),
    };

    // Update the account balance
    if (type === 'Deposit') {
      account.balance += amount;
      // Add the new transaction to the account
      account.transactions.push(newTransaction);
      return;
    }

    // Check if withdrawal amount is less than or equal to the current balance
    if (amount <= account.balance) {
      account.balance -= amount;
      // Add the new transaction to the account
      account.transactions.push(newTransaction);
    } else {
      console.error('Insufficient funds for withdrawal');
    }
  }

  // Remove a transaction from the account (if needed)
  removeTransaction(account: Account, transaction: Transaction): void {
    // Remove the transaction from the account's transactions array
    account.transactions = account.transactions.filter(
      (t) => t.transactionId !== transaction.transactionId
    );

    // Adjust the account balance based on the removed transaction
    if (transaction.type === 'Deposit') {
      account.balance -= transaction.amount;
    } else {
      account.balance += transaction.amount;
    }
  }

  // Generate a unique transaction ID (simple example)
  private generateTransactionId(): string {
    return `transaction-${Math.random().toString(36).substring(2, 9)}`;
  }
}
