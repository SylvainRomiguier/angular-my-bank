import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonDangerComponent } from '../button-danger/button-danger.component';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { NotificationService } from 'src/app/services/NotificationService';
import { AuthService } from 'src/app/services/Auth.abstract';
import { AuthServiceMock } from 'src/app/services/Auth.Mock.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonDangerComponent, NgIf, RouterOutlet, SnackbarComponent],
      providers: [NotificationService, { provide: AuthService, useClass: AuthServiceMock}],
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
