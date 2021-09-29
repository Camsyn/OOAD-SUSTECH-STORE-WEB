<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <!--用户头像-->
        <v-avatar>
          <img src="../assets/Bili.png" alt="King" />
        </v-avatar>

        <div>King@sustech.edu.cn</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--右边main区域-->
    <v-main style="padding-left: 0">
      <v-container class="py-8 px-6" fluid>
        <!--描述列表-->
        <el-descriptions title="用户信息">
          <el-descriptions-item label="用户名">King</el-descriptions-item>
          <el-descriptions-item label="手机号">8848</el-descriptions-item>
          <el-descriptions-item label="居住地"
            >曹县一环路66号</el-descriptions-item
          >
          <el-descriptions-item label="备注">
            <el-tag size="small">StanFord University</el-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址"
            >卫龙辣条加工厂</el-descriptions-item
          >
        </el-descriptions>
        <!--分割线-->
        <v-divider></v-divider>
        <p></p>
        <!--用户头像上传-->
        <p class="font-weight-black">用户头像上传</p>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <p></p>
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
        <p></p>
        <v-divider></v-divider>
        <p></p>
        <!--商品列表缩略图-->
        <p class="font-weight-black">商品图片上传</p>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
        <!--分割线-->
        <p></p>
        <v-divider></v-divider>
        <p></p>
        <!--标签栏-->
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New Tag</el-button
        >
        <!--分割线-->
        <p></p>
        <v-divider></v-divider>
        <p></p>
        <!--To be continued-->
        <el-empty description="描述文字"></el-empty>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "MySpace",
  data: () => ({
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "哲学空间"],
      ["mdi-send", "众创空间"],
      ["mdi-delete", "思想殿堂"],
      ["mdi-alert-octagon", "无主之地"],
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
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
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
