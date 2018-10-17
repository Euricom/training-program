import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClearBasketPayload, Basket } from 'graphql-types';

import { basketFragment } from '../fragments';

@Injectable({
  providedIn: 'root',
})
export class MutationClearBasket extends Mutation<ClearBasketPayload> {
  document = gql`
    mutation clearBasket($checkoutID: ID!) {
      clearBasket(checkoutID: $checkoutID) {
        basket {
          ...basketFields
        }
      }
    }
    ${basketFragment}
  `;

  public execute(): Observable<Basket> {
    return this.mutate(
      { checkoutID: 'abc' },
      { refetchQueries: ['getBasket'] },
    ).pipe(map((result) => result.data.clearBasket.basket));
  }
}
