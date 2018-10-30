import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
// import { wiretap, inspect } from 'mobx-wiretap/mst';

import { connectReduxDevtools } from 'mst-middlewares';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import AppStore from './store';

import App from './App';

const appStore = AppStore.create();
window.appStore = appStore; // to allow easy debugging
connectReduxDevtools(require('remotedev'), appStore);

// Add following lines if your want to use wireTap debug tool
// wiretap('WebShop');
// inspect('WebShop', appStore, ['addProduct']);

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
