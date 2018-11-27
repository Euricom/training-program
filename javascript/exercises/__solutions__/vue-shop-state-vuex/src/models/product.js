// eslint-disable-next-line
export class Product {
  constructor(data) {
    if (data) {
      const newProduct = {
        id: data.id,
        sku: data.sku,
        title: data.title,
        price: Number(data.price),
        basePrice: Number(data.basePrice),
        desc: data.desc,
        stocked: data.stocked,
        image: data.image,
      };
      return Object.assign(this, newProduct);
    }
    Object.assign(this, {});
  }

  isNew() {
    return !this.id;
  }
}
