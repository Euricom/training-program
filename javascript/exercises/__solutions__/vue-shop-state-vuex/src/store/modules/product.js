/* eslint-disable no-param-reassign */
import { GET_PRODUCTS, GET_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT } from '../actionTypes';
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCT_ERROR,
  GET_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_SUCCESS,
} from '../mutationTypes';
import productService from '../../services/productService';

const actions = {
  async [GET_PRODUCTS]({ commit, state }, sortParams) {
    try {
      if (!sortParams) {
        sortParams = {};
      }
      if (state.items.length !== 20) {
        console.log('getting all prods');
        const products = await productService.getAll(sortParams.page, sortParams.sortExpression);
        return commit(GET_PRODUCTS_SUCCESS, products);
      }
      return commit(GET_PRODUCTS_SUCCESS);
    } catch (error) {
      return commit(GET_PRODUCTS_ERROR, error.message);
    }
  },
  async [GET_PRODUCT]({ commit, state }, id) {
    try {
      const foundProduct = state.items.find(item => item.id === id);
      if (!foundProduct) {
        const product = await productService.getById(id);
        return commit(GET_PRODUCT_SUCCESS, product);
      }
      return commit(GET_PRODUCTS_SUCCESS);
    } catch (error) {
      return commit(GET_PRODUCT_ERROR, error.message);
    }
  },
  async [DELETE_PRODUCT]({ commit }, id) {
    try {
      const product = await productService.delete(id);
      commit(DELETE_PRODUCT_SUCCESS, product);
    } catch (error) {
      commit(DELETE_PRODUCT_ERROR, error.message);
    }
  },
  async [ADD_PRODUCT]({ commit }, productDto) {
    try {
      if (productDto.id) {
        const product = await productService.update(productDto);
        return commit(ADD_PRODUCT_SUCCESS, product);
      }
      const product = await productService.create(productDto);
      return commit(ADD_PRODUCT_SUCCESS, product);
    } catch (error) {
      return commit(ADD_PRODUCT_ERROR, error.message);
    }
  },
};

const mutations = {
  [GET_PRODUCT_SUCCESS](state, payload) {
    if (payload) return state.items.push(payload);
    return state.items;
  },
  [GET_PRODUCTS_SUCCESS](state, payload) {
    if (payload) {
      // eslint-disable-next-line
      return (state.items = payload);
    }
    return state.items;
  },
  [GET_PRODUCTS_ERROR](state, error) {
    state.error = error;
  },
  [GET_PRODUCT_ERROR](state, error) {
    state.error = error;
  },
  [DELETE_PRODUCT_SUCCESS](state, payload) {
    state.items = state.items.filter(item => item.id !== payload.id);
  },
  [DELETE_PRODUCT_ERROR](state, error) {
    state.error = error;
  },
  [ADD_PRODUCT_SUCCESS](state, payload) {
    const savedItem = state.items.find(item => item.id === payload.id);
    if (savedItem) {
      return state.items.splice(state.items.indexOf(savedItem), 1, payload);
    }
    return state.items.push(payload);
  },
  [ADD_PRODUCT_ERROR](state, error) {
    state.error = error;
  },
};

const getters = {
  products: state => state.items,
  product: state => id => state.items.find(product => product.id === id),
  productsError: state => state.error,
};

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
