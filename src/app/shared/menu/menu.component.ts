import { Component } from '@angular/core';
import { ProductCatalog } from 'src/app/products/services/product-catalog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ProductCatalog]
})
export class MenuComponent {
   constructor(private service: ProductCatalog){
    console.log('Siamo nel costruttor di Menu');
    console.log(this.service.randomNumber);
 
   }
}
