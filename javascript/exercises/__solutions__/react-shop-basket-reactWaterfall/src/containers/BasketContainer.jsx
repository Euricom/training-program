import React, { Component } from 'react';

import Basket from '../components/Basket';
import { connect } from '../store';

function getBasketWithProducts(basketItems, products) {
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
}

class BasketContainer extends Component {
  render() {
    const { basket, products } = this.props;
    if (basket.length === 0) {
      return (
        <div>
          <h2>Basket</h2>
          <span>No Product in Basket</span>
        </div>
      );
    }
    const basketWithProducts = getBasketWithProducts(basket, products);
    return (
      <div>
        <h2>Basket</h2>
        <Basket basket={basketWithProducts} />
      </div>
    );
  }
}

export default connect(state => state)(BasketContainer);
