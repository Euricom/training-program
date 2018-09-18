import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '@app/models/product.model';

import {
  getProductByRouteId,
  getProducts,
  IAppState,
  getBasketWithProducts,
} from './store';
import * as ProductActions from './store/actions/product.actions';
import * as BasketActions from './store/actions/basket.actions';
import { ProductService } from 'app/services/productService';
import { BasketService } from 'app/services/basketService';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShopFacade {
  public products$ = this.store.select(getProducts).pipe(share());
  public selectedProduct$ = this.store.select(getProductByRouteId);
  public basket$ = this.store.select(getBasketWithProducts);

  constructor(
    private store: Store<IAppState>,
    private productService: ProductService,
    private basketService: BasketService,
  ) {}

  loadProducts(page = 0, sortExpression = ''): void {
    this.productService
      .getProducts(page, sortExpression)
      .subscribe((products) => {
        this.store.dispatch(new ProductActions.LoadProducts(products));
      });
  }

  loadBasket(): void {
    this.basketService.getBasket().subscribe((basket) => {
      this.store.dispatch(new BasketActions.LoadBasket(basket));
    });
  }

  clearBasket(): void {
    this.basketService.clear().subscribe(() => {
      this.store.dispatch(new BasketActions.LoadBasket([]));
    });
  }

  addProduct(product: Product, quantity: number) {
    this.basketService.addProduct(product, quantity).subscribe(() => {
      this.store.dispatch(new BasketActions.AddProduct({ product, quantity }));
    });
  }

  saveProduct(product: Product): Observable<Product> {
    return this.productService.save(product).pipe(
      tap((products) => {
        if (product.isNew()) {
          this.store.dispatch(new ProductActions.AddProduct(products));
        }
        this.store.dispatch(new ProductActions.UpdateProduct(products));
      }),
    );
  }
}
