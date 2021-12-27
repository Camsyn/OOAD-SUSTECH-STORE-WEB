<template>
  <div class="table">
    <p class="p_text">我卖出的 ({{tableData.length}})</p>
    <el-table
        empty-text="暂无数据"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
    >
      <el-table-column
          label="商品名称"
          width="150">
        <template slot-scope="scope">{{ scope.row.requestTitle }}</template>
      </el-table-column>

      <el-table-column
          prop="puller"
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
          <div class="Now">{{scope.row.singlePrice}}</div>
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
  </div>
</template>

<script>
export default {
  name: "sold",
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      page: 1,
      limit: 9,
      dialog: false,
      edit: null,
    }
  },
  computed: {

  },

  methods: {
    detile(){
      this.$router.push({name: "GoodsDetails"});
    },
    mycircle(){
      this.$router.push({name: "Circle"});
    },

    confirm(id){
      this.$store.dispatch("confirmPush", id).then(res=>{

      }).then(err=>{
        console.log(err);
      });
    },

    getPushed(){
      this.$store.dispatch("getPush", {page: this.page, size: this.limit}).then((data) => {
        data = data.data;
        this.tableData = data;
      });
    },
  },
  created() {
    this.getPushed();
  }
}
</script>

<style scoped>

</style>
