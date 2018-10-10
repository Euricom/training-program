<template>
  <div class="admin">
    <h3>Product List</h3>
    <button class="btn btn-default" @click="onAdd()">Add Product</button>
    <table class="table table-hover">
        <thead>
        <tr>
            <th :class="selectedClass('id')" @click="onSort('id')">Id</th>
            <th :class="selectedClass('sku')" @click="onSort('sku')">Sku</th>
            <th :class="selectedClass('title')" @click="onSort('title')">Title</th>
            <th :class="selectedClass('price')" @click="onSort('price')">Price</th>
            <th :class="selectedClass('basePrice')" @click="onSort('basePrice')">Base Price</th>
            <th :class="selectedClass('stocked')" @click="onSort('stocked')">Stocked</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product of products" :key="product.id">
            <td>{{product.id}}</td>
            <td>{{product.sku}}</td>
             <td><router-link :to="`/product/${product.id}`">{{product.title}}</router-link></td>
            <td>{{product.price}}</td>
            <td>{{product.basePrice}}</td>
            <td>{{product.stocked | yesNo}}</td>
            <td><a @click="onDelete(product)">Delete</a></td>
        </tr>
        </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import productService from '@/shared/services/productService';
import { Product } from '@/shared/models/product';

@Component({
  components: {},
})
export default class Admin extends Vue {
  products: Product[] = [];

  selectedClass(tag: any) {
    return '';
  }
  onAdd() {
    console.log('onAdd');
  }
  onSort() {
    console.log('onSort');
  }
  onDelete() {
    console.log('onDelete');
  }

  async mounted() {
    this.products = await productService.getAll();
  }
}
</script>
