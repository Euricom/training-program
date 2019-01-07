import React, { Component } from 'react';
import PropTypes from 'prop-types';

import api from '../services/api';
import ProductForm from '../components/ProductForm';
import { Product } from '../models/product';

export default class ProductEditContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  state = {
    product: {},
  };

  async componentDidMount() {
    let product = new Product();
    if (this.props.match.params.id) {
      product = await api.products.getById(this.props.match.params.id);
    }
    this.setState({
      product,
    });
  }

  handleSave = values => {
    const { product } = this.state;
    product.updateFrom(values);
    api.products.save(product).then(() => {
      this.context.router.history.goBack();
    });
  };

  handleDelete = () => {
    api.products.delete().then(() => {
      this.context.router.history.goBack();
    });
  };

  render() {
    const { product } = this.state;
    const { router } = this.context;
    return (
      <React.Fragment>
        <h2>Product Edit</h2>
        <ProductForm
          product={product}
          save={this.handleSave}
          remove={this.handleDelete}
          cancel={router.history.goBack}
        />
      </React.Fragment>
    );
  }
}
