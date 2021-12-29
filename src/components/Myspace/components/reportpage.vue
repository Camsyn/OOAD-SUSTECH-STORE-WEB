<template>
  <div class="table" style="padding: 20px">

    <v-row>
      <span v-text="maidaode" class="my-4 mx-auto"></span>
    </v-row>
    <el-table
        empty-text="暂无数据"
        :data="all[page-1]"
        tooltip-effect="dark"
        style="width: 100%"
    >
      <el-table-column
          label="商品名称"
          width="150">
        <template slot-scope="scope">{{ scope.row.requestTitle }}</template>
      </el-table-column>

      <el-table-column
          label="被投诉商家"
          width="120"
      >
        <template slot-scope="scope">
          <i @click="new PersonIn(scope.row.pusher)"
             style="cursor: pointer">
            {{ scope.row.pusher }}
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
          label="投诉原因"
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
              @click="confirm(scope.row.id)"
              size="mini"
              type="primary">
            撤销举报
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
            再次举报
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
export default {
  name: "reportpage",
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
      stats:["准备中","已发布","已完成","审核中","已中断"],
    }
  },
  components : {
    report
  },
  computed: {
    maidaode(){
      return "申诉记录 (第"+this.page+"页)";
    }
  },

  methods: {
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

    confirm(id){
      this.$store.dispatch("confirmPull", id).then(res=>{

      }).then(err=>{
        console.log(err);
      });
    },

    more(){
      this.repo = false
      if (this.page<this.length){
        return;
      }
      this.$store.dispatch("getPull", {page: this.page, size: this.limit}).then((res) => {
        res = res.data;
        if (res.length!==0){
          this.all.push(res);
          if (this.page>=this.length&&res.length===this.limit){
            this.length++;
          }
        }
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
