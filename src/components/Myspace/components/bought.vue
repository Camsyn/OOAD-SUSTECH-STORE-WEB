<template>
  <div class="table" style="padding: 20px">

    <v-row>

      <span v-text="maidaode" class="my-4 mx-auto"></span>
    </v-row>
    <el-table
        empty-text="暂无数据"
        :data="all"
        tooltip-effect="dark"
        style="width: 100%"
        >
      <el-table-column
          label="商品名称"
          width="150">
        <template slot-scope="scope">{{ scope.row.requestTitle }}</template>
      </el-table-column>

      <el-table-column
          label="买家"
          width="120"
      >
        <template slot-scope="scope">
          <i @click="PersonIn(scope.row.showUser)"
          style="cursor: pointer">
            {{ scope.row.showUser }}
          </i>
        </template>
      </el-table-column>

      <el-table-column
          prop="tradeCnt"
          label="数量"
          width="120">
      </el-table-column>

      <el-table-column
          prop="updateTime"
          label="交易时间"
          width="120">
      </el-table-column>

      <el-table-column
          label="价格"
          width="150">
        <template slot-scope="scope">
          <div class="Now">{{scope.row.singlePrice}}</div>
        </template>
      </el-table-column>

      <el-table-column
          label="状态"
          width="150">
        <template slot-scope="scope">
          <div>{{stats[scope.row.state]}}</div>
        </template>
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click="confirm(scope.row)"
              size="mini"
              type="primary">
            确认
          </el-button>

        </template>
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click="report(scope.row.id)"
              size="mini"
              type="danger">
            举报
          </el-button>
        </template>
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click="pay(scope.row)"
              size="mini"
              type="danger">
            支付
          </el-button>
        </template>

      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click="rollback(scope.row.id)"
              size="mini"
              type="danger">
            撤回
          </el-button>
        </template>

      </el-table-column>
    </el-table>
    <div class="d-flex justify-center">
      <v-pagination v-model="page" @input="more" :length="length">
      </v-pagination>
    </div>
    <report :dialog="repo" :id="this.order_id" type="reportOrder" v-on:close="repo=false"></report>
  </div>
</template>

<script>
import report from '../../../components/report'
import goods from "../../../store/modules/goods";
import user from "../../../store/modules/user";
export default {
  name: "bought",
  data() {
    return {
      order_id : 0,
      repo : false,
      all: [],
      multipleSelection: [],
      page: 1,
      limit: 10,
      length: 1,
      dialog: false,
      edit: null,
      stats:["准备中","已发布","已完成","审核中","拉取者撤回","发布者撤回"]
    }
  },
  components : {
    report
  },
  computed: {
    maidaode(){
      return "我买到的 (第"+this.page+"页)";
    }
  },

  methods: {
    rollback(id) {
      let data = {
        orderId : id
      }

      this.$confirm('是否撤回该商品？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('rollbackOrder',data).then(res => {
          this.more()
          this.$message({
            type: 'success',
            message: '已撤回'
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

    },
    pay(id) {
      let data3 = 0
      if (user.state.name == id.puller) {
        data3 = id.pusher
      }
      else {
        data3 = id.puller
      }
      let data = {
        requestId: id.id,
      }
      this.$store.dispatch('getRequest',data).then((res) => {
        res = res.data
        this.$store.dispatch('getInfoOf',data3).then((data) => {
          res.pusherInfo = data
          if (res.tradeType == 0) {
            res.tradeMethod = '第三方支付'
          }
          if (res.tradeType == 1) {
            res.tradeMethod = '平台代币'
          }
          if (res.tradeType == 2) {
            res.tradeMethod = '个人收款码'
          }
          if (res.tradeType == 3) {
            res.tradeMethod = '私下交易'
          }
          goods.state.payList = [res]
          console.log(res)
          this.$router.push('/pay')
        })
      }).catch((err) => {
        console.log(data)
      })
    },
    report(id){
      this.$confirm('是否举报该订单', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.repo = true
        this.id = id
        console.log(this.repo)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    PersonIn(id) {
      this.$store.state.user.ObserverId = id
      this.$router.push('/PersonalPage/treasure')
    },
    detile(){
      this.$router.push({name: "GoodsDetails"});
    },
    mycircle(){
      this.$router.push({name: "Circle"});
    },

    confirm(item){
      this.$confirm('是否确认收货', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if(item.type == 0) {
          this.$store.dispatch("confirmPush", item.id).then(res=>{
            this.more()
          }).catch(err=>{
            console.log(err);
          });
        }
        else  {
          this.$store.dispatch('confirmPull',item.id).then(res => {
            this.more()
          }).catch((err) => {
            console.log(err)
          })
        }

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消确认'
        });
      });
    },

    more(){
      if (this.page<this.length){
        return;
      }
      this.repo = false
      this.$store.dispatch("getPush", {page: this.page, size: this.limit}).then((res) => {
        res = res.data;
        let data = []
        for (let i = 0; i < res.length; i++) {
          if(res[i].type == 0) {
            res[i].showUser = res[i].puller
            data.push(res[i])
          }
        }
        this.$store.dispatch('getPull',{page: this.page, size: this.limit}).then((res) => {
          res = res.data;
          for (let i = 0; i <res.length ; i++) {
            if(res[i].type == 1) {
              res[i].showUser = res[i].pusher
              data.push(res[i])
            }
          }
          this.all = data
          console.log(this.all)
        })
      });
    },

  },
  created() {
    this.more();
  }
}
</script>

<style scoped>

</style>
