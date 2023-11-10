import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCatalog } from '../../services/product-catalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  products: Product[] | undefined = undefined;
  offerProducts: Product[] = [];
  titleCatalog = "";
//  _catalogService: ProductCatalog | undefined = undefined;

  constructor(private router: Router, 
              private catalogService: ProductCatalog){
  //  this._catalogService = catalogService;
  //  const catalogService = new ProductCatalog();
   // catalogService.addProduct();
   console.log('Siamo nel costruttor di Products page');
   console.log(this.catalogService.randomNumber);

    this.products = catalogService.getProducts();
    this.offerProducts = catalogService.getProducts();
  }
 
  showCatalogDetails(selectedProduct: Product | undefined)
  {
    alert(selectedProduct?.name);
  }

  showOfferDetails(selectedProduct: Product | undefined)
 {
  console.log(selectedProduct);
 }

  addProduct(){

    this.catalogService.addProduct(
     {
       id: 3, name: "Forno a microonde", 
       price: 180, 
       releaseDate: new Date(),
       isAvailable: true,  
       image: "https://www.codeur.com/blog/wp-content/uploads/2018/12/logo-angular.png"
     });

     this.products = this.catalogService.getProducts();
     this.titleCatalog = Math.random().toString();

  }

  navigate(){
    // this.router.navigate(['/random']);
     this.router.navigate(['/products', 72]);
  }
}
