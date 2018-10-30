/* eslint-disable no-param-reassign */
import { types, flow } from 'mobx-state-tree';

import api from '../api';

export const Product = types.model('Product', {
  id: types.number,
  sku: types.string,
  title: types.string,
  price: types.number,
  basePrice: types.number,
  image: types.string,
  stocked: true,
});

export const BasketItem = types.model('BasketItem', {
  id: types.number,
  quantity: types.number,
});

export default types
  .model('AppStore', {
    isLoading: false,
    products: types.array(Product),
    basket: types.array(BasketItem),
  })
  .views(self => ({
    get basketWithProducts() {
      const basket = {
        items: self.basket.map(basketItem => {
          const product = self.products.find(p => p.id === basketItem.id);
          if (product) {
            return {
              ...basketItem,
              title: product.title,
              price: product.price,
              total: basketItem.quantity * product.price,
            };
          }
          return basketItem;
        }),
      };
      basket.totalPrice = basket.items.reduce((acc, item) => acc + (item.total || 0), 0);
      return basket;
    },
  }))
  .actions(self => ({
    loadInitialData: flow(function* loadInitialData() {
      try {
        self.isLoading = true;
        const basket = yield api.basket.get();
        const products = yield api.products.getAll();
        self.products = products;
        self.basket = basket;
        self.isLoading = false;
      } catch (err) {
        console.error('Failed to load data ', err);
        self.isLoading = false;
        self.error = err;
      }
    }),
    addProduct(product, quantity) {
      console.log('addProduct', product.title, quantity);
      const basketItem = self.basket.find(item => item.id === product.id);
      if (!basketItem) {
        self.basket.push({ id: product.id, quantity });
        return;
      }
      basketItem.quantity += quantity;
    },
    afterCreate() {
      self.loadInitialData();
    },
  }));
