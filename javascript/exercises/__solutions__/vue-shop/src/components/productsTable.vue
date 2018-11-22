<template>
  <div class="col-md-12">
    <h2>Products</h2>
    <button class="btn btn-default" @click="onAdd()">Add Product</button>
    <table class="table table-hover">
      <thead>
        <th>Id</th>
        <th>Sku</th>
        <th>Title</th>
        <th>Price</th>
        <th>BasePrice</th>
        <th>Stocked</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <router-link :to="{ name: 'product', params: { id: product.id }}">{{product.id}}</router-link>
          </td>
          <td>{{product.sku}}</td>
          <td>{{product.title}}</td>
          <td>{{product.price | currency}}</td>
          <td>{{product.basePrice | currency}}</td>
          <td>{{product.stocked | stocked}}</td>
          <td>
            <button @click="onDelete(product.id)" type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import productService from '@/services/productService';

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    onDelete(id) {
      productService.delete(id).then(product => {
        this.products = this.products.filter(item => item.id !== product.id);
      });
    },
    onAdd() {
      this.$router.push('/product');
    },
  },
  async mounted() {
    this.products = await productService.getAll();
    console.log('products', this.products);
  },
};
</script>
