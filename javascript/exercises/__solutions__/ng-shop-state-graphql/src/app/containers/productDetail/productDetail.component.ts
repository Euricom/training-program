import { MutationAddOrUpdateProduct } from './../../graphql/mutations/mutationAddOrUpdateProduct';
import { MutationDeleteProduct } from './../../graphql/mutations/mutationDeleteProduct';
import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GetProductQuery } from '@app/graphql/queries/queryProduct';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'graphql-types';

// import { Product } from '@app/models/product.model';
// import { ProductService } from '@app/services/productService';

class MyFormGroup extends FormGroup {
  submitted = false;
}

@Component({
  selector: 'productDetail',
  templateUrl: './productDetail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  // product = new Product();
  productId: number;
  name?: string;
  productForm: MyFormGroup;
  product$!: Observable<Product>;
  private subscription: Subscription;

  constructor(
    // private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location,
    private getProductQuery: GetProductQuery,
    private deleteProductMutation: MutationDeleteProduct,
    private addOrUpdateProductMutation: MutationAddOrUpdateProduct,
  ) {
    this.productForm = new MyFormGroup({
      sku: new FormControl('', [Validators.required]),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl('', [Validators.required]),
      basePrice: new FormControl(''),
      desc: new FormControl(''),
      stocked: new FormControl(''),
    });

    this.productId = parseInt(this.route.snapshot.params.id, 0);
  }

  ngOnInit(): void {
    if (this.productId) {
      this.product$ = this.getProductQuery.execute(this.productId);
      this.subscription = this.product$.subscribe((product) =>
        this.productForm.patchValue(product),
      );
      // this.productForm.patchValue(product);
    }
    // this.product =
    //   (this.activeRoute.snapshot.data['product'] as Product) || new Product();
    // if (!this.product.isNew()) {
    //   this.productForm.patchValue(this.product);
    // }
  }

  onSubmit(form: MyFormGroup) {
    form.submitted = true;
    if (!form.valid) {
      return;
    }
    const productForm = this.productForm;
    if (this.productId) {
      productForm.value.id = this.productId;
    }
    productForm.value.stocked =
      productForm.value.stocked.toString().toLowerCase() === 'true'
        ? true
        : false;

    // not present in test api yet
    productForm.value.price = Number(productForm.value.price);
    productForm.value.basePrice = Number(productForm.value.basePrice);
    productForm.value.image = 'https://dummyimage.com/300x300.jpg';
    this.addOrUpdateProductMutation
      .execute(this.productForm.value)
      .subscribe(() => this.location.back());
    // this.product = Object.assign(this.product, this.productForm.value);
    // this.productService.save(this.product).subscribe(() => {
    //   this.location.back();
    // });
  }

  onCancel() {
    this.location.back();
  }

  onDelete() {
    this.deleteProductMutation
      .execute(this.productId)
      .subscribe(() => this.location.back());
    // this.productService.delete(this.product).subscribe(() => {
    //   this.location.back();
    // });
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
