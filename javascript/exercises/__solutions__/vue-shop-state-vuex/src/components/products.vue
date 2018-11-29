<template>
  <div>
    {{ productsError }}
    <h2>Panel View</h2>
    <div class="flex-grid">
      <div class="col" v-for="product in products" :key="product.id"><product :product="product"></product></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Product from './product.vue';

export default {
  components: {
    Product,
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCTS');
    console.log('products', this.products);
  },
  computed: {
    ...mapGetters(['products', 'productsError']),
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
