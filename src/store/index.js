import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import chatter from "./modules/chat";
import file from "./modules/file";
import goods from "./modules/goods";
import circle from "./modules/circle";
import cartItem from "./modules/cartItem";
import order from "./modules/order";
import comment from "./modules/comment";
import review from "./modules/review";
import label from "./modules/label";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    user,
    chatter,
    file,
    goods,
    circle,
    cartItem,
    order,
    comment,
    review,
    label,
  },
});

export default store;
