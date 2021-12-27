<template>
  <div class="table">
    <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
       >

      <el-table-column
          label="总量"
          width="120">
      </el-table-column>


    </el-table>
    <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
name: "testStore",
  data(){
  return{
    emm: new Map(),
    haha: [1],
    recvId: "11911626",
    msg: "hello! again!",
    type: 0,
    tableData: [1,2,3,4,5,6,7,8]
    }
  },

  computed: {
    tk() {
      return this.$store.getters.tk;
    }
  },

  methods: {
    setup(){
      this.$store.dispatch("setupChat", "11910620")
    },
    test(){
      this.$store.commit("SEND_MSG", {recvId: this.recvId, msg: this.msg, type: 0})
    }
  }
}
</script>

<style scoped>

</style>
