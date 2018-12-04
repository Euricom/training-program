import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Toasted from 'vue-toasted';
import App from './App.vue';
import router from './router';
import store from './store';

// filters
import './filters';

const options = {
  position: 'top-right',
  duration: 5000,
  // singleton: true,
};

// Debug
Vue.config.productionTip = false;

// Form Validation
Vue.use(Vuelidate);

Vue.use(Toasted, options);

/* Simple Event Bus
 * use:
 *    // in component A
 *    eventBus.$emit('resourceAdded', resoure)
 *
 *    // in component B
 *    eventBus.$on('resourceAdded', (resource) => {
 *      console.log('the resource is added', resource)
 *    })
 */
export const eventBus = new Vue();

/* The main application */
// eslint-disable-next-line import/prefer-default-export
export const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
