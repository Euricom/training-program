import basketService from '@/services/basketService';
import * as mutationTypes from '@/store/mutationTypes';
import { GET_BASKET, CLEAR_BASKET, ADD_PRODUCT_TO_BASKET } from '@/store/actionTypes';

const actions = {
  async [GET_BASKET]({ commit }) {
    try {
      const basket = await basketService.get();
      commit(mutationTypes.SET_BASKET, basket);
    } catch (error) {
      commit(mutationTypes.SET_ERROR, error.message);
    }
  },
  async [CLEAR_BASKET]({ commit }) {
    try {
      await basketService.delete();
      commit(mutationTypes.SET_BASKET, []);
    } catch (error) {
      commit(mutationTypes.SET_ERROR, error.message);
    }
  },
  async [ADD_PRODUCT_TO_BASKET]({ commit }, productDto) {
    try {
      const basket = await basketService.addProduct(productDto.productId, productDto.quantity);
      commit(mutationTypes.SET_BASKET, basket);
    } catch (error) {
      commit(mutationTypes.SET_ERROR, error.message);
    }
  },
};

export default actions;
