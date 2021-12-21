<template>
    <v-card elevation="0" flat class="cd">
      <div
          :class="['text-h1']"
          class="text-center"
          v-text="txt"
      ></div>
      <v-container class="d-flex justify-center" style="margin-top: 100px">
        <v-form style="width: 300px">
          <div class="d-flex justify-center">
            <v-file-input
                outlined
                prepend-icon="mdi-zip-box"
                show-size
                counter
                multiple
                label="上传"
                v-model="files"
            >
            </v-file-input>
          </div>
          <v-divider></v-divider>
          <div class="d-flex justify-center">
            <v-btn class="" style="width: 100px" text @click="upload">
              <span>完成</span>
            </v-btn>
          </div>
        </v-form>
      </v-container>
    </v-card>
</template>

<script>
export default {
  name: "taint",
  data(){
    return{
      txt: "ShadowTaint",
      files: [],
    }
  },

  methods: {
    upload(){
      if (this.files.length === 0)
        return;
    }
  },

  created() {
    this.hei = document.documentElement.clientHeight;
  },

};
</script>

<style scoped>
.cd
{
  position: absolute;
  top: 100px;
  width: 100%;
}
</style>
