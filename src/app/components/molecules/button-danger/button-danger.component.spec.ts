import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDangerComponent } from './button-danger.component';

describe('ButtonDangerComponent', () => {
  let component: ButtonDangerComponent;
  let fixture: ComponentFixture<ButtonDangerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDangerComponent]
    });
    fixture = TestBed.createComponent(ButtonDangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
