import { Action } from '@ngrx/store';
import { IBasketItemDTO } from 'app/services/basketService';
import { IProductDTO } from '@app/services/productService';

export const LOAD_BASKET = '[Basket] Load Basket';
export const ADD_PRODUCT = '[Basket] Add Product';

export class LoadBasket implements Action {
  public readonly type = LOAD_BASKET;
  constructor(public payload: IBasketItemDTO[]) {}
}

export class AddProduct implements Action {
  public readonly type = ADD_PRODUCT;
  constructor(public payload: { product: IProductDTO; quantity: number }) {}
}

export type All = LoadBasket | AddProduct;
