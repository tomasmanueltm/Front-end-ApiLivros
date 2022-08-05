import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from "vuelidate";
import { Model } from "vue-api-query";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
import axios from "axios";

Vue.config.productionTip = false

Vue.use(Vuelidate);


Model.$http = axios;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
