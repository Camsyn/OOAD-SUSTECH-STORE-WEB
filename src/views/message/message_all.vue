<template>
  <v-sheet class="mx-auto mt-3" width="80%" style="height: 100%;max-height: 89vh" elevation="0">
    <v-container fluid style="height: 100%" class="py-0 my-0">
      <v-row style="height: 100%;">
        <v-col class="" cols="3" style="height: 100%">
          <v-text-field flat hide-details rounded solo-inverted class="mb-2"></v-text-field>
          <v-list three-line height="90%" style="overflow: auto">
            <template v-for="(item, index) in items">
              <v-divider v-if="!item.header"></v-divider>
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>
              <v-list-item v-else :key="item.title" class="ml-0 pl-0">
                <v-list-item-avatar class="my-2 ml-0 pl-0">
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content style="height: fit-content">
                  <v-list-item-title
                      v-text="123"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-col>
        <v-divider vertical ></v-divider>
        <v-col cols="9" style="height: 100%">
          <v-row style="height: 7%" class="align-content-md-center">
            <span class="mx-auto">emm</span>
          </v-row>
          <v-divider class="my-1 py-1"></v-divider>
          <v-row style="height: 70%; overflow: auto" class="">
            <v-container justify="start">
              <v-row class="my-1" v-for="n in 20">
                <v-col cols="12" class="py-0">
                <message_single
                    v-bind:text="txt"
                  ></message_single>
                </v-col>
              </v-row>

            </v-container>
          </v-row>
          <v-divider class="my-1 py-1"></v-divider>
          <v-row class="mt-1" style="">
            <v-textarea
                class="ml-3 mt-3 py-0"
                auto-grow
                clearable
                append-outer-icon="mdi-image-plus"
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
    txt: "abasadasdsa",
    items: [
      { header: "Today" },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
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
