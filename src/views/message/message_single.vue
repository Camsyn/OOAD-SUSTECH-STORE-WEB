<template>
  <v-card class="d-flex align-center" elevation="0">
    <v-col cols="1" class="ml-0 mr-2 py-0">
      <v-avatar color="grey darken-1" size="54"></v-avatar>
    </v-col>
    <v-col cols="11" class="py-0">
      <div
          v-if="type==0"
        class="grey lighten-2 py-2 px-2"
        style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap; border-radius: 500px;"
      >{{ text }}</div>
      <v-img
          v-else-if="type==1"
          src="text"
          contain
          width="350px"
      ></v-img>
    </v-col>
  </v-card>
</template>

<script>
export default {
  props: ["text", "type"],
  name: "message_single",
  data: () => {
    return {
      // te: "emmmmmmmmmmmmmmmmsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssmmmmmmmmmmmmmmmmmmmmm",
    };
  },
  created() {
    console.log(this.text)
  }
};
</script>

<style scoped></style>
