import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { FormGroup } from '@angular/forms';
import { productFragment } from '../fragments';
import { Observable } from 'rxjs';
import { Product, AddOrUpdateProductPayload } from 'graphql-types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MutationAddOrUpdateProduct extends Mutation<
  AddOrUpdateProductPayload
> {
  document = gql`
    mutation addOrUpdateProduct($product: ProductInput!) {
      addOrUpdateProduct(input: $product) {
        product {
          ...productFields
        }
      }
    }
    ${productFragment}
  `;

  public execute(product: FormGroup): Observable<Product> {
    return this.mutate(
      {
        product: product,
      },
      { refetchQueries: ['getAllProducts', 'getBasket'] },
    ).pipe(map((result) => result.data.product));
  }
}
