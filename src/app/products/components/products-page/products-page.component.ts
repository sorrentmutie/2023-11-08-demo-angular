import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Product[] | undefined = undefined;

  constructor(){
    this. products = this.getProducts();
  }
 
  getProducts(): Product[] {
    return [
      {id: 1, name: "Frigorifero", price: 1000,
       isAvailable: true, releaseDate: new Date(),
       image: ""},
       {id: 2, name: "TV", price: 1000,
       isAvailable: true, releaseDate: new Date(),
       image: ""}

    ];
  }

}
