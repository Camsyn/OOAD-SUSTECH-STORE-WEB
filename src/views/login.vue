<template>

  <v-card id="board" >
    <v-form id="mima" class="offset-4 col-4" style="display: none; height: 350px; background: white; position: absolute; top: 200px; transform: rotateY(180deg);">
      <div>
        <h2 style="text-align: center">重设密码</h2>
      </div>
      <v-text-field
          v-model="Email"
          label="Email Adress"
          clearable
      ></v-text-field>

      <v-row justify="center">
        <v-btn plain @click="trans(false)" class="px-0">已有账号?</v-btn>
        <v-btn plain @click="trans(false)" class="ml-4">注册</v-btn>
      </v-row>
    </v-form>
    <v-form id="reg" class="offset-4 col-4" style="display: none; height: 350px; background: white; position: absolute; top: 200px; transform: rotateY(180deg);">
      <div>
        <h2 style="text-align: center">SUSTECH STORE REGISTER</h2>
      </div>
      <v-text-field
          v-model="Username"
          label="Usrename"
          clearable
      ></v-text-field>

      <v-text-field
          v-model="Password"
          label="Password"
          clearable
      ></v-text-field>

      <v-text-field
          v-model="Email"
          label="Email Adress"
          clearable
      ></v-text-field>

      <v-row justify="center">
        <v-btn plain @click="trans(0)" class="px-0">已有账号?</v-btn>
        <v-btn plain @click="trans(0)" class="ml-4">注册</v-btn>
      </v-row>
    </v-form>

    <v-form id="log" class="offset-4 col-4" style="background: white; position: absolute; top: 200px;">
        <div>
          <h2 style="text-align: center">SUSTECH STORE LOGIN</h2>
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

        <v-row justify="center">
          <v-btn plain @click="login" class="px-0">登录</v-btn>
          <v-btn plain @click="trans(1)" class="ml-4">注册</v-btn>
          <v-btn plain @click="trans(2)" class="ml-4">忘记密码？</v-btn>
        </v-row>
      </v-form>
  </v-card>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      cls: "offset-4 col-4",
      Username: '',
      Password: '',
      Email: '',
      info: null,
    }
  },
  methods: {
    trans(n){
      console.log(document.getElementById("board").class)
      if(n==1){
        document.getElementById("board").style.transform='rotateY(180deg)'
        document.getElementById("reg").style.display=''
        document.getElementById("log").style.display='none'
        document.getElementById("mima").style.display='none'
      }else if(n==0) {
        document.getElementById("board").style.transform='rotateY(0deg)'
        document.getElementById("reg").style.display='none'
        document.getElementById("log").style.display=''
        document.getElementById("mima").style.display='none'
      }else if(n==2) {
        document.getElementById("board").style.transform='rotateY(0deg)'
        document.getElementById("reg").style.display='none'
        document.getElementById("log").style.display='none'
        document.getElementById("mima").style.display=''
      }
    },
    login(){
      // this.axios({
      //   method: 'get',
      //   url: '/test',
      // })
      this.$store.commit('SET_NAME', 'emm')
      console.log(this.$store.getters.name)
      console.log(this.$store.state.user.name)
      //     this.axios.get('').then(response =>
      // {
      //   this.info=response.data
      //   console.log(this.info)
      // }).catch(error =>
      // {
      //   console.log(error);
      // });
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
#board{
  transition: 1.5s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  transform-style: preserve-3d;
}
</style>
