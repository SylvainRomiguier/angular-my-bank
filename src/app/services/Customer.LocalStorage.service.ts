import { Account, Customer, TransactionType } from '../models';
import { CustomerService } from './Customer.abstract';
import customersSample from './customers.sample.json';
import { NotFoundError, DuplicateError } from '../models/errors';

export class LocalStorageCustomerService implements CustomerService {
  customers: Customer[] = [];

  constructor() {
    if (localStorage.getItem('customers')) {
      this.customers = JSON.parse(localStorage.getItem('customers') ?? '[]');
    } else {
      this.loadCustomers();
    }
  }

  loadCustomers(): void {
    this.customers = [];
    customersSample.forEach((customer) => {
      this.createCustomer({
        customerId: customer.customerId,
        firstName: customer.firstName,
        lastName: customer.lastName,
        address: this.addressDtoToCustomerAddress(
          customer.address.street,
          customer.address.town,
          customer.address.zipcode
        ),
        phoneNumber: customer.phoneNumber,
        email: customer.email,
        dateOfBirth: new Date(customer.dateOfBirth),
        accounts: [],
      });
    });
  }

  // Get all customers
  getCustomers(): Customer[] {
    return this.customers;
  }

  // Get a customer by ID
  getCustomerById(customerId: string): Customer {
    const customer = this.customers.find(
      (customer) => customer.customerId === customerId
    );
    if (customer) {
      return customer;
    }
    throw new NotFoundError('Customer');
  }

  // Get a customer by ID
  getCustomerByEmail(customerEmail: string): Customer {
    const customer = this.customers.find(
      (customer) => customer.email === customerEmail
    );
    if (customer) {
      return customer;
    }
    throw new NotFoundError('Customer');
  }

  // Create a new customer
  createCustomer(customer: Customer): Customer {
    const newCustomer: Customer = {
      ...customer,
      customerId:
        customer.customerId === 'to_create'
          ? this.generateId()
          : customer.customerId,
      accounts: [],
    };

    try {
      this.getCustomerById(newCustomer.customerId);
      throw new DuplicateError('Customer');
    } catch (error) {
      if (error instanceof NotFoundError) {
        this.customers.push(newCustomer);
        localStorage.setItem('customers', JSON.stringify(this.customers));
        return newCustomer;
      }
      throw error;
    }
  }

  // Remove a customer (if needed)
  removeCustomer(customerId: string): void {
    this.customers = this.customers.filter(
      (customer) => customer.customerId !== customerId
    );
    localStorage.setItem('customers', JSON.stringify(this.customers));
  }

  // Update a customer
  updateCustomer(customer: Customer): Customer {
    const customerIndex = this.customers.findIndex(
      (storedCustomer) => storedCustomer.customerId === customer.customerId
    );
    if (customerIndex >= 0) {
      this.customers[customerIndex] = customer;
      localStorage.setItem('customers', JSON.stringify(this.customers));
      return customer;
    }
    throw new NotFoundError('Customer');
  }

  // Add an account to a customer
  addAccountToCustomer(customerId: string, account: Account): Customer {
    const customer = this.getCustomerById(customerId);
    account.accountId = this.generateId();
    customer.accounts.push(account);
    return this.updateCustomer(customer);
  }

  // Remove an account from a customer
  removeAccountFromCustomer(customerId: string, accountId: string): Customer {
    const customer = this.getCustomerById(customerId);
    customer.accounts = customer.accounts.filter(
      (account) => account.accountId !== accountId
    );
    return this.updateCustomer(customer);
  }

  // example of a DTO (Data Transfer Object) conversion
  private addressDtoToCustomerAddress(
    street: string,
    town: string,
    zipcode: string
  ): string {
    return `${street} - ${zipcode} ${town}`;
  }

  // Get an account by ID
  getAccountById(customerId: string, accountId: string): Account {
    const customer = this.getCustomerById(customerId);
    const account = customer.accounts.find(
      (account) => account.accountId === accountId
    );
    if (account) {
      return account;
    }
    throw new NotFoundError('Account');
  }

  // Update an account
  updateAccount(customer: Customer, account: Account): void {
    const accountIndex = customer.accounts.findIndex(
      (storedAccount) => storedAccount.accountId === account.accountId && storedAccount.customerId === account.customerId
    );
    if (accountIndex >= 0) {
      customer.accounts[accountIndex] = account;
      this.updateCustomer(customer);
      return;
    }
    throw new NotFoundError('Account');
  }

  // Perform a transaction on the account
  performTransaction(
    account: Account,
    title:string,
    date: Date,
    type: TransactionType,
    amount: number
  ): Account {
    account.transactions.push({
      accountId: account.accountId,
      customerId: account.customerId,
      transactionId: this.generateId(),
      title,
      type,
      amount,
      date,
    });
    account.balance += type === 'Deposit' ? amount : -amount;
    account.transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    this.updateAccount(this.getCustomerById(account.customerId), account);
    return account;
  }

  // Generate a unique customer ID (simple example)
  private generateId(): string {
    return `${Math.random().toString(36).substring(2, 9)}`;
  }
}
