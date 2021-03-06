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
import nextsell from "../components/Myspace/components/nextsell";
import reportpage from "../components/Myspace/components/reportpage";

import sold from "../components/Myspace/components/sold";
import trail from "../components/Myspace/components/trail";
import concerns from "../components/Myspace/components/concerns";
import bought from "../components/Myspace/components/bought";
import testdialog from "../components/Myspace/components/testdialog";

import myCircle from "../components/Circle/Circle";
import HotSharing from "../components/Circle/components/FirstPage/HotSharing";
import Grass from "../components/Circle/components/FirstPage/Grass";

import PersonalPage from "../components/Circle/components/HeaderBar/PersonalPage";
import treasure from "../components/Circle/components/HeaderBar/component/treasure";
import dynamic from "../components/Circle/components/HeaderBar/component/dynamic";
import evaluate from "../components/Circle/components/HeaderBar/component/evaluate";


import PublishCircle from "../components/Circle/components/LeftBarComponent/PublishCircle";
import ObservingNow from "../components/Circle/components/LeftBarComponent/ObservingNow";

import carton from "../components/Circle/components/LeftBarComponent/carton";
import cute_pet from "../components/Circle/components/LeftBarComponent/cute_pet";
import delicious_food from "../components/Circle/components/LeftBarComponent/delicious_food";
import game from "../components/Circle/components/LeftBarComponent/game";
import philosophizing from "../components/Circle/components/LeftBarComponent/philosophizing";
import tour from "../components/Circle/components/LeftBarComponent/tour";
import Another from "../components/Circle/components/LeftBarComponent/Another2";
import Demo from "../components/Business/Demo";
import Pay from "../components/Business/Pay";
import testStore from "../test/testStore";
import message_of from "../views/message/message_of";
import Customer from "../components/Circle/components/Custom/Customer";

import shopping_trolley from "../components/Myspace/out/shopping_trolley";
import publish from "../components/Myspace/out/publish";
import GoodsDetails_Out from "../components/GoodsDetails/GoodsDetails_Out";
import taint from "../components/taint";
import store from "@/store";
import edit from "../components/Myspace/components/edit";

import HotLabel from "../components/Circle/components/LeftBarComponent/HotLabel";



Vue.use(VueRouter);

const routes = [
  {
    path:"/Demo",
    name:"Demo",
    component: Demo

  },
  {
    path:"/HotLabel",
    name:"HotLabel",
    component: HotLabel

  },


  {
    path: "/testdialog",
    name: "testdialog",
    component: testdialog,
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
          {
            path: "/myspace/fans",
            redirect:'/myspace',
            component: publish,
          },
          {
            path: "/myspace/reportpage",
            name:'/reportpage',
            component: reportpage,
          },
        ],
      },
      {
        path:"/PersonalPage",
        name:"PersonalPage",
        component: PersonalPage,
        children:[
          {
            path:"/PersonalPage/treasure",
            name:"treasure",
            component:treasure,
          },
          {
            path:"/PersonalPage/evaluate",
            name:"evaluate",
            component:evaluate,
          },
          {
            path:"/PersonalPage/dynamic",
            name:"dynamic",
            component:dynamic,
          }
        ]
      },
      {
        path: "/circle",
        name: "myCircle",
        component: myCircle,
        children: [
          {
            path:"/circle/PublishCircle",
            name:"publishcircle",
            component: PublishCircle,
          },
          {
            path:"/circle/ObservingNow",
            name:"observingnow",
            component: ObservingNow,
          },
          {
            path:"/circle/HotSharing",
            name:"HotSharing",
            component: Another,
          },
          {
            path:"/circle/Grass",
            name:"Grass",
            component: Another,
          },
          {
            path:"/circle/PublishCircle",
            name:"PublishCircle",
            component: PublishCircle,
          },
          {
            path:"/circle/Customer",
            name:"Customer",
            component: Customer,
          },
          {
            path:"/circle/carton",
            name:"carton",
            component: Another,
          },
          {
            path:"/circle/cute_pet",
            name:"cute_pet",
            component: Another,
          },
          {
            path:"/circle/delicious_food",
            name:"delicious_food",
            component: Another,
          },
          {
            path:"/circle/game",
            name:"game",
            component: Another,
          },
          {
            path:"/circle/philosophizing",
            name:"philosophizing",
            component: Another,
          },
          {
            path:"/circle/tour",
            name:"tour",
            component: Another,
          },
          {
            path:"/circle/another",
            name:"another",
            component: Another,
          },

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
      {
        path:"/Pay",
        name:"Pay",
        component: Pay
      },
      {
        path: "/GoodsDetails",
        name: "GoodsDetails",
        component: GoodsDetails_Out,
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
  let token = localStorage.getItem("token");
  if (to.path==="/"){
    next({path: "/home"});
  }
  if (token || to.name==="Login"){
    next();
  }else {
    next({name: "Login"});
  }
})

export default router;
