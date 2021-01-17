import Vue from 'vue';

import App from './App';

import 'styles/normalize.css';

Vue.config.devtoold = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
