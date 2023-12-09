import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomerService } from "src/app/services/Customer.abstract";
import { CustomerComponent } from "../components/customer/customer.component";
import { Customer } from "src/app/models";

@Component({
    selector: 'app-customer-page',
    standalone: true,
    templateUrl: `./customer.page.html`,
    styles: [''],
    imports: [CustomerComponent]
})

export class CustomerPageComponent {
    private route = inject(ActivatedRoute);
    private customerId = this.route.snapshot.params['customerId'];
    private customerService = inject(CustomerService);
    customer = this.customerService.getCustomerById(this.customerId);
}