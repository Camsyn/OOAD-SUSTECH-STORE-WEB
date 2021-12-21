<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            text
            v-bind="attrs"
            v-on="on"
        >
          发布
        </v-btn>
      </template>
      <upload v-on:close = "dialog=false"></upload>
    </v-dialog>
  </div>
</template>

<script>
import upload from "@/components/upload";
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
