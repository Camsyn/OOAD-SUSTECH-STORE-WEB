<template>
  <div id="observingnow">
    <div  style="padding: 10px">
      <v-card
        class="mx-auto"
      >
        <v-list two-line>
          <template v-for="(item, index) in FollowInfo">
            <v-list-item
              :key="index"
            >
              <v-btn
                  icon
                  x-large
                  v-on="on"
                  @click = 'PersonPage(item)'
              >
                <v-list-item-avatar>
                  <img :src="item.headImage" alt="CC" >
                </v-list-item-avatar>
              </v-btn>

              <v-list-item-content>
                <v-list-item-title v-html="item.nickname"></v-list-item-title>
                <span class="font-weight-bold" style= "display:inline">

                </span>
                <v-row>
                  <v-col cols="12" md="9" sm="9">
                    <v-list-item-subtitle v-html="item.description">
                    </v-list-item-subtitle>
                  </v-col>
                 <v-col cols="12" md="3" sm="3">
                   <v-btn
                       depressed
                       color="error"
                       right
                       @click="observeClick(item)"
                   >
                     取消关注
                   </v-btn>
                 </v-col>

                </v-row>

              </v-list-item-content>
            </v-list-item>
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
  }),
  methods:{
    PersonPage(item) {
      user.state.ObserverId = item.sid
      this.$router.push('/PersonalPage')
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
  created() {
    circle.state.followList = []
    this.$store.dispatch('getMyInfo').then(() => {
      for (let i = 0; i <user.state.follow.length ; i++) {
        this.$store.dispatch('getInfoOf',user.state.follow[i]).then((data1) => {
          circle.state.followList.push(data1)
        })
      }
      return circle.state.followList
    })
  },
  computed:{
    FollowInfo(){
      console.log(circle.state.followList)
      return circle.state.followList
    }
  }
};
</script>

<style scoped>

</style>
