const getters = {
  products: state => state.items,
  product: state => id => state.items.find(product => product.id === id),
  productsError: state => state.error,
};

export default getters;
