// customer-form.component.ts
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../../../models';
import { LabelValueComponent } from 'src/app/components/atoms/label-value.component';

@Component({
  selector: 'app-customer-form',
  standalone: true,
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
  imports: [ReactiveFormsModule, LabelValueComponent],
})
export class CustomerFormComponent implements OnInit {
  @Input() customer?: Customer;
  private fb = inject(FormBuilder);
  customerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dateOfBirth: ['', Validators.required],
    address: ['', Validators.required] ,
    phoneNumber: [''],
  });

  

  ngOnInit(): void {
    if (this.customer) {
      this.customerForm.patchValue({...this.customer, dateOfBirth: this.customer.dateOfBirth.toString()});
    }
  }

  onSubmit(): void {
    // Handle form submission here (add/update customer)
    const formData = this.customerForm.value;
    if (this.customer) {
      // Update existing customer
      // Implement update logic
      console.log('Update customer:', formData);
    } else {
      // Add new customer
      // Implement add logic
      console.log('Add new customer:', formData);
    }
  }
}

