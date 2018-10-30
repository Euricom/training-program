import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '@app/models/product.model';
import { environment } from '@env/environment';

export interface IProductDTO {
  id?: number;
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
  getProducts(page = 0, sortExpression = ''): Observable<Product[]> {
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (sortExpression) {
      params = params.set('sort', sortExpression);
    }
    return this.httpClient
      .get<IProductsDTO>(`${environment.apiBase}/api/products`, { params })
      .pipe(
        map((data) =>
          data.selectedProducts.map((resource) => new Product(resource)),
        ),
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient
      .get<IProductDTO>(`${environment.apiBase}/api/products/${id}`)
      .pipe(map((resource) => new Product(resource)));
  }

  update(product: Product) {
    return this.httpClient
      .put<IProductDTO>(
        `${environment.apiBase}/api/products/${product.id}`,
        product,
      )
      .pipe(map((resource) => new Product(resource)));
  }

  create(product: Product) {
    return this.httpClient
      .post<IProductDTO>(`${environment.apiBase}/api/products`, product)
      .pipe(map((resource) => new Product(resource)));
  }

  save(product: Product) {
    if (product.isNew()) {
      return this.create(product);
    }
    return this.update(product);
  }

  delete(product: Product) {
    return this.httpClient
      .delete<IProductDTO>(`${environment.apiBase}/api/products/${product.id}`)
      .pipe(map((resource) => new Product(resource)));
  }
}
