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
  props:["type"],
  name: "Another",
  data: () => ({
    currentPage: 1,
    page:1,
    limit: 3,
    length: 1,
    tags: ["动漫","游戏","旅游","美食","萌宠","哲思"],
    paths: ["carton","game","tour","delicious_food","cute_pet","philosophizing", "another"],
    circles:{
      all:[],
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
      if (this.page<this.length-1){
        return;
      }

      this.$store.dispatch("AllgetPage",{page: this.page, limit: this.limit}).then((res) => {
        if (res.length!==0){
          res.forEach(item=>{
            this.circles.all.push(item);
            let ind = this.Tags.indexOf(item.tag);
            if (ind===-1)
              ind = this.paths.length-1;

            let pt = this.paths[ind];
            this.circles[pt].push(item);

            // switch (item.tag) {
            //   case "动漫":
            //     this.carton.push(res);
            //     break;
            //   case "游戏":
            //     this.game.push(res);
            //     break;
            //   case "旅游":
            //     this.tour.push(res);
            //     break;
            //   case "美食":
            //     this.delicious_food.push(res);
            //     break;
            //   case "萌宠":
            //     this.cute_pet.push(res);
            //     break;
            //   case "哲思":
            //     this.philosophizing.push(res);
            //     break;
            //   default:
            //     this.another.push(res);
            // }
            if (this.page>=this.length&&res.length===this.limit){
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
