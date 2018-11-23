/* eslint-disable class-methods-use-this */

import axios from 'axios';
import { Product } from '@/models/product';

class ProductService {
  getAll(page = 0, sortExpression = '') {
    const config = {
      params: {
        page: page.toString(),
        sort: sortExpression,
      },
    };
    return axios.get('https://euri-test-api.now.sh/api/products', config).then(res => {
      const dtoArray = res.data.selectedProducts;
      return dtoArray.map(dto => new Product(dto));
    });
  }

  getById(id) {
    return axios.get(`https://euri-test-api.now.sh/api/products/${id}`).then(res => new Product(res.data));
  }

  update(product) {
    return axios
      .put(`https://euri-test-api.now.sh/api/products/${product.id}`, product)
      .then(res => new Product(res.data));
  }

  create(product) {
    return axios.post(`https://euri-test-api.now.sh/api/products`, product).then(res => new Product(res.data));
  }

  delete(id) {
    return axios.delete(`https://euri-test-api.now.sh/api/products/${id}`).then(res => new Product(res.data));
  }

  save(product) {
    if (product.isNew()) {
      return this.create(product);
    }
    return this.update(product);
  }
}

export default new ProductService();
