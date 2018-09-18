import { Action } from '@ngrx/store';

import { Product } from 'app/models/product.model';

export const LOAD_PRODUCTS = '[Products] Load Products';
export const DELETE_PRODUCT = '[Products] Delete Product';
export const ADD_PRODUCT = '[Products] Add Product';
export const UPDATE_PRODUCT = '[Products] Update Product';

export class LoadProducts implements Action {
  public readonly type = LOAD_PRODUCTS;
  constructor(public payload: Product[]) {}
}

export class DeleteProduct implements Action {
  readonly type = DELETE_PRODUCT;
  constructor(public payload: number) {}
}

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;
  constructor(public payload: Product) {}
}

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;
  constructor(public payload: Product) {}
}

export type All = LoadProducts | DeleteProduct | UpdateProduct | AddProduct;
