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
              <span class="text-h5 mx-auto">筛选</span>
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
                  <v-col v-for="label in $store.getters.labels" :key="label" cols="2">
                    <v-checkbox
                      :value="label"
                      :label="label"
                      v-model="searchInfo.labels"
                      dense
                      hide-details
                    ></v-checkbox>
                  </v-col>
                </v-row>
                <v-row>
                  <span>自定义标签</span>
                </v-row>
                <v-row class="flex-row row--dense mt-3">
                  <v-col cols="3">
                    <v-text-field
                        dense
                      v-model="label_to_add"
                      :append-outer-icon="'mdi-check'"
                      filled
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                      @click:append-outer="add_label"
                      outlined
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
                <v-row class="justify-center">
                  <v-col>
                    <v-combobox multiple dense outlined label="支付方式" :items="trade" v-model="searchInfo.tradeTypes"></v-combobox>
                  </v-col>
                  <v-col>
                    <v-combobox multiple dense outlined label="买卖" :items="type" v-model="searchInfo.types"></v-combobox>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="searchInfo.priceFrom"
                      filled
                      dense
                      label="价格区间"
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="1" class="mb-2">
                    <p class="text-center text-h5">到</p>
                  </v-col>
                  <v-col>
                    <v-text-field
                      v-model="searchInfo.priceTo"
                      filled
                      dense
                      label="价格区间"
                      clear-icon="mdi-close-circle"
                      clearable
                      type="text"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-expansion-panels flat  popout>
                    <v-expansion-panel>
                      <v-expansion-panel-header class="pa-0">
                        详细
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-row dense>
                          <v-col cols="4">
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="dates"
                                min-width="auto"
                            >
                              <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="dates"
                                    label="发布时间"
                                    prepend-icon="mdi-calendar"
                                    readonly
                                    v-bind="attrs"
                                    v-on="on"
                                ></v-text-field>
                              </template>
                              <v-date-picker
                                  v-model="dates"
                                  no-title
                                  scrollable
                                  range
                              >
                                <v-spacer></v-spacer>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="menu = false;dates=[];"
                                >
                                  取消
                                </v-btn>
                                <v-btn
                                    text
                                    color="primary"
                                    @click="$refs.menu.save(dates)"
                                >
                                  确定
                                </v-btn>
                              </v-date-picker>
                            </v-menu>
                          </v-col>
                          <v-spacer></v-spacer>
                          <v-col>
                            <v-text-field
                                v-model="searchInfo.publishers"
                                filled
                                dense
                                label="限定发布者id"
                                clear-icon="mdi-close-circle"
                                clearable
                                type="text"
                                outlined
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
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
        <v-col cols="4">
          <commodity v-for="request in commodities0" :key="request.id" :request="request"></commodity>
        </v-col>
        <v-col cols="4">
          <commodity v-for="request in commodities1" :key="request.id" :request="request"></commodity>
        </v-col>
        <v-col cols="4">
          <commodity v-for="request in commodities2" :key="request.id" :request="request"></commodity>
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
      limit: 9,
      searchInfo:{
        queryStr:"",
        priceFrom: null,
        priceTo: null,
        labels: [],
        tradeTypes: [],
        types: [],
        publishers: null,
        firstOrder: null,
        isFirstOrderAsc: true,
        secondOrder: null,
        isSecondOrderAsc: true,
        thirdOrder: null,
        isThirdOrderAsc: null,
        after: null,
        before: null,
        page: 0,
        limit: this.limit,
        searchStrategy: 2,
      },
      label_to_add: "",
      user_defined_label: [],
      label_all: [],
      dialog: false,
      srt: 1,
      buySell: "收",

      page: 0,
      height: 0,
      commodities0: [],
      commodities1: [],
      commodities2: [],
      type:["买","卖"],
      trade: ["第三方", "代币", "收款码", "线下"],
      dates: [],
      menu: false,
      more: true,
    };
  },
  components: {
    commodity,
  },
  computed: {
    isSearch(){
      return this.$store.getters.search;
    }
  },
  created() {
    this.height = document.documentElement.clientHeight;
    window.addEventListener("scroll", this.addMore);
    this.random();
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

    show(res, clear = false){
      if (res.length <= this.limit)
        this.more = false;
      if (clear){
        this.commodities0 = [];
        this.commodities1 = [];
        this.commodities2 = [];
      }
      for (let i=0;i<res.length;i++){
        let s = (i%3).toString();
        let cm = res[i];
        this.$store.dispatch("getInfoOf", cm.pusher).then(rees=>{
          cm.pusherInfo = rees;
          this["commodities"+s].push(cm);
        });
      }
    },

    random(){
      console.log("randow")
      let tmp = {
        page: this.page,
        limit: this.limit,
        isRandom: true,
      }
      this.$store.dispatch("search", tmp).then(res=>{
        this.show(res);
      }).catch(err=>{
        console.log(err);
      });
    },

    search(clear = true){
      console.log("search")

      if (this.searchInfo.queryStr==""){
        return;
      }
      if (!this.isSearch){
        this.page = 0;
        this.$store.commit("setSearch", true);
      }

      this.convertInfo();

      console.log(this.searchInfo);
      this.$store.dispatch("search", this.searchInfo).then(res=>{
        console.log(res);
        this.show(res, clear);
      }).catch(err=>{
        console.log(err);
      });
    },

    convertInfo(){
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

      this.searchInfo.labels = this.searchInfo.labels.concat(this.user_defined_label);

      this.searchInfo.tradeTypes = this.searchInfo.tradeTypes.map(item=>this.trade.indexOf(item));
      this.searchInfo.types = this.searchInfo.types.map(item=>this.type.indexOf(item));
      if (this.dates.length>0){
        this.searchInfo.after = this.dates[0];
        if (this.dates.length>1)
          this.searchInfo.before = this.dates[1];
      }

      if (this.searchInfo.publishers)
        this.searchInfo.publishers = [this.searchInfo.publishers];

      this.searchInfo.page = this.page;
      // this.searchInfo.limit = this.limit;
    },

    addMore() {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (!this.more)
        return;

      // 如果用户将页面滚动的距离不够远（文档末端距窗口底部 >100px）
      if (windowRelativeBottom > this.height + 100)
        return;
      // 添加更多数据

      this.page++;

      if (this.isSearch)
        this.search(false);
      else
        this.random();
    },

    buySellChange() {
      this.buySell = this.buySell == "收" ? "出" : "收";
    },
  },
};
</script>

<style scoped>
</style>
