<template>
  <div>
    <shopping_Header></shopping_Header>
    <shopping_table></shopping_table>
    <shopping_bottom></shopping_bottom>
  </div>
</template>

<script>
import shopping_Header from "../components/shopping_Header";
import shopping_bottom from "../components/shopping_bottom";
import shopping_table from "../components/shopping_table";
export default {
  name: "shopping_trolley",
  components: {
    shopping_Header,
    shopping_bottom,
    shopping_table,
  },
}
</script>

<style scoped>

</style>