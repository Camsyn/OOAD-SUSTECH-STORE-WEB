<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="450"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        :aspect-ratio="16/9"
      >
      </v-img>
      <v-card-title>
        <div class="text-h4 mb-2">
          Welcome Home...
        </div>
        <div class="text-h6 font-weight-regular grey--text">
          Monday, 12:30 PM, Mostly Sunny
        </div>
      </v-card-title>
      <v-row
        class="px-4 grey--text"
        align="center"
      >
        <v-avatar
          size="24"
          class="mr-4"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
            contain
          ></v-img>
        </v-avatar>

        <span>81° / 62°</span>
      </v-row>

      <v-divider class="mt-6 mx-4"></v-divider>

      <v-card-text>
        <v-chip
          class="mr-2"
          @click="lights"
        >
          <v-icon left>
            mdi-brightness-5
          </v-icon>
          Turn on Lights
        </v-chip>
        <v-chip
          class="mr-2"
          @click="alarm"
        >
          <v-icon left>
            mdi-alarm-check
          </v-icon>
          Set alarm
        </v-chip>
        <v-chip @click="blinds">
          <v-icon left>
            mdi-blinds
          </v-icon>
          Close blinds
        </v-chip>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "collection",
  data: () => ({
    drawer: null,
    items: [
      { icon: "mdi-purse-outline", title: "我发布的", route: "publish" },
      { icon: "mdi-cart-arrow-up", title: "我卖出的", route: "sold" },
      { icon: "mdi-cart-arrow-down", title: "我买到的", route: "bought" },
      { icon: "mdi-cart-variant", title: "我可转卖的", route: "nextsell" },
      { icon: "mdi-star", title: "收藏", route: "collection" },
      { icon: "mdi-walk", title: "足迹", route: "trail" },
      { icon: "mdi-heart-plus", title: "关注", route: "concerns" },
      { icon: "mdi-human-greeting-variant", title: "粉丝", route: "fans" },
      { icon: "mdi-wrench", title: "设置", route: "settings" },
    ],
  }),
  methods: {
    alarm () {
      alert('Turning on alarm...')
    },
    blinds () {
      alert('Toggling Blinds...')
    },
    lights () {
      alert('Toggling lights...')
    },
  },

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
