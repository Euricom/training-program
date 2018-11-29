/* eslint-disable import/prefer-default-export */

// TODO: add unit test

export class BasketItem {
  constructor(data) {
    this.quantity = 0;
    this.price = 0;
    this.total = 0;

    if (data) {
      Object.assign(this, data);
    }
  }

  setProductInfo(product) {
    this.title = product.title;
    this.price = product.price;
    this.total = this.quantity * product.price;
  }

  addQuantity(quantity) {
    this.quantity += quantity;
    this.total = this.quantity * this.price;
  }
}
