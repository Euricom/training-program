import { async } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductService } from './productService';

describe('productService', () => {
  let httpClient: any;
  beforeEach(() => {
    // create mocked httpClient
    httpClient = {
      get: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
    };
  });

  test('getProducts', async(() => {
    // arrange
    const resource = {
      total: 2,
      selectedProducts: [{ id: 123, title: 'abc' }, { id: 123, title: 'abc' }],
    };
    httpClient.get.mockReturnValue(of(resource));
    const service = new ProductService(httpClient as any);

    // act
    service.getProducts(1, 'title').subscribe((products) => {
      // assert
      const url = httpClient.get.mock.calls[0][0];
      const options = httpClient.get.mock.calls[0][1];
      const queryString = options.params.toString();
      expect(url).toEqual('https://euri-test-api.now.sh/api/products');
      expect(queryString).toEqual('page=1&sort=title');
      expect(products).toBeDefined();
      expect(products[0].constructor.name).toEqual('Product');
      expect(products[0].id).toEqual(123);
    });
  }));

  test('getProduct', async(() => {
    // arrange
    const resource = { id: 123, title: 'abc' };
    httpClient.get.mockReturnValue(of(resource));
    const service = new ProductService(httpClient as any);

    // act
    service.getProduct(123).subscribe((product) => {
      // assert
      const url = httpClient.get.mock.calls[0][0];
      expect(url).toEqual('https://euri-test-api.now.sh/api/products/123');
      expect(product).toBeDefined();
      expect(product.constructor.name).toEqual('Product');
      expect(product.id).toEqual(123);
    });
  }));
});
