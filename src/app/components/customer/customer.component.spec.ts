import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { DatePipe, CurrencyPipe, NgIf } from '@angular/common';
import { ButtonDangerComponent } from '../button-danger/button-danger.component';
import { LabelValueComponent } from '../label-value.component';

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DatePipe,
        CurrencyPipe,
        NgIf,
        LabelValueComponent,
        ButtonDangerComponent,
      ],
    });
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
