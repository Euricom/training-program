import { Component, Input, OnInit } from '@angular/core';
import { Basket } from 'graphql-types';

const EMPTY_BASKET = { items: [] };

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  _basket: Basket = EMPTY_BASKET;

  @Input('basket')
  set basket(value: Basket) {
    this._basket = value || EMPTY_BASKET;
  }
  get basket(): Basket {
    return this._basket;
  }

  constructor() {}

  ngOnInit() {}

  onClear() {}
}
