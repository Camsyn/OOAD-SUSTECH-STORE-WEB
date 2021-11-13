<template>
  <v-sheet class="mx-auto mt-3" width="80%" style="height: 89vh" elevation="0">
    <v-container fluid style="height: 100%" class="py-0 my-0">
      <v-row style="height: 100%">
        <v-col class="elevation-1" cols="4" style="height: 100%">
          <v-text-field flat hide-details rounded solo-inverted></v-text-field>
          <v-list three-line height="90%">
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key=index
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
        <v-col class="elevation-1" cols="8" style="height: 100%">
          <v-row style="height: 10%" class="align-content-md-center">
            <span class="mx-auto">emm</span>
          </v-row>
          <v-divider></v-divider>
          <v-row style="height: 70%">
            <v-container justify="start">
              <v-row>
                <v-col cols="12" class="py-0">
                <message_single
                    text="hello!"
                  ></message_single>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12">
                  <message_single
                    text="world!"
                  ></message_single>
                </v-col>
              </v-row>
            </v-container>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-textarea
              outlined
              class="ml-3 mt-6 py-0"
              auto-grow
              append-outer-icon="mdi-close-circle"
              hide-details="true"
            ></v-textarea>
          </v-row>
          <v-row class="flex-row-reverse mt-5">
            <v-btn class="primary mr-3">发送</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import message_single from "@/views/message/message_single";
export default {
  components: { message_single },
  name: "message_all",
  data: () => ({
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
    ],
  }),
};
</script>

<style scoped>
/*html, body{*/
/*  height: 100%;*/
/*}*/
</style>
