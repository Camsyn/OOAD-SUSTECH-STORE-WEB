<template>
  <v-container class="px-6">
    <v-row>
      <v-col cols="12">
        <v-card class="d-flex" elevation="0">
          <v-col cols="1" class="ml-0 mr-4">
            <v-avatar color="grey darken-1" size="60"></v-avatar>
          </v-col>
          <v-col cols="10">
            <v-sheet class="d-flex" color="grey lighten-3">
              <v-card-text>
                emmemmmmmmemmemmmmmmmmmmmmmmmmmmmmmmmemmemmmmmmmmmmmmmmmmm
                mmmmmmemmemmmmmmmmmmmmmmmmmmmmmmmemmemmmmmmmmmmmmmmmmmmmmm
                memmemmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmememmmememmem
              </v-card-text>
            </v-sheet>
          </v-col>
        </v-card>
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
