

<template>
  <div class="Product_Details">
   <div class="change" >
     <el-carousel height="600px" >
       <el-carousel-item v-for="item in this.length" :key="item">
       </el-carousel-item>
     </el-carousel>
   </div>
  </div>
</template>

<script>
import goods from "../../../store/modules/goods";
export default {
  name: "Shuffling_figure",
  data(){
    return{
      length: 2,
      path_Array: [],
    }
  },
  mounted() {
    this.path_Array = goods.state.current.request.images
    this.length = this.path_Array.length
    var a = document.querySelectorAll('.el-carousel__item')
    console.log(a)
    for (let i = 0; i < this.path_Array.length; i++) {
      a[i].style.backgroundImage= this.path_Array[i]
    }
    console.log(this.path_Array)
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