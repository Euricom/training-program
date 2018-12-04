<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header"><a class="navbar-brand" routerLink="">My Web Shop</a></div>
        <ul class="nav navbar-nav">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/admin">Admin</router-link></li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {},
  mounted() {
    this.$watch(
      () => this.errors,
      newVal => {
        if (newVal) this.$toasted.error(newVal.message);
      },
      {
        immediate: true,
        deep: true,
      },
    );

    this.$watch(
      () => this.success,
      newVal => {
        if (newVal) this.$toasted.success(newVal);
      },
      {
        immediate: true,
      },
    );
  },
  computed: {
    ...mapGetters(['errors', 'success']),
  },
};
</script>
