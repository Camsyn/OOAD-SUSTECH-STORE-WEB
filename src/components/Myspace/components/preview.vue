<template>
  <v-card elevation="2">
    <v-card-subtitle>
      {{circle.sendTime}}
    </v-card-subtitle>
    <v-card-text>
      <div v-for="item in show" :key="item.ind">
        <div v-if="item.text" v-text="item.text" class="pl-1" style="max-width: max-content; word-wrap: break-word; white-space: pre-wrap;"></div>
        <v-img v-else :src="item.image" contain></v-img>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props:["circle"],
  name: "preview",
  data:()=>({
    splitter:"<<<IMAGE>>>",
    spLen: 11,
  }),
  computed:{
    show(){
      let con = this.circle.content;
      return this.parse(con);
    },
    // date(){
    //   return new Date(this.circle.sendTime).getDate();
    // }
  },
  methods:{
    parse(con){
      let pos = 0;
      let sps = [];
      while (true) {
        let foundPos = con.indexOf(this.splitter, pos);
        if (foundPos == -1) break;

        sps.push(foundPos);
        pos = foundPos + this.spLen;
      }

      if (sps.length===0){
        return [{text: con, ind: 0}];
      }else {
        let cur = 0, ind=0;
        let res = [];
        for (let i=0;i<sps.length;i+=2){
          let ind1 = sps[i], ind2 = sps[i+1];
          let url = con.slice(ind1+this.spLen, ind2);
          if (cur!==sps[i]){
            res.push({text: con.slice(cur, ind1), ind: ind++});
          }
          res.push({image: url, ind: ind++});
          cur = ind2+this.spLen;
        }
        if (cur<con.length-1){
          res.push({text: con.slice(cur, con.length), ind: ind++});
        }
        return res;
      }
    }
  }
}
</script>

<style scoped>

</style>
