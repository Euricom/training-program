import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ShopFacade } from '@app/shop.facade';

@Component({
  selector: 'product-table-list',
  templateUrl: './productTableList.component.html',
  styleUrls: ['./productTableList.component.css'],
})
export class ProductTableListComponent implements OnInit {
  errorMessage!: string;
  sortBy!: string;
  sortAsc = false;
  // products: Product[] = [];
  // latestPage = 0;
  products$ = this.facade.products$;

  constructor(
    //   private productService: ProductService,
    private router: Router,
    private facade: ShopFacade,
  ) {}

  public ngOnInit(): void {
    // this.getProducts();
  }

  // private getProducts(page = 0, sortExpression = '') {
  //   this.productService.getProducts(page, sortExpression).subscribe(
  //     (products) => {
  //       this.products = products;
  //     },
  //     (error) => {
  //       this.errorMessage = error.message;
  //     },
  //   );
  // }

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
    this.facade.loadProducts(0, sortExpression);
  }

  onDelete(/* product: Product */) {
    // this.productService.delete(product).subscribe((deletedProduct) => {
    //   this.products = this.products.filter(
    //     (item) => item.id !== deletedProduct.id,
    //   );
    // });
  }

  selectedClass(fieldName: string) {
    return fieldName === this.sortBy ? 'sort-' + this.sortAsc : false;
  }
}
