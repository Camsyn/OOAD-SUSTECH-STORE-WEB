<template>
  <router-view/>
</template>

<script>
export default {
  name: "App",
  data: () => ({
  }),

  created() {
    //在页面加载时读取sessionStorage里的状态信息
    let user = sessionStorage.getItem("user");
    let goods = sessionStorage.getItem("goods");

    if (user) {
      user = JSON.parse(user);
      user.userInfos = new Map(Object.entries(user.userInfos));
      Object.assign(this.$store.state.user, this.$store.state.user, user);

      this.$store.dispatch("setupChat").then(()=>{
        this.$store.dispatch("renew");
      });
    }
    if (goods){
      goods = JSON.parse(goods);
      Object.assign(this.$store.state.goods, this.$store.state.goods, goods);
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      let user = {}, goods = {};
      Object.assign(user, this.$store.state.user);
      user.userInfos = Object.fromEntries(user.userInfos);

      Object.assign(goods, this.$store.state.goods);

      sessionStorage.setItem('user', JSON.stringify(user));
      sessionStorage.setItem('goods', JSON.stringify(goods));
    });
  },
};
</script>
