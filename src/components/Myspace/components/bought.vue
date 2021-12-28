<template>
  <div class="table">
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
          prop="pusher"
          label="发布者"
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
              @click="confirm(scope.row.id)"
              size="mini"
              type="primary">
            确认
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="d-flex justify-center">
      <v-pagination v-model="page" @input="more" :length="length">
      </v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "bought",
  data() {
    return {
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
  computed: {
    maidaode(){
      return "我买到的 (第"+this.page+"页)";
    }
  },

  methods: {
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
      if (this.page<this.length-1){
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
