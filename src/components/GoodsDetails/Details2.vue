<template>
  <div class="all">
    <div class="swiper">
      <div class="change" >
        <el-carousel height="400px" >
          <el-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
   </div>
   <div class="details3">
    <div class="details1">


      <div class="Title">
        <h2 class="Title2">
          {{Product.Title}}
        </h2>
        <div class="Action">
          <button class="Action2">
            <i class="el-icon-chat-line-round"></i>
            Message
          </button>

          <button class="Action2">
            <i class="el-icon-shopping-cart-full"></i>
            加入购物车
          </button>
        </div>
      </div>


      <div class = "Brand">
        {{Product.Brand}}
      </div>

      <div class="information">
        <el-descriptions title="商品信息">
          <el-descriptions-item label="成色"><div class="information1"> {{Product.Condition}}</div></el-descriptions-item>
          <el-descriptions-item label="品牌"><div class="information1">{{Product.Brand}}</div></el-descriptions-item>
          <el-descriptions-item label="发布日期"><div class="information1">{{Product.Date}}</div></el-descriptions-item>
          <el-descriptions-item label="标签"><el-tag size="small"><div class="information1">{{Product.label}}</div></el-tag></el-descriptions-item>
          <el-descriptions-item label="获取方式"><div class="information1">{{Product.Method}}</div></el-descriptions-item>
        </el-descriptions>
      </div>

      <div class="MoreInformation">
       {{Product.Information}}
      </div>

      <div class="Buy">
        <div class="Now">{{Product.Now_Price}}</div>
        <div class="Old">{{Product.Ori_Price}}</div>
        <button> <div class="Buy_buttion">Buy</div></button>
      </div>
    </div>


    <div class="details2">

    </div>
   </div>
  </div>
</template>

<script>
export default {
  name: "Details2",
  data(){
    return{
      Product: {
        Title: "DARK SHORT DRESS",
        Brand: "River Island",
        Condition: "New",
        label:"电器",
        Ori_Price:110,
        Now_Price:100,
        Method: "自提",
        Date: "2020-03-11",
        View_count: 10,
        Number: 11,
        Information: "这里水很深，我大撒大撒大苏打倒萨大苏打水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水水就不多说了，懂的都懂，不懂我也没办法和你说，dasdadasd的撒大大实打实萨达阿达啊大大苏打撒的撒旦啊实打实啊撒旦。大苏打打赏大",
      }
    }
  }
}
</script>

<style scoped>
.all {
  margin-left: 200px;
}
.swiper {
  float: left;
}
.details3 {

  margin-left: 20px;
  float: left;
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

.change {
  float: left;
  display: inline-block;
  width: 600px;
  height: 600px;
}
.details1{
  width: 700px;
  height: 400px;
  background-color: white;
}
.details2{
  margin-top: 20px;;
  width: 700px;
  height: 200px;
  background-color: black;
}
.Title2{
  display: inline-block;
}
.Action {
  float: right;
}
.Action2{
  margin-left: 10px;
}
.el-icon-chat-line-round {
  color:red;
}
.el-icon-shopping-cart-full {
  color: blue;
}
.Brand{
  font-size: 15px;
  color: #8c939d;
}
.information {
  margin-top: 25px;
  color: #d6d5d5;
}

.information1 {
  font-weight: 700;
  text-decoration: underline;
}
.MoreInformation {
  margin-top: 25px;
  font-size: 10px;
  color: #8c939d;
}
.Buy{
  margin-top : 30px;
  background-color: #d7efef;
  height: 100px;
}
.Old {
  display: inline-block;
  margin-left: 20px;
  font-size: 21px;
  text-decoration: line-through;
  color: #8c939d;
}
.Now {
  display: inline-block;
  margin-top: 20px;
  margin-left: 40px;
  font-size: 40px;
  font-weight: 700;
}
.Buy_buttion {
  margin-left: 50px;
  display: inline-block;
  width: 250px;
  background-color: #33d09a;
  border-radius:35px;
  text-align: center;
  font-size: 30px;
  color: white;
}
</style>