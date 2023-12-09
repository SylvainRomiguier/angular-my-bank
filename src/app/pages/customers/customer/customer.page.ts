import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CustomerService } from "src/app/services/Customer.abstract";
import { CustomerComponent } from "../components/customer/customer.component";
import { CustomerFormComponent } from "../components/customer-form/customer-form.component";

@Component({
    selector: 'app-customer-page',
    standalone: true,
    templateUrl: `./customer.page.html`,
    styles: [''],
    imports: [CustomerComponent, CustomerFormComponent]
})

export class CustomerPageComponent {
    private route = inject(ActivatedRoute);
    private customerId = this.route.snapshot.params['customerId'];
    private customerService = inject(CustomerService);
    customer = this.customerService.getCustomerById(this.customerId);
}