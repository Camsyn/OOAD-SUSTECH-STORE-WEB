import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import chatter from "./modules/chat";
import file from "./modules/file";
import goods from "@/store/modules/goods";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    chatter,
    file,
    goods,
  },
});

export default store;
