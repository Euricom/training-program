import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../store/actions';

import Product from './Product';

const ProductList = ({ products, actions }) => (
  <div className="flex-grid">
    {products.map(product => (
      <div className="col" key={product.id}>
        <Product product={product} onAdd={quantity => actions.addProduct(product, quantity)} />
      </div>
    ))}
  </div>
);

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  null,
  mapDispatchToProps,
)(ProductList);
