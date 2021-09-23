<template>
  <v-menu
    offset-y
    :close-on-content-click="false"
    max-width="20%"
    max-height="80%"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-list two-line>
      <v-list-item-group active-class="grey--text">
        <template v-for="(item, index) in items">
          <v-dialog
            :key="item.title"
            transition="dialog-bottom-transition"
            width="50%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <template v-slot:default>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
            <template v-slot:default>
              <v-card>
                <messages></messages>
              </v-card>
            </template>
          </v-dialog>
          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
      <v-list-item-subtitle class="d-flex flex-row-reverse my-0 py-0">
        <v-btn text class="mt-2" plain small @click="toMsgAll">
          <p
            class="
              font-weight-medium font-weight-bold
              text--secondary
              ma-0
              pa-0
            "
          >
            全部通知
          </p>
        </v-btn>
      </v-list-item-subtitle>
    </v-list>
  </v-menu>
</template>

<script>
import messages from "@/views/message/messages";
export default {
  name: "menuBtn",
  components: { messages },
  props: ["icon"],
  data: () => ({
    selected: [2],
    items: [
      {
        action: "15 min",
        headline: "Brunch this weekend?",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
      {
        action: "2 hr",
        headline: "Summer BBQ",
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: "me, Scrott, Jennifer",
      },
      {
        action: "6 hr",
        headline: "Oui oui",
        subtitle: "Do you have Paris recommendations? Have you ever been?",
        title: "Sandra Adams",
      },
      {
        action: "12 hr",
        headline: "Birthday gift",
        subtitle:
          "Have any ideas about what we should get Heidi for her birthday?",
        title: "Trevor Hansen",
      },
      {
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt",
      },
    ],
  }),
  methods: {
    toMsgAll(){
      this.$router.push({ path: "message" });
    },
  },
};
</script>

<style scoped></style>
