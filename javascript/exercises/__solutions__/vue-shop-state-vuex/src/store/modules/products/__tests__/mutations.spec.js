import mutations from '../mutations';

describe('products.mutations', () => {
  it('should push the new product into the state', () => {
    const state = { items: [] };
    const payload = { id: 1, price: 123, title: 'product' };
    mutations.SET_PRODUCT(state, payload);
    expect(state.items[0]).toBe(payload);
  });
});
