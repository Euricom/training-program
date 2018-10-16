import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import gql from 'graphql-tag';

import { productFragment } from '../fragments';
import { ProductConnection, Query as QueryRoot } from 'graphql-types';

const emptyConnection = {
  pageInfo: { hasNextPage: false, hasPreviousPage: false },
  edges: [],
};

@Injectable({
  providedIn: 'root',
})
export class QueryAllProducts extends Query<QueryRoot> {
  document = gql`
    query allProducts($orderBy: String) {
      allProducts(orderBy: $orderBy) {
        edges {
          node {
            ...productFields
          }
        }
      }
    }
    ${productFragment}
  `;

  public execute(orderBy: string = ''): Observable<ProductConnection> {
    return this.watch({ orderBy }).valueChanges.pipe(
      startWith({
        data: { allProducts: emptyConnection },
      }),
      map((result) => result.data.allProducts || emptyConnection),
    );
  }
}
