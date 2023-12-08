export interface Transaction {
    transactionId: string;
    accountId: string;
    type: 'Deposit' | 'Withdrawal';
    amount: number;
    timestamp: Date;
}
