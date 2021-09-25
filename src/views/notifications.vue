<template>
  <v-sheet class="mx-auto mt-3" width="80%" style="height: 100%" elevation="0">
    <v-container fluid style="height: 100%" class="py-0 my-0">
      <v-list
          two-line
          subheader
      >
        <v-subheader>General</v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Profile photo</v-list-item-title>
            <v-list-item-subtitle>Change your Google+ profile photo</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Show your status</v-list-item-title>
            <v-list-item-subtitle>Your status is visible to everyone</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "notifications",
  data: () => ({
    items: [

    ],

  }),
};
</script>

<style scoped>
html, body{
  height: 100%;
}
</style>
