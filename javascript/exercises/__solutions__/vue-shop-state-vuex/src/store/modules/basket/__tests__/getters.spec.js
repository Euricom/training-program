import getters from '../getters';

describe('basket.getters', () => {
  const rootState = {
    products: { items: [{ id: 2, title: 'el prodotto', price: 123 }] },
    basket: { items: [{ id: 1, productId: 2, quantity: 5 }] },
  };
  it('should return a basket', () => {
    const result = getters.basket({}, {}, rootState);
    expect(result.items[0].title).toEqual('el prodotto');
    expect(result.items[0].price).toEqual(123);
    expect(result.total).toEqual(result.items[0].price * result.items[0].quantity);
  });
});
