import React, { Component } from 'react';

import ProductList from '../components/ProductList';
import { connect } from '../store';

class ProductContainer extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <h2>Products</h2>
        <ProductList products={products} />
      </div>
    );
  }
}

export default connect(state => state)(ProductContainer);
