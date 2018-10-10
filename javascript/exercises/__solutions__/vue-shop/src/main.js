import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// filters
import './filters';

// Debug
Vue.config.productionTip = false;

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
  store,
  render: h => h(App),
}).$mount('#app');
