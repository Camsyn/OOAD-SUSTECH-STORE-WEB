<template>
    <div class="table" style="padding: 20px">
      <v-dialog
          v-model="dialog"
          width="500"
          persistent
      >
        <upload v-on:close = "dialog=false" :pre-info="edit"></upload>
      </v-dialog>
      <v-row>
        <span v-text="gouwuche" class="my-4 mx-auto"></span>
      </v-row>
      <el-table
          empty-text="暂无数据"
          :data="all[page-1]"
          tooltip-effect="dark"
          style="width: 100%"
          >
        <el-table-column
            label="图片"
            width="120" >
          <template slot-scope="scope">
            <v-img class="logo"
                      style="width: 100px; height: 100px;cursor: pointer"
                      :src="scope.row.images[0]"
                      @click="detile(scope.row)"

            ></v-img>
          </template>
        </el-table-column>
        <el-table-column
            label="商品名称"
            width="150">
          <template slot-scope="scope"  >{{ scope.row.title }}</template>
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
                @click.native.prevent="deleteRow(scope.$index)"
                size="mini"
                type="danger">
              移除
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
import upload from "../../upload";
import goods from "../../../store/modules/goods";
export default {
  components:{upload},
  name: "publish",
  data() {
    return {
      all: [],
      multipleSelection: [],
      page: 1,
      limit: 6,
      length: 1,
      dialog: false,
      edit: null,
    }
  },
  computed: {
    gouwuche(){
      return "我发布的 (第"+this.page+"页)";
    }
  },

  methods: {
    detile(index){
      this.$store.dispatch('getInfoOf',index.pusher).then((data) => {
        goods.state.current.request = index
        goods.state.current.request.pusherInfo = data
        this.$router.push('/GoodsDetails')
      })
    },
    mycircle(){
      this.$router.push({name: "Circle"});
    },
    deleteRow(index, rows) {
      this.$confirm('确定删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch("")
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        this.all.splice(index, 1)
        this.$store.dispatch('deleteItem',{})
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

    more(){
      if (this.page<this.length){
        return;
      }
      let my = {
        page: this.page,
        limit: this.limit,
        searchStrategy: 0,
        firstOrder: "update_time",
        isAmbiguous: false,
        publishers: [this.$store.state.user.name],
      };
      this.$store.dispatch("search",my).then((res) => {
        if (res.length!==0){
          this.all.push(res);
          if (this.page>=this.length&&res.length===this.limit){
            this.length++;
          }
        }
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
    this.more();
  }
}
</script>

<style scoped>

</style>
