export * from './mutations/mutationDeleteProduct';
export * from './queries/queryAllProducts';

export const emptyConnection = {
  pageInfo: { hasNextPage: false, hasPreviousPage: false },
  edges: [],
};
