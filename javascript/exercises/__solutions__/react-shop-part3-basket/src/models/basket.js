/* eslint-disable import/prefer-default-export */
import { BasketItem } from './basketItem';

export class BasketModel {
  items = [];

  constructor(data) {
    this.items = [];
    if (data) {
      this.items = data.map(item => new BasketItem(item));
      this.updateTotalPrice();
    }
  }

  addProduct(product, quantity) {
    let item = this.items.find(x => x.productId === product.id);
    const lastItemId = this.items.reduce((acc, x) => Math.max(x.id), 0);
    if (!item) {
      // new
      item = new BasketItem({
        id: lastItemId + 1,
        productId: product.id,
        quantity: 0,
      });
      item.setProductInfo(product);
      this.items = [...this.items, item];
    }
    item.addQuantity(quantity);
    this.updateTotalPrice();
  }

  updateProductInfo(product) {
    const item = this.items.find(x => x.productId === product.id);
    if (item) {
      item.setProductInfo(product);
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.total, 0);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}
