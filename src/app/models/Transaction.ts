export interface Transaction {
  transactionId: string;
  accountId: string;
  customerId: string;
  title: string;
  type: 'Deposit' | 'Withdrawal';
  amount: number;
  date: Date;
}
