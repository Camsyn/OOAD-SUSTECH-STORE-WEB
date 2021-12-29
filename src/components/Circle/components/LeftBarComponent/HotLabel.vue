<template>
  <div id="observingnow">
    <div  style="padding: 10px">
      <v-card
          class="mx-auto"
      >
        <v-list two-line>
          <template v-for="(item, index) in HotLabel">
            <v-list-item
                :key="index"
            >
              <v-list-item-title v-html="item.labelName"></v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-card>

    </div>

  </div>

</template>

<script>
import circle from "../../../../store/modules/circle";
import user from "../../../../store/modules/user";
export default {
  name: "ObservingNow",
  data:()=>({
    button_text:"取消关注",
  }),
  methods:{
    PersonPage(item) {
      user.state.ObserverId = item.sid
      this.$router.push('/PersonalPage/treasure')
    },
    Details(item) {},
    observeClick(item){
      this.$confirm('是否取消对该用户的关注', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let data2 = []
        let data_id = []
        for (let i = 0; i < circle.state.followList.length ; i++) {
          if( circle.state.followList[i] !== item) {
            data2.push( circle.state.followList[i])
            data_id.push( circle.state.followList[i].sid)
          }
        }
        let data = {
          sid: user.state.sid,
          email: user.state.email,
          nickname : user.state.nickname,
          description: user.state.description,
          credit: user.state.credit,
          liyuan : user.state.liyuan,
          headImage : user.state.avatar,
          payCode : user.state.paycode,
          follow : data_id
        }
        this.$store.dispatch('update',data).then(() => {
          circle.state.followList = data2
          this.$message({
            type: 'success',
            message: '已取消关注'
          })
        }).catch((err) => {
          console.log(err)
        })

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },

  },
  // created() {
  //   circle.state.followList = []
  //   this.$store.dispatch('getMyInfo').then(() => {
  //     for (let i = 0; i <user.state.follow.length ; i++) {
  //       this.$store.dispatch('getInfoOf',user.state.follow[i]).then((data1) => {
  //         circle.state.followList.push(data1)
  //       })
  //     }
  //     return circle.state.followList
  //   })
  // },
  computed:{
    FollowInfo(){
      console.log(circle.state.followList)
      return circle.state.followList
    },
    HotLabel(){
      let pages=1
      let pagesize=6
      let isPush=true
      this.$store.dispatch("ReturnFreqLabel",{pages,pagesize,isPush}).then((data) => {
        console.log("data:.....",data)
        return data
      })
    }
  }
};
</script>

<style scoped>

</style>
