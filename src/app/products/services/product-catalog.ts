import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { OfferService } from "./offer.service";

@Injectable({
    providedIn: 'root'
})
export class ProductCatalog {

  randomNumber: number = 0;

  constructor(private offersService: OfferService){
    this.randomNumber = Math.random();
  }

   private products: Product[] =  [
    {id: 1, name: "Frigorifero", 
       price: 1000 * this.offersService.getDiscount(1),
     isAvailable: true, releaseDate: new Date(),
     image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png"},
     {id: 2, name: "TV", 
     price: 1000 * this.offersService.getDiscount(2),
     isAvailable: true, releaseDate: new Date(),
     image: "https://www.codeur.com/blog/wp-content/uploads/2018/12/logo-angular.png"}

  ];
   addProduct(product: Product) {
   product.price =
    product.price * (1 - this.offersService.getDiscount(product.id));
   this.products.push(product);
   }
   getProducts(): Product[] {
        return this.products;
    }
    
}
