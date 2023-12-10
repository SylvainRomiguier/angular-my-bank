import { Component } from '@angular/core';
import { LayoutComponent } from './components/templates/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-layout />`,
  imports: [LayoutComponent],
})
export class AppPageComponent {}
