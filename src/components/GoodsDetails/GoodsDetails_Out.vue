<template>
  <v-app>
    <div class="Main1">
      <Swiper class="Swiper"></Swiper>
      <Details2 class="information3"></Details2>
      <bottom class="bottom1"></bottom>
    </div>
  </v-app>
</template>

<script>
import Swiper from "./components/Shuffing_figure2";
import Details2 from "@/components/GoodsDetails/components/Details2";
import bottom from "@/components/GoodsDetails/components/bottom";
export default {
  name: "GoodsDetails_Out",
  title:'s',
  components: {
    Swiper,
    Details2,
    bottom,
  },
}
</script>

<style scoped>
.Main1 {
  width: 100%;
  background-color: white;
}
.Swiper {
  margin-top: 50px;
  margin-left: 30px;
  width: 500px;
  height: 630px;
  float: left;
}
.information3{
  margin-top: 70px;
  margin-left: 30px;
}
</style>
