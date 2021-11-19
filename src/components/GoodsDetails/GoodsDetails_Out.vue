<template>
  <v-app>
    <myHeader></myHeader>

    <div class="Main">
      <div class="bread">
        <el-breadcrumb separator="/" class="m" >
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/home' }">商品页面</el-breadcrumb-item>
          <el-breadcrumb-item>商品详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
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
.Main {
  margin-left: 13%;
  margin-right: 13%;
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
.m {
  margin-top: 90px;
  font-size: 15px;
}
</style>