<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header"><a class="navbar-brand" routerLink>My Web Shop</a></div>
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
import { eventBus } from '@/eventBus';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

export default {
  name: 'app',
  components: {},
  mounted() {
    eventBus.$on('error', event => {
      this.$toasted.error(event.message);
    });

    eventBus.$on('success', event => {
      this.$toasted.success(event);
    });
  },
};
</script>
