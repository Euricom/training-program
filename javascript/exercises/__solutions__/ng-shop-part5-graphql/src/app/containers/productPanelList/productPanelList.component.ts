import { Component, OnInit } from '@angular/core';

// import { Product } from '@app/models/product.model';
// import { ProductService } from '@app/services/productService';
// import { BasketService } from '@app/services/basketService';
// import { ServiceBus } from '@app/serviceBus';

@Component({
  selector: 'product-panel-list',
  templateUrl: './productPanelList.component.html',
  styleUrls: ['./productPanelList.component.css'],
})
export class ProductPanelListComponent implements OnInit {
  // products: Product[] = [];
  errorMessage = '';

  constructor() {}

  public ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(page = 0, sortExpression = '') {
    console.log('getProducts', page, sortExpression);
    // this.productService.getProducts(page, sortExpression).subscribe(
    //   (products) => {
    //     this.products = products;
    //   },
    //   (error) => {
    //     this.errorMessage = error.message;
    //   },
    // );
  }

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
