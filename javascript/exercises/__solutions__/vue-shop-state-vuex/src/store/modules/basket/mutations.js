/* eslint-disable no-param-reassign */

import { SET_BASKET } from '@/store/mutationTypes';

const mutations = {
  [SET_BASKET](state, payload) {
    state.items = payload;
  },
};

export default mutations;
