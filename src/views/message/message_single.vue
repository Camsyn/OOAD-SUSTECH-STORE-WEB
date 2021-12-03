<template>
  <v-card class="d-flex align-center" :class="{'flex-row-reverse':msg.sendId===myId}" elevation="0">
    <v-col cols="1" class="ml-0 mr-2 py-0 px-0 d-flex flex-column" style="height: 100%">
      <v-avatar color="grey darken-1" size="54"></v-avatar>
    </v-col>
    <v-col cols="11" class="py-0" :class="['d-flex', {'flex-row-reverse':msg.sendId===myId}]">
      <div
          v-if="msg.type==0"
          class="lighten-2 py-2 px-2"
          :class="{grey: msg.sendId!==myId, blue: msg.sendId===myId}"
          style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap; border-radius: 500px;"
      >{{ msg.content }}</div>


      <v-img
          v-else-if="msg.type==1"
          :src="msg.content"
          contain
          width="300px"
      ></v-img>
    </v-col>
  </v-card>
</template>

<script>

export default {
  name: "message_single",
  props: ["msg"],

  data: ()=>({
  }),
  computed: {
    myId(){
      return parseInt(this.$store.getters.name);
    }
  }
}
</script>

<style scoped>

</style>