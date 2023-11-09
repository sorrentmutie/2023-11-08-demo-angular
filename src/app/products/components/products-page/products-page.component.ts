import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCatalog } from '../../services/product-catalog';

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

  constructor(private catalogService: ProductCatalog){
  //  this._catalogService = catalogService;
  //  const catalogService = new ProductCatalog();
   // catalogService.addProduct();
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
     this.products?.push({
       id: 3, name: "Forno a microonde", 
       price: 180, 
       releaseDate: new Date(),
       isAvailable: true,  
       image: "https://www.codeur.com/blog/wp-content/uploads/2018/12/logo-angular.png"
     })

     this.titleCatalog = Math.random().toString();
  }
}
