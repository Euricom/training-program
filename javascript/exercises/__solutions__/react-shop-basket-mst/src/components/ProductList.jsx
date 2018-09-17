import React from 'react';
import { inject, observer } from 'mobx-react';

import Product from './Product';

const ProductList = ({ products, store }) => (
  <div className="flex-grid">
    {products.map(product => (
      <div className="col" key={product.id}>
        <Product product={product} onAdd={quantity => store.addProduct(product, quantity)} />
      </div>
    ))}
  </div>
);

export default inject('store')(observer(ProductList));
