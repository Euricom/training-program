import productService from '@/services/productService';
import { GET_PRODUCTS, GET_PRODUCT, SAVE_PRODUCT, DELETE_PRODUCT } from '@/store/actionTypes';
import * as mutationTypes from '../../mutationTypes';

const actions = {
  async [GET_PRODUCTS]({ commit }, sortParams) {
    try {
      if (!sortParams) {
        sortParams = {};
      }
      const products = await productService.getAll(sortParams.page, sortParams.sortExpression);
      commit(mutationTypes.SET_PRODUCTS, products);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_ERROR, error.message);
    }
  },
  async [GET_PRODUCT]({ commit }, id) {
    try {
      // always get the latest product info from server
      const product = await productService.getById(id);
      commit(mutationTypes.SET_PRODUCT, product);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_ERROR, error.message);
    }
  },
  async [DELETE_PRODUCT]({ commit }, id) {
    try {
      const product = await productService.delete(id);
      commit(mutationTypes.REMOVE_PRODUCT, product);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_ERROR, error.message);
    }
  },
  async [SAVE_PRODUCT]({ commit }, productDto) {
    try {
      const product = await productService.save(productDto);
      commit(mutationTypes.SET_PRODUCT, product);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_ERROR, error.message);
    }
  },
};

export default actions;
