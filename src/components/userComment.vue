<template>
  <v-dialog
      v-model="dialog"
      max-width="400px"
      persistent
  >
    <v-card>
      <v-card-title>
        <span class="text-h6" style="margin-left: auto; margin-right: auto">请评价此单交易</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-textarea
                  label="评价"
                  outlined
                  height="200px"
                  v-model="content"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn
            color="blue darken-1"
            text
            @click="report"
        >
          确认
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props:["dialog","id"],
  name: "userComment",
  data: () => ({
    content: "",
  }),
  methods:{
    report(){
      console.log(this.desc,this.id)
      if (this.desc===""||!this.id)
        return;
      this.$store.dispatch("pushUserComment", {toSid: this.id, content:this.content}).then(res=>{
        this.content="";
        this.$emit("close");
        console.log(res);
      }).catch(err=>{
        console.log(err);
        this.content="";
        this.$emit("close");
      })
    },
    cancel(){
      this.$emit("close");
      this.content = "";
    }
  }
}
</script>

<style scoped>

</style>
