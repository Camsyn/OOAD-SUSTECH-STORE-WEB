<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn text @click="toHome"> 主页 </v-btn>

      <v-btn text @click="toCircle"> 圈子 </v-btn>
      <v-btn text @click="toMySpace">MySpace</v-btn>
      <v-badge color="pink" dot overlap>
        <notif-btn icon="mdi-mail"></notif-btn>
      </v-badge>
      <v-badge color="pink" dot overlap :value="uncheck">
        <menu-btn icon="mdi-forum"></menu-btn>
      </v-badge>
    </v-container>
    <v-container class="d-flex flex-row-reverse">
      <upload-btn></upload-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import menuBtn from "@/layout/components/menuBtn";
import NotifBtn from "@/layout/components/notifBtn";
import UploadBtn from "@/layout/components/uploadBtn";

export default {
  components: {UploadBtn, NotifBtn, menuBtn },
  name: "myHeader",
  data: () => ({

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
    toMySpace(){
      this.$router.push("myspace")
    },
    toCircle(){
      this.$router.push("circle")
    }
  },
};
</script>

<style scoped></style>
