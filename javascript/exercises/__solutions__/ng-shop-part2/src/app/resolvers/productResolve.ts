import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProductService } from '../services/productService';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductResolve implements Resolve<Product | null> {
  constructor(private productService: ProductService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    const id = route.params['id'];
    if (id) {
      return this.productService.getProduct(id);
    }
    return of(null);
  }
}
