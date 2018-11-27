import Vue from 'vue';

import currencyFormatter from './currency';
import stockedFormatter from './stocked';

Vue.filter('currency', currencyFormatter);
Vue.filter('stocked', stockedFormatter);
