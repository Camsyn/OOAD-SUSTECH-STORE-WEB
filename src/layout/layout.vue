<template>
  <v-app>
    <Header></Header>
    <v-main class="grey lighten-3 py-0 my-0" style="top: 10%">
      <v-container class="py-0" style="height: 100%">
        <v-row class="my-0 my-0" style="height: 100%">
          <v-col class="pb-0 mb-0">
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/header";
export default {
  name: "Layout",

  components: {
    Header,
  },
};
</script>

<style scoped>
html,
body {
  height: 100%;
}
</style>
