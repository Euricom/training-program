import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { IProductDTO } from './productService';

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

  addProduct(product: IProductDTO, quantity: number) {
    console.log('QA', quantity);
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
