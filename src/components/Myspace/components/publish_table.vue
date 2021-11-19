

<template>
  <el-table
      :data="tableData.filter(data =>
      !search || data.Title.toLowerCase().includes(search.toLowerCase())
      || data.ID.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      :default-sort = "{prop: 'Date', order: 'descending'}"
  >

    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>

    <el-table-column
        label="发布日期"
        prop="Date"
        sortable
    >
    </el-table-column>

    <el-table-column
        label="商品ID"
        prop="ID">
    </el-table-column>

    <el-table-column
        label="商品名称"
        prop="Title">
    </el-table-column>

    <el-table-column
        label="获取方法"
        prop="Method">
    </el-table-column>

    <el-table-column
        label="价格"
        width="150">
      <template slot-scope="scope">
        <div class="Now">{{scope.row.price}}</div>
      </template>
    </el-table-column>

    <el-table-column
        align="right">
      <template slot="header" slot-scope="scope">
        <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            size="mini"
            type="danger">
          撤回
        </el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
    name: "publish_table",
  data() {
    return {
      url:"https://img1.baidu.com/it/u=1034833325,3625066472&fm=26&fmt=auto",
      tableData: [{
        ID:"1212129",
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
        ID:"32131231",
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
        ID:"321314554",
        Title: "SA sadsada",
        Date: '2016-05-04',
        put_Date:'2016-05-03',
        Method:"自提",
        Condition: "New",
        price:110,
        User:{
          name: "dadas WDWAD",
          picture:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
          value:"4.9",
        }
      }, {
        ID:"312424234",
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
        ID:"377657575",
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
        ID:"12365458",
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
        ID:"54387687987",
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
      multipleSelection: [],
      search: ''
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
}
</script>


<style scoped>
.Now {
  font-size: 30px;
  font-weight: 700;
}
</style>