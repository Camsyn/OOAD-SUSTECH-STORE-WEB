<template>
<div>

    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column
        label="日期"
        prop="date">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" >
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>

</div>
</template>

<script>
export default {
  name: "publish",
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-purse-outline", title: "我发布的", route: "publish" },
      { icon: "mdi-cart-arrow-up", title: "我卖出的", route: "sold" },
      { icon: "mdi-cart-arrow-down", title: "我买到的", route: "bought" },
      { icon: "mdi-cart-variant", title: "我可转卖的", route: "nextsell" },
      { icon: "mdi-star", title: "收藏", route: "collection" },
      { icon: "mdi-walk", title: "足迹", route: "trail" },
      { icon: "mdi-heart-plus", title: "关注", route: "concerns" },
      { icon: "mdi-human-greeting-variant", title: "粉丝", route: "fans" },
      { icon: "mdi-wrench", title: "设置", route: "settings" },
    ],
    tableData: [{
      date: '2016-05-02',
      name: 'LV',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '阿玛尼',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      date: '2016-05-01',
      name: 'GUCCI',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      date: '2016-05-03',
      name: '玩家国度白金版',
      address: '上海市普陀区金沙江路 1516 弄'
    }],
    search: '',
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },

  }),

};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
