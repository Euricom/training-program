/* eslint-disable class-methods-use-this */
import { apiConfig } from './api';

class ProductService {
  getAll(page = 0, sortExpression = '') {
    const config = {
      params: {
        page: page.toString(),
        sort: sortExpression,
      },
    };
    return apiConfig.get('/products', config).then(res => res.data.selectedProducts);
  }

  getById(id) {
    return apiConfig.get(`/products/${id}`).then(res => res.data);
  }

  save(product) {
    if (product.id) {
      return this.update(product);
    }
    return this.create(product);
  }

  update(product) {
    return apiConfig.put(`/products/${product.id}`, product).then(res => res.data);
  }

  create(product) {
    return apiConfig.post(`/products`, product).then(res => res.data);
  }

  delete(id) {
    return apiConfig.delete(`/products/${id}`).then(res => res.data);
  }
}

export default new ProductService();
