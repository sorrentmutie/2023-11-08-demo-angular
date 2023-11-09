import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'mySecond'
})
export class MySecondPipe implements PipeTransform {
  transform(value: Product): string {
    return value.id + " " +  value.name + ": " + value.price;
  }
}
