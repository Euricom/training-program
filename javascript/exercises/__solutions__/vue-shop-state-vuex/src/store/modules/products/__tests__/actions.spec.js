import actions from '../actions';
import productService from '@/services/productService';

jest.mock('@/services/productService');

describe('basket.actions', () => {
  let commit;
  let expectedProduct;
  beforeEach(() => {
    commit = jest.fn();

    expectedProduct = {
      id: 1,
      title: 'product',
      price: 123,
    };
  });
  it('should send out a mutation called SET_PRODUCTS on GET ALL', async () => {
    const products = [expectedProduct, expectedProduct];
    productService.getAll.mockReturnValue(Promise.resolve(products));
    await actions.GET_PRODUCTS({ commit });
    expect(productService.getAll).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('SET_PRODUCTS', products);
  });

  it('should send out a mutation called SET_ERROR on GET ALL', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    productService.getAll.mockReturnValue(Promise.reject(error));
    await actions.GET_PRODUCTS({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });

  it('should send out a mutation called SET_PRODUCT on GET BY ID', async () => {
    productService.getById.mockReturnValue(Promise.resolve(expectedProduct));
    await actions.GET_PRODUCT({ commit });
    expect(productService.getById).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('SET_PRODUCT', expectedProduct);
  });

  it('should send out a mutation called SET_ERROR on GET BY ID', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    productService.getById.mockReturnValue(Promise.reject(error));
    await actions.GET_PRODUCT({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });

  it('should send out a mutation called REMOVE_PRODUCT on DELETE', async () => {
    productService.delete.mockReturnValue(Promise.resolve(expectedProduct));
    await actions.DELETE_PRODUCT({ commit });
    expect(productService.delete).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('REMOVE_PRODUCT', expectedProduct);
  });

  it('should send out a mutation called REMOVE_PRODUCT on DELETE', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    productService.delete.mockReturnValue(Promise.reject(error));
    await actions.DELETE_PRODUCT({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });

  it('should send out a mutation called SET_PRODUCT on DELETE', async () => {
    productService.save.mockReturnValue(Promise.resolve(expectedProduct));
    await actions.SAVE_PRODUCT({ commit });
    expect(productService.save).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith('SET_PRODUCT', expectedProduct);
  });

  it('should send out a mutation called SET_PRODUCT on DELETE', async () => {
    const error = { message: 'failed' };
    // eslint-disable-next-line prefer-promise-reject-errors
    productService.save.mockReturnValue(Promise.reject(error));
    await actions.SAVE_PRODUCT({ commit });
    expect(commit).toHaveBeenCalledWith('SET_ERROR', error.message);
  });
});
