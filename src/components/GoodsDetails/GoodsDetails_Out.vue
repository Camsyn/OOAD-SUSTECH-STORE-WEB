<template>
  <v-app>
    <myHeader></myHeader>
    <div class="Main1">
      <Swiper class="Swiper"></Swiper>
      <Details2 class="information3"></Details2>
      <bottom class="bottom1"></bottom>
    </div>

  </v-app>
</template>

<script>
import myHeader from "@/layout/components/header";
import Swiper from "@/components/GoodsDetails/components/Shuffling_figure";
import Details2 from "@/components/GoodsDetails/components/Details2";
import bottom from "@/components/GoodsDetails/components/bottom";
export default {
  name: "GoodsDetails_Out",
  components: {
    myHeader,
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
  float: left;
}
.information3{
  margin-top: 70px;
  margin-left: 30px;
}
.bread {
  border-bottom: 4px solid #dbd6d6;
  display: inline-block;
  width: 1250px;
}
</style>