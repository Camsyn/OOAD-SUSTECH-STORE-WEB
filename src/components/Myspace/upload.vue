<template>
  <v-card class="mx-auto my-12" max-width="350">
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
      <v-divider></v-divider>
      <v-textarea
        v-model="description"
        placeholder="文字描述..."
        counter
        maxlength="140"
        full-width
        single-line
      ></v-textarea>
      <v-btn class="offset-5 mb-3" @click="upload">
        <span>上传</span>
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "upload",
  data() {
    return {
      description: "",
      images: [],
    };
  },
  methods: {
    addFile(file) {
      this.images += file;
    },
    upload() {
      console.log(this.images.length, this.description);
    },
  },
};
</script>

<style scoped></style>
