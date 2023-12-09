import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-label-value',
    standalone: true,
    template: `<div class="nowrap">{{ label }}: <strong>{{value}}</strong></div>`,
    styles: ['.nowrap { white-space: nowrap; }'],
})

export class LabelValueComponent {
    @Input() label:string = '';
    @Input() value:string = '';
}