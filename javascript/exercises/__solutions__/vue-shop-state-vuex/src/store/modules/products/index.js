import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = () => ({
  error: null,
  items: [],
});

// eslint-disable-next-line
export default {
  actions,
  mutations,
  getters,
  state,
};
