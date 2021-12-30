<template>
  <div class="table" style="padding: 20px">

<!--    <v-row>-->
<!--      <span v-text="maidaode" class="my-4 mx-auto"></span>-->
<!--    </v-row>-->
    <el-table
        empty-text="暂无数据"
        :data='all'
        tooltip-effect="dark"
        style="width: 100%"
    >
      <el-table-column
          prop="type"
          label="被举报类型"
          width="150">
      </el-table-column>

      <el-table-column
          prop="target"
          label="被举报对象编号"
          width="150">
      </el-table-column>

<!--      <el-table-column-->
<!--          label="被投诉商家"-->
<!--          width="120"-->
<!--      >-->
<!--        <template slot-scope="scope">-->
<!--          <i @click="new PersonIn(scope.row.pusher)"-->
<!--             style="cursor: pointer">-->
<!--            {{ scope.row.pusher }}-->
<!--          </i>-->
<!--        </template>-->
<!--      </el-table-column>-->

<!--      <el-table-column-->
<!--          prop="tradeCnt"-->
<!--          label="数量"-->
<!--          width="120">-->
<!--      </el-table-column>-->

      <el-table-column
          prop="time"
          label="举报时间"
          width="150">
      </el-table-column>

<!--      <el-table-column-->
<!--          label="价格"-->
<!--          width="150">-->
<!--        <template slot-scope="scope">-->
<!--          <div class="Now">{{scope.row.singlePrice}}</div>-->
<!--        </template>-->
<!--      </el-table-column>-->

      <el-table-column
          prop="states"
          label="举报状态"
          width="150">
      </el-table-column>

      <el-table-column
          prop="content"
          label="举报内容"
          width="200">
      </el-table-column>

      <el-table-column
          fixed="right"
          label="操作"
          width="250">
        <template slot-scope="scope">
          <el-button
              @click="argue(scope.row)"
              size="mini"
              type="danger">
            申诉
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="d-flex justify-center">
      <v-pagination v-model="page" @input="more" :length="length">
      </v-pagination>
    </div>
    <reportArgue :dialog="repo" :id="this.order_id"  v-on:close="repo=false"></reportArgue>
  </div>
</template>

<script>
import reportArgue from '../../../components/reportArgue'
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
      stats:["审核中","过审","不过审","申诉审核中","申诉失败，确认不过审"],
      types:["用户","请求","订单","动态",'评论'],
    }
  },
  components : {
    reportArgue
  },
  computed: {
    maidaode(){
      return "申诉记录 (第"+this.page+"页)";
    }
  },

  methods: {
    argue(item) {
      this.repo = true
      this.order_id = item.r_id
    },

    more(){
      this.repo = false
      if (this.page<this.length){
        return;
      }
      this.$store.dispatch('selectReportRecord').then((data) => {
        console.log(data)
        this.all = data
        for (let i = 0; i <this.all.length ; i++) {
          this.all[i].type = this.types[this.all[i].category]
          this.all[i].time = this.all[i].time.substr(0,10)
          this.all[i].states = this.stats[this.all[i].state]
          if(this.all[i].description.length >=15) {
            this.all[i].content = this.all[i].description.substr(0,15) + "....."
          }
          else {
            this.all[i].content = this.all[i].description
          }
        }

      }).catch((err) => {
        console.log(err)
      })
    },

  },
  created() {

    this.more();
  }
}
</script>

<style scoped>

</style>
