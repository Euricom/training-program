import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { IBasket } from '@app/graphql/resolvers';

const EMPTY_BASKET = { items: [] };

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
})
export class BasketComponent implements OnInit {
  _basket: IBasket = EMPTY_BASKET;

  @Output() clear = new EventEmitter();
  @Input('basket')
  set basket(value: IBasket) {
    this._basket = value || EMPTY_BASKET;
  }
  get basket(): IBasket {
    return this._basket;
  }

  constructor() {}

  ngOnInit() {}

  onClear() {
    this.clear.emit();
  }
}
