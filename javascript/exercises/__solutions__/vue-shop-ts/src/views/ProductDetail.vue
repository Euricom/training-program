<template>
  <div class="home">
      <h3>Detail</h3>
      <form @submit.prevent="onSubmit()">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="sku">Sku</label>
            <input type="text"
                  class="form-control"
                  v-model="form.sku"
                  id="sku">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div :class="fieldGroupClass('title')">
            <label for="title">Title *</label>
            <input type="text"
                  class="form-control"
                  v-model="$v.form.title.$model"
                  id="title">
            <div class="help-block" v-if="showError('title', 'required')">
              This field is required
            </div>
            <div class="help-block" v-if="showError('title', 'minLength')">
              This field must be longer the 3 characters
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div :class="fieldGroupClass('price')">
            <label for="title">Price *</label>
            <input type="number"
                  class="form-control"
                  v-model.number="$v.form.price.$model"
                  id="price" step="any">
            <div class="help-block"
                v-if="showError('price', 'required')">
              This field is required
            </div>
          </div>
        </div>
      </div>

      <div class=" row ">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Base Price</label>
            <input type="number"
                  step="any"
                  class="form-control"
                  v-model.number="form.basePrice"
                  id="basePrice">
          </div>
        </div>
      </div>

      <div class=" row ">
        <div class="col-md-6">
          <div class="form-group">
            <label for="desc">Description</label>
            <textarea class="form-control"
                      v-model="form.desc"
                      id="desc"></textarea>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>
              <input type="checkbox" id="stocked" v-model="form.stocked"> Stocked
              </label>
          </div>
        </div>
      </div>

      <button type="button"
              class="btn btn-default btn-space"
              @click="onCancel()">Cancel</button>
      <button type="submit"
              class="btn btn-success">Save</button>
      <button v-if="!product.isNew()"
              class="btn btn-danger pull-right"
              @click="onDelete($event)">Delete</button>
    </form>
    <pre>{{$v | json}}</pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { required, minLength } from 'vuelidate/lib/validators';

import { Product } from '@/shared/models/product';
import productService from '@/shared/services/productService';

@Component({
  components: {},
  validations: {
    form: {
      title: {
        required,
        minLength: minLength(3),
      },
      price: {
        required,
      },
    },
  },
})
export default class ProductDetail extends Vue {
  product: Product = new Product();
  form = {
    sku: '',
    title: '',
    price: null,
    basePrice: null,
    desc: '',
    stocked: false,
  };

  async mounted() {
    if (this.$route.params.id) {
      this.product = await productService.getById(this.$route.params.id);
      Object.assign(this.form, this.product);
    }
  }

  showError(fieldName: string, errorName: string) {
    const field = this.$v.form[fieldName];
    if (!field) return false;

    return field.$error && !field[errorName];
  }

  fieldGroupClass(fieldName: string) {
    const field = this.$v.form[fieldName];
    if (!field) return null;

    return { 'has-error': field.$error, 'form-group': true };
  }

  onCancel() {
    console.log('onCancel');
  }
  onDelete() {
    console.log('onDelete');
  }
  onSubmit() {
    this.$v.form.$touch();
    if (this.$v.$invalid) return;
    Object.assign(this.product, this.$v.form.$model);
    console.log('onSubmit', this.$v.form.$model);
  }
}
</script>

<style>
.btn-space {
  margin-right: 5px;
}
</style>
