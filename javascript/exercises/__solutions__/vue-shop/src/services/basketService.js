import axios from 'axios';
import { Basket } from '@/models/basket';

class BasketService {
  // eslint-disable-next-line
  get() {
    return axios.get('https://euri-test-api.now.sh/api/basket/abcdef').then(res => new Basket(res.data));
  }
}

export default new BasketService();
