import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryBasket } from '@app/graphql';
import { IBasket } from '@app/graphql/resolvers';

@Component({
  selector: 'basket-container',
  templateUrl: './basket.container.html',
})
export class BasketContainerComponent implements OnInit, OnDestroy {
  basket$: Observable<IBasket>;

  constructor(private queryBasket: QueryBasket) {}

  ngOnInit() {
    this.basket$ = this.queryBasket.execute();
    // this.basket$.subscribe((result) => {
    //   console.log(result);
    // });
    // subscribe to product changes
    // this.sub = this.serviceBus.listenForAll().subscribe((event: any) => {
    //   if (event.type === 'addProductToBasket') {
    //     this.basket.addProduct(event.data.product, event.data.quantity);
    //   }
    //   if (event.type === 'productUpdated') {
    //     this.basket.updateProductInfo(event.data);
    //   }
    // });
  }

  onClear() {
    // this.basketService.clear().subscribe(() => {
    //   this.basket = new Basket();
    // });
  }

  ngOnDestroy(): void {}
}
