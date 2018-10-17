import { Component, OnInit } from '@angular/core';
import { QueryAllProducts } from '@app/graphql';
import { Observable } from 'rxjs';
import { ProductConnection } from 'graphql-types';
import { MutationAddItemToBasket } from '@app/graphql';

@Component({
  selector: 'product-panel-list',
  templateUrl: './productPanelList.component.html',
  styleUrls: ['./productPanelList.component.css'],
})
export class ProductPanelListComponent implements OnInit {
  errorMessage = '';
  productConnection$!: Observable<ProductConnection>;

  constructor(
    private queryAllProducts: QueryAllProducts,
    private mutationAddItemToBasket: MutationAddItemToBasket,
  ) {
    this.productConnection$ = this.queryAllProducts.execute();
  }

  public ngOnInit(): void {}

  onAddProduct(event: any) {
    console.log('onAddProduct', event);
    this.mutationAddItemToBasket
      .execute(event.quantity, event.product.id)
      .subscribe();
  }
}
