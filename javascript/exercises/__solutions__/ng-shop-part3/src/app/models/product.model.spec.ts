import { Product } from './product.model';

describe('Product', () => {
  test('DTO mapping', () => {
    const prod = new Product({
      id: 123,
      sku: 'abc',
      title: 'aaaaaa',
      desc: 'bbbbb',
      stocked: false,
      basePrice: 0,
      price: 0,
    });
    expect(prod).toMatchSnapshot();
  });

  test('Empty product', () => {
    const prod = new Product();
    expect(prod.id).toBe(0);
    expect(prod.image).toEqual('/assets/defaultProduct.png');
  });
});
