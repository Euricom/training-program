import * as types from '../constants/ActionTypes';
import api from '../../api';

export const addProduct = (product, quantity) => ({ type: types.ADD_PRODUCT, product, quantity });

export const requestData = () => ({
  type: types.REQUEST_INITIAL_DATA,
});

export const receiveData = (products, basket) => ({
  type: types.RECEIVE_INITIAL_DATA,
  products,
  basket,
  receivedAt: Date.now(),
});

export const loadInitialData = () => async dispatch => {
  dispatch(requestData());
  const products = await api.products.getAll();
  const basket = await api.basket.get();
  dispatch(receiveData(products, basket));
};
