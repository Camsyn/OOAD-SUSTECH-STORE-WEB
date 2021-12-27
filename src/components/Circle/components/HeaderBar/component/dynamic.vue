<template>
  <div style="padding: 10px">
    <v-card
        class="mx-auto"
        v-for="(item,i) in GameList"
        :key="i"
        flat
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
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import circle from "../../../../../store/modules/circle";

export default {
  name: "dynamic",
  data:()=>({
  }),
  methods:{
    handleClick(item){
      this.$store.commit('dynamicClick1',{item})
    },
    handleClick2(item){
      this.$store.commit('dynamicClick2',{item})
    },
    handleClick3(item){
      this.$store.commit('dynamicClick3',{item})
    },
    reply_click(item){
      this.$store.commit('dynamicreply_click',{item})
    }
  },
  computed:{
    GameList(){
      return circle.state.dynamicPool.filter(item=>item.tag==="game")
    }
  }
}
</script>

<style scoped>

</style>
