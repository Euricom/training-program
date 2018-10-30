import React from 'react';
import { Subscribe } from 'unstated';

import Product from './Product';
import AppStore from '../store';

const ProductList = ({ products }) => (
  <Subscribe to={[AppStore]}>
    {appStore => (
      <div className="flex-grid">
        {products.map(product => (
          <div className="col" key={product.id}>
            <Product product={product} onAdd={quantity => appStore.addProduct(product, quantity)} />
          </div>
        ))}
      </div>
    )}
  </Subscribe>
);

export default ProductList;
