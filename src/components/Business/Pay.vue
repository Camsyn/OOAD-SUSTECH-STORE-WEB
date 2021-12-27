<template>
  <div class="main10">
    <Pay_header></Pay_header>

    <div class="Goodsdetails">
      <div class="title">
        订单复核
      </div>
      <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
          class="elevation-1 details2"
      ></v-data-table>

      <div class="PayMethod">
        <div class="title3">支付方式 :</div>
        <v-btn-toggle
            v-model="text"
            tile
            color="deep-purple accent-3"
            group
        >
          <v-btn value="平台代币" @click = 'changepay1'>
            平台代币
          </v-btn>

          <v-btn value="个人收款码" @click = 'changepay2'>
            个人收款码
          </v-btn>

          <v-btn value="私下交易" @click = 'changepay3'>
            私下交易
          </v-btn>

          <v-btn value="第三方支付"  @click= 'changepay4'>
            第三方支付
          </v-btn>
        </v-btn-toggle>
      </div>

      <div class="price">
        <div class="pricetitle">商品原价:</div>
        <div class="OldPrice">￥{{Ori_sum}}</div>

        <div class="pricetitle">商品现价:</div>
        <div class="OldPrice">
          ￥{{Now_sum}}
        </div>

        <div class="pricetitle">应付总金额:</div>
        <div class="payPrice">￥{{Now_sum}}</div>
      </div>

      <el-button type="danger" round class="button3"  @click = 'buy'>购买</el-button>
    </div>
  </div>
</template>

<script>
import Pay_header from "./Pay_header";
import user from "../../store/modules/user";
import goods from "../../store/modules/goods";
export default {
  name: "Pay",
  components: {
    Pay_header
  },
  data () {
    return {
      text:'',
      liyuan:0,
      headers: [
        {
          text: '商品名',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: '原价', value: 'originalPrice' },
        { text: '现价', value: 'exactPrice' },
        { text: '发布者', value: 'pusherInfo.nickname' },
        { text: '购买数量' ,value: 'cartItemCount'},
        { text: '支付方式' , value: 'tradeMethod'}
      ],
      desserts: [],
    }
  },
  methods: {
    changepay1(){
      let table2 = []
      for (let i = 0; i < goods.state.payList.length; i++) {
        if (goods.state.payList[i].tradeMethod == '平台代币') {
          table2.push(goods.state.payList[i])
        }
      }
      this.desserts = table2
    },
    changepay2(){
      let table2 = []
      for (let i = 0; i < goods.state.payList.length; i++) {
        if (goods.state.payList[i].tradeMethod == '个人收款码') {
          table2.push(goods.state.payList[i])
        }
      }
      this.desserts = table2
    },
    changepay3(){
      let table2 = []
      for (let i = 0; i < goods.state.payList.length; i++) {
        if (goods.state.payList[i].tradeMethod == '私下交易') {
          table2.push(goods.state.payList[i])
        }
      }
      this.desserts = table2
    },
    changepay4(){
      let table2 = []
      for (let i = 0; i < goods.state.payList.length; i++) {
        if (goods.state.payList[i].tradeMethod == '第三方支付') {
          table2.push(goods.state.payList[i])
        }
      }
      this.desserts = table2
    },
    buy() {
      this.$confirm('您是否要购买这些商品', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
          let data = [1]
          if(this.desserts[0].cartItemId !== null) {
            for (let i = 0; i < this.desserts.length; i++) {
              data.push(this.desserts[i].cartItemId)
            }
          }
          if (data[0].cartItemId == null) {
            data = {
              requestId:this.desserts[0].id,
              count: 1,
            }
            this.$store.dispatch('buy',data).then((data) => {
              this.$message({
                type: 'success',
                message: '订单成功!',
              })
              this.$router.push('/home')
            }).catch(err=>{
              this.$message({
                type: 'warning',
                message: err
              })
            });
          }
          else {
            this.$store.dispatch('satisfy',data).then((data) => {
              this.$message({
                type: 'success',
                message: '订单成功!'
              })
              this.$router.push('/home')
            }).catch(err=>{
              this.$message({
                type: 'warning',
                message: err
              })
            });
            this.$router.push('/home')
          }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消订单'
        });
      });
    }
  },
  computed: {
    Ori_sum : function () {
      let sum4 = 0;
      for (let i = 0; i < this.desserts.length ; i++) {
          sum4= sum4 + this.desserts[i].originalPrice * this.desserts[i].cartItemCount
      }
      return sum4
    },



    Now_sum : function(){
      let sum2 = 0;
      for (let i = 0; i < this.desserts.length ; i++) {
        sum2 = sum2 + this.desserts[i].exactPrice * this.desserts[i].cartItemCount
      }
      return sum2
    },
  },
  created() {
    this.liyuan = user.state.liyuan
    this.desserts = goods.state.payList
    if(goods.state.payList[0].cartItemId == null) {
      this.desserts[0].cartItemCount = 1
    }
  }
};
</script>

<style scoped>
.main10 {
  background: white;
  display: inline-block;
  width: 100%;
}
.OldPrice {
  margin-right: 5px;
  margin-top: 20px;
  float: right;
}
.Goodsdetails {
  background: white;
  display: inline-block;
  width: 100%;
}
.title {
  margin-left: 20px;
}
.details2 {
  margin-top: 20px;
}
.PayMethod {
  height: 100px;
  border-top: 4px solid #DCDFE6;
  border-bottom: 4px solid #DCDFE6;
}
.button {
  border: 1px solid #DCDFE6;
  margin-left: 30px;
}
.title3 {
  margin-left: 30px;
  margin-top: 40px;
  display: inline-block;
}
.price {
  height: 100px;
}
.pricetitle {
  margin-top: 20px;
  margin-left: 80%;
  display: inline-block;
}
.payPrice {
  color: red;
  font-size: 20px;
  margin-right: 5px;
  margin-top: 20px;
  float: right;
}
.button3 {
  width: 200px;
  height: 51px;
  margin-top: 25px;
  margin-left: 45%;
}
</style>
