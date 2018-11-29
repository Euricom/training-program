/* eslint-disable class-methods-use-this */
import axios from 'axios';

class BasketService {
  get() {
    return axios.get('https://euri-test-api.now.sh/api/basket/abcdef').then(res => res.data);
  }

  addProduct(productId, quantity) {
    return axios
      .post(`https://euri-test-api.now.sh/api/basket/abcdef/product/${productId}`, { quantity })
      .then(res => res.data);
  }

  delete() {
    return axios.delete('https://euri-test-api.now.sh/api/basket/abcdef').then(res => res.data);
  }
}

export default new BasketService();
