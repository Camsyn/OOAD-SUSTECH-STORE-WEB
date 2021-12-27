<template>
  <div id="observingnow">
    <div style="padding: 10px">
      <v-card
          class="mx-auto"
      >
        <v-list two-line>
          <template v-for="(item, index) in all_evaluations">
            <v-list-item
                :key="index"
            >
              <v-list-item-avatar>
                <img :src="item.avatar" alt="CC">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.name"></v-list-item-title>
                <span class="font-weight-bold" style= "display:inline">

                </span>
                <v-row>
                  <v-col cols="12" md="9" sm="9">
                    <v-list-item-subtitle v-html="item.subtitle">
                    </v-list-item-subtitle>
                  </v-col>

                </v-row>

              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>

    </div>

  </div>
</template>

<script>
import circle from "../../../../../store/modules/circle";

export default {
  name: "evaluate",
  data:()=>({
  }),
  computed:{
    all_evaluations(){
      return circle.state.evaluate
    }

  }
}
</script>

<style scoped>

</style>
