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

  public execute(productId: number): Observable<Product> {
    return this.mutate(
      { productId: productId },
      { refetchQueries: ['getAllProducts', 'getBasket'] },
    ).pipe(map((result) => result.data.deleteProduct.product));
    // updateQueries: {
    //   allProducts: (prev, { mutationResult }): any => {
    //     console.log('updateQueries', prev.allProducts, mutationResult);
    //   },
    // },
    // update: (cache, { data: { deleteProduct } }) => {
    //   console.log('update after delete', deleteProduct, cache);

    //   const query = gql`
    //     query GetAllProducts {
    //       allProducts(orderBy: "") @client {
    //         edges {
    //           node {
    //             id
    //             title
    //           }
    //         }
    //       }
    //     }
    //   `;
    //   const previous = cache.readQuery({
    //     query,
    //   });
    //   console.log('update query', previous);
    // },
  }
}
