<template>
  <div class="shop_bottom">
    <button class="buy">
      结算
    </button>
    <div class="price">共计:
      <strong class="price_text">
        {{sum}}
      </strong>
    </div>
    <div class="number">
      已选商品
      <strong class="number_text">3</strong>
      件
    </div>
  </div>
</template>

<script>
export default {
  name: "shopping_bottom",
  data() {
    return {
      Product:[
        {price:10},
        {},
      ],
      sum : 100.34,
    }
  }
}
</script>

<style scoped>
.shop_bottom {
  z-index: 99;
  margin-left: 250px;
  display: inline-block;
  width: 60%;
  height: 50px;
  position: fixed;
  bottom: 0;
  background-color: #eee;
}
.buy {
  float: right;
  display: block;
  width: 120px;
  height: 50px;
  color: #fff;
  font-size: 22px;
  letter-spacing: 5px;
  line-height: 50px;
  text-align: center;
  border-radius: 8px;
  background-color: #fb0000;
}
.price {

  float: right;
  min-width: 100px;
  height: 50px;
  line-height: 50px;
  margin-right: 10px;
}
.price_text {
  font-weight: 400;
  color: #fb0000;
  float: right;
  font-size: 23px;
  margin-left: 15px;
  margin-right: 10px;
}
.number {
  float: right;
  min-width: 110px;
  margin-right: 20px;
  height: 50px;
  line-height: 50px;
}
.number_text {
  display: inline-block;
  padding: 0 10px;
  font-size: 18px;
  color: #fb0000;
}
</style>