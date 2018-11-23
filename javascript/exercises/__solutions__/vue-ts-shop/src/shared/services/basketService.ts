import axios from 'axios';
import { Basket } from '../models/basket';

export class BasketItemDto {
  id: number;
  quantity: number;
}

export interface BasketDto extends Array<BasketItemDto> {}

const baseUrl = 'https://euri-test-api.now.sh/api/basket/abcdef';

export class BasketService {
  get(): Promise<Basket> {
    return axios.get<BasketDto>(baseUrl).then(res => new Basket(res.data));
  }

  create(productId: number, quantity: number): Promise<Basket> {
    return axios.post<BasketDto>(`${baseUrl}/product/${productId}`, { quantity }).then(res => new Basket(res.data));
  }

  delete(): Promise<Basket> {
    return axios.delete(baseUrl).then(res => new Basket(res.data));
  }
}

export default new BasketService();
