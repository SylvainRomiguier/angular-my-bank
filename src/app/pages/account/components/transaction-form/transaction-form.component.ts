import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelValueComponent } from 'src/app/components/label-value.component';
import { ButtonDangerComponent } from 'src/app/components/button-danger/button-danger.component';
import { Account, Transaction } from 'src/app/models';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
  imports: [ReactiveFormsModule, LabelValueComponent, ButtonDangerComponent],
})
export class TransactionFormComponent {
  @Input() transaction?: Transaction;
  @Input() account!: Account;

  @Output() onSubmit = new EventEmitter<Transaction>();
  private fb = inject(FormBuilder);
  transactionForm = this.fb.group({
    date: [new Date(), Validators.required],
    title: ['', Validators.required],
    amount: [0, Validators.required],
    type: ['Withdrawal', Validators.required],
  });

  ngOnInit(): void {
    if (!this.transaction) {
      return;
    }
    this.transactionForm.patchValue(this.transaction);
  }

  submit() {
    if (this.transactionForm.valid) {
      this.onSubmit.emit({
        ...(this.transactionForm.value as unknown as Transaction),
        transactionId: this.transaction?.transactionId ?? 'to_create',
        customerId: this.account.customerId,
        accountId: this.account.accountId,
      } as Transaction);
    }
  }
}
