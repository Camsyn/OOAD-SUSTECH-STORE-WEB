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

    <v-tabs
      centered
      class="ml-n9"
      color="blue darken-1"
    >
      <v-tab
        v-for="item in links"
        :key="item.index"
        :to="item.to"

      >
        {{item.name}}
      </v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-badge color="pink" dot overlap>
      <notif-btn icon="mdi-mail"></notif-btn>
    </v-badge>
    <v-badge color="pink" dot overlap :value="uncheck">
      <menu-btn icon="mdi-forum"></menu-btn>
    </v-badge>
    <upload-btn></upload-btn>
  </v-app-bar>
</template>

<script>
import menuBtn from "@/layout/components/menuBtn";
import NotifBtn from "@/layout/components/notifBtn";
import UploadBtn from "@/layout/components/uploadBtn";
import image_lemon from '../asserts/lemon.png'
import user from '../../store/modules/user';
export default {
  components: {UploadBtn, NotifBtn, menuBtn },
  name: "myHeader",
  data: () => ({
    lemon:image_lemon,
    links: [
      {
        index:0,
        name:"Home",
        to:"/home",
      },
      {
        index:1,
        name:"Circle",
        to:"/circle",
      },
      {
        index:2,
        name:"PersonalPage",
        to:"/PersonalPage/treasure",
      },
      {
        index:3,
        name:"Myspace",
        to: "/myspace/publish"
      },
    ],

  }),
  computed:{
    uncheck(){
      return this.$store.getters.uncheck;
    }
  },
  methods: {
    info(item) {
      if(item.index === 0){
        this.$router.push('/home')
      }
      if(item.index === 1){
        this.$router.push('/circle')
      }
      if(item.index === 2){
        user.state.ObserverId = user.state.name
        this.$router.push('/PersonalPage/treasure')
      }
      if(item.index === 3){
        this.$router.push('/myspace/publish')
      }
    },
  },
};
</script>

<style scoped></style>
