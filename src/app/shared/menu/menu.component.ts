import { Component } from '@angular/core';
import { CustomersService } from 'src/app/customers/customers.service';
import { ProductCatalog } from 'src/app/products/services/product-catalog';
import { LoginService } from 'src/app/users/login.service';
import { User } from 'src/app/users/user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ProductCatalog]
})
export class MenuComponent {

   name = "";
   currentUser: User | undefined = undefined;
   constructor(private service: ProductCatalog,
               public loginService: LoginService,
               private customersService: CustomersService){
    console.log('Siamo nel costruttor di Menu');
    console.log(this.service.randomNumber);
    this.customersService.customers$?.subscribe(
      customer => this.name = customer.name
    )

    this.loginService.currentUser$?.subscribe(
      user => this.currentUser = user
    );
 
   }

   logout(){
    this.loginService.logout();
   }

   login() {
    this.loginService.login().subscribe();
   }
}
