import { Basket, BasketItem } from 'graphql-types';

export interface IBasketItem extends BasketItem {
  total: number;
}

export interface IBasket extends Basket {
  total?: number;
  items: IBasketItem[];
}

export const defaults = {};

export const resolvers = {
  Mutation: {
    test: (_, { id }, { cache, getCacheKey }) => {
      console.log('test', id, cache, getCacheKey);
      return { allProducts: null };
    },
  },
  Basket: {
    total: (basket: Basket) => {
      return basket.items.reduce((acc, item) => {
        if (!item.product) {
          return acc;
        }
        const totalOfItem = item.product.price * item.quantity;
        return acc + totalOfItem;
      }, 0);
    },
  },
  BasketItem: {
    total: (basketItem: IBasketItem) => {
      if (!basketItem.product) {
        return 0;
      }

      if (!basketItem.product.price || !basketItem.quantity) {
        return 0;
      }
      return basketItem.product.price * basketItem.quantity;
    },
  },
};
