/* eslint-disable no-param-reassign */
import { GET_BASKET, CLEAR_BASKET, ADD_PRODUCT_TO_BASKET } from '../actionTypes';
import basketService from '../../services/basketService';
import {
  GET_BASKET_SUCCESS,
  GET_BASKET_ERROR,
  CLEAR_BASKET_SUCCESS,
  CLEAR_BASKET_ERROR,
  ADD_PRODUCT_TO_BASKET_SUCCESS,
  ADD_PRODUCT_TO_BASKET_ERROR,
} from '../mutationTypes';

const actions = {
  async [GET_BASKET]({ commit }) {
    try {
      const basket = await basketService.get();
      commit(GET_BASKET_SUCCESS, basket);
    } catch (error) {
      commit(GET_BASKET_ERROR, error.message);
    }
  },
  async [CLEAR_BASKET]({ commit }) {
    try {
      await basketService.delete();
      commit(CLEAR_BASKET_SUCCESS);
    } catch (error) {
      commit(CLEAR_BASKET_ERROR, error.message);
    }
  },
  async [ADD_PRODUCT_TO_BASKET]({ commit }, productDto) {
    try {
      const product = await basketService.create(productDto.productId, productDto.quantity);
      commit(ADD_PRODUCT_TO_BASKET_SUCCESS, product);
    } catch (error) {
      commit(ADD_PRODUCT_TO_BASKET_ERROR, error.message);
    }
  },
};

const mutations = {
  [GET_BASKET_SUCCESS](state, payload) {
    state.items = payload.items;
  },
  [GET_BASKET_ERROR](state, error) {
    state.error = error;
  },
  [CLEAR_BASKET_SUCCESS](state) {
    state.items = state.items.filter(item => item === "Peter's Unicorn");
    console.log('done slicing', state.items);
  },
  [CLEAR_BASKET_ERROR](state, error) {
    state.error = error;
  },
  [ADD_PRODUCT_TO_BASKET_SUCCESS](state, payload) {
    state.items = payload.items;
  },
  [ADD_PRODUCT_TO_BASKET_ERROR](state, error) {
    state.error = error;
  },
};

const getters = {
  basket: (state, _, rootState) => {
    const { products, basket } = rootState;
    console.log('getting state', basket);
    const basketItems = basket.items.map(item => {
      const basketItem = products.items.find(product => product.id === item.id);
      console.log(basketItem, item.id);
      if (basketItem) {
        return {
          title: basketItem.title,
          price: basketItem.price,
          quantity: item.quantity,
          total: item.quantity * basketItem.price,
        };
      }
      return { total: 0 };
    });

    const total = basketItems.reduce((acc, item) => acc + item.total, 0);

    return {
      items: basketItems,
      total,
    };
  },
  basketError: state => state.error,
};

const state = () => ({
  error: null,
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
