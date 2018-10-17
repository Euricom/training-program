import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

import { basketFragment } from '../fragments';
import { Query as QueryRoot } from 'graphql-types';
import { IBasket } from '../resolvers';

@Injectable({
  providedIn: 'root',
})
export class QueryBasket extends Query<QueryRoot> {
  document = gql`
    query basket($checkoutID: String!) {
      basket(checkoutID: $checkoutID) {
        ...basketFields
        total @client
      }
    }
    ${basketFragment}
  `;

  public execute(): Observable<IBasket> {
    return this.watch({
      checkoutID: 'abc',
    }).valueChanges.pipe(
      map((result) => {
        return result.data.basket as IBasket;
      }),
    );
  }
}
