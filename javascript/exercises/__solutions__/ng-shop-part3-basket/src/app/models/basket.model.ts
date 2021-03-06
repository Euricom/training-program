import { IBasket, IBasketItem } from '@app/services/basketService';
import { Product } from './product.model';

export class BasketItem {
  id = 0;
  title?: string;
  quantity = 0;
  price = 0;
  total = 0;

  constructor(data?: IBasketItem) {
    if (data) {
      this.id = data.id;
      this.quantity = data.quantity;
    }
  }

  setProductInfo(product: Product) {
    this.title = product.title;
    this.price = product.price || 0;
    this.total = this.quantity * this.price;
  }

  addQuantity(quantity: number) {
    this.quantity += quantity;
    this.total = this.quantity * this.price;
  }
}

export class Basket {
  items: BasketItem[] = [];
  totalPrice = 0;

  constructor(data?: IBasket) {
    if (data) {
      this.items = data.map((item) => new BasketItem(item));
      this.updateTotalPrice();
    }
  }

  addProduct(product: Product, quantity: number) {
    let item = this.items.find((basketItem) => basketItem.id === product.id);
    if (!item) {
      // new
      item = new BasketItem({ id: product.id, quantity: 0 });
      item.setProductInfo(product);
      this.items = [...this.items, item];
    }
    item.addQuantity(quantity);
    this.updateTotalPrice();
  }

  updateProductInfo(product: Product) {
    const item = this.items.find((basketItem) => basketItem.id === product.id);
    if (item) {
      item.setProductInfo(product);
      this.updateTotalPrice();
    }
  }

  private updateTotalPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.total, 0);
  }
}
