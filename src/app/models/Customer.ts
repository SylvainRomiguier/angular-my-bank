import { Account } from "./Account";

export interface Customer {
    customerId: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: Date;
    address: string;
    phoneNumber: string;
    accounts: Account[];
  }
  
