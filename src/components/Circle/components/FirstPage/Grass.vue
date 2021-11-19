<template>
  <div id="main">
    <div style="display: flex">
      <v-card
        max-width="400"
        class="mx-auto"
      >

        <v-container class="pa-1">
          <v-item-group
            v-model="selected"
            multiple
          >
            <v-row>
              <v-col
                v-for="(item, i) in items"
                :key="i"
                cols="12"
                md="6"
              >
                <v-item v-slot="{ active, toggle }">
                  <v-img
                    :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
                    height="150"
                    class="text-right pa-2"
                    @click="toggle"
                  >
                    <v-btn
                      icon
                      dark
                    >
                      <v-icon>
                        {{ active ? 'mdi-heart-outline' : 'mdi-heart' }}
                      </v-icon>
                    </v-btn>
                  </v-img>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-container>
      </v-card>
    </div>


  </div>
</template>

<script>
export default {
  name: "Grass",
  data: () => ({
    items: [
      {
        src: 'backgrounds/bg.jpg',
      },
      {
        src: 'backgrounds/md.jpg',
      },
      {
        src: 'backgrounds/bg-2.jpg',
      },
      {
        src: 'backgrounds/md2.jpg',
      },
    ],
    selected: [],
  }),

};
</script>

<style scoped>

</style>
