<template>
  <div id="main">

    <div style="padding: 10px">
      <v-card
          class="mx-auto"
          v-for="(item,i) in dataList"
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
<!--              <el-dropdown trigger="click">-->
<!--              <span class="el-dropdown-link">-->
<!--              <i class="el-icon-arrow-down el-icon&#45;&#45;right" style="font-size: 20px"></i>-->
<!--              </span>-->
<!--              <el-dropdown-menu slot="dropdown">-->
<!--                <el-dropdown-item>帮上头条</el-dropdown-item>-->
<!--                <el-dropdown-item>收藏</el-dropdown-item>-->
<!--                <el-dropdown-item>屏蔽此条信息</el-dropdown-item>-->
<!--                <el-dropdown-item>屏蔽该博主</el-dropdown-item>-->
<!--                <el-dropdown-item @click="">投诉</el-dropdown-item>-->
<!--              </el-dropdown-menu>-->
<!--            </el-dropdown>-->

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
                    举报
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="text-h5">举报窗口</span>
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
                              required
                          ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="动态-ID"
                              hint="请输入动态ID"
                              persistent-hint
                              required
                          ></v-text-field>
                        </v-col>


                       <v-col cols="12">
                        <v-text-field
                            label="Description"
                            outlined
                            height="200px"
                        ></v-text-field>
                       </v-col>
                      </v-row>
                    </v-container>
                    <small>请勿恶意诽谤~</small>
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
<!--          <v-btn-->
<!--              icon-->
<!--              @click="handleClick(item)"-->
<!--              :color="item.heartColor"-->
<!--          >-->
<!--            <v-icon>mdi-heart</v-icon>-->
<!--          </v-btn>-->
<!--          <span class="subheading mr-2">{{item.heartNum}}</span>-->
          <v-btn
              icon
              @click="handleClick2(item)"
              :color="item.messageColor"
          >
            <v-icon>
              mdi-message-text
            </v-icon>
          </v-btn>
          <span class="subheading">{{ 0 }}</span>

<!--          <v-btn-->
<!--              icon-->
<!--              @click="handleClick3(item)"-->
<!--              :color="item.sharingColor"-->
<!--          >-->
<!--            <v-icon>mdi-share-variant</v-icon>-->
<!--          </v-btn>-->
<!--          <span class="subheading">{{ item.sharingNum }}</span>-->


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
  name: "Another",
  data: () => ({
    dialog: false,
    currentPage: 1,
    PageSize:1,
    totalCount: 15,
    dataList:[
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
    ],
    buffer:[],
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
    EditMyInfo(){
      this.dialog=false
    }
  },
  created() {
    let count = 10;
    console.log("哲学")
    this.$store.dispatch("AllgetLatest", count).then(res => {
      this.buffer = res.filter(item=>item.tag===null)
      this.totalCount=this.buffer.length+1
      for(let i=0;i<this.buffer.length;i++){
        // console.log("sid:",this.data[i]['sendId'])
        this.buffer[i]['username']='Tom'
        this.buffer[i].show1=false
        this.buffer[i].heartColor='gray'
        this.buffer[i].heartNum=322
        this.buffer[i].show2=false
        this.buffer[i].messageColor='gray'
        this.buffer[i].messageNum=677
        this.buffer[i].show3=false
        this.buffer[i].sharingColor='gray'
        this.buffer[i].sharingNum=499
        this.buffer[i].textarea=''
        this.buffer[i].reply_items=[]
      }
      for(let i=0;i<this.buffer.length;i++){
        this.dataList.push(this.buffer[i])
      }

    }).catch(err => {
      console.log(err);
    });
  },

  computed:{
    ReplyLength(item){
      return item.repy_items.length
    }
  }

};
</script>

<style scoped>

</style>
