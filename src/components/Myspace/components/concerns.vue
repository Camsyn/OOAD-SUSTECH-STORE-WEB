<template>
  <div id="con">
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%">
      <filter id="filter-zjq145yry">
        <feTurbulence baseFrequency="0.0002" numOctaves="10" seed="629"></feTurbulence>
        <feColorMatrix values="3.5 -2.1 0.4 -0.9 0.1 2.1 0.3 3.2 -3.7 -0.5 2.1 0.9 0.8 1.7 -0.5 -1.3 4 -2.4 0.7 1.9"></feColorMatrix>
      </filter>
      <rect width="100%" height="100%" filter="url(#filter-zjq145yry)"></rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "concern",
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

#con
{
  height: 100%;
}
</style>
