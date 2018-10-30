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

<script>
import productService from '@/services/productService';
import Product from './product.vue';

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    productService.getAll().then(products => {
      this.products = products;
    });
  },
};
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
