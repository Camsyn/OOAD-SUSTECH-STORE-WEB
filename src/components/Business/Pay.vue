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
        <el-radio-group v-model="radio1">
          <el-radio-button label="上海" class="button"></el-radio-button>
          <el-radio-button label="北京" class="button"></el-radio-button>
          <el-radio-button label="广州" class="button"></el-radio-button>
          <el-radio-button label="深圳" class="button"></el-radio-button>
        </el-radio-group>
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
import cartItem from "../../store/modules/cartItem";
export default {
  name: "Pay",
  components: {
    Pay_header
  },
  data () {
    return {
      radio1: '上海',
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
        { text: '购买数量' ,value: 'count'},
      ],
      desserts: [],
    }
  },
  methods: {
    buy() {
      this.$confirm('您是否要购买这些商品', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if (this.liyuan >= this.Now_sum){
          this.$message({
            type: 'success',
            message: '订单成功!'
          })
          let data = {}
          for (let i = 0; i < this.desserts.length; i++) {
            data
          }
          this.$router.push('/home')
        }
        else {
          this.$message({
            type: 'warning',
            message: '余额不足'
          });
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
    Now_sum : function(){
      let sum1 = 0;
      for (let i = 0; i < this.desserts.length ; i++) {
        sum1 = sum1 + this.desserts[i].exactPrice
      }
      return sum1
    },
    Ori_sum : function(){
      let sum1 = 0;
      for (let i = 0; i < this.desserts.length ; i++) {
        sum1 = sum1 + this.desserts[i].originalPrice
      }
      return sum1
    },
  },
  created() {
    this.liyuan = user.state.liyuan
    this.desserts = goods.state.payList
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
  margin-top: 30px;
  margin-left: 45%;
}
</style>
