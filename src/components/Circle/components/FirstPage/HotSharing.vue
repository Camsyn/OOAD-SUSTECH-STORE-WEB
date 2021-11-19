<template>
  <div id="main">
    <div style="padding: 10px">
      <v-card
        class="mx-auto"
      >
        <v-col>
          <v-avatar>
            <img src="https://img1.baidu.com/it/u=4181640751,295850071&fm=26&fmt=auto" alt="CC" />
          </v-avatar>
          <span class="font-weight-bold" style= "display:inline">
              Davis Antonia
            </span>
          <span style="float:right">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right" style="font-size: 20px"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>帮上头条</el-dropdown-item>
                <el-dropdown-item>收藏</el-dropdown-item>
                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>
                <el-dropdown-item>屏蔽该博主</el-dropdown-item>
                <el-dropdown-item>投诉</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </span>
        </v-col>

        <div style="padding-top: 10px;padding-bottom: 10px;padding-left: 20px;padding-right: 20px">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
        </div>



        <v-card-title>
          用了它，每天穿新衣！
        </v-card-title>

        <v-card-subtitle>
          天呐！这款爆炸盐太好用了！再也不怕把衣服弄脏啦，去污除味，就用它！
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              icon
              @click="handleClick"
              :color="heatColor"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <span class="subheading mr-2">{{heartNum}}</span>
          <v-btn
            icon
            @click="handleClick2"
            :color="messageColor"
          >
            <v-icon>
              mdi-message-text
            </v-icon>
          </v-btn>
          <span class="subheading">{{ messageNum }}</span>

          <v-btn
            icon
            @click="handleClick3"
            :color="sharingColor"
          >
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
          <span class="subheading">{{ sharingNum }}</span>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show2">
            <v-divider></v-divider>
            <div style="padding: 6px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 12}"
                placeholder="有什么新鲜事想分享给大家？"
                class="MyInput"
                v-model="textarea">
              </el-input>
              <div style="position: center;padding: 10px">
                <el-button type="primary" @click="centerDialogVisible = false">发送</el-button>
              </div>
            </div>



            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotSharing",
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
  }),
  methods:{
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
