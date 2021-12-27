<template>
  <div class="table">
    <p class="p_text">购物车 ({{tableData.length}})</p>
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          width="120" >
        <template slot-scope="scope">
          <a @click="detile(scope.$index,tableData)">
            <el-image class="logo"
                      style="width: 100px; height: 100px"
                      :src="scope.row.images[0]"
            ></el-image>
          </a>
        </template>
      </el-table-column>
      <el-table-column
          label="商品名称"
          width="150">
        <template slot-scope="scope">{{ scope.row.title }}</template>
      </el-table-column>

      <el-table-column
          prop="count"
          label="总量"
          width="80">
      </el-table-column>

      <el-table-column
          prop="saleCount"
          label="已卖"
          width="80">
      </el-table-column>

      <el-table-column
          prop="updateTime"
          label="上架时间"
          width="120">
      </el-table-column>
      <el-table-column
          prop="cartItemCreateTime"
          label="加入购物车时间"
          width="120"
          show-overflow-tooltip>
      </el-table-column>


      <el-table-column
          label="发布者"

          width="300">
        <template slot-scope="scope">
                    <div class="User">
                      <a>
                        <el-image
                            style="width: 80px; height: 80px;border-radius: 50%;display: inline-block;float: left"
                            :src="scope.row.pusherInfo.headImage"
                            @click="mycircle"
                        ></el-image>
                      </a>
                      <div class="UserDetails">
                        <div class="UserDetails1">
                          <span></span>
                          <div class="text-h6" v-text="scope.row.pusherInfo.nickname"></div>
<!--                          <v-rating-->
<!--                              v-model="scope.row.pusherInfo.credit"-->
<!--                              background-color="orange lighten-3"-->
<!--                              color="orange"-->
<!--                          ></v-rating>-->
                          <el-rate
                              v-model="scope.row.pusherInfo.credit"
                              show-text
                              disabled>
                          </el-rate>
                        </div>
                        <div class="credit"></div>
                      </div>
                    </div>
        </template>
      </el-table-column>



      <el-table-column
          label="价格"
          width="150">
        <template slot-scope="scope">
          <div class="Now">{{scope.row.exactPrice}}</div>
        </template>
      </el-table-column>

      <el-table-column
          label="数目"
          width="150">

        <template slot-scope="scope">
          <el-input-number v-model="scope.row.cartItemCount" @change="handleChange" :min="1" :max='scope.row.count - scope.row.saleCount' label="描述文字"
          size="small"></el-input-number>
        </template>
      </el-table-column>

      <el-table-column
          prop="tradeMethod"
          label="支付方式"
          width="150">
      </el-table-column>


      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteRow(scope.$index,tableData)"
              size="mini"
              type="danger">
            移除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection(tableData)">全选</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
    <div class="shop_bottom">
      <button class="buy" @click ="PayFor">
        结算
      </button>
      <div class="price">共计:
        <strong class="price_text">{{sum}}</strong>
      </div>
      <div class="number">
        已选商品
        <strong class="number_text">{{multipleSelection.length}}</strong>
        件
      </div>
    </div>
  </div>

</template>

<script>
import goods from "../../../store/modules/goods";
export default {
  name: "shopping_table",
  data() {
    return {
      url:"https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto",
      tableData: [],
      multipleSelection: []
    }
  },
  computed: {
    sum : function(){
      let sum1 = 0;
      for (let i = 0; i < this.multipleSelection.length ; i++) {
        sum1 = sum1 + this.multipleSelection[i].exactPrice * this.multipleSelection[i].cartItemCount
      }
      return sum1
    },
  },
  methods: {
    handleChange(){},
    detile(index,rows){
      this.$store.commit('setCur',rows[index])
      goods.state.current.request = rows[index]
      this.$router.push('/GoodsDetails');
    },
    mycircle(){
      this.$router.push({name: "Circle"});
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRow(index, rows) {
      this.$confirm('此操作将会将该商品移出购物车, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

        let data = {
          cartItemId: rows[index].cartItemId
        }
        rows.splice(index, 1)
        this.$store.dispatch('deleteItem',data).then((data) => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch((err) => {
          this.$message({
            type: 'info',
            message: err
          });
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    PayFor() {
      if (this.multipleSelection.length==0) {
        this.$message.error('已选商品数量不能为0');
      }
      else  {
        for (let i = 0; i <this.multipleSelection.length ; i++) {
          let data2 = {
            cartItemId : this.multipleSelection[i].cartItemId,
            count: this.multipleSelection[i].cartItemCount
          }
          this.$store.dispatch('modifyCount',data2).then(() => {
          }).catch(err => {
            this.$message({
              type: 'warning',
              message: err
            })
          })
        }
        this.$store.commit('setpayList',this.multipleSelection)
        this.$router.push('/pay')
      }
    }
  },
  created() {
    this.$store.dispatch('getCart',this.search).then((data) => {
      for (let i = 0; i <data.length ; i++) {
        if (data[i].tradeType == 0) {
          data[i].tradeMethod = '第三方支付'
        }
        if (data[i].tradeType == 1) {
          data[i].tradeMethod = '平台代币'
        }
        if (data[i].tradeType == 2) {
          data[i].tradeMethod = '个人收款码'
        }
        if (data[i].tradeType == 3) {
          data[i].tradeMethod = '私下交易'
        }
        this.$store.dispatch("getInfoOf", data[i].pusher).then(rees=>{
          data[i].pusherInfo = rees;
          data[i].pusherInfo.credit =  data[i].pusherInfo.credit * 5/ 100;
          this.tableData.push(data[i]);
        });
      }
    })
  }
}
</script>

<style scoped>
.p_text {
  font-size: 24px;
  color: #fb0000;
  font-weight: 400;
}
.table {
  margin-top: 50px;
  margin-left: 50px;
}
.UserDetails1 {
  color:#7c7a7b;
  font-size: 21px;
  height: 40px;
  margin-top: 25px;
  display: inline-block;
  background-color: white;
}
.credit {
  float: left;
  display: inline-block;
}
.UserDetails {
  margin-left: 10px;
  display: inline-block;
  float: left;
}
.Now {
  font-size: 30px;
  font-weight: 700;
}
.shop_bottom {
  z-index: 99;
  margin-left: 250px;
  display: inline-block;
  width: 60%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #eee;
}
.buy {
  float: right;
  display: block;
  width: 120px;
  height: 50px;
  color: #fff;
  font-size: 22px;
  letter-spacing: 5px;
  line-height: 50px;
  text-align: center;
  border-radius: 8px;
  background-color: #fb0000;
}
.price {
  float: right;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
}
.price_text {
  font-weight: 400;
  color: #fb0000;
  float: right;
  font-size: 23px;
  margin-left: 15px;
  margin-right: 10px;
}
.number {
  float: right;
  min-width: 110px;
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
}
.number_text {
  display: inline-block;
  padding: 0 10px;
  font-size: 18px;
  color: #fb0000;
}
</style>