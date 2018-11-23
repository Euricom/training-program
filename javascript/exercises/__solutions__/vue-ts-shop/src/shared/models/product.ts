import { IProductDTO } from '../services/productService';

export class Product {
  id?: number;
  sku?: string;
  title?: string;
  desc?: string;
  stocked?: boolean;
  basePrice?: number;
  price?: number;
  image = '/assets/defaultProduct.png';

  constructor(data?: IProductDTO) {
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
