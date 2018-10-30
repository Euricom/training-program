import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
import { enableLogging } from 'mobx-logger';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import AppStore from './store';
import App from './App';

enableLogging({
  action: true,
  reaction: false,
  transaction: false,
  compute: true,
});
configure({ enforceActions: true });

const appStore = new AppStore();
appStore.loadInitialData();

render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
