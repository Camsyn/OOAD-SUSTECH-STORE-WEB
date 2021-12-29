<template>
  <div id="main">
    <div style="padding: 10px">
      <preview v-for="(item, index) in circles[tp].slice((page-1)*limit, page*limit)" :key="index" :circle="item" class="my-3"></preview>
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
  name: "Another",
  data: () => ({
    currentPage: 1,
    page:1,
    limit: 3,
    length: 1,
    moree:true,
    tags: ["动漫","游戏","旅游","美食","萌宠","哲思"],
    paths: ["carton","game","tour","delicious_food","cute_pet","philosophizing", "another"],
    circles:{
      HotSharing:[],
      Grass: [],
      carton:[],
      game: [],
      tour: [],
      delicious_food: [],
      cute_pet: [],
      philosophizing: [],
      another: [],
    }
  }),
  methods:{
    more(){
      if (this.page<this.length||!this.moree){
        return;
      }

      let limi = 99;
      this.$store.dispatch("AllgetPage",{page: this.page, limit: limi}).then((res) => {
        if (res.length!==0){
          if (res.length<limi)
            this.moree = false;
          res.forEach(item=>{
            this.circles.HotSharing.push(item);
            let ind = this.tags.indexOf(item.tag);
            if (ind===-1){
              ind = this.paths.length-1;
            }
            let pt = this.paths[ind];
            this.circles[pt].push(item);

            console.log(item.sendId, this.$store.getters.isFollow(item.sendId))
            if (this.$store.getters.isFollow(item.sendId))
              this.circles.Grass.push(item);

            if (this.page>=this.length){
              this.length++;
            }
          });
        }
      });
    },
  },
  created() {
    this.more();
  },
  computed:{
    tp(){
      let pt = this.$route.path.split("/");
      return pt[pt.length-1];
    }
  }

};
</script>

<style scoped>

</style>
