<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="350" elevation="1">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

    <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-row class="pt-5">
      <v-col class="pa-0" offset="1" cols="2">
        <v-avatar
            class="pb-3"
            size="50"
        >
          <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
          >
        </v-avatar>
      </v-col>
      <v-col cols="4" class="pa-0">
        <v-card-text class="pt-3 px-0">
          username_Jhon
        </v-card-text>
      </v-col>
      <v-col class="pa-0" cols="3">
        <v-chip
            class="ma-2"
            color="success"
            outlined
        >
          <v-icon left>
            mdi-server-plus
          </v-icon>
          {{credit}}
        </v-chip>
      </v-col>

      <v-col class="px-0 pt-1">
        <v-btn
            icon
            color="deep-orange"
            @click="click_like"
        >
          <v-icon>mdi-thumb-up</v-icon>
          <div>{{like}}</div>
        </v-btn>
      </v-col>
    </v-row>

  </v-card>
</template>

<script>
export default {
  name: "commodity",
  data(){
    return{
      title: "",
      description: "test for a description text. This is a default description.test for a description text. This is a default description",
      credit: 100,
      like: 0,
    }
  },
  props:['height', 'descrip'],
  methods: {
    click_like(){
      this.like++
    }
  },
  computed: {

  },
};
</script>

<style scoped></style>
