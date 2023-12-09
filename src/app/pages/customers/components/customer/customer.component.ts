import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Component, Input, computed} from '@angular/core';
import { LabelValueComponent } from 'src/app/components/atoms/label-value.component';
import { Customer } from 'src/app/models';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  imports: [DatePipe, CurrencyPipe, NgIf, LabelValueComponent],
})
export class CustomerComponent {
  @Input() customer: Customer | undefined;
  @Input() small = false;
  totalBalance = computed(() => {
    return this.customer !== undefined ? this.customer.accounts.reduce((total, acc) => total + acc.balance, 0) : 0;
  });
  accountCount = computed(() => {
    return this.customer !== undefined ? this.customer.accounts.length : 0;
  });
}
