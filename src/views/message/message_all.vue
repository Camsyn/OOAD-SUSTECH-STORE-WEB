<template>
  <v-sheet class="mx-auto mt-3" width="80%" style="height: 89vh" elevation="0">
    <v-container fluid style="height: 100%" class="py-0 my-0">
      <v-row style="height: 100%">
        <v-col class="elevation-1" cols="4" style="height: 100%">
          <v-text-field flat hide-details rounded solo-inverted></v-text-field>
        <v-list three-line height="90%">
          <template v-for="(item, index) in messagesShort">
            <v-list-item :key="index" @click="chatWith(item[0])">
              <v-list-item-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                  <v-list-item-title v-html="item[0]"></v-list-item-title>
                  <v-list-item-subtitle
                      v-html="item[1].content"
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

  }),
  computed: {
    myId(){
      return this.$store.getters.name;
    },

    messagesShort(){
      console.log(this.$store.getters.msgEach);
      return this.$store.getters.msgEach;
    },

  },
  methods: {
    chatWith(sid){
      if (this.$route.params.sid !== sid.toString())
        this.$router.push({path: "/message/"+sid});
    },
  },

  created() {

  }
};
</script>

<style scoped>
</style>
