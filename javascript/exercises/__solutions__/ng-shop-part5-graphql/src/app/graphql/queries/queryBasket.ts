import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { basketFragment } from '../fragments';
import { Basket, Query as QueryRoot } from 'graphql-types';

@Injectable({
  providedIn: 'root',
})
export class QueryBasket extends Query<QueryRoot> {
  document = gql`
    query basket($checkoutID: String!) {
      basket(checkoutID: $checkoutID) {
        ...basketFields
      }
    }
    ${basketFragment}
  `;

  public execute(): Observable<Basket> {
    return this.watch({
      checkoutID: 'abc',
    }).valueChanges.pipe(
      map((result) => {
        return result.data.basket;
      }),
    );
  }
}
