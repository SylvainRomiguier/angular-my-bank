import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { LabelValueComponent } from 'src/app/components/label-value.component';
import { ButtonDangerComponent } from 'src/app/components/button-danger/button-danger.component';
import { Customer } from 'src/app/models';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  imports: [
    DatePipe,
    CurrencyPipe,
    NgIf,
    LabelValueComponent,
    ButtonDangerComponent,
  ],
})
export class CustomerComponent {
  @Input({ required: true }) customer: Customer = {
    customerId: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: new Date(),
    accounts: [],
    };
  @Input() small = false;
  @Output() onDeleteCustomer = new EventEmitter<Customer>();

  totalBalance() {
    return this.customer.accounts.reduce(
      (total, acc) => total + acc.balance,
      0
    );
  }

  accountCount() {
    return this.customer.accounts.length;
  }

  deleteCustomer($event: Event) {
    $event.stopPropagation();
    $event.preventDefault();
    this.onDeleteCustomer.emit(this.customer);
  }
}
