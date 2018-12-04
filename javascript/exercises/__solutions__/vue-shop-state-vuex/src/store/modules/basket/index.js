import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = () => ({
  items: [],
  total: null,
});

// eslint-disable-next-line
export default {
  actions,
  mutations,
  getters,
  state,
};
