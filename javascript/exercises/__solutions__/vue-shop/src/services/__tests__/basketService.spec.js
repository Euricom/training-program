import MockAdapter from 'axios-mock-adapter';
import { apiConfig } from '../api';
import basketService from '../basketService';
import { Product } from '@/models/product';
import { Basket } from '../../models/basket';
import { BasketItem } from '../../models/basketItem';

const basketKey = process.env.VUE_APP_BASKET_KEY;

describe('Product Service', () => {
  let axiosMock;
  let expectedBasket;
  beforeEach(() => {
    axiosMock = new MockAdapter(apiConfig);
    expectedBasket = [
      {
        id: 1,
        productId: 1,
        quantity: 1,
      },
      {
        id: 2,
        productId: 2,
        quantity: 4,
      },
    ];
  });

  it('should get a basket', () => {
    axiosMock.onGet(`/basket/${basketKey}`).reply(200, expectedBasket);

    basketService.get().then(res => {
      const mappedBasket = new Basket(expectedBasket);
      expect(res).toEqual(mappedBasket);
      expect(res).toBeInstanceOf(Basket);
    });
  });

  it('should create a product in the basket', () => {
    const product = new Product({ id: 3, title: 'new product', price: 123 });
    expectedBasket.push(new BasketItem({ ...product, quantity: 2 }));

    axiosMock.onPost(`/basket/${basketKey}/product/3`, { quantity: 2 }).reply(200, expectedBasket);

    basketService.create(3, 2).then(res => {
      const mappedBasket = new Basket(expectedBasket);
      expect(res).toEqual(mappedBasket);
      expect(res).toBeInstanceOf(Basket);
    });
  });

  it('should delete a basket', () => {
    axiosMock.onDelete(`/basket/${basketKey}`).reply(200, expectedBasket);

    basketService.delete().then(res => {
      const mappedBasket = new Basket(expectedBasket);
      expect(res).toEqual(mappedBasket);
      expect(res).toBeInstanceOf(Basket);
    });
  });
});
