import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login.vue";
import Layout from "../layout/layout";
import Upload from "../components/upload";
import Home from "../views/Home";

import Test from "../components/test";
import Commodity from "../components/commodity/commodity";
import Messageall from "../views/message/message_all";
import Notifications from "../views/notifications";

import MySpace from "../components/Myspace/MySpace";
import settings from "../components/Myspace/components/settings";
import collection from "../components/Myspace/components/collection";
import fans from "../components/Myspace/components/fans";
import nextsell from "../components/Myspace/components/nextsell";

import sold from "../components/Myspace/components/sold";
import trail from "../components/Myspace/components/trail";
import concerns from "../components/Myspace/components/concerns";
import bought from "../components/Myspace/components/bought";
import testdialog from "../components/Myspace/components/testdialog";

import myCircle from "../components/Circle/Circle";
import HotSharing from "../components/Circle/components/FirstPage/HotSharing";
import Grass from "../components/Circle/components/FirstPage/Grass";
import PersonalPage from "../components/Circle/components/HeaderBar/PersonalPage";
import MessagePage from "../components/Circle/components/HeaderBar/MessagePage";

import Demo from "../components/Business/Demo";
import Pay from "../components/Business/Pay";
import testStore from "../test/testStore";
import message_of from "../views/message/message_of";
import PublishCircle from "../components/Circle/components/FirstPage/PublishCircle";
import Customer from "../components/Circle/components/Custom/Customer";

import shopping_trolley from "../components/Myspace/out/shopping_trolley";
import publish from "../components/Myspace/out/publish";
import GoodsDetails_Out from "../components/GoodsDetails/GoodsDetails_Out";
import taint from "../components/taint";
import store from "@/store";
import edit from "../components/Myspace/components/edit";



Vue.use(VueRouter);

const routes = [
  {
    path:"/Demo",
    name:"Demo",
    component: Demo

  },
  {
    path:"/Pay",
    name:"Pay",
    component: Pay
  },
  {
    path: "/testdialog",
    name: "testdialog",
    component: testdialog,
  },
  {
    path: "/GoodsDetails",
    name: "GoodsDetails",
    component: GoodsDetails_Out,
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
            component: shopping_trolley,
          },
          {
            path: "/myspace/settings",
            name: "settings",
            component: settings,
          },
          {
            path: "/myspace/edit",
            name: "edit",
            component: edit,
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
          {
            path: "/myspace/publish",
            name: "publish",
            component: publish,
          },
        ],
      },
      {
        path: "/circle",
        name: "myCircle",
        component: myCircle,
        children: [
          {
            path:"/circle/HotSharing",
            name:"HotSharing",
            component: HotSharing,
          },
          {
            path:"/circle/Grass",
            name:"Grass",
            component: Grass,
          },
          {
            path:"/circle/PublishCircle",
            name:"PublishCircle",
            component: PublishCircle,
          },
          {
            path:"/circle/PersonalPage",
            name:"PersonalPage",
            component: PersonalPage,
          },
          {
            path:"/circle/MessagePage",
            name:"MessagePage",
            component: MessagePage,
          },
          {
            path:"/circle/Customer",
            name:"Customer",
            component: Customer,
          }
        ]
      },
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "message",
        component: Messageall,
        children: [
            {
              path: ":sid",
              component: message_of,
        }
        ]
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
      {
        path: "store",
        component: testStore,
      },
      {
        path: "taint",
        component: taint,
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next)=>{
  let token = store.getters.token;
  if (token || to.name==="Login"){

    next();
  }else {
    next({name: "Login"});
  }
})

export default router;
