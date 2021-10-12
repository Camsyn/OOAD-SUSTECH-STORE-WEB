<template>
  <v-card id="board" >

    <v-form  id="reg" class="offset-4 col-4" style="display: none; height: 350px; background: white; position: absolute; top: 200px; transform: rotateY(180deg);">
      <div v-if="st === 2">
        <div>
          <h2 style="text-align: center">RESET PASSWORD</h2>
        </div>
        <v-text-field
            v-model="reset.Email"
            label="Email Adress"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="reset.Password"
            label="new password"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="reset.PasswordConfirm"
            label="new password confirm"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="reset.Vcode"
            label="verification code"
            clearable
        ></v-text-field>

        <v-row justify="center">
          <v-btn plain @click="resetPwd" class="px-0">重置</v-btn>
          <v-btn plain @click="trans(0)" class="ml-4">取消</v-btn>
        </v-row>
      </div>

      <div v-else>
        <div>
          <h2 style="text-align: center">SUSTECH STORE REGISTER</h2>
        </div>
        <v-text-field
            v-model="register.Email"
            label="Email Adress"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="register.Password"
            label="Password"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="register.Vcode"
            label="verification code"
            clearable
        ></v-text-field>

        <v-row justify="center">
          <v-btn plain @click="trans(0)" class="px-0">已有账号?</v-btn>
          <v-btn plain @click="regist" class="ml-4">注册</v-btn>
        </v-row>
      </div>
    </v-form>
    <v-form id="log" class="offset-4 col-4" style="background: white; position: absolute; top: 200px;">
        <div>
          <h2 style="text-align: center">SUSTECH STORE LOGIN</h2>
        </div>
        <v-text-field
            v-model="loginn.username"
            label="Username"
            clearable
        ></v-text-field>

        <v-text-field
            v-model="loginn.password"
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
      st: 0,
      info: null,
      loginn: {
        username:'',
        Email: '',
        password: ''
      },
      register: {
        Email: '',
        Password: '',
        Vcode: ''
      },
      reset: {
        Email: '',
        Password: '',
        PasswordConfirm: '',
        Vcode: ''
      }
    }
  },
  methods: {
    trans(n){
      this.st = n
      if(n==0){
        document.getElementById("board").style.transform='rotateY(0deg)'
        document.getElementById("reg").style.display='none'
        document.getElementById("log").style.display=''
      }else {
        document.getElementById("board").style.transform = 'rotateY(180deg)'
        document.getElementById("reg").style.display = ''
        document.getElementById("log").style.display = 'none'
      }
    },
    login(){
      // this.axios({
      //   method: 'get',
      //   url: '/test',
      // })
      this.$store.dispatch(this.loginn)
      this.$store.commit('SET_NAME', 'emm')
      console.log(this.$store.getters.name)
      console.log(this.$store.state.user.name)

    },

    regist(){
      this.$router.push({
        name:"Register",
      });
    },

    resetPwd(){

    }
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
