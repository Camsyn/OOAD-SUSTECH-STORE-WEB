<template>
  <v-container class="justify-center d-flex flex-column-reverse py-0">
    <v-row class="flex-row-reverse mt-1 mb-0" style="max-height: 40px">
      <v-btn class="primary mr-3">发送</v-btn>
    </v-row>
    <v-row style="max-height: 140px" class="mb-0 mt-2">
      <v-textarea
          outlined
          class="ml-3 py-0"
          auto-grow
          append-outer-icon="mdi-close-circle"
          hide-details="true"
      ></v-textarea>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <router-view></router-view>
    </v-row>
    <v-container class="pa-0">
      <v-row style="height: 50px" class="align-content-md-center">
        <span class="mx-auto">{{myId}}</span>
      </v-row>

      <v-divider class="my-1"></v-divider>

      <v-row dense>
        <v-col cols="12"
               v-for="(msg, index) in messages"
               :key="index"
        >
          <v-card class="d-flex align-center" elevation="0">
            <v-col cols="1" class="ml-0 mr-2 py-0">
              <v-avatar color="grey darken-1" size="54"></v-avatar>
            </v-col>
            <v-col cols="11" class="py-0">
              <div
                  v-if="msg.type==0"
                  class="grey lighten-2 py-2 px-2"
                  style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap; border-radius: 500px;"
              >{{ msg.content }}</div>

              <v-img
                  v-else-if="msg.type==1"
                  src="text"
                  contain
                  width="350px"
              ></v-img>
            </v-col>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "message_of",
  data(){
    return{
      myId: this.$store.state.name===1,
    }
  },
  computed: {
    messages(){
      return this.$store.getters.msgOf(this.$route.params.sid);
    },
  },
  created() {
  }
}
</script>
<style scoped>

</style>
