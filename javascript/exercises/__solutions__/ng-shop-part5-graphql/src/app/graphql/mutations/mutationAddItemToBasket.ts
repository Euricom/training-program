import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basket, AddItemToBasketPayload } from 'graphql-types';

import { basketFragment } from '../fragments';

@Injectable({
  providedIn: 'root',
})
export class MutationAddItemToBasket extends Mutation<AddItemToBasketPayload> {
  document = gql`
    mutation addItemToBasket(
      $checkoutID: ID!
      $quantity: Int!
      $productId: Int!
    ) {
      addItemToBasket(
        input: {
          checkoutID: $checkoutID
          item: { quantity: $quantity, productId: $productId }
        }
      ) {
        basket {
          ...basketFields
        }
      }
    }
    ${basketFragment}
  `;

  public execute(quantity: number, productId: number): Observable<Basket> {
    return this.mutate(
      { checkoutID: 'abc', quantity, productId },
      { refetchQueries: ['getBasket'] },
    ).pipe(map((result) => result.data.addItemToBasket.basket));
  }
}
