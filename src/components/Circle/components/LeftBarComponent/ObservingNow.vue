<template>
  <div id="observingnow">
    <div style="padding: 10px">
      <v-card
        class="mx-auto"
      >
        <v-list two-line>
          <template v-for="(item, index) in items2">
            <v-list-item
              :key="item.name"
            >
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <span class="font-weight-bold" style= "display:inline">
                  <el-button  @click="observeClick(item,index)" :type="item.buttontype"  round style="position:absolute;right:16px;padding: 6px;">{{item.buttontext}}</el-button>
                </span>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>

    </div>

  </div>

</template>

<script>
import circle from "../../../../store/modules/circle";
export default {
  name: "ObservingNow",
  data:()=>({
    data1:[],
    items: [
      {
        icon: 'mdi-inbox',
        text: 'Inbox',
      },
      {
        icon: 'mdi-star',
        text: 'Star',
      },
      {
        icon: 'mdi-send',
        text: 'Send',
      },
      {
        icon: 'mdi-email-open',
        text: 'Drafts',
      },
    ],
    items2: [],
    model: 1,
  }),
  methods:{
    observeClick(item,index){
      let tmp=item.notice
      console.log(tmp)
      if (!tmp){
        item.notice=true
        item.buttontext="已关注";
        item.buttontype="primary"
        // circle.mutations.unfollow(this.state,item)
        console.log(item)
        this.$store.commit('unfollow', { item, index })
      }
      else{
        item.notice=false;
        item.buttontext="+关注";
        item.buttontype="plain";
      }
    },

  },
  created(){
    this.items2=circle.state.follow
    console.log("create",this.items2);
  }
};
</script>

<style scoped>

</style>
