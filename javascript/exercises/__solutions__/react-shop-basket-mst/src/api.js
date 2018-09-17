import axios from 'axios';
import eventBus from 'pubsub-js';
import { RequestError, NoConnectionError } from './core/errors';

const instance = axios.create({
  baseURL: 'https://euri-test-api.now.sh/api',
  // baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});

// Add a request log interceptor
instance.interceptors.request.use(config => {
  console.log(config.method.toUpperCase(), config.url);
  return config;
});

// Add error transform interceptor
instance.interceptors.response.use(
  response => response,
  error => {
    if (Object.prototype.hasOwnProperty.call(error.config, 'handleError') && error.config.handleError === true) {
      // the error will be handled locally
      return Promise.reject(error);
    }

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      eventBus.publish('error', new RequestError(error.response, error.config.url));
    } else if (error.request) {
      // The request was made but no response was received
      // Typically there is a network error or no internet connection
      // console.log(error.request);
      eventBus.publish('error', new NoConnectionError());
    } else {
      // Something happened in setting up the request that triggered an Error
      eventBus.publish('error', error);
    }

    return Promise.reject(error);
  },
);

export default {
  base: instance,
  products: {
    getAll: () => instance.get(`/products`).then(res => res.data.selectedProducts),
    getById: id => instance.get(`products/${id}`).then(res => res.data),
  },
  basket: {
    get: () => instance.get(`/basket/abc`).then(res => res.data),
  },
};
