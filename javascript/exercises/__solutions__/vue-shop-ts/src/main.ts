import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';

import router from './router';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';

Vue.use(Vuelidate);

Vue.filter('json', (value: any) => {
  return JSON.stringify(value, null, 2);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
