<template>
  <div style="padding-top: 10px">
      <v-card
        class="mx-auto"
        max-width="400"
      >
        <v-card-title>
          <h2 class="text-h4">
            Toothbrush
          </h2>
          <v-spacer></v-spacer>
          <span class="text-h6">$4.99</span>
        </v-card-title>

        <v-card-text>
          Our company takes pride in making handmade brushes.
          Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <span class="subheading">Select type</span>

          <v-chip-group
            v-model="selection"
            active-class="deep-purple--text text--accent-4"
            mandatory
          >
            <v-chip>Extra Soft</v-chip>
            <v-chip>Soft</v-chip>
            <v-chip>Medium</v-chip>
            <v-chip>Hard</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="deep-purple accent-4"
          >
            Add to Cart
          </v-btn>
        </v-card-actions>
      </v-card>

  </div>
</template>

<script>
export default {
  name: "trail",
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
    selection: 2,

  }),

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
