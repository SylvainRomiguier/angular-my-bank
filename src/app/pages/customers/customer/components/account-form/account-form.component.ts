import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LabelValueComponent } from 'src/app/components/atoms/label-value.component';
import { Account } from 'src/app/models';

@Component({
  selector: 'app-account-form',
  standalone: true,
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css'],
  imports: [ReactiveFormsModule, LabelValueComponent],
})
export class AccountFormComponent {
  @Input() account?: Account;
  @Input() customerId!: string;

  @Output() onSubmit = new EventEmitter<Account>();
  private fb = inject(FormBuilder);
  accountForm = this.fb.group({
    name: ['', Validators.required],
    accountType: ['Checking', Validators.required],
  });

  ngOnInit(): void {
    if (!this.account) {
      return;
    }
    this.accountForm.patchValue(this.account);
  }

  submit() {
    if (this.accountForm.valid) {
      this.onSubmit.emit({
        ...(this.accountForm.value as unknown as Account),
        customerId: this.customerId,
        accountId: this.account?.accountId ?? "to_create",
        transactions: this.account?.transactions ?? [],
      });
    }
  }
}
