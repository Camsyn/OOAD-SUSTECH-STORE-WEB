<template>
  <v-sheet class="mx-auto mt-3" width="80%" style="height: 89vh" elevation="0">
    <v-container fluid style="height: 100%" class="py-0 my-0">
      <v-row style="height: 100%">
        <v-col class="elevation-1" cols="4" style="height: 100%">
          <v-text-field flat hide-details rounded solo-inverted></v-text-field>
        <v-list three-line height="90%">
          <template v-for="(item, index) in messagesShort">
            <v-list-item :key="index" @click="chatWith(oppositeId(item))">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                  <v-list-item-title v-html="oppositeId(item)"></v-list-item-title>
                  <v-list-item-subtitle
                      v-html="item.content"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        </v-col>
        <v-col  cols="8" style="height: 100%">
          <router-view style="height: 100%"></router-view>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: "message_all",
  data: () => ({
    items: [
      {
        sendId: "11910620",
        type: 0,
        content: "hello!",
        sendTime: "time",
        isRead: false,
      },
    ],
    messages: {
      "11910620":[
        {
          sendId: "11910620",
          type: 0,
          content: "hello!",
          sendTime: "1",
          isRead: false,
        },
      ],
      "11910621": [
        {
          sendId: "11910621",
          type: 0,
          content: "hello again",
          sendTime: "2",
          isRead: false,
        },
      ]
    },
  }),
  computed: {
    myId(){
      return this.$store.getters.name;
    },

    messagesShort(){
      return this.$store.getters.msgEach;
    }

  },
  methods: {
    oppositeId(record){
      if (record.sendId === this.myId)
        return record.recvId;
      else
        return record.sendId;
    },
    chatWith(sid){
      if (this.$route.params.sid !== sid.toString()){
        this.$router.push({path: "/message/"+sid});
      }
      console.log(sid, this.$route.params.sid);
    },
  },

  created() {

  }
};
</script>

<style scoped>
</style>
