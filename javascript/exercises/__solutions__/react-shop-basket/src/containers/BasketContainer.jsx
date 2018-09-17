import React, { Component } from 'react';
import eventBus from 'pubsub-js';

import api from '../services/api';
import Basket from '../components/Basket';

export class BasketItem {
  constructor(data) {
    this.quantity = 0;
    this.price = 0;
    this.total = 0;

    if (data) {
      Object.assign(this, data);
    }
  }

  setProductInfo(product) {
    this.title = product.title;
    this.price = product.price;
    this.total = this.quantity * product.price;
  }

  addQuantity(quantity) {
    this.quantity += quantity;
    this.total = this.quantity * this.price;
  }
}

export class BasketModel {
  items = [];

  constructor(data) {
    this.items = [];
    if (data) {
      this.items = data.map(item => new BasketItem(item));
      this.updateTotalPrice();
    }
  }

  addProduct(product, quantity) {
    let item = this.items.find(x => x.id === product.id);
    if (!item) {
      // new
      item = new BasketItem({
        id: product.id,
        quantity: 0,
      });
      item.setProductInfo(product);
      this.items = [...this.items, item];
    }
    item.addQuantity(quantity);
    this.updateTotalPrice();
  }

  updateProductInfo(product) {
    const item = this.items.find(x => x.id === product.id);
    if (item) {
      item.setProductInfo(product);
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.total, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

export default class BasketContainer extends Component {
  state = {
    basket: new BasketModel(),
  };

  async componentDidMount() {
    try {
      // get basket
      const basketdata = await api.basket.get();
      const initialBasket = new BasketModel(basketdata);

      // get app products that are in the basket
      const promises = [];
      initialBasket.items.forEach(item => {
        promises.push(api.products.getById(item.id));
      });
      const products = await Promise.all(promises);

      // map all products in the basket
      products.forEach(product => {
        initialBasket.updateProductInfo(product);
      });

      // set state
      this.setState({ basket: initialBasket });

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
      </div>
    );
  }
}
