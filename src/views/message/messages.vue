<template>
  <v-container class="px-6" style="max-height: 80%">
<!--    <v-row>-->
<!--      <v-col cols="12">-->
<!--        <message_single :msg="messages[1]"></message_single>-->
<!--      </v-col>-->
<!--    </v-row>-->
    <v-row dense style="margin-bottom: 20px; max-height: 700px; overflow-y: scroll; overflow-x: hidden">
      <v-col cols="12"
        v-for="(msg, index) in messages"
        :key="index"
      >
        <message_single :msg="msg"></message_single>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-textarea
        v-model="msg"
        full-width
        single-line
      ></v-textarea>
    </v-row>
    <v-row class="flex-row-reverse mt-0">
      <v-btn class="primary mb-2" @click="send">发送</v-btn>
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
  </v-container>
</template>

<script>
import Message_single from "./message_single";
export default {
  name: "messages",
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
    // console.log(this.$route.path);
  }
};
</script>

<style scoped></style>
