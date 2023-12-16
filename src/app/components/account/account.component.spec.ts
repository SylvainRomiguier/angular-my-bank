import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { CurrencyPipe } from '@angular/common';
import { ButtonDangerComponent } from '../button-danger/button-danger.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CurrencyPipe, ButtonDangerComponent],
    });
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
