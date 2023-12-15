import { Injectable, signal } from "@angular/core";

export type Notification = {message: string, action: 'success' | 'error' | 'warning' | 'info'};

@Injectable({providedIn: 'root'})
export class NotificationService {
    notification = signal<Notification>({message: '', action: 'info'});
   
   notify(notification: Notification) {
        this.notification.set(notification);
        setTimeout(() => {
            this.notification.set({message: '', action: 'info'});
        }, 3000);
    }
}