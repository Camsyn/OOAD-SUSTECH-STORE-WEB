import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import getters from "./getters";
import chatter from "@/store/modules/chat";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    chatter,
  },
  getters,
});

export default store;
