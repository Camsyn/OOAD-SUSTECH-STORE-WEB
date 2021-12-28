<template>
  <v-card elevation="2">
    <v-card-subtitle class="py-2">
      <v-row dense>
        <v-col class="d-flex justify-start">
          <v-avatar size="50">
            <v-img :src="headImage"></v-img>
          </v-avatar>
          <span v-text="nickname" class="text-h5 mt-2 ml-2"></span>
        </v-col>
        <v-col class="d-flex justify-end">
          <span v-text="date" class="text-h5 mt-2 ml-2"></span>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <div v-for="item in show" :key="item.ind">
        <div v-if="item.text" v-text="item.text" class="pl-1" style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap;"></div>
        <v-img v-else :src="item.image" contain></v-img>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "comment",
  data:()=>({
    splitter:"<<<IMAGE>>>",
    spLen: 11,
    sender: null,
    nickname:"",
    headImage:null,
    comments: [],
  }),
  computed:{
    show(){
      let con = this.circle.content;
      return this.parse(con);
    },
    date(){
      return this.circle.sendTime.replace("T", " ");
    },
    sd(){
      this.$store.dispatch("getInfoOf", this.circle.sendId).then(res=>{
        this.nickname = res.nickname;
        this.headImage = res.headImage;
      });
      return this.circle.sendId;
    },
  },
  watch:{
    sd: function (){

    }
  },
  methods:{
  },
  created() {
    this.getComment();
  }
}
</script>

<style scoped>

</style>
