<template>
  <div>
    {{tk}}
    <v-btn class="primary" @click="setup">SET_up</v-btn>
    <v-btn class="primary" @click="test">test</v-btn>
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
    }
  },

  methods: {
    setup(){
      this.$store.dispatch("setupChat", "11910620")
    },
    test(){
      this.$store.dispatch("test");
    }
  }
}
</script>

<style scoped>

</style>
