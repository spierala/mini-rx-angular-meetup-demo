import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Product } from './models';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  getTodos(): Observable<Product[]> {
    return of([
      { id: 1, title: 'Playstation 5' },
      { id: 2, title: 'iPhone 15' },
      { id: 3, title: 'Cool Bike' },
    ]).pipe(delay(350));
  }
}
