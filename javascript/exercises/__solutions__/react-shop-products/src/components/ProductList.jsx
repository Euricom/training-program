import React from 'react';

import Product from './Product';

const ProductList = ({ products }) => (
  <div className="flex-grid">
    {products.map(product => (
      <div className="col" key={product.id}>
        <Product product={product} />
      </div>
    ))}
  </div>
);

export default ProductList;
