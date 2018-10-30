import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBasket } from 'app/models/basket.model';
import { Subscription } from 'rxjs';
import { ShopFacade } from 'app/shop.facade';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit, OnDestroy {
  basket?: IBasket;
  sub?: Subscription;

  constructor(private facade: ShopFacade) {}

  ngOnInit() {
    this.facade.loadBasket();
    this.sub = this.facade.basket$.subscribe(
      (basket) => (this.basket = basket),
    );
  }

  onClear() {
    this.facade.clearBasket();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
