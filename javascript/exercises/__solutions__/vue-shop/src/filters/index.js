import Vue from 'vue';

import currencyFormatter from './currency';

Vue.filter('currency', currencyFormatter);
