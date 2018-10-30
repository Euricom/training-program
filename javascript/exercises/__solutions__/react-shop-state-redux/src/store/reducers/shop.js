import produce from 'immer';

import { RECEIVE_INITIAL_DATA, REQUEST_INITIAL_DATA, ADD_PRODUCT } from '../constants/ActionTypes';

const initialState = {
  loading: false,
  products: [],
  basket: [],
};

export default function shop(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_INITIAL_DATA:
      return {
        products: action.products,
        basket: action.basket,
        loading: false,
      };

    case REQUEST_INITIAL_DATA:
      return {
        ...state,
        loading: true,
      };

    case ADD_PRODUCT:
      return produce(state, draftState => {
        const basketItem = draftState.basket.find(item => item.id === action.product.id);
        if (!basketItem) {
          draftState.basket.push({ id: action.product.id, quantity: action.quantity });
        } else {
          basketItem.quantity += action.quantity;
        }
      });

    default:
      return state;
  }
}
