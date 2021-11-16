<template>
  <v-app>
    <myHeader ></myHeader>
    <div class="Main">
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
  name: "Out",
  components: {
    myHeader,
    Swiper,
    Details2,
    bottom,
  },
}
</script>

<style scoped>
.Main {
  margin-left: 13%;
  margin-right: 13%;
}
.Swiper {
  float: left;
}
.information3{
  margin-top: 80px;
  margin-left: 30px;
}
.bottom {
  float:left;
}
</style>