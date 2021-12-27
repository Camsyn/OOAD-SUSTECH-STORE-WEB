<template>
  <div style="padding: 10px">
    <v-card
      class="mx-auto"
    >


      <div>
          <v-img
            class="white--text align-end"
            src="https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            height="200px"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>
        <v-card
          class="d-flex pa-2"
          flat
          tile
        >
          <div>
            <v-avatar size="90" >
              <img src="https://img2.baidu.com/it/u=1952865035,3731780482&fm=26&fmt=auto" alt="CC" />
            </v-avatar>
            <span class="font-weight-bold" style= "display:inline;font-size: 20px">
              {{MyInfo.name}}
            </span>
          </div>
          <div style="position: absolute;right:20px;padding-top: 20px">

            <v-row justify="center">
              <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="white"
                    depressed
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon left>
                      mdi-pencil
                    </v-icon>
                    编辑个人资料
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">个人信息</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            label="用户名"
                            v-model="MyInfo.name"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                            label="星座"
                            hint="十二星座"
                            v-model="MyInfo.constellation"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="座右铭"
                            v-model="MyInfo.moto"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="个性化介绍"
                            v-model="MyInfo.selfIntroduce"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                              label="职业"
                              hint="打工人"
                              v-model="MyInfo.career"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field
                              label="兴趣爱好"
                              hint="特长点"
                              v-model="MyInfo.hobby"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small>不要留空哦~</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="dialog = false"
                    >
                      关闭
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="new EditMyInfo()"
                    >
                      保存
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>

          </div>
        </v-card>

        <v-card-subtitle>
          {{ MyInfo.moto }}
        </v-card-subtitle>
        <v-expansion-panels
          flat
        >
          <v-expansion-panel>
            <v-expansion-panel-header>
              <div style="font-size: x-small;color: #80848a">
                <v-icon small>mdi-alpha-v-circle-outline</v-icon> &nbsp;秒拍达人
                &nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon small>mdi-alpha-b-circle-outline</v-icon> &nbsp;芝麻信用极好
                &nbsp;&nbsp;&nbsp;&nbsp;
                <v-icon small>mdi-account-circle-outline</v-icon> &nbsp;已认证
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div style="font-size: x-small;color: #80848a;padding-bottom: 23px">
                <v-icon small>mdi-emoticon-happy-outline</v-icon> &nbsp;{{MyInfo.selfIntroduce+"-"+MyInfo.constellation}}
              </div>
              <div style="font-size: x-small;color: #80848a;padding-bottom: 23px">
                <v-icon small>mdi-folder-account-outline</v-icon> &nbsp;{{ MyInfo.career }}
              </div>
              <div style="font-size: x-small;color: #80848a;">
                <v-icon small>mdi-heart-outline</v-icon> &nbsp;{{ MyInfo.hobby }}
              </div>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>



      </div>

      <v-tabs
        color="deep-purple accent-4"
        right
      >
        <v-tab
        v-for="(item,index) in carts"
        :key="index"
        @click="$router.push({name: item.to})"
        >
          {{item.name}}
        </v-tab>
      </v-tabs>

      <router-view></router-view>

    </v-card>



  </div>
</template>

<script>
import circle from "../../../../store/modules/circle";
export default {
  name: "PersonalPage",
  data: () => ({
    show1:false,
    heatColor:"gray",
    heartNum:256,
    show2: false,
    messageColor:"gray",
    messageNum:666,
    show3:false,
    sharingColor:"gray",
    sharingNum:486,
    form:{
      name:'',
      avatar:'',
      moto:'',
      constellation:'',
      selfIntroduce:'',
      career:'',
      hobby:'',
    },

    carts:[
      {
        id:0,
        name:"宝贝",
        to:"treasure",
      },
      {
        id:1,
        name:"评价",
        to:"evaluate",
      },
      {
        id:2,
        name:"动态",
        to:"dynamic",
      },
    ],
    dialog: false,
  }),
  methods:{
    toCustomer() {
      this.$router.push("/circle/Customer");
    },
    EditMyInfo(){
      this.dialog=false
    }
  },
  computed:{
    MyInfo(){
      return circle.state.myInfo
    }
  }
};
</script>

<style scoped>


</style>
