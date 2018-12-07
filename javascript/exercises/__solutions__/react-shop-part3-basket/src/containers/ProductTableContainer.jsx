import React, { Component } from 'react';
import api from '../services/api';
import ProductTable from '../components/ProductTable';

export default class ProductTableContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    console.log('propmount', this.props);
    try {
      const products = await api.products.getAll();
      console.log('some prods here', products);
      this.setState({
        products,
      });
    } catch (error) {
      console.log('failed to load products');
    }
  }

  render() {
    const { products } = this.state;
    const { history } = this.props;
    console.log('got some', products);

    return (
      <React.Fragment>
        <h2>Product Table</h2>
        <ProductTable products={products} history={history} />
      </React.Fragment>
    );
  }
}
