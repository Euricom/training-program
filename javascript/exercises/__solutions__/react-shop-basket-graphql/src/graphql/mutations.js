import gql from 'graphql-tag';
import { basketFragment, productFragment } from './fragments';

export const clearBasketMutation = gql`
  mutation clearBasket($checkoutID: ID!) {
    clearBasket(checkoutID: $checkoutID) {
      basket {
        checkoutID
        items {
          id
          quantity
        }
      }
    }
  }
`;

export const addProductMutation = gql`
  mutation addItemToBasket($checkoutID: ID!, $quantity: Int!, $productId: Int!) {
    addItemToBasket(input: { checkoutID: $checkoutID, item: { quantity: $quantity, productId: $productId } }) {
      basket {
        ...basketFields
      }
    }
  }
  ${basketFragment}
`;

export const deleteProductMutation = gql`
  mutation deleteProduct($productId: Int!) {
    deleteProduct(id: $productId) {
      product {
        ...productFields
      }
    }
  }
  ${productFragment}
`;
