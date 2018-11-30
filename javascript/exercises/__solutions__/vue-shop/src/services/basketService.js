/* eslint-disable class-methods-use-this */
import { apiConfig } from './api';
import { Basket } from '@/models/basket';

const basketKey = process.env.VUE_APP_BASKET_KEY;

class BasketService {
  get() {
    return apiConfig.get(`/basket/${basketKey}`).then(res => new Basket(res.data));
  }

  create(productId, quantity) {
    return apiConfig.post(`/basket/${basketKey}/product/${productId}`, { quantity }).then(res => new Basket(res.data));
  }

  delete() {
    return apiConfig.delete(`/basket/${basketKey}`).then(res => new Basket(res.data));
  }
}

export default new BasketService();
