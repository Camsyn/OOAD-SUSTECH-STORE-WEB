

<template>
  <div class="Product_Details">
   <div class="change" >
     <el-carousel height="600px" >
       <el-carousel-item v-for="item in 5" :key="item">
         <h3>{{ item }}</h3>
       </el-carousel-item>
     </el-carousel>

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
      },

    }
  }
}
</script>
<style>
body{
  background-color: white;
}
.el-carousel__item:nth-last-of-type(1) {
  background-image: url("https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(2){
  background-image: url("https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(3){
  background-image: url("https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(4){
  background-image: url("https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto");
  background-size: 100% 100%;
}
.el-carousel__item:nth-last-of-type(5){
  background-size: 100% 100%;
  background-image: url("https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto");
}
.change {
  float: left;
  display: inline-block;
  width: 500px;
  height: 630px;
}

</style>