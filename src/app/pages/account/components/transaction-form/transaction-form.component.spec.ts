import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormComponent } from './transaction-form.component';

describe('AccountFormComponent', () => {
  let component: AccountFormComponent;
  let fixture: ComponentFixture<AccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountFormComponent]
    });
    fixture = TestBed.createComponent(AccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
