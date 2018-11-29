/* eslint-disable import/prefer-default-export */

// TODO: add unit test

export class Product {
  constructor(data) {
    if (data) {
      const newProduct = {
        id: data.id,
        sku: data.sku,
        title: data.title,
        price: Number(data.price), // TODO: why number convert?
        basePrice: Number(data.basePrice), // TODO: why number convert?
        desc: data.desc,
        stocked: data.stocked,
        image: data.image,
      };
      return Object.assign(this, newProduct);
    }
    Object.assign(this, {}); // TODO: why is this needed
  }

  isNew() {
    return !this.id;
  }
}
