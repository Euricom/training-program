import React, { Component } from 'react';
import eventBus from 'pubsub-js';

import api from '../services/api';
import Basket from '../components/Basket';

import { BasketModel } from '../models/basket';

export default class BasketContainer extends Component {
  state = {
    basket: new BasketModel(),
  };

  async componentDidMount() {
    try {
      this.loadBasket();

      // subscribe to addProduct event
      eventBus.subscribe('addProduct', (msg, data) => {
        this.setState(state => {
          state.basket.addProduct(data.product, data.quantity);
          return state.basket;
        });
      });
    } catch (error) {
      console.log('Faield to get basket', error);
    }
  }

  handleBasketClear = async () => {
    await api.basket.clear();
    this.loadBasket();
  };

  async loadBasket() {
    // get basket
    const initialBasket = await api.basket.get();

    // get app products that are in the basket
    const promises = [];
    initialBasket.items.forEach(item => {
      promises.push(api.products.getById(item.productId));
    });
    const products = await Promise.all(promises);

    // map all products in the basket
    products.forEach(product => {
      initialBasket.updateProductInfo(product);
    });

    // set state
    this.setState({ basket: initialBasket });
  }

  render() {
    const { basket } = this.state;
    if (basket.isEmpty()) {
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
        <button type="button" className="btn btn-default" onClick={this.handleBasketClear}>
          Clear
        </button>
      </div>
    );
  }
}
