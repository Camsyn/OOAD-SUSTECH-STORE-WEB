<template>
  <v-app-bar
      app
      color="white"
      flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar
          class="mr-10"
          color="grey darken-1"
          size="32"
      ></v-avatar>

      <v-btn text>
        主页
      </v-btn>

      <v-btn text>
        圈子
      </v-btn>
      <v-btn
          icon
      >
        <v-icon>mdi-forum</v-icon>
      </v-btn>

      <menu-btn icon="mdi-forum"></menu-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
import menuBtn from "@/layout/components/menuBtn";
export default {
  components: { menuBtn, },
  name: "header",
  data: () => ({
    selected: [2],
    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: 'Ali Connors',
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: 'me, Scrott, Jennifer',
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams',
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen',
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt',
      },
    ],
  }),
  methods: {
    info(){

    }
  }
};
</script>

<style scoped></style>
