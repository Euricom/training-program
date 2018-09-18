import { ActionReducer, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { createSelector } from 'reselect';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '@env/environment';

import { IBasketState, basketReducer } from './reducers/basket.reducer';
import { IProductsState, productsReducer } from './reducers/products.reducer';

// reducers

export function logger(
  reducer: ActionReducer<IAppState>,
): ActionReducer<IAppState> {
  return function(state: IAppState | undefined, action: any): IAppState {
    console.group(action.type);
    const nextState = reducer(state, action);
    console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
    console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
    console.log(
      `%c next state`,
      `color: #4CAF50; font-weight: bold`,
      nextState,
    );
    console.groupEnd();
    return nextState;
  };
}

// selectors

export const getProducts = (state: IAppState) => state.products;
export const getBasket = (state: IAppState) => state.basket;
export const getRouter = (state: IAppState) => state.router;

export const getActivatedRoute = createSelector(
  getRouter,
  (router) => router.state.root.children[0],
);

export const getProductByRouteId = createSelector(
  getProducts,
  getActivatedRoute,
  (products, route) => {
    const id = +route.params['id'];
    return products.find((product) => product.id === id);
  },
);

export const getBasketWithProducts = createSelector(
  getProducts,
  getBasket,
  (products, basket): any => {
    const items = basket.items.map((itemInBasket) => {
      const productInBasket = products.find(
        (product) => product.id === itemInBasket.id,
      );
      if (productInBasket) {
        return {
          title: productInBasket.title,
          price: productInBasket.price,
          quantity: itemInBasket.quantity,
          total: productInBasket.price * itemInBasket.quantity,
        };
      }
      return { total: 0 };
    });
    const totalPrice = items.reduce((acc, item) => acc + item.total, 0);
    return {
      items,
      totalPrice,
    };
  },
);

// state

export interface IAppState {
  products: IProductsState;
  basket: IBasketState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<IAppState> = {
  products: productsReducer,
  basket: basketReducer,
  router: routerReducer,
};

// combine with other mete reducers
export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
