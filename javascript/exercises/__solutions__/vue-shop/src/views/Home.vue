<template>
  <div>
    <div class="row">
      <div class="col-md-8"><products></products></div>
      <div class="col-md-4"><basket></basket></div>
    </div>
  </div>
</template>

<script>
import Products from '@/components/products.vue';
import Basket from '@/components/basket.vue';

export default {
  name: 'home',
  components: {
    Products,
    Basket,
  },
};
</script>
