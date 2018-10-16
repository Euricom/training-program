import { Component, OnInit } from '@angular/core';
import { QueryAllProducts } from '@app/graphql';
import { Observable } from 'rxjs';
import { ProductConnection } from 'graphql-types';

// import { ServiceBus } from '@app/serviceBus';

@Component({
  selector: 'product-panel-list',
  templateUrl: './productPanelList.component.html',
  styleUrls: ['./productPanelList.component.css'],
})
export class ProductPanelListComponent implements OnInit {
  // products: Product[] = [];
  errorMessage = '';
  productConnection$!: Observable<ProductConnection>;

  constructor(private queryAllProducts: QueryAllProducts) {
    this.productConnection$ = this.queryAllProducts.execute();
  }

  public ngOnInit(): void {}

  onAddProduct(event: any) {
    console.log('onAddProduct', event);
    // this.basketService
    //   .addProduct(event.product, event.quantity)
    //   .subscribe((result) => {
    //     console.log(result);
    //     this.serviceBus.publish('addProductToBasket', event);
    //   });
  }
}
