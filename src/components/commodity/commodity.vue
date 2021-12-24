<template>
  <v-card class="mx-auto my-6" width="350" min-height="200px" elevation="1">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
        v-if="request.images.length!==0"
        @click="detile"
          height="250"
          :src="request.images[0]"
      ></v-img>
    <v-card-title>{{request.title}}</v-card-title>
    <v-card-text>
      {{request.description}}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-row class="pt-5">
        <v-col class="pa-0" offset="1" cols="2">
          <v-avatar
              class="pb-3"
              size="50"
          >
            <img :src="request.pusherInfo.headImage" alt="aver">
          </v-avatar>
        </v-col>
        <v-col cols="4" class="pa-0">
          <v-card-text class="pt-3 px-0">
            {{request.pusherInfo.nickname}}
          </v-card-text>
        </v-col>
        <v-col class="pa-0" cols="3">
          <v-chip
              class="ma-2"
              color="success"
              outlined
          >
            <v-icon left>
              mdi-server-plus
            </v-icon>
            {{credit}}
          </v-chip>
        </v-col>
        <v-col class="px-0 pt-1">
          <v-btn
              icon
              color="deep-orange"
              @click="click_like"
          >
            <v-icon>mdi-thumb-up</v-icon>
            <div>{{like}}</div>
          </v-btn>
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
      description: "test for a description text. This is a default description.test for a description text. This is a default description",
      credit: 100,
      like: 0,
      liked: false,
      pusherInfo: {
        headImage: null,
        nickname: null,
      },
    }
  },
  methods: {
    detile(){
      this.$store.commit("setCur", {request: this.request});
      this.$router.push({name: "GoodsDetails"});
    },
    click_like(){
      this.liked?this.like--:this.like++;
      this.liked = !this.liked;
    }
  },
  computed: {

  },

  created() {

  }
};
</script>

<style scoped></style>
