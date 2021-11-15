<template>
  <div>
    {{tk}}
    <v-btn class="primary" @click="setct">SET_ct</v-btn>
<!--    <v-btn class="primary" @click="settk">SET_TK</v-btn>-->
  </div>

</template>

<script>
export default {
name: "testStore",
  data(){
  return{
    emm: new Map(),
    haha: [1]
    }
  },

  computed: {
    tk() {
      return this.$store.getters.tk;
      // let msg = this.$store.getters.msg;
      // console.log(msg);
      // return msg.get(1);
      // return msg;
      // console.log(msg);
      // return msg;
      // return chat.message.get("1");
    }
  },

  methods: {
    settk(){
      this.$store.dispatch("set")
    },
    setct(){
      this.$store.dispatch("setupChat", "11910620");
    }
  }
}
</script>

<style scoped>

</style>
