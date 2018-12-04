/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import store from '../store/index';
import { ServerError, ClientError, NoConnectionError } from '../httpError';

export const apiConfig = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
});

apiConfig.interceptors.request.use(config => {
  console.log('config log url', config.url);
  return config;
});

apiConfig.interceptors.response.use(
  res => res,
  err => {
    if (err.response) {
      if (err.response.status >= 400 && err.response.status <= 499) {
        console.error(`Error Occurred with status ${err.response.status} and body ${JSON.stringify(err.message)}`);
        store.dispatch('RAISE_ERROR', new ClientError(err.response.status, err.response.message, err.response));
      } else if (err.response.status >= 500) {
        console.error(`Error Occurred with status ${err.response.status} and body ${JSON.stringify(err.message)}`);
        store.dispatch('RAISE_ERROR', new ServerError(err.response.status, err.response.message, err.response));
      }
    } else if (err.request && err.request.status === 0) {
      console.error(`Error Occurred with status ${err.request.status} and body ${JSON.stringify(err.message)}`);
      store.dispatch('RAISE_ERROR', new NoConnectionError());
    } else {
      console.error(`Something horrible went wrong, ${err}`);
    }
    return Promise.reject(err);
  },
);
