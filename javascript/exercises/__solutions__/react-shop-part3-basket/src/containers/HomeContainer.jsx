import React, { Component } from 'react';

import ProductsGridContainer from './ProductGridContainer';
import BasketContainer from './BasketContainer';

export default class HomeContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-8">
            <ProductsGridContainer />
          </div>
          <div className="col-md-4">
            <BasketContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
