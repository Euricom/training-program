import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Admin from './views/Admin.vue';
import ProductDetail from './views/ProductDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/product',
      component: ProductDetail,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductDetail,
    },
  ],
});
