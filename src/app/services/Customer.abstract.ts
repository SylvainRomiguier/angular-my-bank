import { Injectable } from '@angular/core';
import { Account, Customer, TransactionType } from '../models';
import { LocalStorageCustomerService } from './Customer.LocalStorage.service';

@Injectable({
  providedIn: 'root',
  useClass: LocalStorageCustomerService,
})
export abstract class CustomerService {
  // Get all customers
  abstract getCustomers(): Customer[];

  // Get a customer by ID
  abstract getCustomerById(customerId: string): Customer;

  // Get a customer by email
  abstract getCustomerByEmail(customerEmail: string): Customer;

  // Create a new customer
  abstract createCustomer(customer: Customer): Customer;

  // Update a customer
  abstract updateCustomer(customer: Customer): Customer;

  // Remove a customer (if needed)
  abstract removeCustomer(customerId: string): void;

  // Add an account to a customer
  abstract addAccountToCustomer(customerId: string, account: Account): Customer;

  // Remove an account from a customer
  abstract removeAccountFromCustomer(
    customerId: string,
    accountId: string
  ): Customer;

  abstract loadCustomers(): void;

  // Get an account by ID
  abstract getAccountById(customerId: string, accountId: string): Account;

  // Update an account
  abstract updateAccount(customer: Customer, account: Account): void;

  // Perform a transaction on the account
  abstract performTransaction(
    account: Account,
    title:string,
    date: Date,
    type: TransactionType,
    amount: number
  ): Account;
}
