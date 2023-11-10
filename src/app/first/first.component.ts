import { Component } from '@angular/core';
import { CustomersService } from '../customers/customers.service';
import { Customer } from '../customers/customer';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
    lastCustomer: Customer | undefined = undefined;
    constructor(private service: CustomersService) {
       this.service.customers$?.subscribe(
         customer => {
          console.log(customer);
          this.lastCustomer = customer;}
       )
    }
}
