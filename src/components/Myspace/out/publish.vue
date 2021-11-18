<template>
  <div>
    <publish_Header></publish_Header>
    <publish_table></publish_table>
  </div>

</template>

<script>
import publish_Header from "../components/publish_Header";
import publish_table from "../components/publish_table";
export default {
  name: "publish",
  components:{
    publish_Header,
    publish_table,
  }
}
</script>

<style scoped>

</style>