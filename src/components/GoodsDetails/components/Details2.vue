<template>
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
      <div class="User">
        <a href="#">
          <el-image
              style="width: 80px; height: 80px;border-radius: 50%;display: inline-block;float: left"
              :src="User.picture"
          ></el-image>
        </a>
        <div class="UserDetails">
          <div class="UserDetails1">{{User.name}}
            <el-rate
                v-model="User.value"
                show-text
            disabled>
            </el-rate>
          </div>
          <div class="credit"></div>
          <el-button type="success" round class="button8">
              <i class="el-icon-chat-line-round"></i>
              Message
            </el-button>
          <el-button type="primary" round class="button9">
              <i class="el-icon-plus"></i>
              Add
            </el-button>
        </div>
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
      },
      User: {
        name: "dadas WDWAD",
        picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        credit: 80,
        value:3.7,
      },
    }
  }
}
</script>

<style scoped>
body{
  background-color: white !important;
}
.details3 {
  margin-left: 20px;
  float: left;
  height: 550px;
}
.details1{
  width: 700px;
  height: 400px;
  background-color: white;
}
.details2{
  margin-top: 20px;;
  width: 700px;
  height: 100px;
  background-color: white;
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
  color:green;
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
.User {
  margin-top: 50px;
}
.UserDetails {
  background-color: white;
  width: 610px;
  height: 80px;
  margin-left: 10px;
  display: inline-block;
  float: left;
}
.UserDetails1 {
  color:#7c7a7b;
  font-size: 21px;
  height: 40px;
  margin-top: 25px;
  display: inline-block;
  background-color: white;
}
.button8 {
  margin-left: 20px;
  float: right;
  margin-top: 23px;
}
.button9 {
  width: 120px;
  margin-left: 30px;
  float: right;
  margin-top: 23px;
}
.credit {
  float: left;
  display: inline-block;
}
</style>