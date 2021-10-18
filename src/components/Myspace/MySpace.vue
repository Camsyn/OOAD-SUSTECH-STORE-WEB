<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" color="deep-orange lighten-5" app>
      <v-sheet color="deep-orange lighten-3" class="pa-4">
        <!--用户头像-->
        <v-avatar>
          <img src="../../assets/CC.png" alt="CC" />
        </v-avatar>

        <div>CC@sustech.edu.cn</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          dense
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--右边main区域-->
    <v-main app>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "MySpace",
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-purse-outline", title: "我发布的", route: "/myspace/publish" },
      { icon: "mdi-cart-arrow-up", title: "我卖出的", route: "/myspace/sold" },
      { icon: "mdi-cart-arrow-down", title: "我买到的", route: "/myspace/bought" },
      { icon: "mdi-cart-variant", title: "我可转卖的", route: "/myspace/nextsell" },
      { icon: "mdi-star", title: "收藏", route: "/myspace/collection" },
      { icon: "mdi-walk", title: "足迹", route: "/myspace/trail" },
      { icon: "mdi-heart-plus", title: "关注", route: "/myspace/concerns" },
      { icon: "mdi-human-greeting-variant", title: "粉丝", route: "/myspace/fans" },
      { icon: "mdi-wrench", title: "设置", route: "/myspace/settings" },
      { icon: "mdi-home", title: "首页", route: "/" },
    ],
  }),
  // methods: {
  //   toSettings() {
  //     this.$router.push("settings");
  //   },
  // },
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
