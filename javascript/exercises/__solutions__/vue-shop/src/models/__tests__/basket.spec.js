import { Basket } from '../basket';
import { BasketItem } from '../basketItem';
import { Product } from '../product';

describe('Basket Model', () => {
  let basketDto;
  let testProduct;

  beforeEach(() => {
    basketDto = [
      {
        id: 1,
        quantity: 2,
        productId: 1,
      },
      {
        id: 2,
        quantity: 5,
        productId: 2,
      },
    ];
    testProduct = new Product();
    testProduct.price = 6;
    testProduct.title = 'aproduct';
    testProduct.id = 1;
  });

  it('should set constructor properties', () => {
    const basket = new Basket(basketDto);

    expect(basket.totalPrice).toBe(0);
    expect(basket.items[0].id).toBe(basketDto[0].id);
    expect(basket.items[0].quantity).toBe(basketDto[0].quantity);
    expect(basket.items[0].productId).toBe(basketDto[0].productId);
  });

  it("shouldn't set properties when object is empty", () => {
    const basket = new Basket();

    expect(basket.totalPrice).toBe(undefined);
    expect(basket.items).toEqual([]);
  });

  it('should clear the basket', () => {
    const basket = new Basket(basketDto);

    basket.clear();
    expect(basket.items).toEqual([]);
  });

  it('should add a product', () => {
    const basket = new Basket(basketDto);
    const newProduct = { id: 100, title: 'amazingproduct', price: 123 };
    basket.addProduct(newProduct, 2);

    expect(basket.items[basket.items.length - 1].productId).toBe(newProduct.id);
    expect(basket.items[basket.items.length - 1].price).toBe(newProduct.price);
    expect(basket.items[basket.items.length - 1].quantity).toBe(2);
    expect(basket.totalPrice).toBe(246);
  });

  it('should update product info', () => {
    const basket = new Basket(basketDto);

    basket.updateProductInfo(testProduct);

    expect(basket.totalPrice).toBe(basket.items[0].quantity * testProduct.price);
    expect(basket.items[0].title).toBe(testProduct.title);
    expect(basket.items[0].price).toBe(testProduct.price);
  });

  describe('Basket Item Model', () => {
    it('should set constructor properties', () => {
      const basketItem = new BasketItem(basketDto[0]);

      expect(basketItem.id).toBe(basketDto[0].id);
      expect(basketItem.quantity).toBe(basketDto[0].quantity);
      expect(basketItem.productId).toBe(basketDto[0].productId);
      expect(basketItem.total).toBe(0);
      expect(basketItem.price).toBe(0);
    });

    it("shouldn't set properties when object is empty", () => {
      const basketItem = new BasketItem();

      expect(basketItem.id).toBe(undefined);
      expect(basketItem.quantity).toBe(0);
      expect(basketItem.productId).toBe(undefined);
    });

    it('should calculate the total price', () => {
      const basketItem = new BasketItem(basketDto[0]);
      basketItem.setProductInfo(testProduct);
      expect(basketItem.total).toBe(12);
      expect(basketItem.price).toBe(testProduct.price);
      expect(basketItem.title).toBe(testProduct.title);
    });

    it('should add quantity to the current quantity', () => {
      const basketItem = new BasketItem(basketDto[0]);
      basketItem.addQuantity(2);
      expect(basketItem.quantity).toBe(4);
    });
  });
});
