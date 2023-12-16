// login.component.ts
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.abstract';
import { NotificationService } from 'src/app/services/NotificationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styles: ['form {display: flex; flex-direction: column; }'],
  standalone: true,
  imports: [FormsModule],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);
  private notificationService = inject(NotificationService);

  constructor() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/customers']);
      this.notificationService.notify({
        message: 'Already logged in',
        action: 'info',
      });
    }
  }

  login(): void {
    const isAuthenticated = this.authService.authenticate(
      this.username,
      this.password
    );
    if (!isAuthenticated) {
      this.notificationService.notify({
        message: 'Invalid username or password',
        action: 'error',
      });
    } else {
      this.router.navigate(['/customers']);
      this.notificationService.notify({
        message: 'Login successful',
        action: 'success',
      });
    }
  }
}
