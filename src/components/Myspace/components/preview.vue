<template>
  <v-card elevation="1">
    <report :dialog="repo" :id="circle.id" type="reportCircle" v-on:close="repo=false"></report>
    <v-card-subtitle class="py-2">
      <v-row dense>
        <v-col class="d-flex justify-start">
          <v-avatar size="50">
            <v-img :src="headImage"></v-img>
          </v-avatar>
          <span v-text="nickname" class="text-h5 mt-2 ml-2"></span>
        </v-col>
        <v-col class="d-flex justify-end">
          <span v-text="date" class="text-h5 mt-2 ml-2"></span>
        </v-col>
        <v-col cols="1" class="d-flex flex-column-reverse flex-row-reverse">
          <v-btn class="mb-2 pa-0" @click ="ReportCircle" small text>
            举报
          </v-btn>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-card-text>
      <div v-for="item in show" :key="item.ind">
        <div v-if="item.text" v-text="item.text" class="pl-1" style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap;"></div>
        <v-img v-else :src="item.image" contain></v-img>
      </div>
    </v-card-text>

    <v-expansion-panels flat popout>
      <v-expansion-panel>
        <v-expansion-panel-header class="pa-0">
          评论
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-container class="px-0">
            <div style="padding: 6px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 1, maxRows: 12}"
                placeholder="评论"
                v-model="comment"
                @click=""
              >
              </el-input>
            </div>
            <v-spacer></v-spacer>
            <div style="padding: 10px">
              <el-button type="primary" @click="sendComment">发送</el-button>
            </div>

            <v-list two-line>
              <template v-for="(item, index) in comments">
                <v-list-item :key="index">
                  <v-list-item-avatar>
                    <v-img :src="item.headImage"></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title v-text="item.nickname"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.content"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
              </template>
            </v-list>
          </v-container>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script>
import report from "../../report";
export default {
  components:{report},
  props:["circle"],
  name: "preview",
  data:()=>({
    splitter:"<<<IMAGE>>>",
    spLen: 11,
    sender: null,
    nickname:"",
    headImage:null,
    comments: [],
    comment: "",
    repo:false,
  }),
  computed:{
    show(){
      let con = this.circle.content;
      return this.parse(con);
    },
    date(){
      return this.circle.sendTime.replace("T", " ");
    },
    sd(){
      this.$store.dispatch("getInfoOf", this.circle.sendId).then(res=>{
        this.nickname = res.nickname;
        this.headImage = res.headImage;
      });
      return this.circle.sendId;
    },
  },
  watch:{
    sd: function (){

    }
  },
  methods:{
    ReportCircle() {
      this.$confirm('是否举报该动态', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.repo = true
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    getComment(){
      let cmId = this.circle.id;
      let count = 99;
      this.$store.dispatch("getComment", {cmId, count}).then(res=>{
        res.forEach(cm=>{
          this.$store.dispatch("getInfoOf", cm.sendId).then(res=>{
            cm.nickname = res.nickname;
            cm.headImage = res.headImage;
            this.comments.push(cm);
          }).catch(err=>{
            console.log(err);
          });
        });

      }).catch(err=>{
        console.log(err);
      });
    },
    sendComment(){
      let cmt = {
        cmId: this.circle.id,
        content: this.comment,
      }
      this.$store.dispatch("postComment", cmt).then(res=>{
        res.headImage = this.$store.state.user.avatar;
        res.nickname = this.$store.state.user.nickname;
        this.comments.unshift(res);
      }).catch(err=>{

      });
    },
    parse(con){
      let pos = 0;
      let sps = [];
      while (true) {
        let foundPos = con.indexOf(this.splitter, pos);
        if (foundPos == -1) break;

        sps.push(foundPos);
        pos = foundPos + this.spLen;
      }

      if (sps.length===0){
        return [{text: con, ind: 0}];
      }else {
        let cur = 0, ind=0;
        let res = [];
        for (let i=0;i<sps.length;i+=2){
          let ind1 = sps[i], ind2 = sps[i+1];
          let url = con.slice(ind1+this.spLen, ind2);
          if (cur!==sps[i]){
            res.push({text: con.slice(cur, ind1), ind: ind++});
          }
          res.push({image: url, ind: ind++});
          cur = ind2+this.spLen;
        }
        if (cur<con.length-1){
          res.push({text: con.slice(cur, con.length), ind: ind++});
        }
        return res;
      }
    }
  },
  created() {
    this.getComment();
  }
}
</script>

<style scoped>

</style>
