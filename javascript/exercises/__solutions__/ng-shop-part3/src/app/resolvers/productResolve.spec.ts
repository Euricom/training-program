import { TestBed, inject, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ProductService } from '../services/productService';
import { ProductResolve } from './productResolve';

describe('ProductResolver (with mocks)', () => {
  test('resolve', () => {
    // arrange
    const product = {
      id: 123,
      title: 'abc',
    };
    const route = {
      params: { id: '123' },
    };
    const productService = {
      getProduct: jest.fn(() => of(product)),
    };
    const resolver = new ProductResolve(productService as any);
    expect.assertions(1);

    // act
    resolver.resolve(route as any).subscribe((item) => {
      expect(product).toBe(item);
    });
  });
});

describe('ProductResolver (with productService)', () => {
  let httpMock: HttpTestingController;
  let resolver: ProductResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductResolve, ProductService],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(inject(
    [ProductResolve, HttpTestingController],
    (_resolver: ProductResolve, _httpMock: HttpTestingController) => {
      httpMock = _httpMock;
      resolver = _resolver;
    },
  ));

  afterEach(() => {
    httpMock.verify();
  });

  test('resolve', async(() => {
    const route = {
      params: { id: '123' },
    };
    expect.assertions(2);
    resolver.resolve(route as any).subscribe((product) => {
      expect(product).toBeDefined();
    });

    const req = httpMock.expectOne(
      'https://euri-test-api.now.sh/api/products/123',
    );
    expect(req.request.method).toEqual('GET');
    req.flush({
      id: 123,
      title: 'aaa',
    });
  }));
});
