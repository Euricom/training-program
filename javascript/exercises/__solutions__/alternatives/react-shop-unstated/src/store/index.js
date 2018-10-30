import { Container } from 'unstated';
// import produce from 'immer';

import api from '../api';

type AppState = {
  products: Array<any>,
  basket: Array<any>,
};

export default class AppStore extends Container<AppState> {
  state = {
    products: [],
    basket: [],
  };

  async loadProducts() {
    const products = await api.products.getAll();
    this.setState(state => ({
      ...state,
      products,
    }));
  }

  async loadBasket() {
    const basket = await api.basket.get();
    this.setState(state => ({
      ...state,
      basket,
    }));
  }

  addProduct(product, quantity) {
    console.log('addProduct', product.title, quantity);

    this.setState(state => {
      const basketItem = state.basket.find(item => item.id === product.id);
      if (!basketItem) {
        // add item to basket
        return {
          ...state,
          basket: [...state.basket, { id: product.id, quantity }],
        };
      }
      // update current basket item
      return {
        ...state,
        basket: state.basket.map(item => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        }),
      };
    });

    // Alternative with immer
    // this.setState(state =>
    //   produce(state, draftState => {
    //     const basketItem = draftState.basket.find(item => item.id === product.id);
    //     if (!basketItem) {
    //       draftState.basket.push({ id: product.id, quantity });
    //     } else {
    //       basketItem.quantity += quantity;
    //     }
    //   }),
    // );
  }
}
