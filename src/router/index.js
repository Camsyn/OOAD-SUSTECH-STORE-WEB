import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Layout from "../layout/layout";
import Upload from "../components/upload";
import Home from "@/views/Home";

import Test from "../components/test";
import Commodity from "../components/commodity/commodity";
import Messageall from "../views/message/message_all";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "home",
        component: Home
      },
      {
        path: "message",
        component: Messageall
      }
    ]
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
    children: [
      {
        path: "com",
        component: Commodity,
      },
      {
        path: "up",
        component: Upload,
      },
      {
        path: "msg",
        component: Messageall,
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
