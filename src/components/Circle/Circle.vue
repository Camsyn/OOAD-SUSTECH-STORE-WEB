
<template>
  <div id="Circle">
    <v-container class="pt-0">
      <v-container class="grey lighten-3 pt-0" >
        <v-container class="grey lighten-3 pt-0">
          <v-row>
            <v-col
              cols="12"
              sm="2"
            >
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

                <v-list
                  dense
                  nav
                >
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

                <v-list
                  dense
                  nav
                >
                  <v-list-item
                    v-for="item in items"
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


              </v-sheet>
            </v-col>

            <!--          main区域-->
            <v-col
              cols="12"
              sm="7"
            >
              <v-sheet
                min-height="70vh"
                rounded="lg"
              >
                <router-view></router-view>
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              sm="3"
            >
              <v-sheet
                rounded="lg"
                min-height="268"
              >
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

                <v-list
                  dense
                  nav
                >
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

                <v-list-item
                  v-for="(item,key) in items_5.slice((currentPage-1)*PageSize,currentPage*PageSize)"
                  :key="key"
                  v-show="!item.notice"
                >
                  <v-list-item-avatar>
                    <el-image style="width: 50px; height: 50px" :key="item.avatar" :src="item.avatar"></el-image>
                  </v-list-item-avatar>
                  <span class="font-weight-bold" style= "display:inline">
              {{ item.name }}
                  <el-button  @click="observeClick(item)" :type="item.buttontype"  round style="position:absolute;right:16px;padding: 6px;">{{item.buttontext}}</el-button>
            </span>
                </v-list-item>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-container>

    </v-container>
  </div>

</template>

<script>
import image1 from '../../assets/lemon.png'
export default {
  name: "myCircle",
  data: () => ({
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
    ],
    right: null,

    items_1: [
      { icon: "mdi-incognito", title: "发酷玩圈", route: "/circle/PublishCircle" },
      { icon: "mdi-account-star", title: "正在关注", route: "/circle/observingnow" },
      { icon: "mdi-flower-tulip", title: "种草动态", route: "/circle/Grass" },
      { icon: "mdi-fire-circle", title: "热门分享", route: "/circle/HotSharing" },

    ],
    items_3: [
      { icon: "mdi-checkbox-blank-circle", title: "旅游", route: "/circle/PublishCircle" },
      { icon: "mdi-checkbox-blank-circle", title: "动漫", route: "/circle/Grass" },
      { icon: "mdi-checkbox-blank-circle", title: "车世界", route: "/circle/HotSharing" },
    ],
    items_4: [
      { title: "淘宝双十一促销活动，快来抢大额优惠券", route: "https://world.taobao.com/" },
      { title: "豆瓣电影，一部电影，一场人生之旅", route: "https://www.douban.com/" },
      { title: "知乎，谢邀，人在火星，刚下航母", route: "https://www.zhihu.com/" },
      { title: "量子位，专注技术", route: "https://www.qbitai.com/" },
    ],
    items_5: [
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0502%2Fafee7261p00q9pcjh005kc000eb009ec.png&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639827538&t=97d9adb998c30b205201a0b3369ee39d",
        name: '冯宝儿',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://img2.baidu.com/it/u=2341390205,843145067&fm=26&fmt=auto",
        name: '张楚岚',
        buttontype:'plain',
        notice:false,
        buttontext:'+ 关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
        name: '胡桃',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: '温迪',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        name: '莜拉',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        avatar: "https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto",
        name: '钟离',
        buttontype:'plain',
        notice:false,
        buttontext:'+关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },

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
      let tmp=item.notice
      console.log(tmp)
      if (tmp===true){
        item.notice=false
        item.buttontext="+关注";
        item.buttontype="plain";
      }
      else{
        item.notice=true;
        item.buttontext="已关注";
        item.buttontype="primary"
      }
    }
  },
  created() {
    // 获取数据总数
    this.totalCount = this.items_5.length
  },

}
</script>

<style >
.MyInput .el-input{
  border-radius: 100px;
  color: #eea57e;
}
.myPicShowDialogClass .el-dialog {
  border-radius: 15px;
}

.myPicShowDialogClass .el-dialog__title {
  float: left;
  font-weight:bold;
}

</style>

