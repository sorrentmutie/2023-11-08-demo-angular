import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface MyNotification {
  title: string,
  text: string,
  cssClass: string
}


@Injectable({
  providedIn: 'root'
})
export class MyNotificationService {
  
  private subject$ = new Subject<MyNotification>();
  notifications$ : Observable<MyNotification> | undefined;
  constructor() { 
      this.notifications$ = this.subject$.asObservable();    
  }

  showNotification(notification: MyNotification){
    this.subject$.next(notification);
  }


}
