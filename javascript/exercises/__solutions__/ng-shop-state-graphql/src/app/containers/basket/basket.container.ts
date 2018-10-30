import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { QueryBasket, MutationClearBasket } from '@app/graphql';
import { IBasket } from '@app/graphql/resolvers';

@Component({
  selector: 'basket-container',
  templateUrl: './basket.container.html',
})
export class BasketContainerComponent implements OnInit, OnDestroy {
  basket$: Observable<IBasket>;

  constructor(
    private queryBasket: QueryBasket,
    private mutationClearBasket: MutationClearBasket,
  ) {}

  ngOnInit() {
    this.basket$ = this.queryBasket.execute();
  }

  onClear() {
    console.log('onClear basket');
    this.mutationClearBasket.execute().subscribe();
  }

  ngOnDestroy(): void {}
}
