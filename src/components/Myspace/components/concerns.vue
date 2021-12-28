<template>
  <div id="concerns">
    <div style="padding: 10px">
      <v-card
          class="mx-auto"
      >
        <v-list two-line>
          <template v-for="(item, index) in all_followers">
            <v-list-item
                :key="index"
            >
              <v-list-item-avatar>
                <img :src="item.avatar" alt="CC">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <span class="font-weight-bold" style= "display:inline">

                </span>
                <v-row>
                  <v-col cols="12" md="9" sm="9">
                    <v-list-item-subtitle v-html="item.subtitle">
                    </v-list-item-subtitle>
                  </v-col>
                  <v-col cols="12" md="3" sm="3">
                    <v-btn
                        depressed
                        color="error"
                        right
                        @click="observeClick(item)"
                    >
                      取消关注
                    </v-btn>
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
import circle from "../../../store/modules/circle";
export default {
  name: "concern",
  data:()=>({
  }),
  methods:{
    observeClick(item){
      this.$store.commit('UAdd', { item })
    },

  },
  computed:{
    all_followers(){
      return circle.state.followList
    }

  }
};
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

#con
{
  height: 100%;
}
</style>
