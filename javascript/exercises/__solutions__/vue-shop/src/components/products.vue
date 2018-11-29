<template>
  <div>
    <h2>Panel View</h2>
    <div class="flex-grid">
      <div class="col" v-for="product in products" :key="product.id"><product :product="product"></product></div>
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
  async mounted() {
    this.products = await productService.getAll();
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
