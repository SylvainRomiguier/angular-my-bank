import { Injectable, Signal } from '@angular/core';
import { Account, Customer } from '../models';
import { UserService } from './User.abstract';

@Injectable({
  providedIn: 'root',
})
export class InMemoryUserService implements UserService {
  private users: Signal<Customer[]> = signal([]);

  // Get all users
  getUsers(): Customer[] {
    return this.users;
  }

  // Get a user by ID
  getUserById(customerId: string): Customer | undefined {
    return this.users.find((user) => user.customerId === customerId);
  }

  // Create a new user
  createUser(firstName: string, lastName: string, email: string, dateOfBirth: Date): void {
    const newUser: Customer = {
      customerId: this.generateCustomerId(),
      firstName,
      lastName,
      email,
      dateOfBirth,
      address: '', // You can add other properties as needed
      phoneNumber: '',
      accounts: [],
    };

    this.users.push(newUser);
  }

  // Remove a user (if needed)
  removeUser(customerId: string): void {
    this.users = this.users.filter((user) => user.customerId !== customerId);
  }

  // Add an account to a user
  addAccountToUser(customerId: string, account: Account): void {
    const user = this.getUserById(customerId);

    if (user) {
      user.accounts.push(account);
    } else {
      console.error('User not found');
    }
  }

  // Remove an account from a user
  removeAccountFromUser(customerId: string, accountId: string): void {
    const user = this.getUserById(customerId);

    if (user) {
      user.accounts = user.accounts.filter((account) => account.accountId !== accountId);
    } else {
      console.error('User not found');
    }
  }

  // Generate a unique user ID (simple example)
  private generateCustomerId(): string {
    return `user-${Math.random().toString(36).substring(2, 9)}`;
  }
}
