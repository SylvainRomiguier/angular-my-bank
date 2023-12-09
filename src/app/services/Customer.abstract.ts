import { Injectable, WritableSignal } from '@angular/core';
import { Account, Customer } from '../models';
import { InMemoryCustomerService } from './Customer.InMemory.service';

@Injectable({
  providedIn: 'root',
  useClass: InMemoryCustomerService,
})
export abstract class CustomerService {
  // Get all customers
  abstract getCustomers(): WritableSignal<Customer[]>;

  // Get a customer by ID
  abstract getCustomerById(customerId: string): Customer | undefined;

  // Get a customer by email
  abstract getCustomerByEmail(customerEmail: string): Customer | undefined;

  // Create a new customer
  abstract createCustomer(
    customerId: string | null,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    phoneNumber: string,
    dateOfBirth: Date
  ): void;

  // Remove a customer (if needed)
  abstract removeCustomer(customerId: string): void;

  // Add an account to a customer
  abstract addAccountToCustomer(customerId: string, account: Account): void;

  // Remove an account from a customer
  abstract removeAccountFromCustomer(
    customerId: string,
    accountId: string
  ): void;
}
