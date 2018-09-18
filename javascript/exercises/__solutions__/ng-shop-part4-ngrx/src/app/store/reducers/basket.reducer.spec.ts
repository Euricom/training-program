import deepFreeze from 'deep-freeze';
import { basketReducer } from './basket.reducer';
import * as BasketActions from '../actions/basket.actions';

describe('basket.reducer', () => {
  test('add product', () => {
    const product: any = { id: 1 };
    const action = new BasketActions.AddProduct({ product, quantity: 1 });
    const state: any = { items: [] };
    deepFreeze(state);

    // act
    const result = basketReducer(state, action);
    expect(result.items.length).toBe(1);
  });

  test('add product', () => {
    const product: any = { id: 1 };
    const action = new BasketActions.AddProduct({ product, quantity: 2 });
    const state: any = { items: [{ id: 1, quantity: 2 }] };
    deepFreeze(state);

    // act
    const result = basketReducer(state, action);
    expect(result.items.length).toBe(1);
    expect(result.items[0].quantity).toBe(4);
  });
});
