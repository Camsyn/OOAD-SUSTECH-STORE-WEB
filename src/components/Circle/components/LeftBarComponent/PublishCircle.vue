<template>
  <v-card elevation="0" class="mx-auto">
    <div style="padding: 20px">
      <v-row align="center">
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              v-model="dynamic.topic"
              label="Title"
              hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div class="text-h6 font-weight-black pl-4" v-text="yulan"></div>
    <preview :content="this.dynamic.content" class="px-3"></preview>

    <v-card-text>
      <v-row cols="auto">
        <v-textarea
              label="编辑"
              auto-grow
              outlined
              rows="5"
              row-height="25"
              shaped
              v-model="edit"
            ></v-textarea>
      </v-row>
      <v-row dense class="d-flex justify-center">
        <v-btn
            class="ma-0" @click="addText"
            plain
            fab
        >
          上传
        </v-btn>
        <v-btn
            class="ma-0" @click="clear"
            plain
            fab
        >
          清空
        </v-btn>
      </v-row>

      <v-row>
        <v-file-input
                accept="image/*"
                prepend-icon="mdi-camera"
                show-size
                counter
                multiple
                label="上传图片"
                v-model="images"
            >
            </v-file-input>
        <v-btn
                class="mb-3 mx-4" @click="addImage"
                plain
                fab
            >
              <v-icon dark>
                mdi-cloud-upload
              </v-icon>
            </v-btn>
      </v-row>
    </v-card-text>

    <v-card-actions>
      <v-row>
        <v-col cols="6">
          <v-select
              v-model="dynamic.tag"
              :items="Tags"
              menu-props="auto"
              label="Select"
              hide-details
              prepend-icon="mdi-map"
              single-line
          ></v-select>
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <v-btn
              class="mt-3"
              text
              elevation="1"
              @click="publish"
          >
            发布
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import preview from "../../../Myspace/components/preview";

export default {
  components:{
    preview
  },
  name: "PublishCircle",
  data:()=>({
    textarea:"",
    files: [],
    Tags: ["动漫","游戏","旅游","美食","萌宠","哲思"],
    yulan: "预览",

    dynamic:  {
      tag:"",
      topic:"",
      content:"",
    },
    urls:[],
    edit:"",
    images:[],
    splitter:"<<<IMAGE>>>",
    spLen: 11,

  }),
  methods:{
    publish(){
      if (this.dynamic.content.length===0)
        return;
      this.$store.dispatch("postMsg", this.dynamic).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    },
    addImage(){
      this.$store.dispatch("upload", {files: this.images, mul: true}).then(res=>{
        console.log(res)
        for (let fl of res) {
          let url = fl.fileDownloadUri.replace("/downloadFile", "");
          this.urls.push(url);
          this.dynamic.content+=(this.splitter+url+this.splitter);
        }

      }).catch(err => {
        console.log(err);
      });
      this.images=[];
    },
    addText(){
      this.dynamic.content+=this.edit;
      this.edit = "";
    },
    clear(){
      this.dynamic.content="";
      this.urls=[];
      this.edit="";
      this.images=[];
    }
  }
};
</script>

<style scoped>

</style>
