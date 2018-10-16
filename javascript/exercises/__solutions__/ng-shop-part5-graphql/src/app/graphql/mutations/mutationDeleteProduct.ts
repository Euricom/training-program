import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DeleteProductPayload, Product } from 'graphql-types';

import { productFragment } from '../fragments';

@Injectable({
  providedIn: 'root',
})
export class MutationDeleteProduct extends Mutation<DeleteProductPayload> {
  document = gql`
    mutation deleteProduct($productId: Int!) {
      deleteProduct(id: $productId) {
        product {
          ...productFields
        }
      }
    }
    ${productFragment}
  `;

  public execute(
    productId: string,
    refetchQueries: string[],
  ): Observable<Product> {
    return this.mutate({ productId: productId }, { refetchQueries }).pipe(
      map((result) => result.data.deleteProduct.product),
    );
  }
}
