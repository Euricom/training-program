import gql from 'graphql-tag';

export const productFragment = gql`
  fragment productFields on Product {
    id
    sku
    title
    price
    basePrice
    stocked
  }
`;

export const basketFragment = gql`
  fragment basketFields on Product {
    items {
      product {
        ...productFields
      }
      qantity
    }
  }
  ${productFragment}
`;
