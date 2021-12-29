<template>
  <v-container class="grey lighten-3 pt-0">
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet
          rounded="lg"
          min-height="268"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                首页
              </v-list-item-title>
              <v-list-item-subtitle>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item
                    v-for="item in items_1"
                    :key="item.title"
                    link
                    :to="item.route"
                  >
              <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
                <!--        左下方分组检索-->
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      分组
                    </v-list-item-title>
                    <v-list-item-subtitle>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense nav>
                  <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :to="{path: item.route}"
                  >
                    <v-list-item-icon>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>
      <v-col cols="12" sm="7">
        <v-sheet min-height="70vh" rounded="lg">
          <router-view></router-view>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="3">
        <v-sheet rounded="lg" min-height="268">
          <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      热搜榜
                    </v-list-item-title>
                    <v-list-item-subtitle>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
          <v-divider></v-divider>
          <v-list dense nav>
            <v-list-item
                    v-for="(item, index) in items_4"
                    :key="item.title"
                    dense
                    :href="item.route"
                  >
                    <v-list-item-content>
                      <v-list-item-title>{{ index+1 }} - {{ item.title }} </v-list-item-title>

                    </v-list-item-content>
                  </v-list-item>
          </v-list>
          <v-list-item>
            <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      你可能感兴趣的人
                    </v-list-item-title>
                    <v-list-item-subtitle>
                    </v-list-item-subtitle>
                  </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <!--          分页-->
          <el-pagination
              @current-change="handleCurrentChange"
              v-model:currentPage="currentPage"
              :page-size="PageSize"
              :total="totalCount"
              layout="prev,next"
              class="paging"
          >
          </el-pagination>
          <v-list-item v-for="(item,key) in all_unfollowers.slice((currentPage-1)*PageSize,currentPage*PageSize)" :key="key">
            <v-btn icon x-large @click = 'PersonPage(item)'>
              <v-list-item-avatar>
                      <el-image style="width: 50px; height: 50px" :key="item.headImage" :src="item.headImage"></el-image>
                    </v-list-item-avatar>
            </v-btn>
            <v-list-item-title v-html="item.nickname"></v-list-item-title>
            <v-spacer></v-spacer>
            <span class="font-weight-bold" style= "display:inline">
              <v-btn
                  depressed
                  color="primary"
                  right
                  @click="observeClick(item)"
                 >
                  +关注
              </v-btn>
            </span>
          </v-list-item>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import image1 from '../../assets/lemon.png'
import circle from "../../store/modules/circle";
import {mapGetters,mapMutations } from "vuex";
import head from '../../assets/head.jpeg';
import user from "../../store/modules/user";
export default {
  name: "myCircle",
  data: () => ({
    tmp:'',
    lemon:image1,
    loading: false,
    centerDialogVisible: false,
    selectCircle: "公开",
    textarea: '',
    page: 1,
    currentPage: 1,
    PageSize:3,
    totalCount: 15,

    items: [
      { title: '动漫', icon: 'mdi-drupal',route: "/circle/carton" },
      { title: '游戏', icon: 'mdi-steam',route: "/circle/game" },
      { title: '旅游', icon: 'mdi-car-estate',route: "/circle/tour"},
      { title: '美食', icon: 'mdi-food-turkey',route: "/circle/delicious_food"},
      { title: '萌宠', icon: 'mdi-dog',route: "/circle/cute_pet"},
      { title: '哲思', icon: 'mdi-head-lightbulb',route: "/circle/philosophizing"},
      { title: '其它', icon: 'mdi-waze',route: "/circle/another"},
    ],
    right: null,

    items_1: [
      { icon: "mdi-incognito", title: "发酷玩圈", route: "/circle/PublishCircle" },
      { icon: "mdi-account-star", title: "正在关注", route: "/circle/observingnow" },
      { icon: "mdi-flower-tulip", title: "种草动态", route: "/circle/Grass" },
      { icon: "mdi-fire-circle", title: "热门分享", route: "/circle/HotSharing" },

    ],
    items_4: [
      { title: "淘宝双十一促销活动，快来抢大额优惠券", route: "https://world.taobao.com/" },
      { title: "豆瓣电影，一部电影，一场人生之旅", route: "https://www.douban.com/" },
      { title: "知乎，谢邀，人在火星，刚下航母", route: "https://www.zhihu.com/" },
      { title: "量子位，专注技术", route: "https://www.qbitai.com/" },
    ],
    messages:[
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify!',
        excerpt: 'Thank you for joining our community...',
      },
    ]
  }),
  methods: {
    PersonPage(item) {
      user.state.ObserverId = item.sid
      this.$router.push('/PersonalPage')
    },
    toHome() {
      this.$router.push("/");
    },
    toPersonalPage(){
      this.$router.push("/circle/PersonalPage")
    },
    toMessagePage(){
      this.$router.push("/circle/MessagePage")
    },
    handleCommand(command) {
      this.selectCircle=command;
      // this.$message('click on item ' + command);
    },
    handleCurrentChange(pageNumber) {
      // 改变默认的页数
      this.currentPage = pageNumber;
    },
    observeClick(item){
      let data_follow = []
      let data3 = []
      let data_id = []
      for (let i = 0; i < circle.state.followList.length ; i++) {
        data_id.push(circle.state.followList[i].sid)
        data_follow.push(circle.state.followList[i])
      }
      for (let i = 0; i <circle.state.unfollowList.length ; i++) {
        if(circle.state.unfollowList[i] !== item){
          data3.push(circle.state.unfollowList[i])
        }
        else {
          data_id.push(circle.state.unfollowList[i].sid)
          this.$store.dispatch('getInfoOf',circle.state.unfollowList[i].sid).then((data1) => {
            data_follow.push(data1)
          })
        }
      }
      circle.state.followList = data_follow
      circle.state.unfollowList = data3
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
      })
    }
  },
  computed: {
    all_unfollowers() {
      return circle.state.unfollowList
    }
  },
  created(){
      let data = {
        size : 6
      }
      this.$store.dispatch('getMyInfo').then(() => {
        this.$store.dispatch('getRandomUser',data).then((data) => {
          let data3 = []
          for (let i = 0; i <data.length ; i++) {
            let test = true
            if(data[i].headImage == null) {
              data[i].headImage = head
            }
            if (data[i].nickname == null) {
              data[i].nickname = data[i].sid
            }
            for (let j = 0; j <user.state.follow.length ; j++) {
              if(data[i].sid == user.state.follow[j]){
                test = false
              }
            }
            if (test) {
              data3.push(data[i])
            }
          }
          circle.state.unfollowList = data3
          this.totalCount = data3.length
        })
      })
  }
}
</script>

<style >
</style>

