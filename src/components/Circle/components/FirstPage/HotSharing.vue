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

        <div style="padding: 10px 20px;">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img>
        </div>



        <v-card-title>
          冬至
        </v-card-title>

        <v-card-subtitle>
          吃点饺子如何？
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
                placeholder="快速回复"
                class="MyInput"
                v-model="textarea">
              </el-input>
            </div>

            <v-spacer></v-spacer>
            <div style="padding: 10px">
              <el-button type="primary" @click="reply_click()">发送</el-button>
            </div>


            <v-list-item
              v-for="(item, i) in repy_items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>

                <v-card-text>
                  {{item.message}}
                </v-card-text>
                <v-divider
                >

                </v-divider>
              </v-list-item-content>
            </v-list-item>



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
    textarea:'',
    repy_items: [
      {
        text: 'Adam',
        icon: 'mdi-account' ,
        message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
      },
      {
        text: 'Sally',
        icon: 'mdi-account' ,
        message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
          '在移速允许的范围内只要是非指向性技能就必定中不了。',
      },
      {
        text: 'Alex',
        icon: 'mdi-account' ,
        message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
          '\n' +
          '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
          '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
      },
    ],
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
    },
    reply_click(){
      this.repy_items.push({
        text:'Kelly',
        icon: 'mdi-account' ,
        message:'UZI  YYDS !',
      })

    }


  }
};
</script>

<style scoped>


</style>
