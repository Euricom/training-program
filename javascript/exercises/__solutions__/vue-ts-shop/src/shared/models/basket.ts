import { Product } from './product';
import { BasketDto, BasketItemDto } from '../services/basketService';

export class Basket {
  items?: BasketItem[] = [];

  constructor(data?: BasketDto) {
    if (!data) {
      return;
    }
    this.items = data.map(item => new BasketItem(item));
  }

  getTotalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.getTotalPrice(), 0);
  }

  updateProductInfo(product: Product) {
    const item = this.items.find(basketItem => basketItem.id === product.id);
    if (item) {
      return item.setProductInfo(product);
    }
  }

  addProduct(product: Product, quantity: number = 1) {
    let item = this.items.find(basketItem => basketItem.id === product.id);
    if (!item) {
      item = new BasketItem({ id: product.id, quantity: 0 });
      item.setProductInfo(product);
      this.items = [...this.items, item];
    }
    item.addQuantity(quantity);
  }

  deleteProduct(product: Product) {
    this.items = this.items.filter(basketItem => basketItem.id !== product.id);
  }

  clear() {
    this.items = [];
  }
}

export class BasketItem {
  id: number;
  title: string;
  price: number;
  quantity: number;

  constructor(data?: BasketItemDto) {
    if (!data) {
      return;
    }
    Object.assign(this, data);
  }

  getTotalPrice(): number {
    return this.price * this.quantity;
  }

  setProductInfo(product: Product) {
    this.title = product.title;
    this.price = product.price || 0;
  }

  addQuantity(quantity: number) {
    this.quantity += quantity;
  }
}
