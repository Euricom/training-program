import React from 'react';

import Product from './Product';
import { actions } from '../store';

const ProductList = ({ products }) => (
  <div className="flex-grid">
    {products.map(product => (
      <div className="col" key={product.id}>
        <Product product={product} onAdd={quantity => actions.addProduct(product, quantity)} />
      </div>
    ))}
  </div>
);

export default ProductList;
