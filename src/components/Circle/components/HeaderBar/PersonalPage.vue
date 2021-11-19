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
              Davis Antonia
            </span>
          </div>
          <div style="position: absolute;right:20px;padding-top: 20px">
<!--            <v-btn-->
<!--              tile-->
<!--              color="white"-->
<!--              depressed-->
<!--              @click="centerDialogVisible = true"-->
<!--            >-->
<!--              <v-icon left>-->
<!--                mdi-pencil-->
<!--              </v-icon>-->
<!--              Edit-->
<!--            </v-btn>-->
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
                          md="4"
                        >
                          <v-text-field
                            label="用户名"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            label="生肖"
                            hint="十二生肖"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            label="星座"
                            hint="十二星座"
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="邮件"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            label="密码"
                            type="password"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-select
                            :items="['0-17', '18-29', '30-54', '54+']"
                            label="生日"
                            required
                          ></v-select>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-autocomplete
                            :items="['游泳', '篮球', '羽毛球', '电子游戏', '徒步登山', '攀岩', '跳伞', '摄影', '编程']"
                            label="兴趣爱好"
                            multiple
                          ></v-autocomplete>
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
                      @click="dialog = false"
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
          起风了，唯有努力生存
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
                <v-icon small>mdi-emoticon-happy-outline</v-icon> &nbsp;长安不夜城-00后男生-双鱼座
              </div>
              <div style="font-size: x-small;color: #80848a;padding-bottom: 23px">
                <v-icon small>mdi-folder-account-outline</v-icon> &nbsp;自由职业-行政
              </div>
              <div style="font-size: x-small;color: #80848a;">
                <v-icon small>mdi-heart-outline</v-icon> &nbsp;喜欢健身，旅游，运动
              </div>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>



      </div>

      <v-tabs
        color="deep-purple accent-4"
        right
      >
        <v-tab>宝贝&nbsp;11</v-tab>
        <v-tab>评价&nbsp;1</v-tab>
        <v-tab>动态&nbsp;36</v-tab>

        <v-tab-item
          v-for="n in 3"
          :key="n"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="i in 6"
                :key="i"
                cols="12"
                md="4"
              >

                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                  aspect-ratio="1"
                ></v-img>


                  <div style="font-size: small;color: #070301;padding-bottom: 10px">
                    现货xbox series s 全新未拆封
                  </div>
                  <div style="font-size: x-small;color: #e17d63;padding-bottom: 10px;display: flex">
                    全新-日版
                  </div>
                  <div style="font-size: small;color: #80848a;">

                    <v-icon color="green">mdi-drupal</v-icon> &nbsp;
                    <v-btn
                      @click="toCustomer"
                      color="white"
                      flat
                      depressed
                    >
                      叛逆的鲁鲁修
                    </v-btn>
                  </div>

              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>


    </v-card>



  </div>
</template>

<script>
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

    dialog: false,
  }),
  methods:{
    toCustomer() {
      this.$router.push("/circle/Customer");
    },
    handleClick(){
      this.show1=!this.show1
      if(this.show1){
        this.heatColor="pink";
        this.heartNum=this.heartNum+1;
      }
      else{
        this.heatColor="gray";
        this.heartNum=this.heartNum-1;

      }
    },
    handleClick2(){
      this.show2=!this.show2
      if(this.show2){
        this.messageColor="orange";
        // this.messageNum=this.messageNum+1;
      }
      else{
        this.messageColor="gray";
        // this.messageNum=this.messageNum-1;
      }
    },
    handleClick3(){
      this.show3=!this.show3
      if(this.show3){
        this.sharingColor="blue";
        // this.sharingNum=this.sharingNum+1;
      }
      else{
        this.sharingColor="gray";
        // this.sharingNum=this.sharingNum-1;
      }
    }


  }
};
</script>

<style scoped>


</style>
