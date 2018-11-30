<template>
  <div>
    <h1>Product Detail</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="sku">Sku</label> <input type="text" class="form-control" id="sku" v-model.trim="form.sku" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div :class="fieldGroupClass('title')">
            <label for="title">Title *</label>
            <input type="text" class="form-control" id="title" v-model.trim="$v.form.title.$model" />
            <div class="help-block" v-if="showError('title', 'required')">This field is required</div>
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
            <input type="number" class="form-control" id="price" v-model.trim="$v.form.price.$model" />
            <div class="help-block" v-if="showError('price', 'required')">This field is required</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Base Price</label>
            <input type="text" class="form-control" id="basePrice" v-model.trim="form.basePrice" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="desc">Description</label>
            <textarea class="form-control" id="desc" v-model.trim="form.desc"></textarea>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label> <input type="checkbox" id="stocked" v-model.trim="form.stocked" /> Stocked </label>
          </div>
        </div>
      </div>
      <div class="btn-toolbar">
        <button type="submit" class="btn btn-success pull-right" @click.prevent="onSubmit">Save</button>
        <button type="button" class="btn btn-default pull-right" @click="onCancel">Cancel</button>
        <button class="btn btn-danger" @click="onDelete();" v-if="id">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import productService from '@/services/productService';
import { Product } from '@/models/product';

export default {
  name: 'productDetail',
  components: {},
  data() {
    return {
      form: {
        sku: '',
        title: '',
        price: null,
        basePrice: null,
        desc: '',
        stocked: false,
      },
      product: new Product({}),
      id: null,
    };
  },
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
  async mounted() {
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.product = await productService.getById(this.id);
      Object.assign(this.form, this.product);
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/admin');
    },
    onSubmit() {
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        const newProduct = new Product(this.$v.form.$model);
        Object.assign(this.product, newProduct);

        newProduct.price = Number(newProduct.price);
        newProduct.basePrice = Number(newProduct.basePrice);
        if (typeof newProduct.stocked === 'string') {
          newProduct.stocked = newProduct.stocked.toLowerCase() === 'true';
        }

        productService.save(newProduct).then(this.$router.push('/admin'));
      }
    },
    onDelete() {
      productService.delete(this.id).then(this.$router.push('/admin'));
    },
    showError(fieldName, errorName) {
      const field = this.$v.form[fieldName];
      if (!field) return false;
      return field.$error && !field[errorName];
    },
    fieldGroupClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (!field) return null;
      return { 'has-error': field.$error, 'form-group': true };
    },
  },
};
</script>
