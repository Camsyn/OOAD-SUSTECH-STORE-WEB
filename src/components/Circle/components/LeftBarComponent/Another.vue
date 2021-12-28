<template>
  <div id="main">

    <div style="padding: 10px">
      <v-card
          class="mx-auto"
          v-for="(item,i) in data"
          :key="i"
      >
        <v-col>
          <v-avatar v-if="item.avatar_src">
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

        <div v-if="item.img_src" style="padding: 10px 20px;">
          <v-img
              max-height="800px"
              max-width="600px"
              v-bind:src="item.img_src"
          ></v-img>
        </div>



        <v-card-title>
          {{item.topic}}
        </v-card-title>

        <v-card-subtitle>
          {{item.content}}
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              icon
              @click="handleClick(item)"
              :color="item.heartColor"
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
import circle from "../../../../store/modules/circle";

export default {
  name: "Another",
  data: () => ({
    currentPage: 1,
    PageSize:1,
    totalCount: 15,
    data:[],
    grassList:[
      {
       // avatar_src:"https://tse2-mm.cn.bing.net/th/id/OIP-C.l-lpk0LiE1aXYTsyZNnSogHaEo?pid=ImgDet&rs=1",
      //  img_src:"https://img2.baidu.com/it/u=4042668463,1760762779&fm=26&fmt=auto",
        username:"Tifa",
        topic:"《最终幻想7重制版》",
        content:"在塔罗牌里，Tiferet的图案是红心，而有时则是天使（Tifa的酒吧是“Seventh Heaven”），" +
            "而她的4级Limit技则是“Final Heaven”），" +
            "她的姓“Lockheart”，表示她善于把心事锁在心里，又或者她可以解锁真正的克劳德",
        show1:false,
        heartColor:"gray",
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
        ],
      },
      {
        //avatar_src:"https://img0.baidu.com/it/u=223280774,3532649295&fm=26&fmt=auto",
        img_src:"https://img1.baidu.com/it/u=1753918686,2222541224&fm=26&fmt=auto",
        username:"2B",
        titel:"《尼尔：机械纪元》",
        content:"外星人突然入侵地球，他们制造了名为“机械生命体”的军队。在外星人势不可挡的力量面前，人类逃往月球。为了重新夺回地球，" +
            "人类建立了由“战斗型机器人”所组成的战斗抵抗组织。为了打破战场的僵局，人类设计了“尤尔哈（另译：寄叶）”作战单位——最新型的先进的机器人战士。" +
            "在一片贫瘠荒凉、渺无人烟的地球上，机械生命体与机器人战士展开了大战，这场战争将会成为打开未知奥秘的关键",
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
        item.heartColor="pink";
        item.heartNum=item.heartNum+1;
      }
      else{
        item.heartColor="gray";
        item.heartNum=item.heartNum-1;
      }
    },
    handleClick2(item){
      item.show2=!item.show2
      if(item.show2){
        item.messageColor="orange";
      }
      else{
        item.messageColor="gray";
      }
      let a = item.content
      item.content ='?'
      item.content = '??'
      item.content = a
    },
    handleClick3(item){
      item.show3=!item.show3
      if(item.show3){
        item.sharingColor="blue";
      }
      else{
        item.sharingColor="gray";
      }
    },
    reply_click(item){
      item.repy_items.push({
        message:item.textarea,
      })
    },
    handleCurrentChange(pageNumber) {
      // 改变默认的页数
      this.currentPage = pageNumber;
    },
  },
  created() {
    let count = 10;
    console.log("哲学")
    this.$store.dispatch("AllgetLatest", count).then(res => {
      this.data = res.filter(item=>item.tag===null)
      this.totalCount=this.data.length
      for(let i=0;i<this.data.length;i++){
        // console.log("sid:",this.data[i]['sendId'])
        this.data[i]['username']='Tom'
        console.log("username:",this.data[i]['username'])
        this.data[i].show1=false
        this.data[i].heartColor='gray'
        this.data[i].heartNum=322
        this.data[i].show2=false
        this.data[i].messageColor='gray'
        this.data[i].messageNum=677
        this.data[i].show3=false
        this.data[i].sharingColor='gray'
        this.data[i].sharingNum=499
        this.data[i].textarea=''
        this.data[i].reply_items=[]
      }
      console.log(this.grassList)
      console.log(this.data)
    }).catch(err => {
      console.log(err);
    });
  },
  computed:{
    AnotherList(){
      let count = 10;
      console.log("哲学")
      this.$store.dispatch("AllgetLatest", count).then(res => {
        this.data = res.filter(item=>item.tag===null)
        this.totalCount=this.data.length
        console.log("data:", this.data)
        for(let i=0;i<this.data.length;i++){
          console.log("sid:",this.data[i]['sendId'])
          this.data[i]['username']='Tom'
          console.log("username:",this.data[i]['username'])
          this.data[i]['show1']=false
          this.data[i]['heartColor']='gray'
          this.data[i]['heartNum']=322
          this.data[i].show2=true
          this.data[i]['messageColor']='gray'
          this.data[i]['messageNum']=677
          this.data[i]['show3']=false
          this.data[i]['sharingColor']='gray'
          this.data[i]['sharingNum']=499
          this.data[i]['textarea']=''
          this.data[i]['reply_items']=[]
        }
      }).catch(err => {
        console.log(err);
      });

    }
  }

};
</script>

<style scoped>

</style>
