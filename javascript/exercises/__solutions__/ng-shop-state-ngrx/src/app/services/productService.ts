import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';

export interface IProductDTO {
  id: number;
  sku?: string;
  title?: string;
  desc?: string;
  image?: string;
  stocked?: boolean;
  basePrice?: number;
  price?: number;
}

interface IProductsDTO {
  total: number;
  page: number;
  pageSize: number;
  selectedProducts: IProductDTO[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  getProducts(page = 0, sortExpression = ''): Observable<IProductDTO[]> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (sortExpression) {
      params = params.set('sort', sortExpression);
    }
    return this.httpClient
      .get<IProductsDTO>(`${environment.apiBase}/api/products`, { params })
      .pipe(map((data) => data.selectedProducts));
  }

  getProduct(id: number): Observable<IProductDTO> {
    return this.httpClient.get<IProductDTO>(
      `${environment.apiBase}/api/products/${id}`,
    );
  }

  update(product: IProductDTO) {
    return this.httpClient.put<IProductDTO>(
      `${environment.apiBase}/api/products/${product.id}`,
      product,
    );
  }

  create(product: IProductDTO) {
    return this.httpClient.post<IProductDTO>(
      `${environment.apiBase}/api/products`,
      product,
    );
  }

  save(product: IProductDTO) {
    if (!product.id) {
      return this.create(product);
    }
    return this.update(product);
  }

  delete(product: IProductDTO) {
    return this.httpClient.delete<IProductDTO>(
      `${environment.apiBase}/api/products/${product.id}`,
    );
  }
}
