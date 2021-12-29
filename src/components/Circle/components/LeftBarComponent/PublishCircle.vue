<template>
  <v-card elevation="0" class="mx-auto">
    <div style="padding: 30px">
      <v-row align="center">
        <v-col cols="12" md="6" sm="6">
          <v-text-field
              v-model="dynamic.topic"
              :rules="[rules.required]"
              label="Title"
              hide-details="auto"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
    <div v-for="(item, index) in contents" :key="index">
      <v-textarea
          append-icon="mdi-comment"
          @click:append="item.edit=false"
          v-if="item.edit"
          v-model="item.text"
          dense
          outlined
          auto-grow
          rows="1"
          row-height="10"
      >
      </v-textarea>
      <div
          v-else-if="item.text"
          v-text="item.text"
          class="pl-4"
          style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap;"
          @click="item.edit=true;"
      ></div>
      <v-img v-if="item.image" :src="item.image" contain></v-img>
    </div>

    <v-card-text>
      <div style="padding: 20px">
        <v-row cols="auto">

          <v-textarea
              label="Content"
              name="input-7-4"
              auto-grow
              outlined
              dense
              rows="5"
              row-height="25"
              shaped
              v-model="edit"
          ></v-textarea>
        </v-row>
      </div>

      <div style="padding: 20px">
        <v-row>

          <v-file-input
              accept="image/*"
              show-size
              counter
              multiple
              outlined
              color="blue accent-4"
              label="File input"
              v-model="images"
          >
          </v-file-input>
          <v-btn
              class="mb-1 mx-2" @click="addImage"
              plain
              fab
          >
            <v-icon dark>
              mdi-cloud-upload
            </v-icon>
          </v-btn>
        </v-row>
      </div>

    </v-card-text>

    <v-card-actions>
      <div style="padding: 20px">
        <v-row>

            <v-select
                v-model="dynamic.tag"
                :items="Tags"
                :rules="[rules.required]"
                menu-props="auto"
                label="Select"
                hide-details
                prepend-icon="mdi-map"
                single-line
            ></v-select>

         <v-spacer></v-spacer>
            <v-btn
                class="mt-3" @click="clear"
                text
                depressed
            >
              Clear
            </v-btn>
          <v-spacer></v-spacer>

            <v-btn
                class="mt-3"
                text
                depressed
                @click="publish"
            >
              publish
            </v-btn>

        </v-row>
      </div>

    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  name: "PublishCircle",
  data:()=>({
    textarea:"",
    files: [],
    Tags: ["动漫","游戏","旅游","美食","萌宠","哲思"],
    dynamic:  {
      tag:"",
      topic:"",
      content:"",
    },
    contents: [],
    urls:[],
    edit:"",
    images:[],
    splitter:"<<<IMAGE>>>",
    spLen: 11,
    ind: 0,
    rules: {
      required: value => !!value || '必填项',
    },
  }),
  methods:{
    publish(){
      if (this.dynamic.tag===""||this.dynamic.topic==="")
        return;
      if (this.edit){
        this.contents.push({text: this.edit, edit: false});
        this.edit="";
      }
      if (this.contents.length===0)
        return;

      this.contents.forEach(item=>{
        if (item.text)
          this.dynamic.content+=item.text;
        else if (item.image)
          this.dynamic.content+=this.splitter+item.image+this.splitter;
      })

      this.$store.dispatch("postMsg", this.dynamic).then(res=>{
        this.clear();
      }).catch(err=>{
        console.log(err);
      });
    },
    addImage(){
      if (!this.images)
        return;
      this.contents.push({text: this.edit, edit: false});
      this.edit="";

      this.$store.dispatch("upload", {files: this.images, mul: true}).then(res=>{
        for (let fl of res) {
          let url = fl.fileDownloadUri.replace("/downloadFile", "");
          this.contents.push({image: url});
        }

      }).catch(err => {
        console.log(err);
      });
      this.images=[];
    },

    clear(){
      this.dynamic.content="";
      this.contents=[];
      this.urls=[];
      this.edit="";
      this.images=[];
    }
  }
};
</script>

<style scoped>

</style>
