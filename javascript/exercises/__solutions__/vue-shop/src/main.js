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
};

Vue.use(Toasted, options);
// Debug
Vue.config.productionTip = false;

// Form Validation
Vue.use(Vuelidate);

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
export const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
