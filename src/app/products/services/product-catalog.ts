import { Product } from "../models/product";

export class ProductCatalog {

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
