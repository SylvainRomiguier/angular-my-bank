import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Component, Input, computed} from '@angular/core';
import { Customer } from 'src/app/models';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  imports: [DatePipe, CurrencyPipe, NgIf],
})
export class CustomerComponent {
  @Input() customer: Customer | undefined;
  totalBalance = computed(() => {
    return this.customer !== undefined ? this.customer.accounts.reduce((total, acc) => total + acc.balance, 0) : 0;
  });
}
