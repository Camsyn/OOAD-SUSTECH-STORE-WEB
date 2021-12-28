<template>
  <div class="Bottom">
    <div class="guess">
      <i class="el-icon-shopping-cart-full"></i>
      与此商品相关的商品
    </div>
    <div class="Next">
      <div class="MoreProduce" v-if="MoreProduct[1]">
        <a  class="MoreProduce1" @click = changeDetails1>
          <el-image
              style="width: 200px; height: 200px"
              :src="MoreProduct[1].images[0]"
          ></el-image>
          <div class="Title4">
            <h2 class="Titl7">
              {{MoreProduct[1].title}}
            </h2>
            <div class="Price">
              <div class="Now">{{MoreProduct[1].exactPrice}}</div>
              <div class="Old">{{MoreProduct[1].originalPrice}}</div>
            </div>
          </div>
        </a >
      </div>
      <div class="MoreProduce" v-if="MoreProduct[2]">
        <a  class="MoreProduce1" @click = changeDetails2>
          <el-image
              style="width: 200px; height: 200px"
              :src="MoreProduct[2].images[0]"
          ></el-image>
          <div class="Title4">
            <h2 class="Titl7">
              {{MoreProduct[2].title}}
            </h2>
            <div class="Price">
              <div class="Now">{{MoreProduct[2].exactPrice}}</div>
              <div class="Old">{{MoreProduct[2].originalPrice}}</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import goods from "../../../store/modules/goods";
import {search} from "../../../api/goods";
export default {
  name: "bottom",
  methods: {
    changeDetails1() {
      this.$store.commit('setCur',this.MoreProduct[1])
      goods.state.current.request = this.MoreProduct[1]
      this.search.queryStr = goods.state.current.request.title
      this.$store.dispatch('search',this.search).then((data) => {
        this.MoreProduct = data
      })
      if (this.MoreProduct.length < 3) {
        this.search.searchStrategy = 0
        this.search.isRandom = true
        this.$store.dispatch('search',this.search).then((data) => {
          this.MoreProduct = data
        })
      }
    },
    changeDetails2() {
      this.$store.commit('setCur',this.MoreProduct[2])
      goods.state.current.request = this.MoreProduct[2]
      this.search.queryStr = goods.state.current.request.title
      this.$store.dispatch('search',this.search).then((data) => {
        this.MoreProduct = data
      })
      if (this.MoreProduct.length < 3) {
        this.search.searchStrategy = 0
        this.search.isRandom = true
        this.$store.dispatch('search',this.search).then((data) => {
          this.MoreProduct = data
        })
      }
    }
  },
  data() {
    return {
      search: {
        page: 1,
        limit: 3,
        searchStrategy: 2,
      },
      MoreProduct: [],
    }
  },
  created() {
    this.search.queryStr = goods.state.current.request.title
    this.$store.dispatch('search',this.search).then((data) => {
      this.MoreProduct = data
      if (this.MoreProduct.length < 3) {
        this.search.searchStrategy = 0
        this.search.isRandom = true
        this.$store.dispatch('search',this.search).then((data) => {
          this.MoreProduct = data
        })
      }
    })

  }
}
</script>

<style scoped>
.Bottom {
  background-color: white;
  float: left;
  height: 400px;
  width: 100%;
  margin-top: 50px;
}
.Next {
  border-top:5px solid #dbd6d6;
  background-color: white;
  float: left;
  height: 400px;
  width: 100%;
}
.guess {
  text-align: center;
  font-size: 15px;
  color: #747172
}
.MoreProduce {
  float: left;
  background-color: white;
  width: 50%;
  height: 500px;
}
.MoreProduce1 {
  display: inline-block;
  margin-left: 20px;
  margin-top: 50px;
}
.Title4 {
  width: 300px;
  height: 150px;
  display: inline-block;
}
.Titl7 {
  display: inline-block;
  float: left;
  margin-left: 100px;
  color:#939192;
  text-decoration: underline;
}
.Price {
  display: inline-block;
  float: left;
  margin-left: 30px;
  width: 300px;
  height: 50px;
}
.Old {
  display: inline-block;
  margin-left: 20px;
  font-size: 21px;
  text-decoration: line-through;
  color: #8c939d;
}
.Now {
  display: inline-block;
  margin-top: 20px;
  margin-left: 40px;
  font-size: 40px;
  color: #191516;
  font-weight: 700;
}
.el-icon-shopping-cart-full {
  color : red;
}
.MoreProduct {
  text-align: center;
}
</style>
