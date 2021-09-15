<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container>
      <v-row>
        <v-col class="col-1">
          <v-btn outlined fab color="black" @click="buySellChange()"> {{buySell}} </v-btn>
        </v-col>
        <v-col> </v-col>
        <v-col>
          <v-text-field flat hide-details rounded solo-inverted></v-text-field>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="n in amount" :key="n" cols="4">
          <commodity></commodity>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import commodity from "../components/commodity/commodity";
export default {
  name: "Home",
  data() {
    return {
      buySell: "收",
      amount: 9,
      height: 0,
    };
  },
  components: {
    commodity,
  },
  computed: {},
  created() {
    this.height = document.documentElement.clientHeight;
    window.addEventListener("scroll", this.addMore);
  },
  methods: {
    addMore() {
      let windowRelativeBottom =
        document.documentElement.getBoundingClientRect().bottom;
      // 如果用户将页面滚动的距离不够远（文档末端距窗口底部 >100px）
      if (windowRelativeBottom > this.height + 100) return;
      // 添加更多数据
      this.amount += 9;
    },
    buySellChange(){
      this.buySell = this.buySell == "收" ? "出" : "收";
    },
  },
};
</script>

<style scoped></style>
