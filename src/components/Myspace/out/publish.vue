<template>
    <div class="table">
      <v-dialog
          v-model="dialog"
          width="500"
          persistent
      >
        <upload v-on:close = "dialog=false" :pre-info="edit"></upload>
      </v-dialog>

      <p class="p_text">购物车 ({{tableData.length}})</p>
      <el-table
          empty-text="暂无数据"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
        <el-table-column
            label="图片"
            width="120" >
          <template slot-scope="scope">
            <el-image class="logo"
                      style="width: 100px; height: 100px"
                      :src="scope.row.images[0]"
                      @click="detile"
            ></el-image>
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
            width="120">
        </el-table-column>

        <el-table-column
            prop="saleCount"
            label="已卖"
            width="120">
        </el-table-column>

        <el-table-column
            prop="updateTime"
            label="上架时间"
            width="120">
        </el-table-column>

        <el-table-column
            label="价格"
            width="150">
          <template slot-scope="scope">
            <div class="Now">{{scope.row.exactPrice}}</div>
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
              编辑
            </el-button>
          </template>
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
      <div class="d-flex justify-center">
        <el-pagination
            layout="prev, pager, next"

            :total="50">
        </el-pagination>
      </div>
  </div>
</template>

<script>
import upload from "../../upload";
export default {
  components:{upload},
  name: "publish",
  data() {
    return {
      url:"https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto",
      tableData: [],
      multipleSelection: [],
      page: 1,
      limit: 5,
      dialog: false,
      edit: null,
    }
  },
  computed: {
    sum : function(){
      let sum1 = 0;
      for (let i = 0; i < this.multipleSelection.length ; i++) {
        sum1 = sum1 + this.multipleSelection[i].exactPrice
      }
      return sum1
    },
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
    PayFor() {
      if (this.multipleSelection.length==0) {
        this.$message.error('已选商品数量不能为0');
      }
    },

    getPushed(page=1, limit=99){
      let my = {
        page: 1,
        limit: 99,
        searchStrategy: 0,
        firstOrder: "update_time",
        isAmbiguous: false,
        publishers: [this.$store.getters.name],
      };
      this.$store.dispatch("search",my).then((data) => {
        this.tableData = data;
      });
    },
    editRq(rq){
      this.$store.dispatch("close", rq.id).then(res=>{
        this.dialog=true;
        this.edit=rq;
      }).catch(err=>{
        console.log(err);
      });
    }
  },
  created() {
    this.getPushed(0, 10);
  }
}
</script>

<style scoped>

</style>
