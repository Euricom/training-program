import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import basket from './modules/basket';
import rootState from './rootState';
import { RAISE_SUCCESS, RAISE_ERROR } from './actionTypes';
import { SET_SUCCESS, SET_ERROR } from './mutationTypes';

Vue.use(Vuex);
export default new Vuex.Store({
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== `production`,
  modules: {
    products,
    basket,
  },
  state: rootState,
  actions: {
    [RAISE_SUCCESS]({ commit }, success) {
      commit(SET_SUCCESS, success);
    },
    [RAISE_ERROR]({ commit }, error) {
      commit(SET_ERROR, error);
    },
  },
  mutations: {
    [SET_SUCCESS](state, payload) {
      state.successMessage = payload;
    },
    [SET_ERROR](state, payload) {
      if (state.errors.length > 5) {
        state.errors = [];
      }
      state.errors.push(payload);
    },
  },
  getters: {
    success: state => state.successMessage,
    errors: state => state.errors[state.errors.length - 1],
  },
});
