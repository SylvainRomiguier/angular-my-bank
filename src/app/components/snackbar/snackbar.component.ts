import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Notification } from 'src/app/services/NotificationService';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  imports: [NgClass],
})
export class SnackbarComponent {
@Input() content: Notification = { message: '', action: 'info' };
}
