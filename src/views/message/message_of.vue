<template>
  <v-container class="justify-center">
    <v-row style="height: 10%" class="align-content-md-center">
      <span class="mx-auto">{{opId}}</span>
    </v-row>

    <v-divider class="mb-1"></v-divider>

    <v-row dense>
      <v-col cols="12"
             v-for="(msg, index) in messages"
             :key="index"
      >
        <div v-if="needDivider(index, index-1)">
          <v-subheader inset>{{msg.sendTime}}</v-subheader>
          <v-divider inset></v-divider>
        </div>
        <v-card class="d-flex align-center" elevation="0">
          <v-col cols="1" class="ml-0 mr-2 py-0">
            <v-avatar size="54">
              <img :src="opInfo?opInfo.headImage:'https://cdn.vuetifyjs.com/images/john.jpg'" alt="op">
            </v-avatar>
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
      // opInfo: {},
    }
  },
  computed: {
    messages(){
      return this.$store.getters.msgOf(this.opId);
    },
    msgLen(){
      return this.messages.length;
    },
    opId(){
      return this.$route.params.sid;
    },
    opInfo(){
      this.$store.dispatch("getUserInfo", this.opId).then((res)=>{
        // this.opInfo = res.data;
        return res.data;
      })
          .catch((err)=>{
            console.log(err);
          });
    }
  },
  methods:{
    needDivider(ind1, ind2){
      let len = this.msgLen;
      if (ind1<0||ind1>=len||ind2<0||ind2>=len){
        return false;
      }

      let t1 = new Date(this.messages[ind1].sendTime);
      let t2 = new Date(this.messages[ind2].sendTime);
      let res = Math.abs(t1-t2)/(1000*3600*12);

      return res >= 1;

    }
  },

  created() {

  }
}
</script>
<style scoped>

</style>