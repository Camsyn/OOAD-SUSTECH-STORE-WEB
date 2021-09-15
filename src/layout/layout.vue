<template>
  <v-app>
    <Header></Header>
    <v-main class="grey lighten-3 py-0">
      <v-container>
        <v-row>
          <v-col>
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

<style scoped></style>
