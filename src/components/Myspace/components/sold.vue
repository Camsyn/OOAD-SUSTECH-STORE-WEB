<template>
  <div class="table">
    <p class="p_text">我卖出的 ({{tableData.length}})</p>
    <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          label="商品名称"
          width="150">
        <template slot-scope="scope">{{ scope.row.requestTitle }}</template>
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
              @click="editRq(scope.row)"
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
      limit: 99,
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
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        rows.splice(index, 1)
        this.$store.dispatch('deleteItem',{})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    

    getPushed(){
      this.$store.dispatch("getPush", {page: this.page, size: this.limit}).then((data) => {
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
