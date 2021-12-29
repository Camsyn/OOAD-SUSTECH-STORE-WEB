<template>
  <v-container class="grey lighten-3">
    <v-row>
      <v-col cols="12">
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
          <transition name="fade">
            <router-view></router-view>
          </transition>

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
      { title: "编辑", route: "/myspace/edit" },
      { title: "申诉", route: "/myspace/reportpage" },
    ],
  }),
  computed:{
    info(){
      return this.$store.getters.myInfo;
    }
  },
  created() {
    console.log(this.info)
  }
};
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
