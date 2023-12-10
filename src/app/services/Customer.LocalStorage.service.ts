import { WritableSignal, signal } from '@angular/core';
import { Account, Customer } from '../models';
import { CustomerService } from './Customer.abstract';
import customersSample from './customers.sample.json';

export class LocalStorageCustomerService implements CustomerService {
  private customers: WritableSignal<Customer[]> = signal([]);

  constructor() {
    if (localStorage.getItem('customers')) {
      this.customers.set(JSON.parse(localStorage.getItem('customers') ?? '[]'));
    } else {
      this.loadCustomers();
    }
  }

  loadCustomers(): void {
    customersSample.forEach((customer) => {
      this.createCustomer(
        customer.customerId,
        customer.firstName,
        customer.lastName,
        this.addressDtoToCustomerAddress(
          customer.address.street,
          customer.address.town,
          customer.address.zipcode
        ),
        customer.phoneNumber,
        customer.email,
        new Date(customer.dateOfBirth)
      );
    });
  }

  // Get all customers
  getCustomers(): WritableSignal<Customer[]> {
    return this.customers;
  }

  // Get a customer by ID
  getCustomerById(customerId: string): Customer | undefined {
    return this.customers().find(
      (customer) => customer.customerId === customerId
    );
  }

  // Get a customer by ID
  getCustomerByEmail(customerEmail: string): Customer | undefined {
    return this.customers().find(
      (customer) => customer.email === customerEmail
    );
  }

  // Create a new customer
  createCustomer(
    customerId: string | null,
    firstName: string,
    lastName: string,
    address: string,
    phoneNumber: string,
    email: string,
    dateOfBirth: Date
  ): void {
    const newCustomer: Customer = {
      customerId: customerId ?? this.generateCustomerId(),
      firstName,
      lastName,
      email,
      dateOfBirth,
      address,
      phoneNumber,
      accounts: [],
    };

    const customers = this.customers();
    const existingCustomer = this.getCustomerById(newCustomer.customerId);
    if (!existingCustomer) {
      customers.push(newCustomer);
      this.customers.set(customers);
      localStorage.setItem('customers', JSON.stringify(customers));
    }
  }

  // Remove a customer (if needed)
  removeCustomer(customerId: string): void {
    const customers = this.customers().filter(
      (customer) => customer.customerId !== customerId
    );
    this.customers.set(customers);
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  // Update a customer
  updateCustomer(customer: Customer): void {
    const customers = this.customers();
    const customerIndex = customers.findIndex(
      (storedCustomer) => storedCustomer.customerId === customer.customerId
    );
    if (customerIndex >= 0) {
      customers[customerIndex] = customer;
      this.customers.set(customers);
      localStorage.setItem('customers', JSON.stringify(customers));
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
      customer.accounts = customer.accounts.filter(
        (account) => account.accountId !== accountId
      );
      this.updateCustomer(customer);
    } else {
      console.error('Customer not found');
    }
  }

  // example of a DTO (Data Transfer Object) conversion
  private addressDtoToCustomerAddress(
    street: string,
    town: string,
    zipcode: string
  ): string {
    return `${street} - ${zipcode} ${town}`;
  }

  // Generate a unique customer ID (simple example)
  private generateCustomerId(): string {
    return `${Math.random().toString(36).substring(2, 9)}`;
  }
}
