// import { WritableSignal, signal } from '@angular/core';
// import { Account, Customer } from '../models';
// import { CustomerService } from './Customer.abstract';

// export class InMemoryCustomerService implements CustomerService {
//   private customers: WritableSignal<Customer[]> = signal([]);

//   constructor() {
//     this.loadCustomers();
//   }

//   // Get all customers
//   getCustomers(): WritableSignal<Customer[]> {
//     return this.customers;
//   }

//   // Get a customer by ID
//   getCustomerById(customerId: string): Customer | undefined {
//     return this.customers().find(
//       (customer) => customer.customerId === customerId
//     );
//   }

//   // Get a customer by ID
//   getCustomerByEmail(customerEmail: string): Customer | undefined {
//     return this.customers().find(
//       (customer) => customer.email === customerEmail
//     );
//   }

//   // Create a new customer
//   createCustomer(
//     customerId: string | null,
//     firstName: string,
//     lastName: string,
//     address: string,
//     phoneNumber: string,
//     email: string,
//     dateOfBirth: Date
//   ): void {
//     const newCustomer:Customer = {
//       customerId: customerId ?? this.generateCustomerId(),
//       firstName,
//       lastName,
//       email,
//       dateOfBirth,
//       address,
//       phoneNumber,
//       accounts: [],
//     };

//     const customers = this.customers();
//     customers.push(newCustomer);
//     this.customers.set(customers);
//   }

//   // Remove a customer (if needed)
//   removeCustomer(customerId: string): void {
//     const customers = this.customers().filter(
//       (customer) => customer.customerId !== customerId
//     );
//     this.customers.set(customers);
//   }

//   // Update a customer
//   updateCustomer(customer: Customer): Customer | undefined {
//     const customers = this.customers();
//     const customerIndex = customers.findIndex(
//       (storedCustomer) => storedCustomer.customerId === customer.customerId
//     );
//     if (customerIndex >= 0) {
//       customers[customerIndex] = customer;
//       this.customers.set(customers);
//       return customer;
//     }
//       console.error('Customer not found');
//     return;
//   }

//   // Add an account to a customer
//   addAccountToCustomer(customerId: string, account: Account): Customer | undefined {
//     const customer = this.getCustomerById(customerId);
//     if (customer) {
//       customer.accounts.push(account);
//       this.updateCustomer(customer);
//       return customer;
//     } 
//       console.error('Customer not found');
//     return;
//   }

//   // Remove an account from a customer
//   removeAccountFromCustomer(customerId: string, accountId: string): Customer | undefined {
//     const customer = this.getCustomerById(customerId);
//     if (customer) {
//       customer.accounts = customer.accounts.filter(
//         (account) => account.accountId !== accountId
//       );
//       this.updateCustomer(customer);
//       return customer;
//     } 
//       console.error('Customer not found');
//     return;
//   }

//   loadCustomers(): void {
//     this.createCustomer(
//       'user-1',
//       'John',
//       'Doe',
//       'john.doe@some-company.com',
//       '1, rue de la Paix - 75000 Paris',
//       '01 23 45 67 89',
//       new Date(1980, 1, 1)
//     );
//     this.createCustomer(
//       'user-2',
//       'Jane',
//       'Doe',
//       'jane.doe@other-company.fr',
//       '2, rue de la Paix - 75000 Paris',
//       '01 23 45 67 89',
//       new Date(1985, 1, 1)
//     );
//     this.createCustomer(
//       'user-3',
//       'Sylvain',
//       'Romiguier',
//       'sylvain.romiguier@gmail.com',
//       '113, impasse des oliviers - 30980 Langlade',
//       '06 24 43 13 06',
//       new Date(1970, 4, 4)
//     );

//     this.addAccountToCustomer('user-1', {
//       accountId: 'account-1',
//       customerId: 'user-1',
//       name: 'John Doe account',
//       accountType: 'Checking',
//       balance: 100,
//       transactions: [],
//     });

//     this.addAccountToCustomer('user-2', {
//       accountId: 'account-2',
//       customerId: 'user-2',
//       name: 'Jane Doe account',
//       accountType: 'Checking',
//       balance: 200,
//       transactions: [],
//     });
//     this.addAccountToCustomer('user-3', {
//       accountId: 'account-3',
//       customerId: 'user-3',
//       name: 'Sylvain Romiguier account',
//       accountType: 'Checking',
//       balance: 300,
//       transactions: [],
//     });
//   }

//   // Generate a unique customer ID (simple example)
//   private generateCustomerId(): string {
//     return `${Math.random().toString(36).substring(2, 9)}`;
//   }
// }
