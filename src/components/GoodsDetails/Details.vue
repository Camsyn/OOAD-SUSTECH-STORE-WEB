
<template>
 <div>
   <div class="swiper">
     ?
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
       <el-button type="success" round size="mini" class="button1">日期</el-button>
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
  name: "Details",
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

<style scoped>

.details2{
  float: left;
  display: inline-block;
  width: 400px;
  height: 500px;
  background-color: pink;
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
  margin-left: 10px;
  display: inline-block;
  margin-top: 10px;
}
.button1{
  display: inline-block;
  margin-top: 10px;
}
body{
  background-color: white;
}
.swiper{
  float: left;
  display: inline-block;
  width: 400px;
  height: 500px;
  background-color: red;
}
</style>