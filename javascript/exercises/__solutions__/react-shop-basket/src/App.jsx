import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import eventBus from 'pubsub-js';

import ProductsContainer from './containers/ProductsContainer';
import BasketContainer from './containers/BasketContainer';

class App extends Component {
  constructor(props) {
    super(props);

    eventBus.subscribe('error', (msg, data) => {
      console.log('ERROR', msg, data);
      toast.error(data.message);
    });
  }

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
        <ToastContainer autoClose={5000} position="bottom-right" />
      </div>
    );
  }
}

export default App;
