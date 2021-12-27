<template>
  <v-container class="grey lighten-3">
    <v-row>
      <v-col cols="12">
        <v-sheet
              rounded="lg"
            >
              <v-row>
                <v-col cols="2" class="pa-0">
                  <v-avatar tile size="100" class="ml-10 mt-3 mb-3">
                    <img :src="info.headImage" alt="头像" />
                  </v-avatar>
                </v-col>
                <v-col class="mt-1">
                  <div class="text-h4 font-weight-black" v-text="info.sid"></div>
                  <div class="text-h6 grey--text" v-text="info.nickname" ></div>
                  <div class="text-h6 grey--text" v-text="info.email"></div>
                </v-col>
                <v-col>
                  <span>
                   {{info.description}}
                  </span>
                </v-col>
              </v-row>
        </v-sheet>
        <v-sheet min-height="70vh" class="mt-5">
          <v-row>
            <v-col>
              <v-tabs
                  centered
                  color="grey darken-1"
              >
                <v-tab
                    v-for="item in items"
                    :key="item.index"
                    @click="$router.push({path: item.route})"
                >
                  {{item.title}}
                </v-tab>
              </v-tabs>
            </v-col>
          </v-row>
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
      { icon: "mdi-purse-outline", title: "我发布的", route: "/myspace/publish" },
      { icon: "mdi-cart-arrow-up", title: "我卖出的", route: "/myspace/sold" },
      { icon: "mdi-cart-arrow-down", title: "我买到的", route: "/myspace/bought" },
      { icon: "mdi-cart-variant", title: "购物车", route: "/myspace/nextsell" },
      { icon: "mdi-heart-plus", title: "关注", route: "/myspace/concerns" },
      { icon: "mdi-human-greeting-variant", title: "粉丝", route: "/myspace/fans" },
      { title: "编辑", route: "/myspace/edit" },
    ],
  }),
  computed:{
    info(){
      return this.$store.getters.myInfo;
    }
  },
};
</script>

<style scoped>
</style>
