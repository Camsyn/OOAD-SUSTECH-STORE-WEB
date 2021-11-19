<template>
  <v-sheet class="mx-auto mt-3" width="80%" style="height: 89vh" elevation="0">
    <v-container fluid style="height: 100%" class="py-0 my-0">
      <v-row style="height: 100%">
        <v-col class="elevation-1" cols="4" style="height: 100%">
          <v-text-field flat hide-details rounded solo-inverted></v-text-field>

        <v-list three-line height="90%">
          <template v-for="(item, index) in messagesShort">
            <v-list-item :key="index">
              <v-list-item-avatar>
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                  <v-list-item-title v-html="item.sendId"></v-list-item-title>
                  <v-list-item-subtitle
                      v-html="item.content"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
        </v-col>
        <v-col class="elevation-1 flex-column-reverse d-flex" cols="8" style="height: 100%">
          <v-row class="flex-row-reverse mt-1 mb-1" style="max-height: 40px">
            <v-btn class="primary mr-3">发送</v-btn>
          </v-row>
          <v-row style="max-height: 180px">
            <v-textarea
                outlined
                class="ml-3 mt-6 py-0"
                auto-grow
                append-outer-icon="mdi-close-circle"
                hide-details="true"
            ></v-textarea>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <router-view></router-view>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import message_single from "../message/message_single";
export default {
  components: { message_single },
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
    messagesShort: [
      {
        sendId: "11910620",
        type: 0,
        content: "hello!",
        sendTime: "1",
        isRead: false,
      },
      {
        sendId: "11910621",
        type: 0,
        content: "hello again",
        sendTime: "2",
        isRead: false,
      },
    ]
  }),

  created() {

  }
};
</script>

<style scoped>
</style>
