<template>
  <div id="main">
      <!--标题-->
      <div id="header" style="text-align: center"><h1>Hotel List</h1></div>
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
          width="200"
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
      <div id="box">
        <div id="myDIV" style="display: none">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="Hotel Name" prop="name" style="width: 516px">
              <el-input
                v-model="ruleForm.name"
                placeholder="You must type at least 2 letters"
              ></el-input>
            </el-form-item>
            <el-form-item label="City">
              <el-radio-group v-model="ruleForm.City" @change="changeSelect">
                <el-radio label="SHENZHEN"></el-radio>
                <el-radio label="GUANGZHOU"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="District">
              <el-select
                v-model="ruleForm.District"
                placeholder="Select a district"
              >
                <el-option
                  v-for="(item, index) in typeOptions"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Date" prop="date1">
              <!--时间选择器-->
              <el-date-picker
                type="date"
                placeholder="Select a date"
                v-model="ruleForm.date1"
                :picker-options="pickerOptions0"
                style="width: 416px"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="Time" prop="date2">
              <el-time-picker
                placeholder="Earliest check-in time"
                v-model="ruleForm.date2"
                style="width: 416px"
              ></el-time-picker>
            </el-form-item>
            <el-form-item label="Price">
              <el-input
                v-model="ruleForm.price"
                placeholder="$"
                style="width: 416px"
              ></el-input>
            </el-form-item>
            <el-form-item label="Room Type">
              <el-select
                v-model="ruleForm.RoomType"
                placeholder="Please select RoomType"
              >
                <el-option
                  v-for="(item, index) in RoomType"
                  :key="index"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <!--            <el-button type="primary" @click="submitForm('ruleForm')">Add Hotel</el-button>-->
              <el-button type="primary" @click="addtableDataForm()"
              >Submit</el-button
              >
              <el-button @click="resetForm('ruleForm')">Clear</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "bought",
  data: () => ({
    drawer: null,
    CityOptions: ["SHENZHEN", "GUANGZHOU"],
    DistrictObj: {
      SHENZHEN: [
        "FU TIAN",
        "NAN SHAN",
        "LUO HU",
        "LONG GANG",
        "PING SHAN",
        "LONG HUA",
        "GUANG MING",
        "YAN TIAN",
      ],
      GUANGZHOU: ["FAN YU", "YUE XIU", "ZHU JIANG"],
    },
    RoomType: [
      "Standard Room",
      "King Bed Room",
      "Family Room",
      "Presidential Suite",
    ],
    typeOptions: [],
    tableData: [
      {
        Date: "2016-05-03",
        name: "HillTon",
        City: "SHENZHEN",
        District: "FU TIAN",
        CheckTime: "14:00",
        price: "300",
        RoomType: "Standard Room",
      },
      {
        Date: "2016-05-04",
        name: "W",
        City: "GUANGZHOU",
        District: "YUE XIU",
        CheckTime: "16:00",
        price: "1000",
        RoomType: "Family Room",
      },
    ],
    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    //  添加验证规则
    ruleForm: {
      name: "",
      City: "",
      District: "",
      date1: "",
      date2: "",
      price: "",
      RoomType: "",
    },
    rules: {
      name: [
        {
          required: true,
          message: "please type English letters",
          trigger: "blur",
        },
        {
          validator: function (rule, value, callback) {
            if (/[a-zA-z]$/.test(value) === false) {
              callback(new Error("Please input English letters"));
            } else {
              callback();
            }
          },
          trigger: "blur",
        },
      ],
      date1: [
        {
          type: "date",
          required: true,
          message: "Please select date",
          trigger: "blur",
        },
      ],
      date2: [
        {
          type: "date",
          required: true,
          message: "Please select time",
          trigger: "blur",
        },
      ],
    },
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    pickerOptions0: {
      disabledDate(time) {
        let curDate = new Date().getTime();
        let OneDay = 24 * 3600 * 1000;
        let Gap = curDate + OneDay;
        return time.getTime() < Gap - 8.64e6;
      },
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
      (this.ruleForm.name = ""),
        (this.ruleForm.City = ""),
        (this.ruleForm.District = ""),
        (this.ruleForm.date1 = ""),
        (this.ruleForm.date2 = ""),
        (this.ruleForm.price = ""),
        (this.ruleForm.RoomType = "");
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
      console.log(this.ruleForm);
      // console.log(this.tableData);
      function GMTToStr1(time) {
        let date = new Date(time);
        let Str =
          date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate();
        return Str;
      }
      function GMTToStr2(time) {
        let date = new Date(time);
        let hour = parseInt(date.getHours(), 10);
        let minute = parseInt(date.getMinutes(), 10);
        let Hour = date.getHours();
        let Minute = date.getMinutes();
        if (hour < 10) Hour = "0" + date.getHours();
        if (minute < 10) Minute = "0" + Minute;
        console.log("Hour:", Hour);
        console.log("minute:", minute);
        let Str = Hour + ":" + Minute;
        return Str;
      }
      var action = true;
      var count = 0;

      var hotelname = this.ruleForm.name;
      var city = this.ruleForm.City;
      var district = this.ruleForm.District;
      var roomtype = this.ruleForm.RoomType;
      var price = this.ruleForm.price;

      for (var i = 0; i < this.tableData.length; i++) {
        if (
          hotelname === this.tableData[i].name &&
          city === this.tableData[i].City &&
          district === this.tableData[i].District &&
          roomtype === this.tableData[i].RoomType
        ) {
          count = count + 1;
        }

        if (count > 0) {
          action = false;
        }
        if (
          hotelname === this.tableData[i].name &&
          city === this.tableData[i].City &&
          district === this.tableData[i].District &&
          roomtype !== this.tableData[i].RoomType &&
          price === this.tableData[i].price
        ) {
          action = false;
        }
        console.log(this.tableData[i].name);
        console.log(action);
      }
      if (
        this.ruleForm.City === "" ||
        this.ruleForm.name === "" ||
        this.ruleForm.District === "" ||
        this.ruleForm.price === "" ||
        this.ruleForm.RoomType === "" ||
        GMTToStr1(this.ruleForm.date1) === "" ||
        GMTToStr2(this.ruleForm.date2) === ""
      ) {
        action = false;
      }

      if (action === false) {
        this.$message.error("Something is wrong");
      } else {
        this.tableData.push({
          Date: GMTToStr1(this.ruleForm.date1),
          name: this.ruleForm.name,
          City: this.ruleForm.City,
          District: this.ruleForm.District,
          CheckTime: GMTToStr2(this.ruleForm.date2),
          price: this.ruleForm.price,
          RoomType: this.ruleForm.RoomType,
        });
        this.$message({
          message: "Submit successfully",
          type: "success",
        });
      }
    },

    changeSelect() {
      this.ruleForm.District = "";

      for (const k in this.CityOptions) {
        if (this.ruleForm.City === this.CityOptions[k]) {
          this.typeOptions = this.DistrictObj[this.ruleForm.City];
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

#myDIV {
  margin-left: 160px;
}
#box {
  margin: 0px;
}
#header {
  background-color: #b2ebf2;
}
#navi {
  height: 100%;
}
#main {
  background-color: #fff3e0;
}
</style>
