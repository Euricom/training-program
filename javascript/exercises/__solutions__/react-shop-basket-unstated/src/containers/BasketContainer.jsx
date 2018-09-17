import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import Basket from '../components/Basket';
import AppStore from '../store';

const getBasketWithProducts = (basketItems, products) => {
  const basket = {
    items: basketItems.map(basketItem => {
      const product = products.find(p => p.id === basketItem.id);
      if (product) {
        return {
          ...basketItem,
          title: product.title,
          price: product.price,
          total: basketItem.quantity * product.price,
        };
      }
      return basketItem;
    }),
  };
  basket.totalPrice = basket.items.reduce((acc, item) => acc + (item.total || 0), 0);
  return basket;
};

export default class BasketContainer extends Component {
  render() {
    return (
      <Subscribe to={[AppStore]}>
        {store => {
          if (store.state.basket.length === 0) {
            return (
              <div>
                <h2>Basket</h2>
                <span>No Product in Basket</span>
              </div>
            );
          }
          const basket = getBasketWithProducts(store.state.basket, store.state.products);
          return (
            <div>
              <h2>Basket</h2>
              <Basket basket={basket} />
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
