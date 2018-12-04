<template>
  <div class="col-md-12">
    <h2>Table View</h2>
    <button class="btn btn-default" @click="onAdd();">Add Product</button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th :class="selectedClass('id')" @click="onSort('id');">Id</th>
          <th :class="selectedClass('sku')" @click="onSort('sku');">Sku</th>
          <th :class="selectedClass('title')" @click="onSort('title');">Title</th>
          <th :class="selectedClass('price')" @click="onSort('price');">Price</th>
          <th :class="selectedClass('basePrice')" @click="onSort('basePrice');">Base Price</th>
          <th :class="selectedClass('stocked')" @click="onSort('stocked');">Stocked</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.sku }}</td>
          <td>
            <router-link :to="{ name: 'product', params: { id: product.id } }">{{ product.title }}</router-link>
          </td>
          <td>{{ product.price | currency }}</td>
          <td>{{ product.basePrice | currency }}</td>
          <td>{{ product.stocked ? 'stock' : '-' }}</td>
          <td><a href="#" @click="onDelete(product.id);">Delete</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      sortBy: null,
      sortAsc: false,
    };
  },
  methods: {
    onDelete(id) {
      this.$store.dispatch('DELETE_PRODUCT', id);
    },
    onAdd() {
      this.$router.push('/product');
    },
    async onSort(fieldName) {
      if (fieldName === this.sortBy) {
        this.sortAsc = !this.sortAsc;
      } else {
        this.sortAsc = true;
        this.sortBy = fieldName;
      }
      const sortExpression = `${this.sortAsc ? '' : '-'}${fieldName}`;
      this.$store.dispatch('GET_PRODUCTS', { page: 0, sortExpression });
    },
    selectedClass(fieldName) {
      return fieldName === this.sortBy ? `sort-${this.sortAsc}` : false;
    },
  },
  mounted() {
    this.$store.dispatch('GET_PRODUCTS');
  },
  computed: {
    ...mapGetters(['products']),
  },
};
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
