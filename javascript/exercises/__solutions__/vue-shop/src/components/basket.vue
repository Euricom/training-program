<template>
  <div>
    <h2>Basket</h2>
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
      <h4>Total: {{basket.totalPrice | currency}}</h4>
      <button class="btn btn-default" @click="onClick()">Clear Basket</button>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main';
import basketService from '@/services/basketService';
import productService from '@/services/productService';
import { Basket } from '@/models/basket';

export default {
  data() {
    return {
      basket: new Basket(),
    };
  },
  mounted() {
    eventBus.$on('addToBasket', event => {
      this.basket.addProduct(event.product, event.quantity);
      basketService.create(event.product.id, event.quantity);
    });
    basketService
      .get()
      .then(basket => {
        const promises = [];
        this.basket = basket;
        console.log(basket);
        this.basket.items.forEach(item => {
          promises.push(productService.getById(item.id));
        });
        return Promise.all(promises);
      })
      .then(products => {
        products.forEach(product => {
          this.basket.updateProductInfo(product);
        });
      })
      .catch(error => {
        console.error('failed to get products for basket', error);
        this.basket.clear();
      });
  },
  methods: {
    onClick() {
      this.basket.clear();
      basketService.delete();
    },
  },
};
</script>

<style scoped>
</style>
