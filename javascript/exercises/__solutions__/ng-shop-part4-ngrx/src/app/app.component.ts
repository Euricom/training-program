// app.component.ts
import { Component, OnInit } from '@angular/core';

import { ServiceBus } from '@app/serviceBus';
import { ShopFacade } from '@app/shop.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  errorMessage = '';

  constructor(private serviceBus: ServiceBus, private facade: ShopFacade) {}

  public ngOnInit(): void {
    this.serviceBus.listen('ERROR').subscribe((error) => {
      this.errorMessage = error.message;
    });
    this.facade.loadProducts();
  }
}
