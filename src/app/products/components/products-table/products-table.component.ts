import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
 @Input() products: Product[] = [];
 @Input() title: string = "";

 @Output() emitter: EventEmitter<Product |undefined> = new EventEmitter();

showDetails(selectedProduct: Product | undefined){
   //alert(selectedProduct.name);
   this.emitter.emit(selectedProduct);
}

}
