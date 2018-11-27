<template>
  <div class="admin">
    <h1>Webshop Admin Page</h1>
    <div class="row">
      <products-table></products-table>
    </div>
  </div>
</template>

<script>
import ProductsTable from '@/components/productsTable.vue';

export default {
  name: 'admin',
  components: {
    ProductsTable,
  },
};
</script>
