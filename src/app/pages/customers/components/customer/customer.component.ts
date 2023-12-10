import { CurrencyPipe, DatePipe, NgIf } from '@angular/common';
import { Component, Input, computed, inject} from '@angular/core';
import { LabelValueComponent } from 'src/app/components/atoms/label-value.component';
import { ButtonDangerComponent } from 'src/app/components/molecules/button-danger/button-danger.component';
import { Customer } from 'src/app/models';
import { CustomerService } from 'src/app/services/Customer.abstract';

@Component({
  selector: 'app-customer',
  standalone: true,
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  imports: [DatePipe, CurrencyPipe, NgIf, LabelValueComponent, ButtonDangerComponent],
})
export class CustomerComponent {
  @Input({required: true}) customer!: Customer;
  @Input() small = false;

  private customerService = inject(CustomerService);
  
  totalBalance = computed(() => {
    return this.customer !== undefined ? this.customer.accounts.reduce((total, acc) => total + acc.balance, 0) : 0;
  });
  accountCount = computed(() => {
    return this.customer !== undefined ? this.customer.accounts.length : 0;
  });
  deleteCustomer(event: Event | undefined) {
    event?.preventDefault();
    this.customerService.removeCustomer(this.customer.customerId);
  }

}
