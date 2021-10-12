<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn text @click="toHome"> 主页 </v-btn>

      <v-btn text> 圈子 </v-btn>
      <notif-btn icon="mdi-mail"></notif-btn>

      <menu-btn icon="mdi-forum"></menu-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import menuBtn from "@/layout/components/menuBtn";
import NotifBtn from "@/layout/components/notifBtn";
export default {
  components: { NotifBtn, menuBtn },
  name: "myHeader",
  data: () => ({
    selected: [2],
  }),
  methods: {
    info() {},
    toHome() {
      this.$router.push("home");
    },
  },
};
</script>

<style scoped></style>
