import { Component } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {

  products: Product[] | undefined = undefined;
  offerProducts: Product[] = [];

  constructor(){
    this. products = this.getProducts();
    this.offerProducts = this.getProducts();
  }
 
  getProducts(): Product[] {
    return [
      {id: 1, name: "Frigorifero", price: 1000,
       isAvailable: true, releaseDate: new Date(),
       image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png"},
       {id: 2, name: "TV", price: 1000,
       isAvailable: true, releaseDate: new Date(),
       image: "https://www.codeur.com/blog/wp-content/uploads/2018/12/logo-angular.png"}

    ];
  }

}
