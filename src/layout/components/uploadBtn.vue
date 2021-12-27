<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="mini"
          fab
          dark
          small
          color="cyan"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            dark
          >
            mdi-pencil
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
