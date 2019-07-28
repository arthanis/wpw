import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import Axios from 'axios';

import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
