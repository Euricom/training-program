import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import ProductList from '../components/ProductList';
import AppStore from '../store';

export default class ProductContainer extends Component {
  render() {
    return (
      <Subscribe to={[AppStore]}>
        {appStore => (
          <div>
            <h2>Products</h2>
            <ProductList products={appStore.state.products} />
          </div>
        )}
      </Subscribe>
    );
  }
}
