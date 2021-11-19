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
          <img src="../../../assets/King.png" alt="King" />
        </v-avatar>

        <div>King@sustech.edu.cn</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          dense
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!--右边main区域-->
    <v-main>
      <!--标题-->
      <div style="text-align: center"><h1>Hotel List</h1></div>
      <!--表单-->
      <el-table :data="tableData" style="width: 100%" max-height="600">
        <el-table-column prop="Date" label="Date" width="150">
        </el-table-column>
        <el-table-column prop="name" label="Hotel Name" width="120">
        </el-table-column>
        <el-table-column prop="City" label="City" width="120">
        </el-table-column>
        <el-table-column prop="District" label="District" width="120">
        </el-table-column>
        <el-table-column
          prop="CheckTime"
          label="Earliest check-in time"
          width="300"
        >
        </el-table-column>
        <p></p>
        <el-table-column prop="price" label="price" width="120">
        </el-table-column>
        <el-table-column prop="RoomType" label="Room Type" width="120">
        </el-table-column>
        <el-table-column fixed="right" label="Operation" width="120">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--按钮区域-->
      <div style="text-align: center; padding: 6px">
        <el-button type="primary" round @click.native="myFunction"
          >Add Hotel</el-button
        >
      </div>
      <!--添加表单-->
      <div id="myDIV" style="display: none">
        <el-form ref="form" :model="form">
          <el-form-item label="手机品牌">
            <el-select v-model="form.phoneBrand" placeholder="请选择" @change="changeSelect">
              <el-option
                v-for="(item,index) in CityOptions"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>

          </el-form-item>
          <el-form-item label="手机型号">
            <el-select v-model="form.phoneType" placeholder="请选择">
              <el-option
                v-for="(item,index) in typeOptions"
                :key="index"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>

            <el-form-item >
              <el-date-picker
                v-model="ruleForm.startTime"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions0">
              </el-date-picker>
            </el-form-item>

        </el-form>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "testdialog",
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
    CityOptions: ["SHENZHEN", "GUANGZHOU"],
    DistrictObj: {
      SHENZHEN: ["FU TIAN", "YAN TIAN", "NAN SHAN"],
      GUANGZHOU: ["FAN YU", "YUE XIU", "ZHU JIANG"],
    },
    typeOptions: [],
    form: {
      phoneBrand: "",
      phoneType: "",
    },
    ruleForm: {
      startTime: '',
      endTime: '',
    },
    pickerOptions0: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    },

  }),
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    myFunction: function () {
      const x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    addtableDataForm() {
      this.tableData.push({
        Date: "2021-10-9",
        name: "HILLTON",
        City: "SHEN ZHEN",
        District: "FU TIAN",
        CheckTime: "10.1 10:30",
        price: "300",
        RoomType: "A",
      });
    },
    changeSelect() {
      // 清空手机型号内容
      this.form.phoneType = ''

      // 遍历手机品牌的下拉选项数组
      for (const k in this.CityOptions) {
        // 手机品牌内容 是否等于 手机品牌的下拉选择数组中的某一项
        if (this.form.phoneBrand === this.CityOptions[k]) {
          this.typeOptions = this.DistrictObj[this.form.phoneBrand]
        }
      }
    },
    beginDate(){
      const self = this
      return {
        disabledDate:time=>{
          let endDateVal = new Date(self.ruleForm.endTime).getTime()
          if (self.ruleForm.endTime) {  //如果结束时间不为空，则小于结束时间
            return time.getTime()>Date.now(self.ruleForm.endTime)||time.getTime()>new Date(self.ruleForm.endTime).getTime()
          }else{
            return time.getTime()< new Date(self.ruleForm.endTime).getTime||time.getTime()>Date.now()||time.getTime()>Date.now(self.ruleForm.endTime)
          }
        }
      }
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
