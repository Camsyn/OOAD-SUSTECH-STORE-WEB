<template>
  <v-form class="offset-4 col-4" style="position: absolute; top: 200px">
      <div class="offset-3">
        <h2>SUSTECH STORE LOGIN</h2>
      </div>
          <v-text-field
              v-model="Username"
              label="Username"
              clearable
          ></v-text-field>

          <v-text-field
              v-model="Password"
              label="Password"
              clearable
          ></v-text-field>

        <v-btn @click="login" class="px-7 offset-3">login</v-btn>
        <v-btn @click="regist" class="ml-4">register</v-btn>
  </v-form>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      Username: '',
      Password: '',
    }
  },
  methods: {
    login(){
      // this.$store.
    },

    regist(){
      this.$router.push({
        name:"Register",
      });
    },
  },
}
</script>

<style scoped>
.lgin{
  height: auto;
  width: auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
</style>
