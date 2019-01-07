import React from 'react';

import ProductPanel from './ProductPanel';

const ProductList = ({ products }) => (
  <div className="flex-grid">
    {products.map(product => (
      <div className="col" key={product.id}>
        <ProductPanel product={product} />
      </div>
    ))}
  </div>
);

export default ProductList;
