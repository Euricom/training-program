/* eslint-disable class-methods-use-this */
import axios from 'axios';
import { Basket } from '@/models/basket';

// FIXME: avoid duplication of https://euri-test-api.now.sh/api...
// TODO: add unit tests

class BasketService {
  get() {
    return axios.get('https://euri-test-api.now.sh/api/basket/abcdef').then(res => new Basket(res.data));
  }

  create(productId, quantity) {
    return axios
      .post(`https://euri-test-api.now.sh/api/basket/abcdef/product/${productId}`, { quantity })
      .then(res => new Basket(res.data));
  }

  delete() {
    return axios.delete('https://euri-test-api.now.sh/api/basket/abcdef').then(res => new Basket(res.data));
  }
}

export default new BasketService();
