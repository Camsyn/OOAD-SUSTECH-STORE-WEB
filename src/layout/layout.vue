<template>
  <v-app>
    <Header></Header>
    <v-main class="grey lighten-3 py-0 my-0" style="height: 100%">
      <v-container style="height: 100%" class="py-0">
        <v-row style="height: 100%" class="my-0 my-0">
          <v-col style="height: 100%" class="pb-0 mb-0">
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
