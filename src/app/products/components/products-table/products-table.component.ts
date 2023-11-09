import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit, OnChanges, OnDestroy {
  ngOnDestroy(): void {
   
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('sono in oninit');
  }
 @Input() products: Product[] = [];
 @Input() title: string = "";
 @Output() emitter: EventEmitter<Product |undefined> = new EventEmitter();

showDetails(selectedProduct: Product | undefined){
   //alert(selectedProduct.name);
   this.emitter.emit(selectedProduct);
}

}
