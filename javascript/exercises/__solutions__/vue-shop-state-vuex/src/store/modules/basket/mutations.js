/* eslint-disable no-param-reassign */

import { SET_BASKET, SET_BASKET_ERROR } from '@/store/mutationTypes';

const mutations = {
  [SET_BASKET](state, payload) {
    state.items = payload;
  },
  [SET_BASKET_ERROR](state, error) {
    state.error = error;
  },
};

export default mutations;
