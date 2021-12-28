<template>
  <div style="padding: 10px">
    <preview
        v-for="(item, index) in all[page-1]"
        :key="index"
        :circle="item"
        class="my-3"
    ></preview>
    <v-pagination v-model="page" @input="more" :length="length">
    </v-pagination>
  </div>
</template>

<script>
import preview from "@/components/Myspace/components/preview";

export default {
  components:{preview},
  name: "dynamic",
  data:()=>({
    all: [],
    page: 1,
    limit: 3,
    length: 1,
  }),
  methods:{
    more(){
      if (this.page<this.length-1){
        return;
      }

      let sid = this.$store.state.ObserverId
      let page = this.page, limit = this.limit;
      this.$store.dispatch("sbGetPage", {sid, page, limit}).then(res=>{
        if (res.length!==0){
          this.all.push(res);
          if (this.page>=this.length&&res.length===this.limit){
            this.length++;
          }
        }
      }).catch(err=>{
        console.log(err);
      });
    }
  },
  computed:{

  },
  watch:{

  },

  created() {
    this.more();
  }
}
</script>

<style scoped>

</style>
