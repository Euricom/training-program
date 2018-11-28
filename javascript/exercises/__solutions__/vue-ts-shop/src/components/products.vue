<template>
  <div>
    <h2>Products</h2>
    <div class="flex-grid">
      <div class="col" v-for="product in products" :key="product.id">
        <product :product="product"></product>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import productService from '../shared/services/productService';
import Product from './product.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Product as IProduct } from '@/shared/models/product';

@Component({
  components: { Product },
})
export default class Products extends Vue {
  products = [];

  mounted() {
    productService.getAll().then(products => {
      this.products = products;
    });
  }
}
</script>

<style scoped>
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.col {
  width: 32%;
}
</style>
