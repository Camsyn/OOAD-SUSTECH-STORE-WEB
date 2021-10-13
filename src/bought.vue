<template>
  <v-app>
    <v-main style="height: 100%">
      <div style="height: 100%" class="grey lighten-2">
        <v-sheet style="width: 69%; height: 100%" class="mx-auto" elevation="1">
          <div style="text-align: center"><h1>Hotel List</h1></div>
          <el-table :data="tableData" style="width: 100%" max-height="600">
            <el-table-column prop="Date" label="Date" width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="Hotel Name"
              width="120"
            ></el-table-column>
            <el-table-column prop="City" label="City" width="120">
            </el-table-column>
            <el-table-column
              prop="District"
              label="District"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="CheckTime"
              label="Earliest check-in time"
              width="150"
            >
            </el-table-column>
            <p></p>
            <el-table-column
              prop="price"
              label="price"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="RoomType"
              label="Room Type"
              width="120"
            ></el-table-column>
            <el-table-column fixed="right" label="Operation" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
                  type="danger"
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
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-row type="flex">
                <el-col span="12" offset="5">
                  <el-form-item label="Hotel Name" prop="name">
                    <el-input
                      v-model="ruleForm.name"
                      placeholder="You can only type letters"
                    ></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" justify="center">
                <el-col span="8">
                  <el-form-item label="City" @change="changeSelect">
                    <el-select
                      v-model="ruleForm.City"
                      placeholder="Select a city"
                      @change="changeSelect"
                    >
                      <el-option
                        v-for="(item, index) in CityOptions"
                        :key="index"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col span="8">
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
                </el-col>
              </el-row>

              <el-row type="flex" justify="center">
                <el-col span="8">
                  <el-form-item label="Date" prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="Select a date"
                      v-model="ruleForm.date1"
                      :picker-options="pickerOptions0"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col span="8">
                  <el-form-item label="Time" prop="date2">
                    <el-time-picker
                      placeholder="Earliest check-in time"
                      v-model="ruleForm.date2"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row type="flex">
                <el-col span="9" offset="6">
                  <el-form-item label="Price">
                    <el-input v-model="ruleForm.price"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row type="flex" justify="center">
                <el-col span="10">
                  <el-form-item label="Room Type">
                    <el-select
                      v-model="ruleForm.RoomType"
                      placeholder="Please select district"
                    >
                      <el-option
                        v-for="(item, index) in RoomType"
                        :key="index"
                        :label="item"
                        :value="item"
                      />
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>

              <el-row type="flex">
                <el-col span="8" offset="8">
                  <el-form-item>
                    <el-button type="primary" @click="addtableDataForm()"
                      >Submit</el-button
                    >
                    <el-button @click="resetForm('ruleForm')">Clear</el-button>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </v-sheet>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "bought",
  data: () => ({
    valid: 0,
    headers: [
      { text: "Date", value: "date" },
      { text: "Name", value: "name" },
      { text: "City", value: "city" },
      { text: "District", value: "district" },
      { text: "CheckTime", value: "checktime" },
      { text: "price", value: "price" },
      { text: "RoomType", value: "roomtype" },
    ],
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
      "King Bed",
      "Room",
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
        // let OneDay = 24 * 3600 * 1000;
        // let Gap = curDate - OneDay;
        return time.getTime() < curDate;
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
      // let action = true;

      if (
        this.ruleForm.name == "" ||
        /[a-zA-z]$/.test(this.ruleForm.name) === false
      ) {
        alert("Invalid name!");
        return;
      }
      for (let i in this.ruleForm) {
        if (this.ruleForm[i] == undefined || this.ruleForm[i] == "") {
          alert("Please type in" + i);
          return;
        }
      }
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
        let hour = parseInt(date.getHours().toString(), 10);
        let minute = parseInt(date.getMinutes().toString(), 10);
        if (hour < 10) hour = "0" + hour;
        if (minute < 10) minute = "0" + minute;
        return hour + ":" + minute;
      }

      let hotelname = this.ruleForm.name;
      let city = this.ruleForm.City;
      let district = this.ruleForm.District;
      let roomtype = this.ruleForm.RoomType;
      let price = this.ruleForm.price;

      for (let i = 0; i < this.tableData.length; i++) {
        if (
          hotelname.toLocaleLowerCase() ===
            this.tableData[i].name.toLocaleLowerCase() &&
          city === this.tableData[i].City &&
          district === this.tableData[i].District &&
          roomtype === this.tableData[i].RoomType
        ) {
          alert("Have existed!");
          return;
        }
        if (
          hotelname.toLocaleLowerCase() ===
            this.tableData[i].name.toLocaleLowerCase() &&
          city === this.tableData[i].City &&
          district === this.tableData[i].District &&
          roomtype !== this.tableData[i].RoomType &&
          price === this.tableData[i].price
        ) {
          alert("Cannot add the different room with same price!");
          return;
        }
      }
      // if (action === false) alert("Error! Please check your submit Form!");
      this.tableData.push({
        Date: GMTToStr1(this.ruleForm.date1),
        name: this.ruleForm.name,
        City: this.ruleForm.City,
        District: this.ruleForm.District,
        CheckTime: GMTToStr2(this.ruleForm.date2),
        price: this.ruleForm.price,
        RoomType: this.ruleForm.RoomType,
      });
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

<style scoped></style>
