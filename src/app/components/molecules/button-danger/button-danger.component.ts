import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-danger',
  standalone: true,
  template: `<button class="btn-danger" [ngStyle]="{'width': width}"><ng-content></ng-content></button>`,
  styles: ['.btn-danger { background-color: #ae1b0d; }', '.btn-danger:hover { background-color: #c42a1a; }'],
  imports: [NgStyle],
})
export class ButtonDangerComponent {
  @Input() width = '100%';
  
}
