import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';

import { productFragment } from '../fragments';
import { Product, Query as QueryRoot } from 'graphql-types';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GetProductQuery extends Query<QueryRoot> {
  document = gql`
    query product($id: Int) {
      product(id: $id) {
        ...productFields
      }
    }
    ${productFragment}
  `;

  public execute(id: number): Observable<Product> {
    return this.watch({ id }).valueChanges.pipe(
      map((result) => result.data.product),
    );
  }
}
