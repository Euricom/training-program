export * from './mutations/mutationDeleteProduct';
export * from './mutations/mutationClearBasket';
export * from './mutations/mutationAddItemToBasket';

export * from './queries/queryAllProducts';
export * from './queries/queryBasket';

export const emptyConnection = {
  pageInfo: { hasNextPage: false, hasPreviousPage: false },
  edges: [],
};
