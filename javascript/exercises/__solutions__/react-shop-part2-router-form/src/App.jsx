import React, { Component } from 'react';
import eventBus from 'pubsub-js';
import { Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import Header from './components/Header';
import ProductGridContainer from './containers/ProductGridContainer';
import ProductTableContainer from './containers/ProductTableContainer';
import ProductEditContainer from './containers/ProductEditContainer';

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
      <div id="app" className="container">
        <Header />
        <Route path="/" exact component={ProductGridContainer} />
        <Route path="/admin" component={ProductTableContainer} />
        <Route path="/edit" component={ProductEditContainer} />
        <Route path="/edit/:id" component={ProductEditContainer} />
        <ToastContainer autoClose={5000} position="bottom-right" />
      </div>
    );
  }
}

export default App;
