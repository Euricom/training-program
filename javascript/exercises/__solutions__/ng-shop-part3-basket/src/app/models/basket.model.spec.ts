import { Basket } from './basket.model';
import { Product } from './product.model';

describe.only('Product', () => {
  test('DTO mapping', () => {
    const basket = new Basket([
      { id: 1, quantity: 10 },
      { id: 2, quantity: 10 },
    ]);
    expect(basket).toMatchSnapshot();
  });

  test('Empty basket', () => {
    const basket = new Basket();
    expect(basket.items.length).toBe(0);
  });

  test('Add new product', () => {
    // arrange
    const basket = new Basket();
    const product = new Product({
      id: 123,
      title: 'abc',
      price: 10,
    });

    // act
    basket.addProduct(product, 10);

    // assert
    expect(basket.items.length).toBe(1);
    expect(basket.totalPrice).toBe(100);
    expect(basket.items[0].id).toBe(product.id);
    expect(basket.items[0].title).toBe(product.title);
    expect(basket.items[0].quantity).toBe(10);
    expect(basket.items[0].price).toBe(product.price);
  });

  test('Add quantity of existing product', () => {
    // arrange
    const basket = new Basket([{ id: 123, quantity: 4 }]);
    const product = new Product({
      id: 123,
      title: 'abc',
      price: 10,
    });
    basket.updateProductInfo(product);

    // act
    basket.addProduct(product, 10);

    // arrange
    expect(basket.items.length).toBe(1);
    expect(basket.totalPrice).toBe(140 /* 14 * 10 */);
  });
});
