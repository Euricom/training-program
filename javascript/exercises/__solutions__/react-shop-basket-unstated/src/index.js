import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'unstated';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import AppStore from './store';
import App from './App';

const appStore = new AppStore();
appStore.loadProducts();
appStore.loadBasket();

render(
  <Provider inject={[appStore]}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
