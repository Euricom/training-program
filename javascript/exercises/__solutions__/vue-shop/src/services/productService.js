/* eslint-disable class-methods-use-this */

import axios from 'axios';
import { Product } from '@/models/product';

class ProductService {
  getAll() {
    return axios.get('https://euri-test-api.now.sh/api/products').then(res => {
      const dtoArray = res.data.selectedProducts;
      return dtoArray.map(dto => new Product(dto));
    });
  }

  getById(id) {
    return axios.get(`https://euri-test-api.now.sh/api/products/${id}`).then(res => new Product(res.data));
  }

  save(product) {
    return axios.post(`https://euri-test-api.now.sh/api/products`, product).then(res => new Product(res.data));
  }

  delete(id) {
    return axios.delete(`https://euri-test-api.now.sh/api/products/${id}`).then(res => new Product(res.data));
  }
}

export default new ProductService();
