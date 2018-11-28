import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Product } from '@app/models/product.model';
import { ShopFacade } from '@app/shop.facade';

class MyFormGroup extends FormGroup {
  submitted = false;
}

@Component({
  selector: 'productDetail',
  templateUrl: './productDetail.component.html',
})
export class ProductDetailComponent implements OnInit {
  product = new Product();
  name?: string;
  productForm: MyFormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private location: Location,
    private facade: ShopFacade,
  ) {
    this.productForm = new MyFormGroup({
      sku: new FormControl(''),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl('', [Validators.required]),
      basePrice: new FormControl(''),
      desc: new FormControl(''),
      stocked: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.product =
      (this.activeRoute.snapshot.data['product'] as Product) || new Product();

    if (!this.product.isNew()) {
      this.productForm.patchValue(this.product);
    }
  }

  onSubmit(form: MyFormGroup) {
    form.submitted = true;
    if (!form.valid) {
      return;
    }

    this.product.updateBy(this.productForm.value);
    this.facade.saveProduct(this.product).subscribe(() => this.location.back());
  }

  onCancel() {
    this.location.back();
  }

  onDelete() {
    this.facade.deleteProduct(this.product);
  }

  fieldGroupClass(fieldName: string) {
    const hasError =
      this.productForm.controls[fieldName].invalid &&
      (this.productForm.controls[fieldName].touched ||
        this.productForm.submitted);
    return { 'has-error': hasError };
  }

  showError(fieldName: string, error: any) {
    return (
      this.productForm.controls[fieldName].hasError(error) &&
      (this.productForm.controls[fieldName].touched ||
        this.productForm.submitted)
    );
  }
}
