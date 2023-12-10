import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Auth.abstract';

export class InMemoryAuthService implements AuthService {
  private username = 'admin';
  private password = 'password';
  private authenticated = false;
  private router = inject(Router);
  constructor() {
    if (localStorage.getItem('authenticated') === null) {
      localStorage.setItem('authenticated', 'false');
    } else {
      this.authenticated = localStorage.getItem('authenticated') === 'true';
    }
  }
  isAuthenticated() {
    return this.authenticated;
  }
  authenticate(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.authenticated = true;
      localStorage.setItem('authenticated', 'true');
    }
    return this.isAuthenticated();
  }

  logout(): void {
    localStorage.setItem('authenticated', 'false');
    this.authenticated = false;
    this.router.navigate(['/login']);
  }
}
