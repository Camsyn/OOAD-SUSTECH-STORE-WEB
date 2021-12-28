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
    let st = sessionStorage.getItem("store");

    if (st) {
      st = JSON.parse(st);
      st.userInfos = new Map(Object.entries(st.userInfos));
      Object.assign(this.$store.state.user, this.$store.state.user, st);
      this.$store.dispatch("setupChat");
      this.$store.dispatch("renew");
    }

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      let st = {}
      Object.assign(st, this.$store.state.user);
      // console.log(st.userInfos);
      st.userInfos = Object.fromEntries(st.userInfos);
      sessionStorage.setItem('store', JSON.stringify(st));
    });
  },
};
</script>
