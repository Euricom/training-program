import { Component, OnDestroy, OnInit } from '@angular/core';
// import { Subscription, forkJoin } from 'rxjs';

// import { ProductService } from '@app/services/productService';
// import { BasketService } from '@app/services/basketService';
// import { Product } from '@app/models/product.model';
// import { Basket } from '@app/models/basket.model';
// import { ServiceBus } from '@app/serviceBus';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit, OnDestroy {
  // basket: Basket = new Basket();
  // sub?: Subscription;

  constructor() {}

  ngOnInit() {
    // subscribe to product changes
    // this.sub = this.serviceBus.listenForAll().subscribe((event: any) => {
    //   if (event.type === 'addProductToBasket') {
    //     this.basket.addProduct(event.data.product, event.data.quantity);
    //   }
    //   if (event.type === 'productUpdated') {
    //     this.basket.updateProductInfo(event.data);
    //   }
    // });
    // // get basket from server
    // this.basketService.getBasket().subscribe((basket) => {
    //   // for each product in basket, get product info
    //   const productSources: any = [];
    //   basket.items.forEach((item) => {
    //     productSources.push(this.productService.getProduct(item.id));
    //   });
    //   // wait for product info
    //   forkJoin<Product>(productSources).subscribe((products) => {
    //     // update all items in the basket
    //     products.forEach((product) => {
    //       basket.updateProductInfo(product);
    //     });
    //     this.basket = basket;
    //   });
    // });
  }

  onClear() {
    // this.basketService.clear().subscribe(() => {
    //   this.basket = new Basket();
    // });
  }

  ngOnDestroy(): void {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }
}
