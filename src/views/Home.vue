<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .title {
    margin: 40px;
    font-size: 30px;
  }
  .collection {
    margin-top: 20px;
    .vue-virtual-collection {
      margin: 0 auto;
    }
  }
  .text {
    input {
      text-align: center;
      border: 0;
      width: 75px;
      border-bottom: 1px solid #e0e0e0;
    }
  }
}
.card {
  background: #aaa;
  width: 100%;
  height: 100%;
  color: #fff;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &.color0 {
    background: rgb(244, 67, 54);
  }
  &.color1 {
    background: rgb(255, 235, 59);
  }
  &.color2 {
    background: rgb(255, 152, 0);
  }
  &.color3 {
    background: rgb(33, 150, 243);
  }
  &.color4 {
    background: rgb(55, 64, 70);
  }
  &.color5 {
    background: rgb(103, 58, 183);
  }
  &.color6 {
    background: rgb(63, 81, 181);
  }
  &.color7 {
    background: rgb(76, 175, 80);
  }
}
</style>

<template>
  <div>
    <div class="collection">
      <VirtualCollection
        :cellSizeAndPositionGetter="cellSizeAndPositionGetter"
        :collection="items"
        :height="700"
        :width="width"
      >
<!--        <commodity></commodity>-->
        <div
          slot="cell"
          slot-scope="props"
          class="card"
          :class="props.data.color"
        >
          <commodity></commodity>
<!--          <v-img-->
<!--            lazy-src="https://cdn.vuetifyjs.com/images/john.jpg"-->
<!--            width="75"-->
<!--            max-height="85"-->
<!--          ></v-img>-->
        </div>
      </VirtualCollection>
    </div>
  </div>
</template>

<script>
import commodity from "../components/commodity/commodity";
export default {
  name: "Home",
  data() {
    return {
      amount: "100",
      line: "5",
      width:
        (document.body.clientWidth || document.documentElement.clientWidth) -
        20,
    };
  },
  components:{
    commodity,
  },
  computed: {
    items() {
      const amount = +this.amount;
      const line = +this.line;
      const columnHeight = new Array(line).fill(0);
      return new Array(amount).fill(1).map((_, index) => {
        const column = index % line;
        const height = 300 + 300 * Math.random();
        const result = {
          data: {
            text: `#${index}`,
            color: this.randomColor(),
          },
          height,
          width: 300,
          x: column * 310,
          y: columnHeight[column],
        };
        columnHeight[column] += height + 10;
        return result;
      });
    },
  },
  methods: {
    cellSizeAndPositionGetter(item, index) {
      const { data, ...sizeAndPosition } = item;
      console.log(index, data);
      return sizeAndPosition;
    },
    randomColor() {
      return "color" + parseInt(Math.random() * 8);
    },
  },
};
</script>
