import { AccountType } from "./AccountType";
import { Transaction } from "./Transaction";

export interface Account {
    accountId: string;
    customerId: string;
    name: string;
    accountType: AccountType;
    balance: number;
    transactions: Transaction[];
}
