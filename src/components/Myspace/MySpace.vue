<template>
  <v-container>
    <v-row>
      <v-col>
        <v-navigation-drawer v-model="drawer" color="grey lighten-5">
          <v-sheet color="grey lighten-3" class="pa-4">
            <!--用户头像-->
            <v-avatar>
              <img src="../../assets/C.C..png" alt="C.C." />
            </v-avatar>
            <div>C.C.@sustech.edu.cn</div>
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
      </v-col>
      <v-col>
        <!--右边main区域-->
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
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
      { icon: "mdi-cart-variant", title: "购物车", route: "/myspace/nextsell" },
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
</style>
