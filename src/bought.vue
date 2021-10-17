<template>
  <v-app>
    <v-main style="height: 100%">
      <div style="height: 100%" class="grey lighten-2">
        <v-sheet style="width: 69%; height: 100%" class="mx-auto" elevation="1">
          <div style="text-align: center"><h1>Hotel List</h1></div>
          <v-data-table :headers="headers" :items="tableData" style="width: 100%" max-height="600">
            <template v-slot:item.operate="{ item }">
              <v-btn
                  @click.native.prevent="deleteRow(item)"
                  small
                  type="danger"
              >
                Delete
              </v-btn>
            </template>
          </v-data-table>
          <v-dialog width="1000">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="blue lighten-2"
                  v-bind="attrs"
                  v-on="on"
                  class="mx-auto"
                  style="width: 100px; display: block"
              >
                Add Hotel
              </v-btn>
            </template>
            <el-form
                    :model="ruleForm"
                    :rules="rules"
                    ref="ruleForm"
                    label-width="100px"
                    class="demo-ruleForm pt-3"
                    style="background-color: white; "
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
                  <el-row type="flex" justify="center" style="">
                    <el-col span="8">
                      <el-form-item label="City" @change="changeSelect">
                        <el-select
                            v-model="ruleForm.City"
                            placeholder="Select a city"
                            @change="changeSelect"
                        >
                          <el-option
                              v-for="(item, index) in CityOptions"
                              :key=index
                              :label=item
                              :value=item
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col span="8">
                      <el-form-item label="district">
                        <el-select
                            v-model="ruleForm.district"
                            placeholder="Select a district"
                        >
                          <el-option
                              v-for="(item, index) in typeOptions"
                              :key=index
                              :label=item
                              :value=item
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                  </el-row>

                  <el-row type="flex" justify="center">
                    <el-col span="8">
                      <el-form-item label="date" prop="date1">
                        <el-date-picker
                            type="date"
                            placeholder="Select date"
                            v-model="ruleForm.date1"
                            :picker-options="selectDate"
                        ></el-date-picker>
                      </el-form-item>
                    </el-col>
                    <el-col span="8">
                      <el-form-item label="Time" prop="date2">
                        <el-time-picker
                            placeholder="check-in time"
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
                            v-model="ruleForm.room"
                            placeholder="select district"
                        >
                          <el-option
                              v-for="(item, index) in room"
                              :key=index
                              :label=item
                              :value=item
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
          </v-dialog>
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
      { text: "district", value: "district" },
      { text: "check-in time", value: "time2" },
      { text: "price", value: "price" },
      { text: "room", value: "room" },
      { text: "operate", value: "operate", sortable: false,}
    ],
    tableData: [],
    CityOptions: ["SHENZHEN", "GUANGZHOU"],
    districtObj: {
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
      GUANGZHOU: ["TIAN HE","FAN YU", "YUE XIU", "ZHU JIANG", "HUANG PU","BAI YUN", "HUA DU"],
    },
    room: [
      "Standard Room",
      "King Bed",
      "Room",
      "Family Room",
      "Presidential Suite",
    ],
    typeOptions: [],

    picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    ruleForm: {
      name: "",
      City: "",
      district: "",
      date1: "",
      date2: "",
      price: "",
      room: "",
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
            if (! /[a-zA-z]$/.test(value)) {
              callback(new Error("English letters only"));
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
          message: "select date",
          trigger: "blur",
        },
      ],
      date2: [
        {
          type: "date",
          required: true,
          message: "select time",
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
    selectDate: {
      disabledDate(time) {
        let curDate = new Date().getTime();
        return time.getTime() < curDate;
      },
    },
  }),
  methods: {
    deleteRow(item) {
      let ind = this.tableData.indexOf(item)
      this.tableData.splice(ind, 1)
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
      for (let i in this.ruleForm) {
        this.ruleForm[i] = "";
      }
    },
    changeColor: function () {
      const x = document.getElementById("myDIV");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    addtableDataForm() {
      if (
        this.ruleForm.name === "" ||
        /[a-zA-z]$/.test(this.ruleForm.name) === false
      ) {
        alert("Invalid name!");
        return;
      }
      for (let i in this.ruleForm) {
        if (this.ruleForm[i] === undefined || this.ruleForm[i] === "") {
          alert("Please type in " + i);
          return;
        }
      }

      let hotelname = this.ruleForm.name;
      let city = this.ruleForm.city;
      let district = this.ruleForm.district;
      let room = this.ruleForm.room;
      let price = this.ruleForm.price;

      for (let i = 0; i < this.tableData.length; i++) {
        if (
          hotelname.toLocaleLowerCase() ===
            this.tableData[i].name.toLocaleLowerCase() &&
          city === this.tableData[i].city &&
          district === this.tableData[i].district &&
          room === this.tableData[i].room
        ) {
          alert("Have existed!");
          return;
        }
        if (
          hotelname.toLocaleLowerCase() ===
            this.tableData[i].name.toLocaleLowerCase() &&
          city === this.tableData[i].City &&
          district === this.tableData[i].district &&
          room !== this.tableData[i].room &&
          price === this.tableData[i].price
        ) {
          alert("Cannot add the different room with same price!");
          return;
        }
      }

      let date = new Date(this.ruleForm.date1);
      let day = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      date = new Date(this.ruleForm.date2);
      let hour = parseInt(date.getHours().toString());
      let minute = parseInt(date.getMinutes().toString());
      if (hour < 10) hour = "0" + hour;
      if (minute < 10) minute = "0" + minute;
      let sec = hour + ":" + minute;

      this.tableData.push({
        date: day,
        name: this.ruleForm.name,
        city: this.ruleForm.City,
        district: this.ruleForm.district,
        time2: sec,
        price: this.ruleForm.price,
        room: this.ruleForm.room,
        operate: "delete"
      });
    },
    changeSelect() {
      this.ruleForm.district = "";
      this.typeOptions = this.districtObj[this.ruleForm.City];
    },
  },
};
</script>
