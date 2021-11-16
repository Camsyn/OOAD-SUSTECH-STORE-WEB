<template>
  <div class="Bottom">
    <div class="guess">
      <i class="el-icon-shopping-cart-full"></i>
      与此商品相关的商品
    </div>
    <div class="Next">
      <div class="MoreProduce">
        <a href="#" class="MoreProduce1">
          <el-image
              style="width: 200px; height: 200px"
              :src="MoreProduct1.url"
          ></el-image>
          <div class="Title4">
            <h2 class="Titl7">
              {{MoreProduct1.Title}}
            </h2>
            <div class="Price">
              <div class="Now">{{MoreProduct1.Now_Price}}</div>
              <div class="Old">{{MoreProduct1.Ori_Price}}</div>
            </div>
          </div>
        </a>
      </div>
      <div class="MoreProduce">
        <a href="#" class="MoreProduce1">
          <el-image
              style="width: 200px; height: 200px"
              :src="MoreProduct2.url"
          ></el-image>
          <div class="Title4">
            <h2 class="Titl7">
              {{MoreProduct2.Title}}
            </h2>
            <div class="Price">
              <div class="Now">{{MoreProduct2.Now_Price}}</div>
              <div class="Old">{{MoreProduct2.Ori_Price}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottom",
  data() {
    return {
      MoreProduct1: {
        url: 'https://img0.baidu.com/it/u=3646265661,4012551801&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
        Title: "DARK SHORT DRESS",
        Ori_Price:110,
        Now_Price:100,
      },
      MoreProduct2: {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fg.search2.alicdn.com%2Fimg%2Fbao%2Fuploaded%2Fi4%2Fi2%2F859131661%2FTB2Acklaqm5V1BjSspbXXX6sXXa_%21%21859131661.jpg&refer=http%3A%2F%2Fg.search2.alicdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639645567&t=61b937cfd99850dfafe3adc2dcd6133f',
        Title: "DARK SHORT DRESS",
        Ori_Price:110,
        Now_Price:100,
      },
    }
  }
}
</script>

<style scoped>
.Bottom {
  background-color: white;
  float: left;
  height: 400px;
  width: 1200px;
  margin-top: 50px;
}
.Next {
  border-top:5px solid #dbd6d6;
  background-color: white;
  float: left;
  height: 400px;
  width: 1250px;
}
.guess {
  text-align: center;
  font-size: 15px;
  color: #747172
}
.MoreProduce {
  float: left;
  background-color: white;
  width: 625px;
  height: 500px;
}
.MoreProduce1 {
  display: inline-block;
  margin-left: 20px;
  margin-top: 50px;
}
.MoreProductInformation {
  display: inline-block;
}
.Title4 {
  width: 300px;
  height: 150px;
  display: inline-block;
}
.Titl7 {
  display: inline-block;
  float: left;
  margin-left: 30px;
  color:#939192;
  text-decoration: underline;
}
.Price {
  display: inline-block;
  float: left;
  margin-left: 30px;
  width: 300px;
  height: 50px;
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
  color: #191516;
  font-weight: 700;
}
.el-icon-shopping-cart-full {
  color : red;
}
.MoreProduct {
  text-align: center;
}
</style>