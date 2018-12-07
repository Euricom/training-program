import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import BasketContainer from './BasketContainer';

export default class ProductGridContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="col-md-8">
          <ProductsContainer />
        </div>
        <div className="col-md-4">
          <BasketContainer />
        </div>
      </React.Fragment>
    );
  }
}
