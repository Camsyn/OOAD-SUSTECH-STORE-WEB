<template>
  <v-app-bar app color="white" flat height="60">

    <div class="lemon">
      <div class="block" >
        <el-image
          style="width: 55px; height: 55px"
          :src=lemon
        >
        </el-image>
      </div>
    </div>
    <span class="font-weight-black" style= "color: #0066ff;font-size: 30px">
              Store
    </span>

    <v-spacer></v-spacer>

    <v-tabs
      centered
      class="ml-n9"
      color="grey darken-1"
    >
      <v-tab
        v-for="item in links"
        :key="item.index"
      >
        <v-btn text @click="tabClick(item.index)"> {{ item.name }} </v-btn>

      </v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-badge color="pink" dot overlap>
      <notif-btn icon="mdi-mail"></notif-btn>
    </v-badge>
    <v-badge color="pink" dot overlap :value="uncheck">
      <menu-btn icon="mdi-forum"></menu-btn>
    </v-badge>

    <span>&nbsp;&nbsp;&nbsp;</span>

    <upload-btn></upload-btn>
  </v-app-bar>
</template>

<script>
import menuBtn from "@/layout/components/menuBtn";
import NotifBtn from "@/layout/components/notifBtn";
import UploadBtn from "@/layout/components/uploadBtn";
import image_lemon from '../asserts/lemon.png'

export default {
  components: {UploadBtn, NotifBtn, menuBtn },
  name: "myHeader",
  data: () => ({
    lemon:image_lemon,
    links: [
      {
        index:0,
        name:"Home",
      },
      {
        index:1,
        name:"Circle",
      },
      {
        index:2,
        name:"MySpace",
      },
      {
        index:3,
        name:"News",
      },
      {
        index:4,
        name:"Personal",
      },
    ],

  }),
  computed:{
    newMsg(){

    },
    newNotify(){

    },
    uncheck(){
      return this.$store.getters.uncheck;
    }
  },
  methods: {
    info() {},
    toHome() {
      this.$router.push("home");
    },
    tabClick(index){
      if(index===0){
        this.$router.push("home");
      }
      else if(index===1)
      {
        this.$router.push("circle");
      }
      else if(index===2)
      {
        this.$router.push("circle/PersonalPage");
      }
      else if(index===3)
      {
        this.$router.push("circle/MessagePage");
      }
      else if(index===4)
      {
        this.$router.push("myspace");
      }
    }
  },
};
</script>

<style scoped></style>
