import MockAdapter from 'axios-mock-adapter';
import { apiConfig } from '../api';
import productService from '../productService';

describe('Product Service', () => {
  let axiosMock;
  let expectedProduct;
  beforeEach(() => {
    axiosMock = new MockAdapter(apiConfig);
    expectedProduct = {
      id: 1,
      sku: '254267942-8',
      title: 'pellentesque',
      desc: 'Donec posuere metus vitae ipsum.',
      image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
      stocked: true,
      basePrice: 16.63,
      price: 16.63,
    };
  });

  it('should return products', () => {
    const expectedProducts = {
      selectedProducts: [
        {
          id: 1,
          sku: '254267942-8',
          title: 'pellentesque',
          desc: 'Donec posuere metus vitae ipsum.',
          image: 'https://dummyimage.com/300x300.jpg/ff4444/ffffff',
          stocked: true,
          basePrice: 16.63,
          price: 16.63,
        },
        {
          id: 2,
          sku: '253267343-5',
          title: 'ut',
          desc:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere ácubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
          image: 'https://dummyimage.com/300x300.png/cc0000/ffffff',
          stocked: false,
          basePrice: 13.72,
          price: 6.31,
        },
      ],
    };
    axiosMock.onGet('/products').reply(200, expectedProducts);

    productService.getAll().then(res => {
      expect(res).toEqual(expectedProducts.selectedProducts);
    });
  });

  it('should return a product by id', () => {
    axiosMock.onGet('/products/1').reply(200, expectedProduct);

    productService.getById(1).then(res => {
      expect(res).toEqual(expectedProduct);
    });
  });

  it('should create a product', () => {
    const product = { ...expectedProduct, title: expectedProduct.title, price: expectedProduct.price };
    axiosMock.onPost('/products', product).reply(201, product);

    productService.create(product).then(res => {
      expect(res).toEqual(product);
    });
  });

  it('should update a product', () => {
    const product = { ...expectedProduct, title: 'newproductitle' };
    axiosMock.onPut(`/products/${expectedProduct.id}`, product).reply(200, product);

    productService.update(product).then(res => {
      expect(res).toEqual(product);
    });
  });

  it('should delete a product', () => {
    axiosMock.onDelete(`/products/${expectedProduct.id}`).reply(200, expectedProduct);

    productService.delete(expectedProduct.id).then(res => {
      expect(res).toEqual(expectedProduct);
    });
  });
});
