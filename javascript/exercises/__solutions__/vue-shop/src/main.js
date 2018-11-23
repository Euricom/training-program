import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';

// filters
import './filters';

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
