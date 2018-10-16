import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductConnection } from 'graphql-types';
import {
  QueryAllProducts,
  MutationDeleteProduct,
  emptyConnection,
} from '@app/graphql';

@Component({
  selector: 'product-table-list',
  templateUrl: './productTableList.component.html',
  styleUrls: ['./productTableList.component.css'],
})
export class ProductTableListComponent implements OnInit {
  errorMessage!: string;
  sortBy!: string;
  sortAsc = false;
  products: ProductConnection = emptyConnection;
  latestPage = 0;
  productConnection$!: Observable<ProductConnection>;

  constructor(
    private router: Router,
    private mutationDeleteProduct: MutationDeleteProduct,
    private queryAllProducts: QueryAllProducts,
  ) {}

  public ngOnInit(): void {
    this.productConnection$ = this.queryAllProducts.execute();
  }

  onAdd() {
    this.router.navigate(['/detail']);
  }

  onSort(fieldName: string) {
    if (fieldName === this.sortBy) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortBy = fieldName;
    }
    const sortExpression = `${this.sortAsc ? '' : '-'}${fieldName}`;
    this.productConnection$ = this.queryAllProducts.execute(sortExpression);
  }

  onDelete(product: any) {
    // see also: https://github.com/apollographql/apollo-client/issues/899
    // direct mutation call
    // this.mutationDeleteProduct
    //   .mutate(
    //     // variables
    //     { productId: product.id }, // options
    //     { refetchQueries: ['allProducts'] },
    //   )
    //   .subscribe();
    this.mutationDeleteProduct.execute(product.id, ['allProducts']).subscribe();
  }

  selectedClass(fieldName: string) {
    return fieldName === this.sortBy ? 'sort-' + this.sortAsc : false;
  }
}
