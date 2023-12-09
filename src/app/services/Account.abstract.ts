import { Injectable } from '@angular/core';
import { Account, AccountType, Customer, TransactionType } from '../models';
import { InMemoryAccountService } from './Account.InMemory.service';

@Injectable({
  providedIn: 'root',
  useClass: InMemoryAccountService
})
export abstract class AccountService {
  // Get all accounts
  abstract getAccounts(): Account[]; 

  // Get an account by ID
  abstract getAccountById(accountId: string): Account | undefined;

  // Get all accounts for a customer
  abstract getAccountsForCustomer(customerId: string): Account[];

  // Create a new account
  abstract createAccount(customer: Customer, name: string, accountType: AccountType): void;

  // Remove an account (if needed)
  abstract removeAccount(accountId: string): void; 

  // Perform a transaction on the account
  abstract performTransaction(
    accountId: string,
    type: TransactionType,
    amount: number
  ): void;

}
