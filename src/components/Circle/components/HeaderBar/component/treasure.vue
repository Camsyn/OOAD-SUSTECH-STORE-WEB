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
              :src="item.images[0]"
              aspect-ratio="1"
          ></v-img>


          <div style="font-size: small;color: #070301;padding-bottom: 10px">
            {{ item.desc_ }}
          </div>
          <div style="font-size: x-small;color: #e17d63;padding-bottom: 10px;display: flex">
            {{ item.title }}
          </div>
          <div style="font-size: small;color: #80848a;">

            <v-icon color="green">mdi-drupal</v-icon> &nbsp;
            <v-btn
                @click="toCustomer"
                color="white"
                text
                depressed
            >
              叛逆的鲁鲁修
            </v-btn>
          </div>

        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import user from "../../../../../store/modules/user";
export default {
  name: "treasure",
  data:()=>({
   goods:[],
  }),
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
