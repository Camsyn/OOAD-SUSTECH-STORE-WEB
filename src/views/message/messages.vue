<template>
  <v-container class="px-6">
    <v-row>
      <v-col cols="12">
        <message_single
            text="hello!"
        >
        </message_single>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <message_single
            text="hello!"
        >
        </message_single>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-textarea
        auto-grow
        v-model="msg"
        label="Message"
        full-width
        single-line
        append-outer-icon="mdi-close-circle"
      ></v-textarea>
    </v-row>
    <v-row class="flex-row-reverse mt-0">
      <v-btn class="primary mb-2">发送</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "messages",
  data: () => {
    return {
      msg: "",
    };
  },
};
</script>

<style scoped></style>
