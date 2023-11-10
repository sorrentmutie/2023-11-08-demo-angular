import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, Subject, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentUser: User | undefined = undefined;
  private subject$ = new Subject<User | undefined>();
  public currentUser$: Observable< User | undefined> | undefined = undefined;


  constructor() {
    this.currentUser$ = this.subject$.asObservable();
   }

  logout(){
    this.currentUser = undefined;
    this.subject$.next(undefined);
  }
 
  login(): Observable<boolean>{
     return of(true)
      .pipe(
        delay(2000),
        tap( (x: boolean) => {


           const currentUser = {
            name: "Mario Rossi",
            url: "https://www.codeur.com/blog/wp-content/uploads/2018/12/logo-angular.png",
            roles: ["User"]
           }
           this.subject$.next(currentUser);
        })
      );
  }


}
