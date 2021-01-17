import Vue from 'vue';

import App from './App'

Vue.config.devtoold = true;

new Vue({
  render: h => h(App)
}).$mount('#app');
