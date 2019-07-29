import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    'access-token': process.env.VUE_APP_ACCESS_TOKEN,
  },
});

Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
