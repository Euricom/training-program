import { BasketItem } from './basketItem';

// eslint-disable-next-line
export class Basket {
  // totalPrice: number
  // items: BasketItem[]

  constructor(data) {
    this.items = [];
    if (data) {
      this.items = data.map(item => new BasketItem(item));
      this.updateTotalPrice();
    }
  }

  addProduct(product, quantity) {
    let item = this.items.find(x => x.id === product.id);
    if (!item) {
      // new
      item = new BasketItem({ id: product.id, quantity: 0 });
      item.setProductInfo(product);
      this.items = [...this.items, item];
    }
    item.addQuantity(quantity);
    this.updateTotalPrice();
  }

  updateProductInfo(product) {
    const item = this.items.find(x => x.id === product.id);
    if (item) {
      item.setProductInfo(product);
      this.updateTotalPrice();
    }
  }

  updateTotalPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.total, 0);
  }
}
