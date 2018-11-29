const getters = {
  basket: (state, _, rootState) => {
    const { products, basket } = rootState;
    const basketItems = basket.items.map(item => {
      const basketItem = products.items.find(product => product.id === item.productId);
      console.log(basketItem, item.productId);
      if (basketItem) {
        return {
          title: basketItem.title,
          price: basketItem.price,
          quantity: item.quantity,
          total: item.quantity * basketItem.price,
        };
      }
      return { total: 0 };
    });

    const total = basketItems.reduce((acc, item) => acc + item.total, 0);

    return {
      items: basketItems,
      total,
    };
  },
  basketError: state => state.error,
};

export default getters;
