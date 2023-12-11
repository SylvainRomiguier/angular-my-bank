// customer-form.component.ts
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../../models';
import { LabelValueComponent } from 'src/app/components/atoms/label-value.component';
import { ButtonDangerComponent } from 'src/app/components/molecules/button-danger/button-danger.component';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  imports: [ReactiveFormsModule, LabelValueComponent, ButtonDangerComponent],
})
export class CustomerFormComponent implements OnInit {
  @Input() customer?: Customer;
  @Output() onSubmit = new EventEmitter<Customer>();
  private fb = inject(FormBuilder);
  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: [new Date().toISOString().split('T')[0], Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required],
  });

  ngOnInit(): void {
    if (!this.customer) {
      return;
    }
    this.customerForm.patchValue({...this.customer, dateOfBirth: new Date(this.customer.dateOfBirth).toISOString().split('T')[0]});
  }

  submit() {
    if (this.customerForm.valid) {
      this.onSubmit.emit({
        ...(this.customerForm.value as unknown as Customer),
        dateOfBirth: new Date(this.customerForm.value.dateOfBirth!),
        customerId: this.customer?.customerId ?? "to_create",
        accounts: this.customer?.accounts ?? [],
      });
    }
  }

  onCancel() {
    this.onSubmit.emit();
  }
}
