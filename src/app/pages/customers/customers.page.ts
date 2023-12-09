import { Component } from "@angular/core";
import { CustomerListComponent } from "./customersList/customer-list.component";

@Component({
    selector: 'app-customer-page',
    standalone: true,
    template: `<app-customer-list></app-customer-list>`,
    styles: [''],
    imports: [CustomerListComponent]
})
export class CustomerPageComponent {}