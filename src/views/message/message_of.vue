<template>
  <v-container class="justify-center d-flex flex-column-reverse py-0">
    <v-row class="flex-row-reverse mt-1 mb-0" style="max-height: 40px">
      <v-btn class="primary mr-3" @click="send">发送</v-btn>
      <v-file-input
          style="max-width: 40px"
          @change="sendFile"
          v-model="files"
          flat
          class="pt-0"
          append-icon="mdi-camera"
          multiple
          hide-input
      >
      </v-file-input>
    </v-row>
    <v-row style="max-height: 140px" class="mb-0 mt-2">
      <v-textarea
          outlined
          class="ml-3 py-0"
          auto-grow
          hide-details="true"
          v-model="msg"
      ></v-textarea>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <router-view></router-view>
    </v-row>
    <v-container class="pa-0">
      <v-row style="height: 50px" class="align-content-md-center">
        <span class="mx-auto">{{oppositeId}}</span>
      </v-row>
      <v-divider class="my-1"></v-divider>
      <v-row dense>
        <v-col cols="12"
          v-for="(msg, index) in messages"
          :key="index"
        >
          <message_single :msg="msg"></message_single>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import Message_single from "./message_single";
export default {
  name: "message_of",
  components: {Message_single},
  data(){
    return{
      msg:"",
      files:[],
    }
  },
  methods: {
    send(){
      if (!this.msg)
        return;
      let msg = {
        sendId: this.myId,
        recvId: this.oppositeId,
        content: this.msg,
        type: 0,
      }
      this.$store.dispatch("send", msg).then((res)=>{
        this.msg = "";
      });
    },

    sendFile(){
      if (!this.files)
        return;

      this.$store.dispatch("upload", {files: this.files, mul: true}).then((data)=>{
        for (let fl of data) {
          let uri = fl.fileDownloadUri.replace("/downloadFile", "");
          let type = fl.fileType.split("/")[0]==="image"?1:2;
          let msg = {
            sendId: this.myId,
            recvId: this.oppositeId,
            content: uri,
            type: type,
          }
          this.$store.dispatch("send", msg).then((res)=>{
            this.msg = "";
          });
        }
      }).catch(err => {
        console.log(err);
      });
      this.files=[];
    }
  },
  computed: {
    messages(){
      let msgs = this.$store.getters.msgOf(this.oppositeId);
      return msgs;
    },
    oppositeId(){
      return parseInt(this.$route.params.sid);
    },
    myId(){
      return this.$store.state.user.name;
    },
  },
  created() {
    console.log(this.$route.path);
  }
}
</script>
<style scoped>

</style>
