export * from './mutations/mutationDeleteProduct';
export * from './queries/queryAllProducts';
export * from './queries/queryBasket';

export const emptyConnection = {
  pageInfo: { hasNextPage: false, hasPreviousPage: false },
  edges: [],
};
