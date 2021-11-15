<template>
  <v-app>
    <v-main>
      <div class="mx-auto" style="width: fit-content; margin-top: 5%">
        <img src="../assets/logo/default.png"/>
      </div>
      <div id="board" height="60%">
        <v-form id="reg" class="offset-4 col-4" style="display: none; height: 350px; background: white; position: absolute; top: 0; transform: rotateY(180deg);">
          <div v-if="st === 2">
            <div>
              <h2 style="text-align: center">RESET PASSWORD</h2>
            </div>
            <v-text-field
                v-model="reset.Email"
                label="Email Adress"
                clearable
                :rules="[rules.required, rules.email]"
            ></v-text-field>

            <v-text-field
                v-model="reset.Password"
                label="new password"
                clearable
                :rules="[rules.required, rules.counter]"
            ></v-text-field>

            <v-text-field
                v-model="reset.PasswordConfirm"
                label="new password confirm"
                clearable
                :rules="[rules.required, rules.pwdConfirm]"
            ></v-text-field>

            <v-text-field
                v-model="reset.Vcode"
                label="verification code"
                clearable
                :rules="[rules.required]"
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
                v-model="register.sid"
                label="User ID"
                clearable
                :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
                v-model="register.email"
                label="Email Address"
                clearable
                :rules="[rules.required, rules.email]"
            ></v-text-field>

            <v-text-field
                v-model="register.password"
                label="Password"
                clearable
                :rules="[rules.required]"
            ></v-text-field>

            <v-row justify="center">
              <v-btn plain @click="trans(0)" class="px-0">已有账号?</v-btn>
              <v-btn plain @click="regist" class="ml-4">注册</v-btn>
            </v-row>
          </div>
        </v-form>
        <v-form id="log" class="offset-4 col-4" style="background: white; position: absolute; top: 0;">
          <div>
            <h2 style="text-align: center">SUSTECH STORE LOGIN</h2>
          </div>
          <v-text-field
              v-model="loginn.username"
              label="Username"
              clearable
              :rules="[rules.required]"
          ></v-text-field>

          <v-text-field
              v-model="loginn.password"
              label="Password"
              clearable
              :rules="[rules.required]"
          ></v-text-field>

          <v-row justify="center">
            <v-btn plain @click="login" class="px-0">登录</v-btn>
            <v-btn plain @click="trans(1)" class="ml-4">注册</v-btn>
            <v-btn plain @click="trans(2)" class="ml-4">忘记密码？</v-btn>
          </v-row>
        </v-form>
      </div>
    </v-main>
  </v-app>
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
        email: '',
        password: ''
      },
      register: {
        sid: '',
        email: '',
        password: '',
      },
      reset: {
        email: '',
        password: '',
        passwordConfirm: '',
        Vcode: ''
      },

      rules: {
        required: value => !!value || 'Required',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail'
        },
        pwdConfirm: value => this.reset.PasswordConfirm !== this.reset.Password || 'Passwords does not match'
      }
    }
  },
  methods: {
    trans(n){
      this.st = n
      if(n===0){
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
      this.$store.dispatch("Login", this.loginn).then(
          () => {
            console.log("login success!")
            this.$store.commit("SET_NAME", this.loginn.username);

            this.$router.push({name: "Layout"})
          }).catch(
          (err) => {
            console.log(err)
          })
    },

    regist(){
      this.$store.dispatch("Register", this.register).then(
          () => {
            console.log("register success!")
            this.$store.commit("SET_NAME", this.register.username);
            this.$router.push({name: "Layout"})
          }).catch(
          (err) => {
            console.log(err)
          })
    },

    resetPwd(){
      // console.log(this.$store.getters.tk)
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

img{
  width:200px;
  height:100%;
}
</style>
