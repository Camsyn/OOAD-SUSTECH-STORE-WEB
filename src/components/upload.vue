<template>
  <v-card class="mx-auto" width="50%">
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
            v-for="(image, ind) in this.imageUrls"
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

      <!--      <v-item-group>-->
      <!--        <v-container>-->
      <!--          <v-row>-->
      <!--            <v-col-->
      <!--                v-for="(image, ind) in this.imageUrls"-->
      <!--                :key="ind"-->
      <!--            >-->
      <!--              <v-item>-->
      <!--                <v-img-->
      <!--                    contain-->
      <!--                    :src=image-->
      <!--                    width="350"-->
      <!--                ></v-img>-->
      <!--              </v-item>-->
      <!--            </v-col>-->
      <!--          </v-row>-->
      <!--        </v-container>-->
      <!--      </v-item-group>-->
        <v-divider></v-divider>
        <v-textarea
            v-model="description"
            placeholder="文字描述..."
            counter
            maxlength="200"
            full-width
            single-line
        ></v-textarea>
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
      description: "",
      model: null,
      images: [],
      imageUrls: [],
    };
  },
  methods: {
    addFile() {
        this.$store.dispatch("upload", {files: this.images, mul: true}).then((data)=>{
          for (let fl of data) {
            this.imageUrls.push(fl.fileDownloadUri.replace("/downloadFile", ""));
          }
        }).catch(err => {
          console.log(err);
      });
      this.images=[];
    },
    upload() {
      this.$store.dispatch("download", "1191300520211114233648425459300_202111150112847931700.jpg");
    },
  },

  created() {
  }
};
</script>

<style>

</style>
