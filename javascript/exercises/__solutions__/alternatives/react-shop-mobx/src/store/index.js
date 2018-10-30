import { observable, computed, action, runInAction } from 'mobx';
import api from '../api';

export default class AppStore {
  //
  // state
  //
  @observable products = [];
  @observable basket = [];
  @observable loading = false;
  @observable error = null;

  //
  // computed properties
  //
  @computed
  get basketWithProducts() {
    const basket = {
      items: this.basket.map(basketItem => {
        const product = this.products.find(p => p.id === basketItem.id);
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
  }

  //
  // actions
  //
  @action
  async loadInitialData() {
    this.loading = true;
    try {
      const [products, basket] = await Promise.all([api.products.getAll(), api.basket.get()]);
      // after the await (of .then) you need to call runInAction
      runInAction(() => {
        this.products = products;
        this.basket = basket;
        this.loading = false;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.loading = false;
      });
    }
  }

  // alternative with flow
  // loadInitialData = flow(function* loadProducts() {
  //   const products = yield api.products.getAll();
  //   const basket = yield api.basket.get();
  //   console.log('products', products, basket);
  //   this.products = products;
  //   this.basket = basket;
  // });

  @action
  addProduct(product, quantity) {
    console.log('addProduct', product.title, quantity);
    const basketItem = this.basket.find(item => item.id === product.id);
    if (!basketItem) {
      this.basket.push({ id: product.id, quantity });
      return;
    }
    basketItem.quantity += quantity;
  }
}
