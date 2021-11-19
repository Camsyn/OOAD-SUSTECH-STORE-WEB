
<template>
  <v-app id="inspire">


    <!--    顶部灰色条-->
    <v-app-bar
      app
      flat

    >

      <v-spacer></v-spacer>


      <el-badge value="new" class="item">
        <v-icon
          style="font-size: 40px; color: #e57850"
        >
          mdi-account
        </v-icon>
      </el-badge>

      <v-spacer></v-spacer>

      <el-badge :value="200" :max="99" class="item">
        <v-icon
          style="font-size: 40px; color: #e57850"
        >
          mdi-email-outline
        </v-icon>
      </el-badge>


      <v-spacer></v-spacer>
      <v-icon
        style="font-size: 40px; color: #e57850"
      >
        mdi-face-recognition
      </v-icon>
      <!--      fire-circle-->
      <v-spacer></v-spacer>
      <v-btn
        class="mini"
        fab
        dark
        small
        color="cyan"
        @click="centerDialogVisible = true"
      >
        <v-icon
          dark
        >
          mdi-pencil
        </v-icon>
      </v-btn>

    </v-app-bar>






    <!--左侧区域-->
    <v-navigation-drawer
      app
      width="300"
      clipped
    >
      <!--最左边的边框-->
      <v-navigation-drawer
        absolute
        color="grey lighten-3"
        mini-variant
      >
        <div style="position: center;padding-top: 10px;padding-left: 10px">
          <v-btn
            icon
            @click="toHome"
          >
            <v-icon
              large
              color="green darken-2"
            >
              mdi-home
            </v-icon>
          </v-btn>

        </div>


        <v-divider class="mx-3 my-5"></v-divider>

      </v-navigation-drawer>


      <v-list
        class="pl-14"
        shaped
      >
        <div style="position: center;padding-top: 10px;padding-left: 10px;padding-bottom: 10px">
          <v-icon
            style="font-size: 60px; color: #eea57e"
          >
            mdi-zigbee
          </v-icon>
          <span class="font-weight-black" style= "color: coral;font-size: 30px">
              Circle
            </span>
        </div>

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
      </v-list>
    </v-navigation-drawer>


    <!--    右侧区域-->
    <v-navigation-drawer
      app
      clipped
      right
    >
      <v-list>
        <div style="padding-left: 20px;padding-top: 20px;font-family:Arial,Helvetica,sans-serif;font-size:14px;">
          热搜榜
          <v-btn
            icon
            color="gray"
          >
            <v-icon>mdi-cached</v-icon>
          </v-btn>
        </div>

        <v-list-item
          v-for="(item, index) in items_4"
          :key="item.title"
          dense
          :href="item.route"
        >
          <v-list-item-content>
            <v-list-item-title>{{ index }} - {{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <div style="padding-left: 20px;padding-top: 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;">
          你可能感兴趣的人
        </div>
        <!--          分页-->
        <el-pagination
          @current-change="handleCurrentChange"
          v-model:currentPage="currentPage"
          :page-size="PageSize"
          :total="totalCount"
          :pager-count="3"
          layout="prev,pager,next"
          class="paging"
        >
        </el-pagination>


        <v-list-item v-for="item in items_5.slice((currentPage-1)*PageSize,currentPage*PageSize)">
          <v-list-item-avatar>
            <el-image style="width: 50px; height: 50px" :key="item.avatar" :src="item.avatar"></el-image>
          </v-list-item-avatar>
          <span class="font-weight-bold" style= "display:inline">
              {{ item.name }}
            </span>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>

    <!--右上角图标   发布帖子  对应的弹出框-->

    <el-dialog
      title="快捷发布"
      :visible.sync="centerDialogVisible"
      width="50%"
      class="myPicShowDialogClass"
      center>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 12}"
        placeholder="有什么新鲜事想分享给大家？"
        class="MyInput"
        v-model="textarea">
      </el-input>
      <div style="padding-top: 5px;padding-bottom: 20px;">
        <div style="padding-top: 10px;display: flex">


          <div style="padding: 5px">
            <v-icon
              style="font-size: 40px; color: #e57850"
            >
              mdi-emoticon-happy-outline
            </v-icon>
          </div>


          <div style="padding: 5px">
            <v-icon
              style="font-size: 40px; color: #e57850"
            >
              mdi-image-search-outline
            </v-icon>
          </div>

          <div style="padding: 5px">
            <v-icon
              style="font-size: 40px; color: #e57850"
            >
              mdi-movie-open-play
            </v-icon>
          </div>

          <div style="padding: 5px">
            <v-icon
              style="font-size: 40px; color: #e57850"
            >
              mdi-alpha
            </v-icon>
          </div>

          <div style="padding: 5px">
            <v-icon
              style="font-size: 40px; color: #e57850"
            >
              mdi-map-marker
            </v-icon>
          </div>

          <div style="padding: 5px">
            <v-icon
              style="font-size: 40px; color: #e57850"
            >
              mdi-timer-settings-outline
            </v-icon>
          </div>
          <div style="padding-top: 10px;padding-right: 10px">
            <el-dropdown trigger="click" @command="handleCommand">
              <span class="el-dropdown-link" style= "display:inline">
                {{ selectCircle }}
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu  slot="dropdown" >
                <el-dropdown-item command="公开">公开</el-dropdown-item>
                <el-dropdown-item command="粉丝">粉丝</el-dropdown-item>
                <el-dropdown-item command="好友圈">好友圈</el-dropdown-item>
                <el-dropdown-item command="仅自己可见">仅自己可见</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div style="position: absolute;padding-top: 5px;right:2px">
            <el-button type="primary" @click="centerDialogVisible = false">发送</el-button>
          </div>
        </div>

      </div>

    </el-dialog>


  </v-app>
</template>

<script>
export default {
  name: "CircleTest",
  data: () => ({
    // drawer: null,
    loading: false,
    centerDialogVisible: false,
    selectCircle: "公开",
    textarea: '',
    page: 1,
    currentPage: 1,
    PageSize:3,
    totalCount: 15,

    items: [
      { title: '旅游', icon: 'mdi-checkbox-blank-circle',route: "/circle/PublishCircle" },
      { title: '动漫', icon: 'mdi-checkbox-blank-circle',route: "/circle/Grass" },
      { title: '车世界', icon: 'mdi-checkbox-blank-circle',route: "/circle/HotSharing"},
    ],
    right: null,

    items_1: [
      { icon: "mdi-incognito", title: "发会玩圈子", route: "/circle/PublishCircle" },
      // { icon: "mdi-email-multiple", title: "互动消息", route: "/myspace/sold" },
      { icon: "mdi-flower-tulip", title: "已种草", route: "/circle/Grass" },
      // { icon: "mdi-emoticon-cool", title: "我的酷玩圈", route: "/myspace/nextsell" },
      // { icon: "mdi-star", title: "收藏", route: "/myspace/collection" },
      { icon: "mdi-fire-circle", title: "热门分享", route: "/circle/HotSharing" },
      // { icon: "mdi-account-reactivate-outline", title: "热门榜单", route: "/myspace/sold" },
      // { icon: "mdi-alien-outline", title: "话题榜", route: "/circle/HotTopic" },
      // { icon: "mdi-magnify", title: "热搜榜", route: "/myspace/nextsell" },
    ],
    items_3: [
      { icon: "mdi-checkbox-blank-circle", title: "旅游", route: "/circle/PublishCircle" },
      { icon: "mdi-checkbox-blank-circle", title: "动漫", route: "/circle/Grass" },
      { icon: "mdi-checkbox-blank-circle", title: "车世界", route: "/circle/HotSharing" },
    ],
    items_4: [
      { title: "淘宝", route: "https://world.taobao.com/" },
      { title: "豆瓣", route: "https://www.douban.com/" },
      { title: "知乎", route: "https://www.zhihu.com/" },
      { title: "量子位", route: "https://www.qbitai.com/" },
    ],
    items_5: [
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdingyue.ws.126.net%2F2020%2F0502%2Fafee7261p00q9pcjh005kc000eb009ec.png&refer=http%3A%2F%2Fdingyue.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639827538&t=97d9adb998c30b205201a0b3369ee39d",
        name: '冯宝儿',
      },
      {
        avatar: "https://img2.baidu.com/it/u=2341390205,843145067&fm=26&fmt=auto",
        name: '张楚岚',
      },
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
        name: '胡桃',
      },
      {
        avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: '温迪',
      },
      {
        avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        name: '莜拉',
      },
      {
        avatar: "https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto",
        name: '钟离',
      },

      {
        avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: '温迪',
      },
      {
        avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        name: '莜拉',
      },
      {
        avatar: "https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto",
        name: '钟离',
      },

      {
        avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: '温迪',
      },
      {
        avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        name: '莜拉',
      },
      {
        avatar: "https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto",
        name: '钟离',
      },

      {
        avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        name: '温迪',
      },
      {
        avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        name: '莜拉',
      },
      {
        avatar: "https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto",
        name: '钟离',
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
    handleCommand(command) {
      this.selectCircle=command;
      // this.$message('click on item ' + command);
    },
    handleCurrentChange(pageNumber) {
      // 改变默认的页数
      this.currentPage = pageNumber;
    },
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

