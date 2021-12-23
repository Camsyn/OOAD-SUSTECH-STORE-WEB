<template>
  <div id="main">

    <div style="padding: 10px">
      <v-card
        class="mx-auto"
        v-for="(item,i) in hotsharing"
        :key="i"
      >
        <v-col>
          <v-avatar>
            <img v-bind:src="item.avatar_src" alt="CC" />
          </v-avatar>
          <span class="font-weight-bold" style= "display:inline">
              {{item.username}}
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
            max-height="800px"
            max-width="600px"
            v-bind:src="item.img_src"
          ></v-img>
        </div>



        <v-card-title>
          {{item.titel}}
        </v-card-title>

        <v-card-subtitle>
          {{item.subtitle}}
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            icon
            @click="handleClick(item)"
            :color="item.heatColor"
          >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <span class="subheading mr-2">{{item.heartNum}}</span>
          <v-btn
            icon
            @click="handleClick2(item)"
            :color="item.messageColor"
          >
            <v-icon>
              mdi-message-text
            </v-icon>
          </v-btn>
          <span class="subheading">{{ item.messageNum }}</span>

          <v-btn
            icon
            @click="handleClick3(item)"
            :color="item.sharingColor"
          >
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
          <span class="subheading">{{ item.sharingNum }}</span>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="item.show2">
            <v-divider></v-divider>
            <div style="padding: 6px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 12}"
                placeholder="快速回复"
                class="MyInput"
                v-model="item.textarea">
              </el-input>
            </div>

            <v-spacer></v-spacer>
            <div style="padding: 10px">
              <el-button type="primary" @click="reply_click(item)">发送</el-button>
            </div>


            <v-list-item
              v-for="(item2, i) in item.repy_items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item2.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item2.text"></v-list-item-title>

                <v-card-text>
                  {{item2.message}}
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
  name: "cute_pet",
  data: () => ({
    hotsharing:[
      {
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.6QZc9ezh-imkA3vvqXzThQHaHa?w=205&h=205&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse1-mm.cn.bing.net/th/id/R-C.4340d96931a05015a367d8b2e6c970fa?rik=WTQ7cOnnZ8WD1g&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20190904%2fef66988e6ef5403d80f6d04c9b05703b.jpeg&ehk=0K%2f%2fO2kTHE2Be0ucED4GQ1BMniLbKNGIZxFBexmpMg8%3d&risl=&pid=ImgRaw&r=0",
        username:"Lisa",
        titel:"威尔士柯基犬",
        subtitle:"威尔士柯基犬（welsh corgi pembroke）是一种小型犬，它们的胆子很大，也相当机警，能高度警惕地守护家园，是最受欢迎的小型护卫犬之一。",
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
        ],
      },
      {
        avatar_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.mRKNiPb8sgjJKmpTI5A8SAAAAA?w=174&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
        img_src:"https://tse1-mm.cn.bing.net/th/id/OIP-C.3rwfLbGH72Qa0MMoGnqqcwHaHU?w=196&h=194&c=7&r=0&o=5&dpr=2&pid=1.7",
        username:"Babel",
        titel:"柴犬",
        subtitle:"柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。",
        show1:false,
        heatColor:"gray",
        heartNum:333,
        show2: false,
        messageColor:"gray",
        messageNum:677,
        show3:false,
        sharingColor:"gray",
        sharingNum:499,
        textarea:'',
        repy_items: [
          {
            text: 'Tom',
            icon: 'mdi-account' ,
            message:'为什么读史，是一个情怀问题。为了明得失，为了咨诹善道，为了有资于治道，为了八卦，为了让自己显得有文化',
          },
          {
            text: 'Kelly',
            icon: 'mdi-account' ,
            message:'没有破绽的走位。不知道大家看过脚本第一视角没有，只要技能一出手那个技能的范围轮廓就显示出来了，所有的假动作、预判等一系列操作全部失效。' +
              '在移速允许的范围内只要是非指向性技能就必定中不了。',
          },
          {
            text: 'Tina',
            icon: 'mdi-account' ,
            message:'EDG夺冠的当天晚上，冰岛的绿色极光里闪过一阵及其诡异的橘色光芒。\n' +
              '\n' +
              '“即使是目前代表英雄联盟最高水准的S赛，也有如此夸张数量的失误”，' +
              '一个脑子插满管子身体全部泡在培养池中的外星生物说到。',
          },
        ],
      },
    ],
  }),
  methods:{
    handleClick(item){
      item.show1=!item.show1
      if(item.show1){
        item.heatColor="pink";
        item.heartNum=item.heartNum+1;
      }
      else{
        item.heatColor="gray";
        item.heartNum=item.heartNum-1;

      }
    },
    handleClick2(item){
      item.show2=!item.show2
      if(item.show2){
        item.messageColor="orange";
        // this.messageNum=this.messageNum+1;
      }
      else{
        item.messageColor="gray";
        // this.messageNum=this.messageNum-1;
      }
    },
    handleClick3(item){
      item.show3=!item.show3
      if(item.show3){
        item.sharingColor="blue";
        // this.sharingNum=this.sharingNum+1;
      }
      else{
        item.sharingColor="gray";
        // this.sharingNum=this.sharingNum-1;
      }
    },
    reply_click(item){
      item.repy_items.push({
        text:'Me',
        icon: 'mdi-account' ,
        message:item.textarea,
      })

    }
  }
};
</script>

<style scoped>

</style>
