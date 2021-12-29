<template>
  <div style="padding: 10px">
    <v-card
      class="mx-auto"
    >
      <div>
          <v-img
            class="white--text align-end"
            src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            height="200px"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

        <button class="Action3" @click = ReportUser>
          <i class="el-icon-error"></i>
           举报
        </button>


        <v-card
          class="d-flex pa-2"
          flat
          tile
        >
          <div>
            <v-avatar size="90" >
              <img v-bind:src="url0" alt="CC" />
            </v-avatar>
            <span class="font-weight-bold" style= "display:inline;font-size: 20px">
              {{this.Info.nickname}}
            </span>
          </div>
        </v-card>

        <v-card-subtitle>
          {{ this.Info.description }}
        </v-card-subtitle>
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div style="font-size: x-small;color: #80848a">
                <v-icon small>mdi-alpha-v-circle-outline</v-icon> &nbsp;秒拍达人
                &nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon small>mdi-alpha-b-circle-outline</v-icon> &nbsp;芝麻信用极好
                &nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon small>mdi-account-circle-outline</v-icon> &nbsp;已认证
              </div>
            </v-expansion-panel-header>
<!--            <v-expansion-panel-content>-->
<!--              <div style="font-size: x-small;color: #80848a;padding-bottom: 23px">-->
<!--                <v-icon small>mdi-emoticon-happy-outline</v-icon> &nbsp;{{MyInfo.selfIntroduce+"-"+MyInfo.constellation}}-->
<!--              </div>-->
<!--              <div style="font-size: x-small;color: #80848a;padding-bottom: 23px">-->
<!--                <v-icon small>mdi-folder-account-outline</v-icon> &nbsp;{{ MyInfo.career }}-->
<!--              </div>-->
<!--              <div style="font-size: x-small;color: #80848a;">-->
<!--                <v-icon small>mdi-heart-outline</v-icon> &nbsp;{{ MyInfo.hobby }}-->
<!--              </div>-->

<!--            </v-expansion-panel-content>-->
          </v-expansion-panel>
        </v-expansion-panels>

      </div>

      <v-tabs
        color="deep-purple accent-4"
        right
      >
        <v-tab
        v-for="(item,index) in carts"
        :key="index"
        @click="$router.push({name: item.to})"
        >
          {{item.name}}
        </v-tab>
      </v-tabs>
      <router-view></router-view>
    </v-card>
  </div>
</template>

<script>
import circle from "../../../../store/modules/circle";
import user from "../../../../store/modules/user";
export default {
  name: "PersonalPage",
  data: () => ({
    Info: {},
    url0:"https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto",
    show1:false,
    heatColor:"gray",
    heartNum:256,
    show2: false,
    messageColor:"gray",
    messageNum:666,
    show3:false,
    sharingColor:"gray",
    sharingNum:486,
    form:{
      name:'',
      avatar:'',
      moto:'',
      constellation:'',
      selfIntroduce:'',
      career:'',
      hobby:'',
    },

    carts:[
      {
        id:0,
        name:"宝贝",
        to:"treasure",
      },
      {
        id:1,
        name:"评价",
        to:"evaluate",
      },
      {
        id:2,
        name:"动态",
        to:"dynamic",
      },
    ],
    dialog: false,
  }),
  methods:{
    ReportUser() {
      this.$confirm('是否举报该用户', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    toCustomer() {
      this.$router.push("/circle/Customer");
    },
    EditMyInfo(){
      this.dialog=false
    }
  },
  created(){
      this.$store.dispatch('getInfoOf',user.state.ObserverId).then((data) => {
        this.Info = data
        this.url0 = data.headImage
      })
  }
};
</script>

<style scoped>

.Action3 {
  font-size: 20px;
  margin-top: 20px;
  margin-right: 20px;
  float: right;
}
</style>
