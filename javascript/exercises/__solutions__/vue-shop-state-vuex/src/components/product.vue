<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">{{ product.title }}</div>
      <div class="panel-body">
        <img :src="product.image" width="100%" />
        <table class="table">
          <tbody>
            <tr>
              <td><strong>Sku:</strong></td>
              <td>{{ product.sku }}</td>
            </tr>
            <tr>
              <td><strong>Title:</strong></td>
              <td>{{ product.title }}</td>
            </tr>
            <tr>
              <td><strong>Price:</strong></td>
              <td>{{ product.price | currency }}</td>
            </tr>
            <tr>
              <td><strong>Base Price:</strong></td>
              <td>{{ product.basePrice | currency }}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary margin" @click="onAdd();" :disabled="!hasProductInStock">Add</button>
        <input v-if="product.stocked" type="number" value="1" style="width: 30px;" min="1" max="5" v-model="quantity" />
        <span v-if="!product.stocked" style="color: red;">Out of Stock</span>
      </div>
    </div>
  </div>
</template>

<script>
import * as actionTypes from '@/store/actionTypes'

export default {
  props: ['product'],
  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    onAdd() {
      this.$store.dispatch(actionTypes.ADD_PRODUCT_TO_BASKET, { productId: this.product.id, quantity: this.quantity });
    },
  },
  computed: {
    hasProductInStock() {
      return this.product.stocked;
    },
  },
};
</script>

<style scoped>
.margin {
  margin: 5px;
}
</style>
