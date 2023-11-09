import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor() { }
  getDiscount(id: number): number {
    return id % 2 === 0 ? 0.1 : 0.2;
  }
}
