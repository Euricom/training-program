// eslint-disable-next-line
export class Product {
  //   id: number;
  //   sku: string;
  //   title: string;
  //   desc: string;
  //   image: string;
  //   stocked: boolean;
  //   basePrice: number;
  //   price: number;

  constructor(data) {
    Object.assign(this, data);
  }

  isNew() {
    return !this.id;
  }
}
