import { IProductDTO } from '@app/services/productService';

export class Product {
  id = 0;
  title = '';
  price = 0;
  sku?: string;
  desc?: string;
  stocked?: boolean;
  basePrice?: number;
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

  updateBy(data: any) {
    data.price = Number(data.price);
    data.basePrice = Number(data.basePrice);
    if (typeof data.stocked === 'string') {
      data.stocked = data.stocked.toLowerCase() === 'true' ? true : false;
    }
    Object.assign(this, data);
  }
}
