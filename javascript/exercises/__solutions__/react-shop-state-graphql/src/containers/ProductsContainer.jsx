import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Product from '../components/Product';
import { productFragment } from '../graphql/fragments';
import { addProductMutation } from '../graphql/mutations';

class ProductContainer extends Component {
  handleAddProduct = async (product, quantity) => {
    const { addProduct } = this.props;
    console.log('Add Product', product, quantity);
    try {
      const result = await addProduct({
        variables: { quantity, productId: product.id },
        refetchQueries: ['getBasket'],
      });
      console.log(result);
    } catch (err) {
      console.error('failed to add product', err);
    }
  };

  render() {
    const { data, error } = this.props;
    if (data.loading) return 'Loading...';
    if (data.error) return `Error! ${error.message}`;
    return (
      <div>
        <h2>Products</h2>
        <div className="flex-grid">
          {data.allProducts.product.map(product => (
            <div className="col" key={product.id}>
              <Product product={product} onAdd={quantity => this.handleAddProduct(product, quantity)} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const getAppProductsQuery = gql`
  query getAllProducts {
    allProducts {
      product {
        ...productFields
      }
    }
  }
  ${productFragment}
`;

export default compose(
  graphql(addProductMutation, {
    name: 'addProduct',
    options: (/* props */) => ({
      variables: {
        checkoutID: 'xyz',
      },
    }),
  }),
  graphql(getAppProductsQuery), // see basketContainer for an alternative way of query the data
)(ProductContainer);
