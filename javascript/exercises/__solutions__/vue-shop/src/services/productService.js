/* eslint-disable class-methods-use-this */

import { apiConfig } from './api';
import { Product } from '@/models/product';

class ProductService {
  getAll(page = 0, sortExpression = '') {
    const config = {
      params: {
        page: page.toString(),
        sort: sortExpression,
      },
    };
    return apiConfig.get('/products', config).then(res => {
      const dtoArray = res.data.selectedProducts;
      return dtoArray.map(dto => new Product(dto));
    });
  }

  getById(id) {
    return apiConfig.get(`/products/${id}`).then(res => new Product(res.data));
  }

  update(product) {
    return apiConfig.put(`/products/${product.id}`, product).then(res => new Product(res.data));
  }

  create(product) {
    return apiConfig.post(`/products`, product).then(res => new Product(res.data));
  }

  delete(id) {
    return apiConfig.delete(`/products/${id}`).then(res => new Product(res.data));
  }

  save(product) {
    if (product.isNew()) {
      return this.create(product);
    }
    return this.update(product);
  }
}

export default new ProductService();
