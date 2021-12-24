<template>
  <v-container class="py-8" fluid style="padding-left: 60px">
       <!--描述列表-->
    <v-row>
<!--      <v-col cols="2" class="pa-0">-->
<!--        <v-avatar tile size="120">-->
<!--          <img src="@/assets/C.C..png" alt="C.C." />-->
<!--        </v-avatar>-->
<!--      </v-col>-->
      <v-col cols="11">
        <el-descriptions title="用户信息">
          <el-descriptions-item label="用户id">{{info.sid}}</el-descriptions-item>
          <el-descriptions-item label="邮箱">{{info.email}}</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">StanFord University</el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </v-col>
      <v-col cols="1" class="d-flex flex-column-reverse pl-0 pr-2">
        <v-btn outlined rounded text class="mb-2" color="blue" @click="$router.push({name: 'edit'})">
          编辑
        </v-btn>
      </v-col>
    </v-row>
<!--       &lt;!&ndash;分割线&ndash;&gt;-->
<!--       <v-divider></v-divider>-->
<!--       <p></p>-->
<!--       &lt;!&ndash;用户头像上传&ndash;&gt;-->
<!--       <p class="font-weight-black">用户头像上传</p>-->
<!--       <el-upload-->
<!--         class="avatar-uploader"-->
<!--         action="https://jsonplaceholder.typicode.com/posts/"-->
<!--         :show-file-list="false"-->
<!--         :on-success="handleAvatarSuccess"-->
<!--         :before-upload="beforeAvatarUpload"-->
<!--       >-->
<!--         <img v-if="imageUrl" :src="imageUrl" class="avatar" />-->
<!--         <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--       </el-upload>-->
<!--       <p></p>-->
       <!--分割线-->
       <v-divider></v-divider>
       <p></p>
       <!--照片墙-->
       <p class="font-weight-black">个人照片墙</p>
       <el-upload
         action="https://jsonplaceholder.typicode.com/posts/"
         list-type="picture-card"
         :on-preview="handlePictureCardPreview"
         :on-remove="handleRemove"
       >
         <i class="el-icon-plus"></i>
       </el-upload>
       <el-dialog :visible.sync="dialogVisible">
         <img width="100%" :src="dialogImageUrl" alt="" />
       </el-dialog>
       <!--分割线-->
<!--       <p></p>-->
<!--       <v-divider></v-divider>-->
<!--       <p></p>-->
<!--       &lt;!&ndash;商品列表缩略图&ndash;&gt;-->
<!--       <p class="font-weight-black">商品图片上传</p>-->
<!--       <el-upload-->
<!--         class="upload-demo"-->
<!--         action="https://jsonplaceholder.typicode.com/posts/"-->
<!--         :on-preview="handlePreview"-->
<!--         :on-remove="handleRemove"-->
<!--         :file-list="fileList"-->
<!--         list-type="picture"-->
<!--       >-->
<!--         <el-button size="small" type="primary">点击上传</el-button>-->
<!--         <div slot="tip" class="el-upload__tip">-->
<!--           只能上传jpg/png文件，且不超过500kb-->
<!--         </div>-->
<!--       </el-upload>-->
<!--       &lt;!&ndash;分割线&ndash;&gt;-->
<!--       <p></p>-->
<!--       <v-divider></v-divider>-->
<!--       <p></p>-->
<!--       &lt;!&ndash;标签栏&ndash;&gt;-->
<!--       <el-tag-->
<!--         :key="tag"-->
<!--         v-for="tag in dynamicTags"-->
<!--         closable-->
<!--         :disable-transitions="false"-->
<!--         @close="handleClose(tag)"-->
<!--       >-->
<!--         {{ tag }}-->
<!--       </el-tag>-->
<!--       <el-input-->
<!--         class="input-new-tag"-->
<!--         v-if="inputVisible"-->
<!--         v-model="inputValue"-->
<!--         ref="saveTagInput"-->
<!--         size="small"-->
<!--         @keyup.enter.native="handleInputConfirm"-->
<!--         @blur="handleInputConfirm"-->
<!--       >-->
<!--       </el-input>-->
<!--       <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>-->
<!--       &lt;!&ndash;分割线&ndash;&gt;-->
<!--       <p></p>-->
<!--       <v-divider></v-divider>-->
<!--       <p></p>-->
<!--       &lt;!&ndash;To be continued&ndash;&gt;-->
<!--       <el-empty description="描述文字"></el-empty>-->
     </v-container>
</template>

<script>
export default {
  name: "settings",
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
    imageUrl: "",
    dialogImageUrl: "",
    dialogVisible: false,
    fileList: [
      {
        name: "food.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
      {
        name: "food2.jpeg",
        url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
      },
    ],
    //  标签栏数据
    dynamicTags: ["标签一", "标签二", "标签三"],
    inputVisible: false,
    inputValue: "",
  }),
  computed:{
    info(){
      return this.$store.getters.myInfo;
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlePreview(file) {
      console.log(file);
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      // eslint-disable-next-line no-unused-vars
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
  },
};
</script>

<style scoped>

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
