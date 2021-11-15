import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import getters from "./getters";
import chatter from "./modules/chat";
import file from "./modules/file";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    chatter,
    file,
  },
  getters,
});

export default store;
