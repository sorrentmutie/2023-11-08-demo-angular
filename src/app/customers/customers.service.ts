import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private subject$: Subject<Customer>
     = new Subject<Customer>();

  customers$: Observable<Customer> | undefined = undefined;

  addCustomer(customer: Customer) {
    this.subject$.next(customer);
  }   
  constructor() {
    this.customers$ = this.subject$.asObservable();
  }
}
