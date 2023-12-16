import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListComponent } from './transaction-list.component';
import { TransactionComponent } from '../transaction/transaction.component';
import { NgForOf } from '@angular/common';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TransactionComponent, NgForOf]
    });
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
