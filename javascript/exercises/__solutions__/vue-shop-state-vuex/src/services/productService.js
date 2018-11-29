/* eslint-disable class-methods-use-this */

import axios from 'axios';

class ProductService {
  getAll(page = 0, sortExpression = '') {
    const config = {
      params: {
        page: page.toString(),
        sort: sortExpression,
      },
    };
    return axios.get('https://euri-test-api.now.sh/api/products', config).then(res => res.data.selectedProducts);
  }

  getById(id) {
    return axios.get(`https://euri-test-api.now.sh/api/products/${id}`).then(res => res.data);
  }

  save(product) {
    if (product.id) {
      return this.update(product);
    }
    return this.create(product);
  }

  update(product) {
    return axios.put(`https://euri-test-api.now.sh/api/products/${product.id}`, product).then(res => res.data);
  }

  create(product) {
    return axios.post(`https://euri-test-api.now.sh/api/products`, product).then(res => res.data);
  }

  delete(id) {
    return axios.delete(`https://euri-test-api.now.sh/api/products/${id}`).then(res => res.data);
  }
}

export default new ProductService();
