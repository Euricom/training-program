// eslint-disable-next-line import/prefer-default-export
export class Product {
  constructor(data) {
    Object.assign(this, data);
  }

  get isNew() {
    return !!this.id;
  }

  updateFrom(values) {
    this.sku = values.sku;
    this.price = +values.price;
    this.basePrice = +values.basePrice;
    this.title = values.title;
    this.desc = values.desc;
  }
}
