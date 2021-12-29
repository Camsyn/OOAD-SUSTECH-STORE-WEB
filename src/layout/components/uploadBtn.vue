<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            elevation="0"
          fab
          dark
          small
          color="grey"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <upload v-on:close = "dialog=false"></upload>
    </v-dialog>
  </div>
</template>

<script>
import upload from "../../components/upload";
export default {
  components:{upload},
  name: "uploadBtn",
  data(){
    return{
      dialog: false,
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
