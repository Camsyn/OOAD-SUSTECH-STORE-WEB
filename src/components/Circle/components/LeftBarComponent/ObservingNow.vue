<template>
  <div id="observingnow">
    <div style="padding: 10px">


      <v-card
        class="mx-auto"
      >
        <v-list two-line>
          <template v-for="(item, index) in items2.slice(0, 6)">

            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>


            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item
              v-else
              v-show="item.notice"
              :key="item.name"
            >
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <span class="font-weight-bold" style= "display:inline">
                  <el-button  @click="observeClick(item)" :type="item.buttontype"  round style="position:absolute;right:16px;padding: 6px;">{{item.buttontext}}</el-button>
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
    observeClick(item){
      let tmp=item.notice
      console.log(tmp)
      if (tmp===false){
        item.notice=true
        item.buttontext="已关注";
        item.buttontype="primary"
      }
      else{
        item.notice=false;
        item.buttontext="+关注";
        item.buttontype="plain";
      }
    },

  },
  mounted(){
    this.items2=circle.state.follow
    console.log(this.items2);
  }
};
</script>

<style scoped>

</style>
