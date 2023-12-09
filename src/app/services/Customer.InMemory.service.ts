import { WritableSignal, signal } from '@angular/core';
import { Account, Customer } from '../models';
import { CustomerService } from './Customer.abstract';

export class InMemoryCustomerService implements CustomerService {
  private customers: WritableSignal<Customer[]> = signal([]);

  constructor() {
    this.createCustomer('John', 'Doe', 'john.doe@some-company.com', new Date(1980, 1, 1));
    this.createCustomer('Jane', 'Doe', 'jane.doe@other-company.fr', new Date(1985, 1, 1));
    const customer = this.getCustomerByEmail('john.doe@some-company.com');
    if (customer) {
      this.addAccountToCustomer(customer.customerId, {
        accountId: 'account-1',
        customerId: customer.customerId,
        name: 'John Doe account',
        accountType: 'Checking',
        balance: 100,
        transactions: [],
      });
    }
  }

  // Get all customers
  getCustomers(): WritableSignal<Customer[]> {
    return this.customers;
  }

  // Get a customer by ID
  getCustomerById(customerId: string): Customer | undefined {
    return this.customers().find((customer) => customer.customerId === customerId);
  }

  // Get a customer by ID
  getCustomerByEmail(customerEmail: string): Customer | undefined {
    return this.customers().find((customer) => customer.email === customerEmail);
  }

  // Create a new customer
  createCustomer(firstName: string, lastName: string, email: string, dateOfBirth: Date): void {
    const newCustomer: Customer = {
      customerId: this.generateCustomerId(),
      firstName,
      lastName,
      email,
      dateOfBirth,
      address: '', // You can add other properties as needed
      phoneNumber: '',
      accounts: [],
    };

    const customers = this.customers();
    customers.push(newCustomer);
    this.customers.set(customers);
  }

  // Remove a customer (if needed)
  removeCustomer(customerId: string): void {
    const customers = this.customers().filter((customer) => customer.customerId !== customerId);
    this.customers.set(customers);
  }

  // Update a customer
  updateCustomer(customer: Customer): void {
    const customers = this.customers();
    const customerIndex = customers.findIndex((storedCustomer) => storedCustomer.customerId === customer.customerId);
    if (customerIndex >= 0) {
      customers[customerIndex] = customer;
      this.customers.set(customers);
    } else {
      console.error('Customer not found');
    }
  }

  // Add an account to a customer
  addAccountToCustomer(customerId: string, account: Account): void {
    const customer = this.getCustomerById(customerId);
    if (customer) {
      customer.accounts.push(account);
      this.updateCustomer(customer);
    } else {
      console.error('Customer not found');
    }
  }

  // Remove an account from a customer
  removeAccountFromCustomer(customerId: string, accountId: string): void {
    const customer = this.getCustomerById(customerId);
    if (customer) {
      customer.accounts = customer.accounts.filter((account) => account.accountId !== accountId);
      this.updateCustomer(customer);
    } else {
      console.error('Customer not found');
    }
  }

  // Generate a unique customer ID (simple example)
  private generateCustomerId(): string {
    return `customer-${Math.random().toString(36).substring(2, 9)}`;
  }
}
