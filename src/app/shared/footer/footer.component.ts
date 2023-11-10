import { Component } from '@angular/core';
import { Observable, filter, map, of } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
     constructor(){ 

      // const x = fetch("https://randomuser.me/api?results=10")
      // .then(y => y.json())
      // .then(k => console.log(k));

      //const myObservable = new Observable<number>();
      // const myObservable = of(1,2,3,4,5,6,7,8,9,10).pipe(
      //   map( n => n * n),
      //   filter( n => n % 2 === 0)
      // );


    //   console.log("in");
    //  const z =  myObservable.subscribe(
    //     { next: (n: number) => console.log(n) ,
    //       complete: () => console.log("Fine trasmissioni"),
    //       error: (error: Error)=> console.log("Errore"),
    //     } 
    //   );
    //   z.unsubscribe();
    //   console.log("out");
    //  
  }
}
