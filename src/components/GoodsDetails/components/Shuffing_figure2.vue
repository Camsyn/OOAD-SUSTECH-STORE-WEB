<template>
  <v-carousel
  cycle
  interval = 1500
  >
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
import goods from "../../../store/modules/goods";
export default {
  name: "Shuffing_figure2",
  data () {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
  mounted() {
    this.items = goods.state.current.request.images
  }
}
</script>

<style scoped>

</style>