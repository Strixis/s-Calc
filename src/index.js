import Vue from 'vue';
import Vuex from 'vuex';

import App from './App';
import store from 'store';

import 'styles/normalize.css';
import 'fonts';

Vue.config.devtools = true;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
