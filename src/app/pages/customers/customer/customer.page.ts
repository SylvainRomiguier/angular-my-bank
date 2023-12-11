import { Component, OnInit, inject } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { CustomerService } from "src/app/services/Customer.abstract";
import { CustomerComponent } from "../components/customer/customer.component";
import { CustomerFormComponent } from "../components/customer-form/customer-form.component";
import { Customer } from "src/app/models";
import { NgIf } from "@angular/common";
import { AccountListComponent } from "./components/account-list/account-list.component";

@Component({
    selector: 'app-customer-page',
    standalone: true,
    templateUrl: `./customer.page.html`,
    styleUrls: ['./customer.page.css'],
    imports: [CustomerComponent, CustomerFormComponent, NgIf, RouterLink, AccountListComponent]
})

export class CustomerPageComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private customerId = this.route.snapshot.params['customerId'];
    private customerService = inject(CustomerService);
    private router = inject(Router);
    customer!: Customer;
    edit = false;

    ngOnInit(): void {
        const loadedCustomer = this.customerService.getCustomerById(this.customerId);
        if(!loadedCustomer) {
            this.router.navigate(['/customers']);
            return;
        }
        this.customer = loadedCustomer;
    }

    onEdit() {
        this.edit = !this.edit;
    }

    onSaveCustomer(customer: Customer) {
        this.customerService.updateCustomer(customer);
        this.customer = customer;
        this.edit = false;

    }
  
}