// eslint-disable-next-line
export class BasketItem {
  // quantity: number
  // price: number
  // total: number
  // id: number

  constructor(data) {
    this.quantity = 0;
    this.price = 0;
    this.total = 0;

    if (data) {
      Object.assign(this, data);
      // alternative copy all properties
      // this.id = data.id;
      // this.quantity = data.quantity;
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
