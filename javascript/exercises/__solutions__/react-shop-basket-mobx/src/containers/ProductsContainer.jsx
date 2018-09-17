import React, { Component } from 'react';
// import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';

import ProductList from '../components/ProductList';

class ProductContainer extends Component {
  render() {
    const { store } = this.props;
    const { products } = store;
    // const { store: { products } } = this.props;
    // console.log('productss', toJS(products));
    return (
      <div>
        <h2>Products</h2>
        <ProductList products={products} />
      </div>
    );
  }
}

export default inject('store')(observer(ProductContainer));
