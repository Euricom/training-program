import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '@app/models/product.model';
import { environment } from '@env/environment';

export interface IBasketItemDTO {
  id: number;
  quantity: number;
}
export interface IBasket extends Array<IBasketItemDTO> {}

const basketKey = 'abc';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  constructor(private httpClient: HttpClient) {}

  getBasket(): Observable<IBasketItemDTO[]> {
    return this.httpClient.get<IBasketItemDTO[]>(
      `${environment.apiBase}/api/basket/${basketKey}`,
    );
  }

  addProduct(product: Product, quantity: number) {
    const resource = {
      quantity,
    };
    return this.httpClient.post<IBasketItemDTO[]>(
      `${environment.apiBase}/api/basket/${basketKey}/product/${product.id}`,
      resource,
    );
  }

  clear() {
    return this.httpClient.delete<IBasketItemDTO[]>(
      `${environment.apiBase}/api/basket/${basketKey}`,
    );
  }
}
