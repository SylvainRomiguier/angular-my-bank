import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonDangerComponent } from '../../molecules/button-danger/button-danger.component';
import { AuthService } from 'src/app/services/Auth.abstract';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [ButtonDangerComponent, NgIf, RouterOutlet]
})
export class LayoutComponent {
  authService  = inject(AuthService);
}
