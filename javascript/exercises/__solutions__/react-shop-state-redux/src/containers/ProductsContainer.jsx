import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../store/actions';

import ProductList from '../components/ProductList';

class ProductContainer extends Component {
  render() {
    const { products } = this.props;
    console.log(this.props);
    return (
      <div>
        <h2>Products</h2>
        <ProductList products={products} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.shop.products,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
