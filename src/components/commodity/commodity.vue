<template>
  <v-card class="mx-auto my-6" width="350" min-height="200px" elevation="2">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <div @click="detile" style="cursor: pointer">
      <v-img
          v-if="request.images.length!==0"
          @click="detile"
          height="250"
          :src="request.images[0]"
      ></v-img>
      <v-card-title>{{request.title}}</v-card-title>
      <v-card-text>
        {{request.desc_}}
      </v-card-text>
    </div>

    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-row class="pt-5">
        <v-col class="pa-0" offset="1" cols="2">
          <v-avatar
              class="mb-3"
              size="50"
              @click = 'PersonPage'
              style="cursor: pointer"
          >
            <img :src="request.pusherInfo.headImage" alt="aver">
          </v-avatar>
        </v-col>
        <v-col cols="4" class="pa-0">
          <v-card-text class="px-0">
            <div v-text="request.pusherInfo.nickname" class="text-h6"></div>
          </v-card-text>
        </v-col>
        <v-col class="pa-0" cols="2">
          <v-chip
              class="mt-3"
              color="success"
              outlined
          >
            <v-icon left>
              mdi-server-plus
            </v-icon>
            {{request.pusherInfo.credit}}
          </v-chip>
        </v-col>
        <v-col class="pb-4 mt-1">
          {{'￥ ' + request.exactPrice}}
        </v-col>
      </v-row>
    </v-card-actions>

  </v-card>
</template>

<script>
import request from "../../utils/request";

export default {
  props:["request"],
  name: "commodity",
  data(){
    return{
      title: "",
      pusherInfo: {
        headImage: null,
        nickname: null,
      },
      buySell: ["买","卖"],
    }
  },
  methods: {
    PersonPage() {
      this.$store.commit("OBSERVE", this.request.pusher);
      this.$router.push('/PersonalPage/treasure')
    },
    detile(){
      this.$store.commit("setCur", {request: this.request});
      this.$router.push({name: "GoodsDetails"});
    },
  },
  computed: {

  },

  created() {

  }
};
</script>

<style scoped></style>
