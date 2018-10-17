import { Component, Input, OnInit } from '@angular/core';
import { IBasket } from '@app/graphql/resolvers';

const EMPTY_BASKET = { items: [] };

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  _basket: IBasket = EMPTY_BASKET;

  @Input('basket')
  set basket(value: IBasket) {
    this._basket = value || EMPTY_BASKET;
  }
  get basket(): IBasket {
    return this._basket;
  }

  constructor() {}

  ngOnInit() {}

  onClear() {}
}
