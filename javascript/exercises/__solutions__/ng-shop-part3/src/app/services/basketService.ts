import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Basket } from '@app/models/basket.model';
import { Product } from '@app/models/product.model';
import { environment } from '@env/environment';

export interface IBasketItem {
  id: number;
  quantity: number;
}
export interface IBasket extends Array<IBasketItem> {}

const basketKey = 'abc';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private httpClient: HttpClient) {}

  getBasket(): Observable<Basket> {
    return this.httpClient
      .get<IBasket>(`${environment.apiBase}/api/basket/${basketKey}`)
      .pipe(map((resource) => new Basket(resource)));
  }

  addProduct(product: Product, quantity: number) {
    return this.httpClient
      .post<IBasket>(
        `${environment.apiBase}/api/basket/${basketKey}/product/${product.id}`,
        {
          quantity,
        },
      )
      .pipe(map((resource) => new Basket(resource)));
  }

  clear() {
    return this.httpClient
      .delete<IBasket>(`${environment.apiBase}/api/basket/${basketKey}`)
      .pipe(map((resource) => new Basket(resource)));
  }
}
