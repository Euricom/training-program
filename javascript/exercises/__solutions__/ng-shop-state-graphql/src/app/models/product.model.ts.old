import { IProductDTO } from '@app/services/productService';

export class Product {
  id = 0;
  sku?: string;
  title?: string;
  desc?: string;
  stocked?: boolean;
  basePrice?: number;
  price?: number;
  image = '/assets/defaultProduct.png';

  constructor(data?: IProductDTO) {
    if (data) {
      // copy over all properties
      Object.assign(this, data);
    }
  }

  isNew() {
    return !this.id;
  }
}
