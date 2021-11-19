import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import axios from "axios";
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI);
// router.afterEach((to, from, next) => {
//   document.querySelector("body").setAttribute("style", "overflow: auto !important;")
// });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
