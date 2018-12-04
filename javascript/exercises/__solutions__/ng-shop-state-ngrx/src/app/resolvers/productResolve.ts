import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { ProductService, IProductDTO } from '@app/services/productService';

@Injectable({
  providedIn: 'root',
})
export class ProductResolve implements Resolve<IProductDTO | null> {
  constructor(private productService: ProductService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IProductDTO | null> {
    const id = route.params['id'];
    if (id) {
      return this.productService.getProduct(id);
    }
    return of(null);
  }
}
