<template>
   <div class="details3">
     <report :dialog="repo" :id="this.Product.id" type="reportRequest" v-on:close="repo=false"></report>
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
          <button class="Action2" @click = ReportGood>
            <i class="el-icon-error"></i>
            {{ icon_info1 }}
          </button>
        </div>
      </div>
      <div class="information">
        <el-descriptions title="商品信息">
          <el-descriptions-item label="总量"><div class="information1"> {{Product.count}}</div></el-descriptions-item>
          <el-descriptions-item label="已售数量"><div class="information1">{{Product.saleCount}}</div></el-descriptions-item>
          <el-descriptions-item label="发布日期"><div class="information1">{{Product.updateTime}}</div></el-descriptions-item>
          <el-descriptions-item label="标签"><el-tag size="small"><div class="information1">{{Product.labels[0]}}</div></el-tag></el-descriptions-item>
          <el-descriptions-item label="商品交易类型"><div class="information1">{{Product.tradeTypeofgood}}</div></el-descriptions-item>
          <el-descriptions-item label="付款方式"><div class="information1">{{Product.tradeMethod}}</div></el-descriptions-item>

        </el-descriptions>
      </div>

      <div class="MoreInformation">
       {{Product.desc_}}
      </div>

      <div class="Buy">
        <div class="Now">{{Product.exactPrice}}</div>
        <div class="Old">{{Product.originalPrice}}</div>
        <button> <div class="Buy_buttion" @click = 'buyGood'>get!</div></button>
      </div>
    </div>
    <div class="details2">
      <div class="User">
        <a @click = 'Personpage'>
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
          <el-button type="success" round class="button8" @click="chatWith(User.sid)">
              <i class="el-icon-chat-line-round"></i>
              聊天
            </el-button>
          <el-button type="primary" round class="button9" @click = 'follow'>
              <i class="el-icon-plus"></i>
              {{context}}
            </el-button>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import goods from "../../../store/modules/goods";
import user from "../../../store/modules/user";
import report from '../../report'
export default {
  name: "Details2",
  components: {
    report
  },
  methods:{
    ReportGood() {
      this.$confirm('是否举报该商品', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.repo = true
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    Personpage(){
      user.state.ObserverId = goods.state.current.request.pusherInfo.sid
      this.$router.push('/PersonalPage/treasure')
    },
    follow() {
      if(this.context === '关注') {
        this.context = '已关注'
      }
      let add = true
      for (let i = 0; i <user.state.follow.length ; i++) {
        if(user.state.follow[i] == goods.state.current.request.pusherInfo.sid){
          add = false
        }
      }
      if(add) {
        user.state.follow.push(goods.state.current.request.pusherInfo.sid)
        let data = {
          sid: user.state.sid,
          email: user.state.email,
          nickname : user.state.nickname,
          description: user.state.description,
          credit: user.state.credit,
          liyuan : user.state.liyuan,
          headImage : user.state.avatar,
          paycodePath : user.state.paycodePath,
          follow : user.state.follow
        }
        this.$store.dispatch('update',data).then(() => {
        })
      }
    },
    buyGood(){
      if(goods.state.current.request.type == 0) {
        this.$confirm('是否拉取该订单', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let data = {
            requestId:0,
            count:1
          }
          data.requestId = goods.state.current.request.id
          this.$store.dispatch('pull',data).then(() => {
            this.$message({
              type: 'success',
              message:'成功拉取'
            });
          }).catch((err) => {
            this.$message({
              type: 'warning',
              message: err
            });
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
      else {
        let lista = []
        lista.push(goods.state.current.request)
        this.$store.commit('setpayList',lista)
        this.$router.push('/pay')
      }

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
          if (this.icon_info==='加入收藏'){
            this.icon_info='已加入收藏'
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

    chatWith(sid){
      if (this.$route.params.sid !== sid.toString()){
        this.$store.commit("UPDATE_SHORT", {msg: "", id: sid})
        this.$router.push({path: "/message/"+sid});
      }
    },
  },
  data(){
    return{
      context : '关注',
      repo: false,
      Product: {
      },
      User: {
        credit:0
      },
      icon_info:"加入收藏",
      icon_info1: '举报'
    }
  },
  computed: {
    test() {
      return goods.state.current.request
    },
  },
  watch: {
    test: function (newVal,oldVal) {
      this.Product = newVal
      let add = true
      for (let i = 0; i <user.state.follow.length ; i++) {
        if(user.state.follow[i] == goods.state.current.request.pusherInfo.sid){
          add = false
        }
      }
      if(add) {
        this.context = '关注'
      }
      else {
        this.context = '已关注'
      }
      this.Product.tradeMethod = ''
      if (this.Product.type == 0) {
        this.Product.tradeTypeofgood = '买'
      }
      if (this.Product.type == 1) {
        this.Product.tradeTypeofgood = '卖'
      }
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

      this.Product.updateTime = this.Product.updateTime.substr(0, 10)
      this.User = Object.assign({}, newVal.pusherInfo)

      this.User.credit = this.User.credit / 100 * 5
    }
  },
  created() {
    let add = true
    for (let i = 0; i <user.state.follow.length ; i++) {
      if(user.state.follow[i] == goods.state.current.request.pusherInfo.sid){
        add = false
      }
    }
    if(add) {
      this.context = '关注'
    }
    else {
      this.context = '已关注'
    }
    this.Product = goods.state.current.request
    this.Product.tradeMethod = ''
    if (this.Product.type == 0) {
      this.Product.tradeTypeofgood = '买'
    }
    if (this.Product.type == 1) {
      this.Product.tradeTypeofgood = '卖'
    }
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
    this.User = Object.assign({},goods.state.current.request.pusherInfo)

    this.User.credit = this.User.credit/100 * 5
    this.repo = false
    console.log(this.Product)
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
