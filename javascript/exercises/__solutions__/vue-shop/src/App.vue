<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
    <div id="app" class="container-fluid">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/admin">Admin</router-link>
      </div>
      <router-view/>
    <!-- <h1>Peter's Web Shop</h1>
    <div class="row">
      <div class="col-md-8">
        <products></products>
      </div>
      <div class="col-md-4">
        <basket></basket>
      </div>
    </div> -->
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
// import Products from '@/components/products.vue';
// import Basket from '@/components/basket.vue';

export default {
  name: 'app',
  components: {
    // Products,
    // Basket,
  },
};
</script>

<style lang="scss">
</style>
