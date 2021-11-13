<template>
<!--  interval 为轮播间隔时间，height为整个的高度-->
  <el-carousel :interval="3500" type="card" height="400px" class="change">
<!--    6 代表着有6个参数，如果需要与后端配合的话，可以将6改为变量-->
    <el-carousel-item v-for="item in 6" :key="item">
    </el-carousel-item>
  </el-carousel>
</template>
<style>
/*interval 为轮播间隔时间，height为整个的高度*/
/*下面对应6个轮播图的url路径，以背景图方式展示，同时图片自动适用大小*/
.el-carousel__item:nth-last-of-type(1) {
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01cc7258e46393a801219c77f3b8fb.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639388656&t=c5ccc29cffff998d00bb3daa573d97a4");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(2){
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0106dc5d5a561ea80120695ca8eea4.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639388656&t=09b924b0784f2455a3848cd378309602");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(3){
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0106dc5d5a561ea80120695ca8eea4.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639388656&t=09b924b0784f2455a3848cd378309602");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(4){
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0106dc5d5a561ea80120695ca8eea4.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639388656&t=09b924b0784f2455a3848cd378309602");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(5){
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0106dc5d5a561ea80120695ca8eea4.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639388656&t=09b924b0784f2455a3848cd378309602");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(6){
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0106dc5d5a561ea80120695ca8eea4.jpg%401280w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639388656&t=09b924b0784f2455a3848cd378309602");
  background-size: 100% 100%;
}
/*change类可以用于修改整个轮播图的位置以及长度宽度高度*/
.change {
  display: inline-block;
  margin-left: 200px;
  width: 1200px;
}
</style>
<script>
export default {
  name: "Shuffling_figure"
}
</script>
