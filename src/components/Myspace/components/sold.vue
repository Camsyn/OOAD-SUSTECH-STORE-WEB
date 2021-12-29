<template>
  <div class="table" style="padding: 20px">
    <p class="p_text">我卖出的 ({{all.length}})</p>
    <report :dialog="repo" :id="this.repoId" type="reportOrder" v-on:close="repo=false"></report>
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
          prop="showUser"
          label="买家"
          width="120">
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
          <div class="Now">{{scope.row.singlePrice * scope.row.tradeCnt}}</div>
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
              @click="rollback(scope.row.id)"
              size="mini"
              type="primary">
            撤回
          </el-button>
        </template>
      </el-table-column>


      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click="ReportOrder(scope.row)"
              size="mini"
              type="primary">
            举报
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import report from '../../../components/report'
export default {
  name: "sold",
  components: {
    report
  },
  data() {
    return {
      repoId: 0,
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
  computed: {
    maichude(){
      return "我卖出的 (第"+this.page+"页)";
    }
  },

  methods: {
    ReportOrder(item) {
      this.$confirm('是否举报该订单', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.repo = true
        this.repoId = item.id
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    detile(){
      this.$router.push({name: "GoodsDetails"});
    },
    mycircle(){
      this.$router.push({name: "Circle"});
    },

    confirm(item){
      this.$confirm('是否确认收款', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        if(item.type == 1) {
          this.$store.dispatch("confirmPush", item.id).then(res=>{
            this.more();
          }).catch(err=>{
          });
        }
        else  {
          this.$store.dispatch('confirmPull',item.id).then(res => {
            this.more();
          }).catch((err) => {
            console.log(err)
          })
          this.$message({
            type: 'success',
            message: '已确认'
          });
        }
        this.more()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消确认'
        });
      });
    },

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

    more(){
      if (this.page<this.length){
        return;
      }
      this.repo = false
      this.$store.dispatch("getPush", {page: this.page, size: this.limit}).then((res) => {
        res = res.data;
        let data = []
        for (let i = 0; i < res.length; i++) {
          if(res[i].type == 1) {
            res[i].showUser = res[i].puller
            data.push(res[i])
          }
        }
        this.$store.dispatch('getPull',{page: this.page, size: this.limit}).then((res) => {
          res = res.data;
          for (let i = 0; i <res.length ; i++) {
            if(res[i].type == 0) {
              res[i].showUser = res[i].pusher
              data.push(res[i])
            }
          }
          this.all = data
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
