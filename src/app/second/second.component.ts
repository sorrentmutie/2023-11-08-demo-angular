import { Component } from '@angular/core';
import { Seconda } from '../shared/seconda';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
   constructor(){
     const x: Seconda = {
        a:  "a",
        b: 42
     } ;

 const b = {
  q: 1,
  w: 2,
  dosomething: function() {
    console.log(this.q);
  }
 }

   }
}
