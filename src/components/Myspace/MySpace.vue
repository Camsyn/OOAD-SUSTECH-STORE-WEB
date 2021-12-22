<template>
  <v-container class="grey lighten-3 pt-0">
    <v-row>
      <v-col
            cols="2"
            sm="2"
          >
            <v-sheet
              rounded="lg"
              min-height="268"
            >
              <v-list-item>
                <v-list-item-content>
                  <!--用户头像-->
                  <v-avatar size="70">
                    <img src="../../assets/C.C..png" alt="C.C." />
                  </v-avatar>
                </v-list-item-content>
              </v-list-item>

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


            </v-sheet>
          </v-col>
      <v-col
            cols="10"
            sm="10"
          >
            <v-sheet
              min-height="80vh"
              rounded="lg"
            >
              <!--右边main区域-->
              <router-view></router-view>
            </v-sheet>
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
      { icon: "mdi-wrench", title: "主页", route: "/myspace/settings" },
      { icon: "mdi-purse-outline", title: "我发布的", route: "/myspace/publish" },
      { icon: "mdi-cart-arrow-up", title: "我卖出的", route: "/myspace/sold" },
      { icon: "mdi-cart-arrow-down", title: "我买到的", route: "/myspace/bought" },
      { icon: "mdi-cart-variant", title: "购物车", route: "/myspace/nextsell" },
      { icon: "mdi-star", title: "收藏", route: "/myspace/collection" },
      { icon: "mdi-walk", title: "足迹", route: "/myspace/trail" },
      { icon: "mdi-heart-plus", title: "关注", route: "/myspace/concerns" },
      { icon: "mdi-human-greeting-variant", title: "粉丝", route: "/myspace/fans" },
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
