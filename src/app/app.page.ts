import { Component } from '@angular/core';
import { LayoutComponent } from 'src/app/components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-layout />`,
  imports: [LayoutComponent],
})
export class AppPageComponent {}
