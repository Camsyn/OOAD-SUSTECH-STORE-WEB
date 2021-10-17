import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Layout from "../layout/layout";
import Upload from "../components/Myspace/upload";
import Home from "@/views/Home";

import Test from "../components/Myspace/test";
import Commodity from "../components/commodity/commodity";
import Messageall from "../views/message/message_all";
import Notifications from "../views/notifications";

import MySpace from "@/components/Myspace/MySpace";
import settings from "@/components/Myspace/components/settings";
import collection from "@/components/Myspace/components/collection";
import fans from "@/components/Myspace/components/fans";
import nextsell from "@/components/Myspace/components/nextsell";
import publish from "@/components/Myspace/components/publish";
import sold from "@/components/Myspace/components/sold";
import trail from "@/components/Myspace/components/trail";
import concerns from "@/components/Myspace/components/concerns";
import bought from "@/components/Myspace/components/bought";
import testdialog from "@/components/Myspace/components/testdialog";


Vue.use(VueRouter);

const routes = [
  {
    path: "/testdialog",
    name: "testdialog",
    component: testdialog,
  },
  {
    path: "/myspace",
    name: "Myspace",
    component: MySpace,
    children: [
      {
        path: "/myspace/fans",
        name: "fans",
        component: fans,
      },
      {
        path: "/myspace/nextsell",
        name: "nextsell",
        component: nextsell,
      },
      {
        path: "/myspace/settings",
        name: "settings",
        component: settings,
      },
      {
        path: "/myspace/collection",
        name: "collection",
        component: collection,
      },
      {
        path: "/myspace/concerns",
        name: "concerns",
        component: concerns,
      },
      {
        path: "/myspace/publish",
        name: "publish",
        component: publish,
      },
      {
        path: "/myspace/sold",
        name: "sold",
        component: sold,
      },
      {
        path: "/myspace/trail",
        name: "trail",
        component: trail,
      },
      {
        path: "/myspace/bought",
        name: "bought",
        component: bought,
      },
    ],
  },
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
        component: Home,
      },
      {
        path: "message",
        component: Messageall,
      },
      {
        path: "notification",
        component: Notifications,
      },
    ],
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
        path: "not",
        component: Notifications,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
