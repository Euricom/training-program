<template>
  <div>
    <h2>Basket</h2>
    {{basketError}}
    <span v-if="basket.items.length === 0">No Product in Basket</span>
    <div v-if="basket.items.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in basket.items" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.price | currency}}</td>
            <td>{{item.quantity}}</td>
            <td>{{item.total | currency}}</td>
          </tr>
        </tbody>
      </table>
      <h4>Total: {{basket.total | currency}}</h4>
      <button class="btn btn-default" @click="onClick()">Clear Basket</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store';
import basket from '../store/modules/basket';

if (!store.state.basket) store.registerModule('basket', basket);

export default {
  mounted() {
    this.$store.dispatch('GET_BASKET');
  },
  methods: {
    onClick() {
      this.$store.dispatch('CLEAR_BASKET');
    },
  },
  computed: { ...mapGetters(['basket', 'basketError']) },
};
</script>

<style scoped>
</style>
