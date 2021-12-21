<template>
  <v-sheet min-height="70vh" rounded="lg">
    <v-container
      style="
        z-index: 1;
        background-color: white;
        border-bottom-left-radius: 40px;
        border-bottom-right-radius: 40px;
      "
    >
      <v-row>
        <v-col class="col-1">
          <v-btn outlined fab color="black" @click="buySellChange()">
            {{ buySell }}
          </v-btn>
        </v-col>
        <v-col cols="5" class="d-flex">
          <v-text-field flat hide-details rounded solo-inverted
                        v-model="searchInfo.queryStr"></v-text-field>
          <v-btn icon class="mt-2" @click="search">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-col>
        <v-btn-toggle v-model="srt" tile group class="mt-3">
          <v-btn > 信誉 </v-btn>
          <v-btn > 时间 </v-btn>
          <v-btn > 价格升序 </v-btn>
          <v-btn > 价格降序 </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent width="60%">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-4 py-6" text v-bind="attrs" v-on="on">
              筛选
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5 mx-auto">全部筛选</span>
            </v-card-title>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <span class="text-h6">按标签</span>
                </v-row>
                <v-row>
                  <span>预设标签</span>
                </v-row>
                <v-row>
                  <v-col v-for="label in label_all" :key="label" cols="1">
                    <v-checkbox
                      :value="label"
                      :label="label"
                      v-model="searchInfo.labels"
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <span>自定义标签</span>
                </v-row>
                <v-row class="flex-row row--dense mt-3">
                  <v-col cols="3">
                    <v-text-field
                      v-model="label_to_add"
                      :append-outer-icon="'mdi-check'"
                      filled
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                      @click:append-outer="add_label"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="7" class="ml-7 pt-6 flow-row justify-start">
                    <v-row>
                      <v-chip
                        v-for="(label, index) in user_defined_label"
                        :key="label"
                        close
                        outlined
                        color="black"
                        class="mx-2"
                        @click:close="del_label(index)"
                      >
                        {{ label }}
                      </v-chip>
                    </v-row>
                  </v-col>
                </v-row>
                <v-row>
                  <span>价格区间</span>
                </v-row>
                <v-row class="justify-center">
                  <v-col>
                    <v-text-field
                      v-model="searchInfo.priceFrom"
                      filled
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="1" class="my-3">
                    <p class="text-center text-h5">到</p>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="searchInfo.priceTo"
                      filled
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                取消
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">
                保存
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
      searchInfo:{
        queryStr:"",
        priceFrom: null,
        priceTo: null,
        labels: [],
        firstOrder: null,
        isFirstOrderAsc: true,
        secondOrder: null,
        isSecondOrderAsc: true,
        thirdOrder: null,
        isThirdOrderAsc: null,
      },
      label_to_add: "",
      user_defined_label: ["ab", "bc", "cd", "de", "ef", "fg", "gh"],
      label_all: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
      dialog: false,
      srt: 1,
      buySell: "收",
      amount: 9,
      page: 0,
      height: 0,
      commodities: []
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
    del_label(index) {
      this.user_defined_label.splice(index, 1);
    },

    add_label() {
      if (this.label_to_add != "") {
        this.user_defined_label.push(this.label_to_add);
        this.label_to_add = "";
      }
    },

    random(){
      let tmp = {
        page: this.page,
        limit: this.amount,
        isRandom: true,
      }
      this.$store.dispatch("search", tmp).then(res=>{
        res.forEach(cm=>{this.commodities.push(cm)});
      }).catch(err=>{
        console.log(err);
      });
    },

    search(){
      if (this.searchInfo.queryStr==""){
        return;
      }

      this.searchInfo.isFirstOrderAsc = true;
      switch (this.srt) {
        case 0:
          this.searchInfo.firstOrder = "pusher";
          break;
        case 1:
          this.searchInfo.firstOrder = "update_time";
          break;
        case 2:
          this.searchInfo.firstOrder = "exact_price";
          break;
        case 3:
          this.searchInfo.firstOrder = "exact_price";
          this.searchInfo.isFirstOrderAsc = false;
      }

      let history = {
        queryStr: this.searchInfo.queryStr,
        priceFrom: this.searchInfo.priceFrom,
        priceTo: this.searchInfo.priceTo,
        labels: this.searchInfo.labels
      };
      this.$store.dispatch("search", this.searchInfo).then(res=>{
        this.$store.commit("updateHistory", history);
      }).catch(err=>{
        console.log(err);
      });
    },

    addMore() {
      let windowRelativeBottom =
        document.documentElement.getBoundingClientRect().bottom;
      // 如果用户将页面滚动的距离不够远（文档末端距窗口底部 >100px）
      if (windowRelativeBottom > this.height + 100) return;
      // 添加更多数据
      this.amount += 9;
    },
    buySellChange() {
      this.buySell = this.buySell == "收" ? "出" : "收";
    },
  },
};
</script>

<style scoped>

</style>
