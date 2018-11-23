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
            <td>{{product.price | currency}}</td>
            <td>{{product.basePrice | currency}}</td>
            <td>{{product.stocked | stocked}}</td>
            <td><a @click="onDelete(product.id)">Delete</a></td>
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
  sortBy!: string;
  sortAsc = false;

  onAdd() {
    this.$router.push('/product');
  }
  async onSort(fieldName: string) {
    if (fieldName === this.sortBy) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortAsc = true;
      this.sortBy = fieldName;
    }
    const sortExpression = `${this.sortAsc ? '' : '-'}${fieldName}`;
    console.log(sortExpression);
    this.products = await productService.getAll(0, sortExpression);
  }
  selectedClass(fieldName) {
    return fieldName === this.sortBy ? `sort-${this.sortAsc}` : false;
  }

  onDelete(id) {
    productService.delete(id).then(product => {
      this.products = this.products.filter(item => item.id !== product.id);
    });
  }

  async mounted() {
    this.products = await productService.getAll();
  }
}
</script>
<style scoped>
table > thead > tr > th {
  cursor: pointer;
  position: relative;
  background-image: none;
}

table > thead > tr > th:after,
table > thead > tr > th.sort-false:after,
table > thead > tr > th.sort-true:after {
  font-family: FontAwesome;
  padding-left: 5px;
}

table > thead > tr > th:after {
  content: '\f0dc';
  color: #ddd;
}
table > thead > tr > th.sort-false:after {
  content: '\f0de';
  color: #767676;
}
table > thead > tr > th.sort-true:after {
  content: '\f0dd';
  color: #767676;
}
</style>
