import actions from '../actions';
import basketService from '@/services/basketService';

jest.mock('@/services/basketService');

describe('basket.actions', () => {
  let commit;
  let expectedBasket;
  let product;
  beforeEach(() => {
    commit = jest.fn();

    expectedBasket = [
      {
        id: 1,
        productId: 1,
        quantity: 1,
      },
      {
        id: 2,
        productId: 2,
        quantity: 4,
      },
    ];

    product = { productId: 1, quantity: 2 };
  });
  it('should send out a mutation called SET_BASKET on GET', async () => {
    basketService.get.mockReturnValue(Promise.resolve(expectedBasket));
    await actions.GET_BASKET({ commit });
    expect(basketService.get).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('SET_BASKET', expectedBasket);
  });

  it('should send out a mutation called SET_ERROR on CLEAR', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    basketService.get.mockReturnValue(Promise.reject(error));
    await actions.GET_BASKET({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });

  it('should send out a mutation called SET_BASKET on CLEAR', async () => {
    basketService.delete.mockReturnValue(Promise.resolve([]));
    await actions.CLEAR_BASKET({ commit });
    expect(basketService.delete).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('SET_BASKET', []);
  });

  it('should send out a mutation called SET_ERROR on CLEAR', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    basketService.delete.mockReturnValue(Promise.reject(error));
    await actions.CLEAR_BASKET({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });

  it('should send out a mutation called SET_BASKET on ADD_PRODUCT_TO_BASKET', async () => {
    basketService.addProduct.mockReturnValue(Promise.resolve(expectedBasket));
    await actions.ADD_PRODUCT_TO_BASKET({ commit }, product);
    expect(basketService.delete).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('SET_BASKET', expectedBasket);
  });

  it('should send out a mutation called SET_ERROR on ADD_PRODUCT_TO_BASKET', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    basketService.addProduct.mockReturnValue(Promise.reject(error));
    await actions.ADD_PRODUCT_TO_BASKET({ commit }, product);
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });
});
