<template>
  <v-card class="d-flex align-center" elevation="0">
    <v-col cols="1" class="ml-0 mr-2 py-0">
      <v-avatar color="grey darken-1" size="60"></v-avatar>
    </v-col>
    <v-col cols="11" class="py-0">
      <div
        class="grey lighten-2"
        style="max-width: max-content; word-wrap: break-word"
      >
        {{ text }}
      </div>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: ["text"],
  name: "message_single",
  data: () => {
    return {
      // te: "emmmmmmmmmmmmmmmmsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssmmmmmmmmmmmmmmmmmmmmm",
    };
  },
};
</script>

<style scoped></style>
