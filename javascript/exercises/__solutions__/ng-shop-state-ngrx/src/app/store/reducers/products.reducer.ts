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
      return [...state, action.payload];

    case ProductActions.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload);

    case ProductActions.UPDATE_PRODUCT:
      const savedItem: any = state.find(
        (product) => product.id === action.payload.id,
      );
      const savedItemIndex = state.indexOf(savedItem);
      return [
        ...state.slice(0, savedItemIndex),
        action.payload,
        ...state.slice(savedItemIndex + 1),
      ];

    default:
      return state;
  }
}
