import { Product } from '@app/models/product.model';
import * as ProductActions from '../actions/product.actions';

export interface IProductsState extends Array<Product> {}

const initialState: IProductsState = [];

export function productsReducer(
  state: IProductsState = initialState,
  action: ProductActions.All,
): IProductsState {
  switch (action.type) {
    case ProductActions.LOAD_PRODUCTS:
      return action.payload;

    case ProductActions.ADD_PRODUCT:
      // NOT IMPLEMENTED YET
      return state;

    case ProductActions.DELETE_PRODUCT:
      // NOT IMPLEMENTED YET
      return state;

    case ProductActions.UPDATE_PRODUCT:
      // NOT IMPLEMENTED YET
      return state;

    default:
      return state;
  }
}
