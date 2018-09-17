import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import * as Actions from './store/actions';
import reducer from './store/reducers';
import App from './App';

// setup redux store
const middleware = [thunk, createLogger()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducer, enhancer);

// trigger initial load
store.dispatch(Actions.loadInitialData());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
