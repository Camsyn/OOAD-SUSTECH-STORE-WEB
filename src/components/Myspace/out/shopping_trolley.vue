<template>
  <div>
    <shopping_table></shopping_table>
  </div>
</template>

<script>
import shopping_Header from "../components/shopping_Header";
import shopping_table from "../components/shopping_table";
export default {
  name: "shopping_trolley",
  components: {
    shopping_Header,
    shopping_table,
  },
}
</script>

<style scoped>

</style>