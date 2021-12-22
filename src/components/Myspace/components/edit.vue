<template>
  <v-container class="py-8" fluid style="padding-left: 60px">
    <v-row>
      <v-col cols="4">
        <p class="font-weight-black">头像上传</p>
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
      </v-col>
      <v-col cols="8">
        <v-row>
          <v-col>
            <el-descriptions title="用户信息">
              <el-descriptions-item label="用户名">King</el-descriptions-item>
              <el-descriptions-item label="手机号">8848</el-descriptions-item>
              <el-descriptions-item label="备注">
                <el-tag size="small">StanFord University</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="联系地址">卫龙辣条加工厂</el-descriptions-item>
            </el-descriptions>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "edit"
}
</script>

<style scoped>

</style>
