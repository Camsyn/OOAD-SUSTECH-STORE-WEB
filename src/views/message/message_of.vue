<template>
  <v-container class="justify-center">
    <v-row style="height: 10%" class="align-content-md-center">
      <span class="mx-auto">{{myId}}</span>
    </v-row>

    <v-divider class="mb-1"></v-divider>

    <v-row dense>
      <v-col cols="12"
             v-for="(msg, index) in messages"
             key="index"
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
</template>

<script>
import Message_single from "./message_single";
export default {
  name: "message_of",
  components: {Message_single},
  data(){
    return{
      myId: this.$store.state.name,
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