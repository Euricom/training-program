import React, { Component } from 'react';

import api from '../services/api';
import ProductList from '../components/ProductList';

export default class ProductContainer extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    try {
      const products = await api.products.getAll();
      this.setState({
        products,
      });
    } catch (error) {
      console.log('failed to load products');
    }
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <h2>Products</h2>
        <ProductList products={products} />
      </div>
    );
  }
}
