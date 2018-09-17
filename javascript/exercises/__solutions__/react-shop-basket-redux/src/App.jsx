import React, { Component } from 'react';

import ProductsContainer from './containers/ProductsContainer';
import BasketContainer from './containers/BasketContainer';

class App extends Component {
  render() {
    return (
      <div id="app" className="container-fluid">
        <h1>Web Shop</h1>
        <div className="row">
          <div className="col-md-8">
            <ProductsContainer />
          </div>
          <div className="col-md-4">
            <BasketContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
