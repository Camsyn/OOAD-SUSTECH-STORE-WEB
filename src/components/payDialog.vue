<template>
  <v-dialog
      v-model="dialog"
      max-width="400px"
  >
    <v-card>
      <v-card-title>
        <span class="text-h6" style="margin-left: auto; margin-right: auto">请扫二维码支付</span>
      </v-card-title>
      <v-card-text>
        <v-img :src="payCode"></v-img>
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
            @click="done"
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
  name: "payDialog",
  data: () => ({
    payCode: null,
  }),

  methods:{
    cancel(){
      this.$emit("close");
    },
    done(){
      this.$message({
        type: 'info',
        message: '请尽快联系买家确认'
      });
      this.$emit("close");
    }
  },
  computed:{
    info(){
      this.$store.dispatch("getInfoOf", this.id).then(res=>{
        this.payCode = res.paycodePath;
      })
    }
  }
}
</script>

<style scoped>

</style>
