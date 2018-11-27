<template>
  <div>
    {{productsError}}
    <h1>Product Detail</h1>
    <form>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="sku">Sku</label>
            <input type="text" class="form-control" id="sku" v-model.trim="form.sku">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div :class="fieldGroupClass('title')">
            <label for="title">Title *</label>
            <input type="text" class="form-control" id="title" v-model.trim="$v.form.title.$model">
            <div class="help-block" v-if="showError('title', 'required')">This field is required</div>
            <div
              class="help-block"
              v-if="showError('title', 'minLength')"
            >This field must be longer the 3 characters</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div :class="fieldGroupClass('price')">
            <label for="title">Price *</label>
            <input
              type="number"
              class="form-control"
              id="price"
              v-model.trim="$v.form.price.$model"
            >
            <div class="help-block" v-if="showError('price', 'required')">This field is required</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="title">Base Price</label>
            <input type="text" class="form-control" id="basePrice" v-model.trim="form.basePrice">
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
            <label>
              <input type="checkbox" id="stocked" v-model.trim="form.stocked">Stocked
            </label>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-default" @click="onCancel">Cancel</button>
      <button type="submit" class="btn btn-success" @click.prevent="onSubmit">Save</button>
      <button class="btn btn-danger" @click="onDelete()" v-if="id">Delete</button>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapGetters } from 'vuex';

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
  mounted() {
    if (this.$route.params.id) {
      this.id = Number(this.$route.params.id);
      this.$store.dispatch('GET_PRODUCT', this.id);
    }
    this.$watch(
      () => {
        return this.formData;
      },
      newVal => {
        Object.assign(this.form, newVal);
      },
      {
        deep: true,
      },
    );
  },
  methods: {
    onCancel() {
      this.$router.push('/admin');
    },
    onSubmit() {
      console.log('saving', this.$v);
      this.$v.form.$touch();
      if (!this.$v.$invalid) {
        console.log('woopa');
        Object.assign(this.form, this.$v.form.$model);
        this.form.price = Number(this.form.price);
        this.form.basePrice = Number(this.form.basePrice);
        this.$store.dispatch('ADD_PRODUCT', this.form).then(this.$router.push('/admin'));
      }
    },
    onDelete() {
      this.$store.dispatch('DELETE_PRODUCT', this.id);
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
  computed: {
    formData() {
      return Object.assign(this.form, this.product(this.id));
    },
    ...mapGetters(['product', 'productsError']),
  },
};
</script>
