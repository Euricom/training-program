import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';

// filters
import './filters';

const options = {
  position: 'top-right',
  duration: 5000,
  singleton: true,
};
// Debug
Vue.config.productionTip = false;

// Form Validation
Vue.use(Vuelidate);

// Hook toaster component to vm
Vue.use(Toasted, options);

/* The main application */
// eslint-disable-next-line import/prefer-default-export
export const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
