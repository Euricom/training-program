import { Component, OnInit } from '@angular/core';

import { ShopFacade } from '@app/shop.facade';

@Component({
  selector: 'product-panel-list',
  templateUrl: './productPanelList.component.html',
  styleUrls: ['./productPanelList.component.css'],
})
export class ProductPanelListComponent implements OnInit {
  products$ = this.facade.products$;

  constructor(private facade: ShopFacade) {}

  public ngOnInit(): void {}

  onAddProduct(event: any) {
    this.facade.addProduct(event.product, event.quantity);
  }
}
