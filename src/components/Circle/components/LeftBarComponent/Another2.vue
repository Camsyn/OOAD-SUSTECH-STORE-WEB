<template>
  <div id="main">
    <div style="padding: 10px">
      <preview v-for="(item, index) in all[page-1]" :key="index" :circle="item" class="my-3"></preview>
    </div>
    <div class="d-flex justify-center">
      <v-pagination v-model="page" @input="more" :length="length">
      </v-pagination>
    </div>
  </div>
</template>

<script>
import preview from "../../../Myspace/components/preview";
export default {
  components:{preview},
  props:["type"],
  name: "Another",
  data: () => ({
    currentPage: 1,
    page:1,
    limit: 3,
    length: 1,
    all:[],
  }),
  methods:{
    more(){
      if (this.page<this.length-1){
        return;
      }

      this.$store.dispatch("AllgetPage",{page: this.page, limit: this.limit}).then((res) => {
        if (res.length!==0){
          this.all.push(res);
          if (this.page>=this.length&&res.length===this.limit){
            this.length++;
          }
        }
      });
    },
  },
  created() {
    this.more();
  },
  computed:{

  }

};
</script>

<style scoped>

</style>
