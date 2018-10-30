import React, { Component } from 'react';
import { Query, graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Basket from '../components/Basket';
import { basketFragment } from '../graphql/fragments';
import { clearBasketMutation } from '../graphql/mutations';

const getBasketQuery = gql`
  query getBasket($checkoutID: String!) {
    basket(checkoutID: $checkoutID) {
      ...basketFields
      total @client
    }
  }
  ${basketFragment}
`;

class BasketContainer extends Component {
  handleClearBasket = () => {
    const { clearBasket } = this.props;
    clearBasket({ variables: { checkoutID: 'xyz' }, refetchQueries: ['getBasket'] });
  };

  render() {
    return (
      <Query query={getBasketQuery} variables={{ checkoutID: 'xyz' }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          if (data.basket.items.length === 0) {
            return (
              <div>
                <h2>Basket</h2>
                <span>No Product in Basket</span>
              </div>
            );
          }
          return (
            <div>
              <h2>Basket</h2>
              <Basket basket={data.basket} />
              <button className="btn btn-danger" type="button" onClick={this.handleClearBasket}>
                Clear Basket
              </button>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default graphql(clearBasketMutation, { name: 'clearBasket' })(BasketContainer);
