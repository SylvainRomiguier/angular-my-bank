// login.component.ts
import { Component, inject } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/Auth.abstract';

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
  errorMessage: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);

  login(): void {
    const isAuthenticated = this.authService.authenticate(this.username, this.password);
    if(!isAuthenticated) {
      this.errorMessage = 'Invalid credentials';
    } else {
        this.errorMessage = '';
        this.router.navigate(['/customers']);
    }
  }
}
