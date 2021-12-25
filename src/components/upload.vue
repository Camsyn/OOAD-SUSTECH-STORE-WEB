<template>
  <v-card class="mx-auto" style="overflow: hidden">
   <div style="padding: 20px">
      <v-form>
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
        <v-slide-group
          v-model="model"
          class="pa-4"
          active-class="success"
          show-arrows
        >
          <v-slide-item
            v-for="(image, ind) in this.uploadInfo.images"
            :key="ind"
            v-slot="{ active, toggle }"
            class="mx-2"
          >
            <v-img
              contain
              :src=image
              width="350"
            ></v-img>
          </v-slide-item>
        </v-slide-group>
        <v-divider></v-divider>
        <v-text-field label="标题" v-model="uploadInfo.title"></v-text-field>
        <v-textarea
          dense
          v-model="uploadInfo.desc_"
          placeholder="描述..."
          counter
          maxlength="200"
          full-width
          single-line
        ></v-textarea>
        <v-container>
          <v-row>
            <v-col>
              <v-select label="类型" :items="cata" v-model="uploadInfo.category" :rules="[rules.required]"></v-select>
            </v-col>
            <v-col>
              <v-select label="买卖" :items="type" v-model="uploadInfo.type" :rules="[rules.required]"></v-select>
            </v-col>
            <v-col>
              <v-select label="支付方式" :items="trade" v-model="uploadInfo.tradeType" :rules="[rules.required]"></v-select>
            </v-col>
            <v-col>
              <v-text-field
                label="待售量"
                v-model="uploadInfo.count"
                :rules="[rules.required, rules.number]"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                style="width: 40%; display: inline"
                label="原价"
                prefix="￥"
                v-model="uploadInfo.originalPrice"
                :rules="[rules.required, rules.float]"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                style="width: 40%; display: inline"
                label="售价"
                prefix="￥"
                v-model="uploadInfo.exactPrice"
                :rules="[rules.required, rules.float]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-expansion-panels flat  popout>
          <v-expansion-panel>
            <v-expansion-panel-header class="pa-0">
              详细
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-container class="px-0">
                <v-row>
                  预设标签
                </v-row>
                <v-row dense>
                  <v-col v-for="label in $store.getters.labels" :key="label" cols="3">
                    <v-checkbox
                        :value="label"
                        :label="label"
                        v-model="label_all"
                        dense
                        hide-details
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  自定义标签
                </v-row>
                <v-row class="mr-0">
                  <v-col cols="5">
                    <v-text-field
                        outlined
                      v-model="label_to_add"
                      :append-outer-icon="'mdi-check'"
                      filled
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                        :rules="[this.rules.only]"
                      @click:append-outer="add_label"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" class="ml-1 pt-6 pr-0 flow-row justify-start">
                    <v-chip
                      v-for="(label, index) in user_defined_label"
                      :key="label"
                      close
                      outlined
                      color="black"
                      class="mx-1 mt-1"
                      @click:close="del_label(index)"
                    >
                      {{ label }}
                    </v-chip>
                  </v-col>
                </v-row>
              </v-container>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <div class="d-flex justify-center">
          <v-btn class="mb-3 mx-4" @click="addFile">
            <span>上传</span>
          </v-btn>
          <v-btn class="mb-3 mx-4" @click="upload">
            <span>完成</span>
          </v-btn>
        </div>
      </v-form>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      uploadInfo: {
        title: "",
        desc_: "",
        type: null,
        count: 1,
        saleCount: 0,
        tradeType: null,
        category: null,
        originalPrice: null,
        exactPrice: null,
        images: [],
        video: [],
        labels: [],
      },
      desc_: "",
      model: null,
      images: [],
      label_to_add: "",
      user_defined_label: [],
      pre_defined_label: [],
      label_all: [],
      cata: ["商品","服务"],
      type:["买","卖"],
      trade: ["第三方", "代币", "收款码", "线下"],

      rules: {
        required: value => !!value || '必填项',
        counter: value => value.length <= 20 || '请勿超过20个字符',
        number: value => {
          return /^(0|[1-9][0-9]*)$/.test(value)||"请填整数";
        },
        float: value=>{
          const pattern = /[0-9]+(\.[0-9]+)?/;
          return pattern.test(value)||"请填数字";
        },
        only: value=>{
          return this.user_defined_label.indexOf(value)===-1||"标签已存在";
        }
      }
    };
  },
  methods: {
    addFile() {
        this.$store.dispatch("upload", {files: this.images, mul: true}).then((data)=>{
          for (let fl of data) {
            this.uploadInfo.images.push(fl.fileDownloadUri.replace("/downloadFile", ""));
          }
        }).catch(err => {
          console.log(err);
      });
      this.images=[];
    },
    upload() {
      if (this.uploadInfo.desc_===""||this.uploadInfo.exactPrice==null
          ||this.uploadInfo.originalPrice==null||this.uploadInfo.category==null
          ||this.uploadInfo.tradeType==null
      ){
        console.log("info needed")
        return ;
      }
      this.uploadInfo.category = this.cata.indexOf(this.uploadInfo.category);
      this.uploadInfo.tradeType = this.trade.indexOf(this.uploadInfo.tradeType);
      this.uploadInfo.labels = this.user_defined_label.concat(this.label_all);
      this.uploadInfo.type = this.type.indexOf(this.uploadInfo.type);
      // console.log(this.uploadInfo);
      this.$store.dispatch("push", this.uploadInfo).then(res=>{
        this.uploadInfo.labels = [];
        this.uploadInfo.images = [];
        this.uploadInfo.video = [];
        this.$emit("close");
      }).catch(err=>{
        console.log(err);
      });
    },
    del_label(index) {
      this.user_defined_label.splice(index, 1);
    },

    add_label() {
      if (this.label_to_add != "" && this.user_defined_label.indexOf(this.label_to_add)===-1) {
        this.user_defined_label.push(this.label_to_add);
        this.label_to_add = "";
      }
    },
  },

  created() {
  }
};
</script>

<style>

</style>
