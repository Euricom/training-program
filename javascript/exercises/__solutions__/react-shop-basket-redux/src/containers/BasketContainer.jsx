import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from '../components/Basket';

class BasketContainer extends Component {
  render() {
    // prettier-ignore
    const { basket } = this.props;
    if (basket.items.length === 0) {
      return (
        <div>
          <h2>Basket</h2>
          <span>No Product in Basket</span>
        </div>
      );
    }
    return (
      <div>
        <h2>Basket</h2>
        <Basket basket={basket} />
      </div>
    );
  }
}

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

const mapStateToProps = state => ({
  basket: getBasketWithProducts(state.shop.basket, state.shop.products),
});

export default connect(mapStateToProps)(BasketContainer);
