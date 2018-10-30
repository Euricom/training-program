import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Output() addProduct = new EventEmitter();
  quantityControl: FormControl = new FormControl();

  ngOnInit(): void {
    this.quantityControl = new FormControl(1);
  }

  onAdd() {
    const quantity = this.quantityControl.value;
    this.addProduct.emit({
      product: this.product,
      quantity: +quantity,
    });
  }
}
