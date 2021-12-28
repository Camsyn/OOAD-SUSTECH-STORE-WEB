<template>
   <div class="details3">
    <div class="details1">
      <div class="Title">
        <h2 class="Title2">
          {{Product.title}}
        </h2>
        <div class="Action">
          <button class="Action2" @click = AddToCartitem>
            <i class="el-icon-shopping-cart-full"></i>
            {{ icon_info }}
          </button>
        </div>
      </div>
      <div class="information">
        <el-descriptions title="商品信息">
          <el-descriptions-item label="总量"><div class="information1"> {{Product.count}}</div></el-descriptions-item>
          <el-descriptions-item label="已售数量"><div class="information1">{{Product.saleCount}}</div></el-descriptions-item>
          <el-descriptions-item label="发布日期"><div class="information1">{{Product.updateTime}}</div></el-descriptions-item>
          <el-descriptions-item label="标签"><el-tag size="small"><div class="information1">{{Product.labels[0]}}</div></el-tag></el-descriptions-item>
          <el-descriptions-item label="预估价格"><div class="information1">{{Product.originalPrice}}</div></el-descriptions-item>
          <el-descriptions-item label="付款方式"><div class="information1">{{Product.tradeMethod}}</div></el-descriptions-item>

        </el-descriptions>
      </div>

      <div class="MoreInformation">
       {{Product.desc_}}
      </div>

      <div class="Buy">
        <div class="Now">{{Product.exactPrice}}</div>
        <div class="Old">{{Product.originalPrice}}</div>
        <button> <div class="Buy_buttion" @click = 'buyGood'>Buy</div></button>
      </div>
    </div>
    <div class="details2">
      <div class="User">
        <a href="#">
          <el-image
              style="width: 80px; height: 80px;border-radius: 50%;display: inline-block;float: left"
              :src="User.headImage"
          ></el-image>
        </a>
        <div class="UserDetails">
          <div class="UserDetails1">{{User.nickname}}
            <el-rate
                v-model="User.credit"
                show-text
            disabled>
            </el-rate>
          </div>
          <div class="credit"></div>
          <el-button type="success" round class="button8" @click="chat">
              <i class="el-icon-chat-line-round"></i>
              聊天
            </el-button>
          <el-button type="primary" round class="button9">
              <i class="el-icon-plus"></i>
              关注
            </el-button>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import goods from "../../../store/modules/goods";
export default {
  name: "Details2",
  methods:{
    buyGood(){
      let lista = []
      lista.push(goods.state.current.request)
      this.$store.commit('setpayList',lista)
      this.$router.push('/pay')
    },
    AddToCartitem(){
      let addInfo = {
        requestId : this.Product.id,
        count : 1,
      }
      this.$confirm('是否加入购物车?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch("addInfo",addInfo).then((data) => {
          if (this.icon_info==='加入购物车'){
            this.icon_info='已加入购物车'
          }
          this.$message({
            type: 'success',
            message: '加入购物车成功!',
          })
        }).catch(err=>{
          this.$message({
            type: 'warning',
            message: err
          })
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },

    chat(){
      this.$store.dispatch("test").then(res=>{});
    },
  },
  data(){
    return{
      Product: {
      },
      User: {
      },
      icon_info:"加入购物车",
    }
  },
  computed: {
    test() {
      return goods.state.current.request
    }
  },
  watch: {
    test: function (newVal,oldVal) {
      this.Product = newVal
    }
  },
  created() {
    this.Product = goods.state.current.request
    this.Product.tradeMethod = ''
    if (this.Product.tradeType == 0) {
      this.Product.tradeMethod = '第三方支付'
    }
    if (this.Product.tradeType == 1) {
      this.Product.tradeMethod = '平台代币'
    }
    if (this.Product.tradeType == 2) {
      this.Product.tradeMethod = '个人收款码'
    }
    if (this.Product.tradeType == 3) {
      this.Product.tradeMethod = '私下交易'
    }

    this.Product.updateTime = this.Product.updateTime.substr(0,10)
    this.User = goods.state.current.request.pusherInfo
    this.User.credit = this.User.credit/100 * 5
  }
}
</script>

<style scoped>
body{
  background-color: white !important;
}
.details3 {
  width: 45%;
  margin-left: 20px;
  float: left;
  height: 550px;
}
.details1{
  width: 100%;
  height: 400px;
  background-color: white;
}
.details2{
  margin-top: 20px;
  width: 600px;
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
  width: 200px;
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
  width: 500px;
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
}
.button8 {
  margin-left: 20px;
  float: right;
  margin-top: 23px;
}
.button9 {
  margin-left: 30px;
  float: right;
  margin-top: 23px;
}
.credit {
  float: left;
  display: inline-block;
}
</style>
