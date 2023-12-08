import { Account, AccountType, Customer, TransactionType } from '../models';
import { AccountService } from './Account.abstract';
import { TransactionService } from './Transaction.abstract';

export class InMemoryAccountService implements AccountService {
  private accounts: Account[] = [];

  constructor(private transactionService: TransactionService) {}

  // Get all accounts
  getAccounts(): Account[] {
    return this.accounts;
  }

  // Get an account by ID
  getAccountById(accountId: string): Account | undefined {
    return this.accounts.find((account) => account.accountId === accountId);
  }

  // Get all accounts for a customer
  getAccountsForCustomer(customerId: string): Account[] {
    return this.accounts.filter((account) => account.customerId === customerId);
  }

  // Create a new account
  createAccount(customer: Customer, accountType: AccountType): void {
    const newAccount: Account = {
      accountId: this.generateAccountId(),
      customerId: customer.customerId,
      accountType,
      balance: 0,
      transactions: [],
    };

    customer.accounts.push(newAccount);
    this.accounts.push(newAccount);
  }

  // Remove an account (if needed)
  removeAccount(accountId: string): void {
    this.accounts = this.accounts.filter(
      (account) => account.accountId !== accountId
    );
  }

  // Perform a transaction on the account
  performTransaction(
    accountId: string,
    type: TransactionType,
    amount: number
  ): void {
    const account = this.getAccountById(accountId);

    if (account) {
      this.transactionService.addTransaction(account, type, amount);
    } else {
      console.error('Account not found');
    }
  }

  // Generate a unique account ID (simple example)
  private generateAccountId(): string {
    return `account-${Math.random().toString(36).substring(2, 9)}`;
  }
}
