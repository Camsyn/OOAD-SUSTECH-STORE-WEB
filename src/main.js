import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VirtualCollection from 'vue-virtual-collection'


// import Vuex from "vuex";

// Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.use(VirtualCollection)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
