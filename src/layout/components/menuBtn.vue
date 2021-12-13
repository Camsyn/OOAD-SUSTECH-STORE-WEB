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
        <template v-for="(item, index) in messages">
          <v-dialog
            :key="item[1].id"
            transition="dialog-bottom-transition"
            width="50%"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <template v-slot:default>
                  <v-list-item-content>
                    <v-list-item-title v-text="item[0]"></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item[1].content"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-list-item>
            </template>
            <template v-slot:default>
              <v-card>
                <messages :oppo = item[0]></messages>
              </v-card>
            </template>
          </v-dialog>
          <v-divider v-if="index < items.length - 1" :key=index></v-divider>
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
            全部私信
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
        action: "18hr",
        headline: "Recipe to try",
        subtitle:
          "We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        title: "Britta Holt",
      },
    ],
  }),
  computed: {
    messages(){
      return this.$store.getters.msgEach;
    }
  },
  methods: {
    toMsgAll(){
      this.$router.push({ path: "message" });
      this.$store.commit("CHECK");
    },
  },
};
</script>

<style scoped></style>
