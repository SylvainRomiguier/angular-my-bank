import { Injectable } from '@angular/core';
import { Account, Customer } from '../models'; 
import { InMemoryUserService } from './User.InMemory.service';

@Injectable({
  providedIn: 'root',
  useClass: InMemoryUserService
})
export abstract class UserService {
 
  // Get all users
  abstract getUsers(): Customer[];

  // Get a user by ID
  abstract getUserById(customerId: string): Customer | undefined ;

  // Create a new user
  abstract createUser(firstName: string, lastName: string, email: string, dateOfBirth: Date): void ;

  // Remove a user (if needed)
  abstract removeUser(customerId: string): void;

  // Add an account to a user
  abstract addAccountToUser(customerId: string, account: Account): void;

  // Remove an account from a user
  abstract removeAccountFromUser(customerId: string, accountId: string): void;
  
}
