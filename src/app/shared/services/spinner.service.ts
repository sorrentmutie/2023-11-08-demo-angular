import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private subject$ = new Subject<boolean>();
  spinner$: Observable<boolean> | undefined = undefined;
  
  showSpinner(){
    this.subject$.next(true);
  }

  hideSpinner() {
    this.subject$.next(false);
  }

  constructor() { 
    this.spinner$ = this.subject$.asObservable();
  }
}
