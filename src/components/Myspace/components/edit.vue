<template>
  <v-container class="py-8" fluid style="padding-left: 60px">
    <v-row>
      <v-col cols="4">
        <v-row>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-avatar tile size="200" class="ml-10 mt-3 mb-3">
                <v-overlay absolute :value="true" v-if="hover">
                  <v-file-input
                      accept="image/*"
                      prepend-icon="mdi-camera"
                      show-size
                      counter
                      label="上传头像"
                      v-model="head"
                      @change="upLoad(true)"
                  >
                  </v-file-input>
                </v-overlay>
                <img :src="myInfo.headImage?myInfo.headImage:headImage" alt="请上传头像" />
              </v-avatar>
            </template>
          </v-hover>
        </v-row>
          <v-divider class="my-6"></v-divider>
        <v-row>
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-avatar tile size="200" class="ml-10 mt-3 mb-3">
                <v-overlay absolute :value="true" v-if="hover">
                  <v-file-input
                      accept="image/*"
                      prepend-icon="mdi-camera"
                      show-size
                      counter
                      :label="shoukuan"
                      v-model="pay"
                      @change="upLoad(false)"
                  >
                  </v-file-input>
                </v-overlay>
                <img :src="myInfo.payCode?myInfo.payCode:payCode" alt="请上传收款码" />
              </v-avatar>
            </template>
          </v-hover>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-form>
              <div class="text-h6 font-weight-black" v-text="xinxi"></div>
              <v-text-field outlined label="用户名" v-model="info.nickname"></v-text-field>
              <v-text-field outlined label="电话" v-model="info.phone"></v-text-field>
              <v-text-field outlined label="一句话介绍" v-model="info.description"></v-text-field>
            </v-form>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center" >
            <v-btn outlined rounded text class="mb-2" color="blue" @click="updateInfo">
              上传
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-form>

              <div class="text-h6 font-weight-black" v-text="code"></div>
              <div style="padding: 10px">
                <el-input placeholder="请输入原始密码" v-model="input1" show-password></el-input>
              </div>
              <div style="padding: 10px">
                <el-input placeholder="请输入新密码" v-model="input2" show-password></el-input>
              </div>
              <v-row>
                <v-col class="d-flex justify-center" >
                  <v-btn outlined rounded text class="mb-2" color="blue" @click="updateCode">
                    确认更改
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "edit",
  data(){
    return{
      xinxi: "用户信息",
      code:"修改密码",
      input1:"",
      input2:"",
      touxiang: "上传头像",
      shoukuan: "收款码",
      info: {
        nickname: null,
        phone: null,
        description: null,
      },
      headImage: null,
      payCode: null,

      head: null,
      pay: null,
      model: null,
    }
  },
  methods:{
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    upLoadPay(file) {
      this.info.payCode = file.url;
      this.dialogVisible = true;
    },
    upLoad(head) {
      this.$store.dispatch("upload", {files: [head?this.head:this.pay], mul: true}).then((data)=>{
        if (head){
          this.headImage = data[0].fileDownloadUri.replace("/downloadFile", "");
          this.$store.dispatch("update", {headImage: this.headImage});
        }else {
          this.payCode = data[0].fileDownloadUri.replace("/downloadFile", "");
          this.$store.dispatch("update", {payCode: this.payCode});
        }
      }).catch(err => {
        console.log(err);
      });
    },
    updateInfo(){
      let nul = true;
      for (let fd of Object.values(this.info)){
        console.log(fd);
        if (fd){
          nul = false;
          break;
        }
      }
      if (nul)
        return;

      this.$store.dispatch("update", this.info).then(res=>{
        // this.$store.dispatch("")
        console.log("update");
      }).catch(err=>{
        console.log(err);
      });
    },
    updateCode(){
      let data = {
        oldPassword: this.input1,
        newPassword: this.input2
      }
      this.$confirm('是否确定修改?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch("modifyPwd2",data).then((data) => {
          this.$message({
            type: 'success',
            message: '修改密码成功!',
          })
        }).catch(err=>{
          this.$message({
            type: 'warning',
            message: err
          })
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    }
  },
  computed:{
    myInfo(){
      return this.$store.getters.myInfo;
    }
  }
}
</script>

<style scoped>

</style>
