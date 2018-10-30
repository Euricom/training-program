import { Action } from '@ngrx/store';
import { Product } from 'app/models/product.model';
import { IBasketItemDTO } from 'app/services/basketService';

export const LOAD_BASKET = '[Basket] Load Basket';
export const ADD_PRODUCT = '[Basket] Add Product';

export class LoadBasket implements Action {
  public readonly type = LOAD_BASKET;
  constructor(public payload: IBasketItemDTO[]) {}
}

export class AddProduct implements Action {
  public readonly type = ADD_PRODUCT;
  constructor(public payload: { product: Product; quantity: number }) {}
}

export type All = LoadBasket | AddProduct;
