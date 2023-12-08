import { Transaction } from "./Transaction";

export interface Account {
    accountId: string;
    customerId: string;
    accountType: 'Savings' | 'Checking' | 'Business';
    balance: number;
    transactions: Transaction[];
}
