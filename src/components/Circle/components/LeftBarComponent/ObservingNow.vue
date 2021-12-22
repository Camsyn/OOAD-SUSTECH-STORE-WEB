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
              :key="item.title"
            >
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
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
export default {
  name: "ObservingNow",
  data:()=>({
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
    items2: [
      {
        header: 'Today'
      },
      {
        avatar: "https://img1.baidu.com/it/u=3361849135,1935470780&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
        title: 'Brunch this weekend?',
        buttontype:'primary',
        notice:false,
        buttontext:'已关注',
        subtitle: `<span class="font-weight-bold">Ali Connors</span>
        &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0409%2F568ae17fj00qr9hws0023c000hs00hsc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1639828185&t=d4d66f12c74a28ca55c83c2834b63b74",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        buttontype:'primary',
        notice:false,
        buttontext:'已关注',
        subtitle: `<span class="font-weight-bold">to Alex, Scott, Jennifer</span>
        &mdash; Wish I could come, but I'm out of town this weekend.`
      },
      {
        divider: true,
        inset: true
      },
      {
        avatar: "https://img1.baidu.com/it/u=3894253077,938650472&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500",
        title: 'Oui oui',
        buttontype:'primary',
        notice:false,
        buttontext:'已关注',
        subtitle: '<span class="font-weight-bold">Sandra Adams</span> ' +
          '&mdash; Do you have Paris recommendations? Have you ever been?'
      },
    ],
    model: 1,
  }),
  methods:{
    observeClick(item){
      let tmp=item.notice
      console.log(tmp)
      if (tmp===true){
        item.notice=false
        item.buttontext="已关注";
        item.buttontype="primary"
      }
      else{
        item.notice=true;
        item.buttontext="+关注";
        item.buttontype="plain";
      }
    }

  }
};
</script>

<style scoped>

</style>
