import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  public fetchProduct(productId: number): Observable<Product> {
    return of({ id: productId, name: 'Foo', description: 'Test 123' });
  }
}
