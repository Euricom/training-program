import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ShopFacade } from '@app/shop.facade';
import { IProductDTO } from '@app/services/productService';

@Component({
  selector: 'product-table-list',
  templateUrl: './productTableList.component.html',
  styleUrls: ['./productTableList.component.css'],
})
export class ProductTableListComponent implements OnInit {
  errorMessage!: string;
  sortBy!: string;
  sortAsc = false;
  products$ = this.facade.products$;

  constructor(private router: Router, private facade: ShopFacade) {}

  public ngOnInit(): void {}

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

  onDelete(product: IProductDTO) {
    this.facade.deleteProduct(product);
  }

  selectedClass(fieldName: string) {
    return fieldName === this.sortBy ? 'sort-' + this.sortAsc : false;
  }
}
