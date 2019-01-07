import React, { Component } from 'react';

import ProductPanel from './ProductPanel';

export default class ProductList extends Component {
  render() {
    const { products, onAddProduct } = this.props;
    return (
      <div className="flex-grid">
        {products.map(product => (
          <div className="col" key={product.id}>
            <ProductPanel product={product} onAdd={quantity => onAddProduct(product, quantity)} />
          </div>
        ))}
      </div>
    );
  }
}
