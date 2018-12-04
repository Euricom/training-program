import * as BasketActions from '../actions/basket.actions';

export interface IBasketItem {
  id: number;
  quantity: number;
  productId?: number;
  title?: string;
  total?: number;
  price?: number;
}

export interface IBasketState {
  items: IBasketItem[];
}

const initialState: IBasketState = {
  items: [],
};

export function basketReducer(
  state: IBasketState = initialState,
  action: BasketActions.All,
): IBasketState {
  switch (action.type) {
    case BasketActions.LOAD_BASKET:
      return {
        items: action.payload,
      };

    case BasketActions.ADD_PRODUCT:
      const existingItem = state.items.find(
        (item) => item.id === action.payload.product.id,
      );
      if (existingItem) {
        // update quantity
        return {
          items: state.items.map((item) => {
            if (item.id === action.payload.product.id) {
              return {
                ...item,
                quantity: item.quantity + action.payload.quantity,
              };
            }
            return item;
          }),
        };
      }
      // add new item
      return {
        items: [
          ...state.items,
          {
            id:
              state.items.reduce((acc, prop) => Math.max(acc, prop.id), 0) + 1,
            productId: action.payload.product.id,
            quantity: action.payload.quantity,
          },
        ],
      };
    default:
      return state;
  }
}
