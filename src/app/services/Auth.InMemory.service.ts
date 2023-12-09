import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Auth.abstract';

export class InMemoryAuthService implements AuthService {
  private username = 'admin';
  private password = 'password';
  private authenticated = true;
  private router = inject(Router);
  isAuthenticated() {
    if (!this.authenticated) {
      this.router.navigate(['/login']);
    }
    return this.authenticated;
  }
  authenticate(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.authenticated = true;
    }
    return this.isAuthenticated();
  }
}
