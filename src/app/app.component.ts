import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <main class='container'>
    <span class='header'><h1>Banking App</h1></span>
    <router-outlet></router-outlet>
  </main>`,
    styles: ['.header { display: flex; justify-content: center; }'],
  imports: [RouterOutlet],
})
export class AppComponent {}
