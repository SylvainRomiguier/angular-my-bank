import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDangerComponent } from 'src/app/components/button-danger/button-danger.component';
import { AuthService } from 'src/app/services/Auth.abstract';
import { NgIf } from '@angular/common';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { NotificationService } from 'src/app/services/NotificationService';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ButtonDangerComponent, NgIf, RouterOutlet, SnackbarComponent],
})
export class LayoutComponent {
  authService = inject(AuthService);
  notificationService = inject(NotificationService);
  
}
