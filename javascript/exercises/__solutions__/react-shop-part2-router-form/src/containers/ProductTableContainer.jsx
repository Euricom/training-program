import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';
import ProductTable from '../components/ProductTable';

export default class ProductTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  async componentDidMount() {
    try {
      const products = await api.products.getAll();
      this.setState({ products });
    } catch (error) {
      console.log('failed to load products');
    }
  }

  handleSort = async sortExpression => {
    const products = await api.products.getAll(0, sortExpression);
    this.setState({ products });
  };

  render() {
    const { products } = this.state;

    return (
      <React.Fragment>
        <h2>Product Table</h2>
        <Link className="btn btn-default" to="/edit">
          Add
        </Link>
        <ProductTable products={products} sort={this.handleSort} />
      </React.Fragment>
    );
  }
}
