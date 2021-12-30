<template>
  <div id="observingnow">
    <div style="padding: 10px">
      <v-card
          class="mx-auto"
          flat
      >
        <v-list two-line>
          <template v-for="(item, index) in all_evaluations">
            <v-list-item
                :key="index"
            >
              <v-list-item-avatar>
                <img :src="item.avatar" alt="CC">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.nickname"></v-list-item-title>
                <span class="font-weight-bold" style= "display:inline">

                </span>
                <v-row>
                  <v-col cols="12" md="9" sm="9">
                    <v-list-item-subtitle v-html="item.content">
                    </v-list-item-subtitle>
                  </v-col>

                </v-row>

              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>

    </div>

  </div>
</template>

<script>
import circle from "../../../../../store/modules/circle";
import user from "../../../../../store/modules/user";
export default {
  name: "evaluate",
  data:()=>({
    commentData: [],
  }),
  computed:{
    all_evaluations(){
      let data10 = {
        sid : user.state.ObserverId,
        page: 0,
        limit: 10,
        sort : false
      }
        this.$store.dispatch('getUserComment', data10).then((data) => {
          for (let i = 0; i <data.length ; i++) {
            this.$store.dispatch("getInfoOf" , data[i].fromSid).then((data3) => {
              data[i].avatar = data3.headImage
              data[i].nickname = data3.nickname
            })
          }
          this.commentData = data
        })
      return this.commentData
    }
  }
}
</script>

<style scoped>

</style>
