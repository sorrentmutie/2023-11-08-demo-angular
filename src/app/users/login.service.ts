import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: User | undefined = undefined;

  constructor() { }

  logout(){
    this.currentUser = undefined;
  }
 
  login(): Observable<boolean>{
     return of(true)
      .pipe(
        delay(2000),
        tap( (x: boolean) => {
           this.currentUser = {
            name: "Mario Rossi",
            url: "",
            roles: ["User"]
           }
        })
      );
  }


}
