import React from 'react';
import { render } from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { Provider, actions } from './store';
import App from './App';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root'),
);

actions.loadInitialData();
