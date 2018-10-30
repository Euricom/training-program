import React, { Component } from 'react';
import eventBus from 'pubsub-js';

import Product from './Product';

export default class ProductList extends Component {
  addProduct(product, quantity) {
    eventBus.publish('addProduct', { product, quantity });
  }

  render() {
    const { products } = this.props;
    return (
      <div className="flex-grid">
        {products.map(product => (
          <div className="col" key={product.id}>
            <Product product={product} onAdd={quantity => this.addProduct(product, quantity)} />
          </div>
        ))}
      </div>
    );
  }
}
