<template>
  <div>
        <h1>Peter's Web Shop</h1>
        <div class="row">
        <div class="col-md-8">
            <products></products>
        </div>
        <div class="col-md-4">
            <basket></basket>
        </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from '@/components/products.vue';
import Basket from '@/components/basket.vue';

@Component({
  components: { Products, Basket },
})
export default class Home extends Vue {}
</script>
