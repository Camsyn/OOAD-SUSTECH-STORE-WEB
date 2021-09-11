<template>
  <v-app-bar>
    <v-container style="margin: 0" fluid>
      <v-row>
        <v-col cols="9" class="pt-8">
          <v-row justify="start" cols="12">
            <v-col>
              <v-btn text>
                <span>首页</span>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn text>
                <span>广场</span>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn text>
                <span>发布</span>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn text>
                <span>消息</span>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn text>
                <span>我的</span>
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="4">
              <v-text-field label="Search"></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-spacer/>
        <v-col  class="pt-6">
          <v-row>
            <v-col cols="2" offset="7">
              <v-avatar
                  size="50"
                  @click="info"
              >
                <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                >
              </v-avatar>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "header",
  data(){

  },
  methods: {
    info(){

    }
  }
};
</script>

<style scoped></style>
