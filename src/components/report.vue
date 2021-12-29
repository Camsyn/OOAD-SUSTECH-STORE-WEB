<template>
  <v-dialog
      v-model="dialog"
      max-width="400px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h6" style="margin-left: auto; margin-right: auto">举报</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-textarea
                  label="描述"
                  outlined
                  height="200px"
                  v-model="desc"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
        <small>请勿恶意诽谤~</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="cancel"
        >
          取消
        </v-btn>
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
  props:["dialog","id", "type"],
  name: "report",
  data: () => ({
    desc: "",
  }),
  methods:{
    report(){
      console.log(this.desc,this.id)
      if (this.desc===""||!this.id)
        return;
      this.$store.dispatch(this.type, {t_id: this.id, desc:this.desc}).then(res=>{
        this.desc="";
        this.$emit("close");
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    cancel(){
      this.$emit("close");
      this.desc = "";
    }
  }
}
</script>

<style scoped>

</style>
