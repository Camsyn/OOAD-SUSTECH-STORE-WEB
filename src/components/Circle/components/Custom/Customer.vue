<template>
  <div style="padding: 10px">
    <v-card
      class="mx-auto"
    >


      <div>
        <v-img
          class="white--text align-end"
          src="https://images.pexels.com/photos/9391321/pexels-photo-9391321.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          height="200px"
        >
          <v-card-title>Amsterdam beaches</v-card-title>
        </v-img>
        <v-card
          class="d-flex pa-2"
          flat
          tile
        >
          <div>
            <v-avatar size="90" >
              <img src="https://tse1-mm.cn.bing.net/th/id/R-C.ac2018472ec3d7990fd17172144b98b8?rik=Vxxiu6o19slhtw&riu=http%3a%2f%2fdmimg.5054399.com%2fallimg%2f201125%2f32_201125180632_1.jpg&ehk=MAPJ39O681mZgOEWOGvguAJ8I7iBEMUHNv9LwP9hZRk%3d&risl=&pid=ImgRaw&r=0" alt="CC" />
            </v-avatar>
            <span class="font-weight-bold" style= "display:inline;font-size: 20px">
              Alex
            </span>
          </div>


        </v-card>

        <v-card-subtitle>
          红龙归来之时
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
                <v-icon small>mdi-emoticon-happy-outline</v-icon> &nbsp;哥本哈根-00后男生-狮子座
              </div>
              <div style="font-size: x-small;color: #80848a;padding-bottom: 23px">
                <v-icon small>mdi-folder-account-outline</v-icon> &nbsp;职业电竞选手
              </div>
              <div style="font-size: x-small;color: #80848a;">
                <v-icon small>mdi-heart-outline</v-icon> &nbsp;喜欢电竞，跳伞，跑步
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

                <div style="font-size: small;color: #80848a;left:4px">

                  <v-icon color="green">mdi-drupal</v-icon>
                  <v-btn
                    @click="toCustomer"
                    color="white"
                    flat
                    depressed
                  >
                  &nbsp;叛逆的鲁鲁修
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
  name: "Customer",
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
