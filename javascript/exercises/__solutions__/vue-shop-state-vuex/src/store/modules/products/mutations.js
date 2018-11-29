import { SET_PRODUCTS, SET_PRODUCTS_ERROR, REMOVE_PRODUCT, SET_PRODUCT } from '@/store/mutationTypes';

const mutations = {
  [SET_PRODUCTS](state, payload) {
    state.items = payload;
  },
  [SET_PRODUCTS_ERROR](state, error) {
    state.error = error;
  },
  [REMOVE_PRODUCT](state, payload) {
    state.items = state.items.filter(item => item.id !== payload.id);
  },
  [SET_PRODUCT](state, payload) {
    if (!state.items.find(item => item.id === payload.id)) {
      state.items.push(payload);
      return;
    }

    state.items = state.items.map(product => {
      if (product.id === payload.id) {
        return payload;
      }
      return product;
    });
  },
};

export default mutations;
