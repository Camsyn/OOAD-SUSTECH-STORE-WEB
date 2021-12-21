<template>
  <v-card class="mx-auto" style="overflow: hidden">
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
        <v-textarea
            dense
            v-model="uploadInfo.description"
            placeholder="文字描述..."
            counter
            maxlength="200"
            full-width
            single-line
        ></v-textarea>
      <v-container>
        <v-row>
          <v-col>
            <v-select label="类型" :items="cata" v-model="uploadInfo.category"></v-select>
          </v-col>
          <v-col>
            <v-select label="支付方式" :items="trade" v-model="uploadInfo.tradeType"></v-select>
          </v-col>
          <v-col>
            <v-text-field
                label="待售量"
                v-model="uploadInfo.count"
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
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
                style="width: 40%; display: inline"
                label="售价"
                prefix="￥"
                v-model="uploadInfo.exactPrice"
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
                标签
              </v-row>
              <v-row class="d-flex">
                <v-checkbox
                    v-for="label in label_all" :key="label"
                    :value="label"
                    :label="label"
                    v-model="uploadInfo.labels"
                  ></v-checkbox>
              </v-row>
              <v-row>
                自定义标签
              </v-row>
              <v-row class="mr-0">
                <v-col cols="5">
                  <v-text-field
                      v-model="label_to_add"
                      :append-outer-icon="'mdi-check'"
                      filled
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
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
  </v-card>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      uploadInfo: {
        title: "",
        description: "",
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
      description: "",
      model: null,
      images: [],
      label_to_add: "",
      user_defined_label: [],
      label_all: [],
      cata: ["商品","服务"],
      trade: ["第三方支付", "平台代币", "收款码", "私下交易"]
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
      if (this.uploadInfo.description===""||this.uploadInfo.exactPrice==null
          ||this.uploadInfo.originalPrice==null||this.uploadInfo.category==null
          ||this.uploadInfo.tradeType==null
      ){
        console.log("info needed")
        return ;
      }
      this.uploadInfo.category = this.cata.indexOf(this.uploadInfo.category);
      this.uploadInfo.tradeType = this.trade.indexOf(this.uploadInfo.tradeType);
      this.uploadInfo.labels.concat(this.user_defined_label)
      console.log(this.uploadInfo);
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
      if (this.label_to_add != "") {
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
