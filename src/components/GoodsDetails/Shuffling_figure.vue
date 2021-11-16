

<template>
  <div class="Product_Details">
   <div class="change" >
     <el-carousel height="500px" >
       <el-carousel-item v-for="item in 6" :key="item">
         <h3>{{ item }}</h3>
       </el-carousel-item>
     </el-carousel>
   </div>
   <div class="details2">
    <h2 class="title">
      茶花杯子
    </h2>
    <div class="price">
      <div class="Now_price">
        {{Product.Now_Price}}
      </div>
      <div class="Ori_price">
        {{Product.Ori_Price}}
      </div>
    </div>
    <div class="Method">
      <el-button type="success" round size="mini" class="button1">标签</el-button>
      <div class="Method1">{{Product.label}}</div>
    </div>
    <div class="Method">
      <el-button type="success" round size="mini" class="button1">获取方式</el-button>
      <div class="Method1">{{Product.Method}}</div>
    </div>
    <div class="Method">
      <el-button type="success" round size="mini" class="button1">上架日期</el-button>
      <div class="Method1">{{Product.Date}}</div>
    </div>
    <div class="Method">
      <el-button type="success" round size="mini" class="button1">浏览</el-button>
      <div class="Method1">{{Product.View_count}}</div>
    </div>
    <div class="Method">
      <el-button type="success" round size="big" class="button1">
        加入购物车
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>
    <div class="Method">
      <el-button type="danger" round class="button1">
        立刻购买
      </el-button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Shuffling_figure",
  data(){
    return{
      Product: {
        label: "电器",
        Title: "杯子",
        Ori_Price:110,
        Now_Price:100,
        Method: "自提",
        Date: "2020-03-11",
        View_count: 10,
        Number: 11,
      },
      User: {
        name: "鲁姐姐",
        credit:80,
      }
    }
  }
}
</script>
<style>
body{
  background-color: white;
}
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
.Product_Details{

}
.change {
  float: left;
  display: inline-block;
  width: 600px;
  height: 500px;
}
.details2{
  float: left;
  display: inline-block;
  width: 400px;
  height: 500px;
  padding-left: 10px;
}
.Now_price{
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
  margin-top: 10px;
  color:red;
}
.Ori_price{
  display: inline-block;
  padding-left: 10px;
  font-size: 12px;
  text-decoration: line-through;
  margin-top: 10px;
}
.Method1{
  display: inline-block;
}
.button1{
  display: inline-block;
  margin-top: 10px;
}
.Method{
  margin-top: 20px;
}
.Method1 {
  margin-left: 10px;
}
</style>