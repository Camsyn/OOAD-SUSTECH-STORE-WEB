<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col
            v-for="(item,index) in goods"
            :key="index"
            cols="12"
            md="4"
        >
            <v-img
                @click = 'GoodDetails(item)'
                style="cursor: pointer"
                :src="item.images[0]"
                aspect-ratio="1"
            ></v-img>



          <div style="font-size: small;color: #070301;padding-bottom: 10px">
            {{ item.desc_ }}
          </div>
          <div style="font-size: x-small;color: #e17d63;padding-bottom: 10px;display: flex">
            {{ item.title }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import user from "../../../../../store/modules/user";
import goods from "../../../../../store/modules/goods";
export default {
  name: "treasure",
  data:()=>({
   goods:[],
  }),
  methods: {
    GoodDetails(item) {
      this.$store.dispatch('getInfoOf',item.pusher).then((data) => {
        goods.state.current.request = item
        goods.state.current.request.pusherInfo = data
        this.$router.push('/GoodsDetails')
      })
    }
  },
  created() {
    let my = {
      page: 1,
      limit: 99,
      searchStrategy: 0,
      firstOrder: "update_time",
      isAmbiguous: false,
      publishers: [user.state.ObserverId],
    };
    this.$store.dispatch("search",my).then((data) => {
      this.goods = data
    });

  }
}
</script>

<style scoped>

</style>
