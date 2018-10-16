import gql from 'graphql-tag';

export const productFragment = gql`
  fragment productFields on Product {
    id
    sku
    image
    title
    price
    basePrice
    stocked
  }
`;

export const basketFragment = gql`
  fragment basketFields on Basket {
    checkoutID
    items {
      product {
        ...productFields
      }
      quantity
    }
  }
  ${productFragment}
`;
