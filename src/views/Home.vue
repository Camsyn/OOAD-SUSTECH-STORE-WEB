<template>
  <v-sheet min-height="70vh" rounded="lg">
<!--    <report :dialog="repo" v-on:close="repo=false" :id="123" :type="123123" ></report>-->
<!--    <v-btn @click="repo=true"></v-btn>-->
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
            {{ buySell[buySellInd] }}
          </v-btn>
        </v-col>
        <v-col cols="5" class="d-flex">
          <v-text-field flat hide-details rounded solo-inverted
                        v-model="searchInfo.queryStr"></v-text-field>
          <v-btn icon class="mt-2" @click="search(true)">
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
                        :rules="[rules.only]"
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
        <v-col cols="4" v-for="request in toShow" :key="request.id">
          <commodity  :request="request"></commodity>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
import commodity from "../components/commodity/commodity";
import report from "../components/report";

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
        after: null,
        before: null,
        page: 1,
        limit: this.limit,
        searchStrategy: 2,
      },
      label_to_add: "",
      user_defined_label: [],
      label_all: [],
      dialog: false,
      srt: 1,
      buySellInd: 2,
      buySell: ["商品","服务","不限"],

      page: 1,
      height: 0,
      commoditiesAll: [],
      toShow: [],
      type:["买","卖"],
      trade: ["第三方", "代币", "收款码", "线下"],
      dates: [],
      menu: false,
      more: true,
      repo: false,

      rules: {
        required: value => !!value || 'Required',
        counter: value => value.length <= 20 || 'Max 20 characters',
        number: value => {
          const pattern = /^[0-9]+$/;
          return pattern.test(value)||"请输入整数";
        },
        float: value=>{
          const pattern = /^[0-9]+(.[0-9]+)?$/;
          return pattern.test(value)||"请输入数字";
        },
        only: value=>{
          return this.user_defined_label.indexOf(value)===-1||"标签已存在";
        }
      }
    };
  },
  components: {
    commodity,report,
  },
  computed: {
    isSearch(){
      return this.$store.getters.search;
    },
  },
  created() {
    this.height = document.documentElement.clientHeight;
    window.addEventListener("scroll", this.addMore);
    if (this.more)
      this.random();
  },
  methods: {
    filter(){
      if (this.buySellInd===2)
        this.toShow = this.commoditiesAll;
      else {
        let res = [];
        this.commoditiesAll.forEach(item=>{
          if (item.category===this.buySellInd)
            res.push(item)
        });
        this.toShow = res;
      }
    },

    del_label(index) {
      this.user_defined_label.splice(index, 1);
    },

    add_label() {
      if (this.label_to_add != "") {
        this.user_defined_label.push(this.label_to_add);
        this.label_to_add = "";
      }
    },

    show(res, clear){
      this.page++;
      if (clear){
        this.commoditiesAll = [];
      }

      res.forEach(item=>{
        this.$store.dispatch("getInfoOf", item.pusher).then(rees=>{
          item.pusherInfo = rees;
          this.commoditiesAll.push(item)
        });
      });

      this.filter()
      this.more = true;
      this.addMore();
    },

    random(){
      let tmp = {
        page: this.page,
        limit: this.limit,
      }
      this.$store.commit("setSearch", false);
      this.$store.dispatch("search", tmp).then(res=>{
        if (res.length===0){
          this.more = false;
          return;
        }
        this.show(res, false);
      }).catch(err=>{
        console.log(err);
      });
    },

    search(clear = true){
      if (!this.canSearch()){
        return;
      }
      if (!this.isSearch||clear){
        this.page = 1;
        this.$store.commit("setSearch", true);
      }

      let tmp = Object.assign({}, this.searchInfo);
      this.convertInfo(tmp);

      this.$store.dispatch("search", tmp).then(res=>{
        if (res.length===0){
          this.more = false;
          return;
        }
        this.show(res, clear);
      }).catch(err=>{
        console.log(err);
      });
    },

    convertInfo(toConv){
      toConv.isFirstOrderAsc = true;
      switch (this.srt) {
        case 0:
          toConv.firstOrder = "pusher";
          break;
        case 1:
          toConv.firstOrder = "update_time";
          break;
        case 2:
          toConv.firstOrder = "exact_price";
          break;
        case 3:
          toConv.firstOrder = "exact_price";
          toConv.isFirstOrderAsc = false;
      }

      toConv.labels = toConv.labels.concat(this.user_defined_label);

      toConv.tradeTypes = toConv.tradeTypes.map(item=>this.trade.indexOf(item));
      toConv.types = toConv.types.map(item=>this.type.indexOf(item));
      if (this.dates.length>0){
        toConv.after = this.dates[0];
        if (this.dates.length>1)
          toConv.before = this.dates[1];
      }

      if (!toConv.priceFrom) toConv.priceFrom = 0;
      if (!toConv.priceTo) toConv.priceTo = 9007199254740991;

      if (!toConv.queryStr){
        toConv.searchStrategy = 0;
      }

      if (toConv.publishers)
        toConv.publishers = [toConv.publishers];

      toConv.page = this.page;
      toConv.limit = this.limit;
    },

    canSearch(){
      if (this.searchInfo.searchStrategy === 0)
        return 0;
      else {
        return this.searchInfo.queryStr||this.searchInfo.labels||this.searchInfo.tradeTypes
        ||this.searchInfo.types||this.searchInfo.publishers;
      }
    },

    addMore() {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      if (!this.more)
        return;
      // 如果用户将页面滚动的距离不够远（文档末端距窗口底部 >100px）
      if (windowRelativeBottom > this.height + 100)
        return;
      // 添加更多数据

      this.more = false;
      if (this.isSearch)
        this.search(false);
      else
        this.random();
    },

    buySellChange() {
      this.buySellInd = (this.buySellInd+1)%3;
      this.filter();
    },
  },
};
</script>

<style scoped>
</style>
