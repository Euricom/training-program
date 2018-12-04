const getters = {
  products: state => state.items,
  product: state => id => state.items.find(product => product.id === id),
};

export default getters;
