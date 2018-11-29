import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import basket from './modules/basket';

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
});
