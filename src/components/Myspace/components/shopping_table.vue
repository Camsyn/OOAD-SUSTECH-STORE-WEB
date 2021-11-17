<template>
  <div class="table">
    <p class="p_text">我的商品 ({{tableData.length}})</p>
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
          <el-image class="logo"
                    style="width: 100px; height: 100px"
                    :src="url"
          ></el-image>
        </template>
      </el-table-column>
      <el-table-column
          label="商品名称"
          width="150">
        <template slot-scope="scope">{{ scope.row.Title }}</template>
      </el-table-column>
      <el-table-column
          prop="Condition"
          label="成色"
          width="120">
      </el-table-column>
      <el-table-column
          prop="Date"
          label="上架时间"
          width="120">
      </el-table-column>
      <el-table-column
          prop="put_Date"
          label="加入购物车时间"
          show-overflow-tooltip>
      </el-table-column>


      <el-table-column
          label="发布者"
          width="300"
      >
        <template slot-scope="scope">
          <div class="User">
            <a href="#">
              <el-image
                  style="width: 80px; height: 80px;border-radius: 50%;display: inline-block;float: left"
                  :src="scope.row.User.picture"
              ></el-image>
            </a>
            <div class="UserDetails">
              <div class="UserDetails1">{{scope.row.User.name}}
                <el-rate
                    v-model="scope.row.User.value"
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
          prop="Method"
          label="获取方法"
          show-overflow-tooltip>
      </el-table-column>

      <el-table-column
          prop="price"
          label="价格"
          show-overflow-tooltip>
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="120">
        <template slot-scope="scope">
          <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              size="mini"
              type="danger">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">全选</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>

</template>

<script>
export default {
  name: "shopping_table",
  data() {
    return {
      url:"https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto",
      tableData: [{
        Title: "DARK SHORT DRESS",
        Date: '2016-05-03',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }, {
        Title: "DARK SHORT DRESS",
        Date: '2016-05-02',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }, {
        Title: "DARK SHORT DRESS",
        Date: '2016-05-04',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }, {
        Title: "DARK SHORT DRESS",
        Date: '2016-05-01',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }, {
        Title: "DARK SHORT DRESS",
        Date: '2016-05-08',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }, {
        Title: "DARK SHORT DRESS",
        Date: '2016-05-06',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }, {
        Title: "DARK SHORT DRESS",
        Date: '2016-05-07',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"3.7",
        }
      }],
      multipleSelection: []
    }
  },

  methods: {
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
      rows.splice(index, 1);
    }
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
</style>