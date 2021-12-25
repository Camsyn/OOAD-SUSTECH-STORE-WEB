<template>
  <div id="PublishCircle">
    <div class="card1" style="padding: 10px">
      <v-card
        class="mx-auto"
      >
        <v-img
          src="https://images.pexels.com/photos/10570567/pexels-photo-10570567.jpeg?cs=srgb&dl=pexels-alex-staudinger-10570567.jpg&fm=jpg"
          height="200px"
        ></v-img>

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-text>

          <v-col
            cols="auto"

          >
            <v-textarea
              label="Five rows"
              auto-grow
              outlined
              rows="5"
              row-height="25"
              shaped
              v-model="textarea"
            ></v-textarea>
            <VueEmoji ref="emoji"  @input="onInput" :value="textarea" />
          </v-col>

          <v-col>
            <v-file-input
              accept="image/*"
              v-model="files"
              placeholder="Upload your documents"
              label="File input"
              multiple
              prepend-icon="mdi-camera"
            >
              <template v-slot:selection="{ text }">
                <v-chip
                  small
                  label
                  color="primary"
                >
                  {{ text }}
                </v-chip>
              </template>
            </v-file-input>

          </v-col>

        </v-card-text>

        <v-card-actions>

          <div class="card_item" style="padding:20px">
            <v-select
              append-icon="mdi-eye-settings"
              :items="items"
              label="可见范围"
              solo
            ></v-select>
          </div>


          <v-spacer></v-spacer>

          <div style="padding: 20px">

            <v-btn
              color="blue"
              text
              depressed
              elevation="2"
            >
              Publish
            </v-btn>

          </div>




        </v-card-actions>

        <div v-show="false">

          <p>
            cool
          </p>
        </div>


      </v-card>
    </div>







  </div>
</template>

<script>
import VueEmoji from 'emoji-vue'
export default {
  components:{
    VueEmoji
  },
  name: "PublishCircle",
  data:()=>({
    textarea:"",
    files: [],
    items: ['所有人可见', '关注的人可见', '好友可见', '仅自己可见'],

  }),
  methods:{
    onInput(event){

    },

  }
};
</script>

<style scoped>

</style>
