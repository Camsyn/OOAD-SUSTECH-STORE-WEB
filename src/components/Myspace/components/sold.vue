<template>
  <div>
    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[
            { text: '2016-05-01', value: '2016-05-01' },
            { text: '2016-05-02', value: '2016-05-02' },
            { text: '2016-05-03', value: '2016-05-03' },
            { text: '2016-05-04', value: '2016-05-04' },
          ]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column prop="name" label="商品" width="180">
      </el-table-column>
      <el-table-column prop="address" label="店家" :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[
            { text: '食品', value: '食品' },
            { text: '数码', value: '数码' },
          ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '食品' ? 'primary' : 'success'"
            disable-transitions
          >{{ scope.row.tag }}</el-tag
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "sold",
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
    tableData: [
      {
        date: "2016-05-02",
        name: "良品铺子",
        address: "京东",
        tag: "食品",
      },
      {
        date: "2016-05-04",
        name: "三只松鼠",
        address: "天猫",
        tag: "食品",
      },
      {
        date: "2016-05-01",
        name: "iPhone13 Pro Max",
        address: "上海市IFS AppStore",
        tag: "数码",
      },
      {
        date: "2016-05-03",
        name: "Rog 冰刃",
        address: "台北曼哈顿Rog旗舰店",
        tag: "数码",
      },
    ],
  }),
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
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
