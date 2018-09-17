import createStore from 'react-waterfall';
import produce from 'immer';
import api from '../api';

const storeConfig = {
  initialState: { products: [], basket: [] },
  actionsCreators: {
    loadInitialData: async state => {
      const products = await api.products.getAll();
      const basket = await api.basket.get();
      return { ...state, products, basket };
    },
    addProduct(state, actions, product, quantity) {
      return produce(state, draftState => {
        const basketItem = draftState.basket.find(item => item.id === product.id);
        if (!basketItem) {
          draftState.basket.push({ id: product.id, quantity });
        } else {
          basketItem.quantity += quantity;
        }
      });
    },
    _test: state => {
      console.log('selector');
      return state;
    },
  },
};

export const { Provider, connect, actions } = createStore(storeConfig);
