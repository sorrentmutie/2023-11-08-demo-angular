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

  constructor(){
    const catalogService = new ProductCatalog();
    this.products = catalogService.getProducts();
    this.offerProducts = catalogService.getProducts();
    
    // setInterval( () => {
    //   this.products?.push({
    //     id: Math.random(),
    //     name: Math.random().toString(),
    //     price: Math.random(),
    //     isAvailable: true,
    //     releaseDate: new Date(),
    //     image: "https://www.codeur.com/blog/wp-content/uploads/2018/12/logo-angular.png"        
    //   })
    // },2000)
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
