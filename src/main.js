import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
Vue.prototype.axios = axios;
axios.defaults.baseURL = "/api";

import "material-design-icons-iconfont/dist/material-design-icons.css";

// import service from "@/utils/request";

// import Vuex from "vuex";

// Vue.use(Vuex);
// Vue.use(service)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
