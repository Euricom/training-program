import Vue from 'vue';
import Vuex from 'vuex';
import productService from '@/services/productService';
import basketService from '@/services/basketService';

Vue.use(Vuex);

const PRODUCT_LOADED = 'Product Loaded';
const PRODUCTS_LOADED = 'Products Loaded';
const PRODUCT_ADDED = 'Product Added';
const BASKET_LOADED = 'Basket Loaded';

export default new Vuex.Store({
  state: {
    products: [],
    basket: {
      items: [],
      total: null,
    },
  },
  mutations: {
    [PRODUCT_LOADED](state, payload) {
      console.log('payload', payload);
      state.products.push(payload);
    },
    [PRODUCTS_LOADED](state, payload) {
      console.log('payload', payload);
      state.products = payload;
    },
    [PRODUCT_ADDED](state, payload) {
      state.products.push(payload);
    },
    [BASKET_LOADED](state, payload) {
      state.basket.items = payload.items;
    },
  },
  getters: {
    product: state => id => {
      console.log('hitting this', id);
      return state.products.find(product => product.id === id);
    },
    products: state => state.products,
    basket: state => {
      const total = state.basket.items.reduce((acc, item) => acc + item.total, 0);

      return {
        items: state.basket.items,
        total,
      };
    },
  },
  actions: {
    async getProduct(store, id) {
      const product = await productService.getById(id);
      store.commit(PRODUCT_LOADED, product);
    },
    async getProducts(store) {
      const products = await productService.getAll();
      console.log(products);
      store.commit(PRODUCTS_LOADED, products);
    },
    async addProduct(store, product) {
      await productService.save(product);
      store.commit(PRODUCT_ADDED, product);
    },
    async getBasket(store) {
      let basket;
      basketService
        .get()
        .then(data => {
          basket = data;
          const promises = [];
          basket.items.forEach(item => {
            promises.push(productService.getById(item.id));
          });
          return Promise.all(promises);
        })
        .then(products => {
          products.forEach(product => {
            basket.items.forEach(item => {
              if (item.productId === product.id) {
                item.title = product.title;
                item.price = product.price;
                item.total = product.price * item.quantity;
              }
            });
          });
          store.commit(BASKET_LOADED, basket);
        })
        .catch(error => {
          console.error('failed to get products for basket', error);
          basket.clear();
        });
    },
  },
});
