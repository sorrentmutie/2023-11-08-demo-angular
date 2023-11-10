import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

   navigationParameter = "";

   constructor(private route: ActivatedRoute) {
      const z=  this.route.snapshot.paramMap.get('id');
      if(z) {
         this.navigationParameter = z;
      }
   }
}
