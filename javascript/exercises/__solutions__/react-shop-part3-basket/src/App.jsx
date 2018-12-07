import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import eventBus from 'pubsub-js';

import Header from './components/Header';
import ProductGridContainer from './containers/ProductGridContainer';
import ProductTableContainer from './containers/ProductTableContainer';

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
        <Header />
        <div className="row">
          <Route path="/" exact component={ProductGridContainer} />
          <Route path="/admin" component={ProductTableContainer} />
        </div>
        <ToastContainer autoClose={5000} position="bottom-right" />
      </div>
    );
  }
}

export default App;
