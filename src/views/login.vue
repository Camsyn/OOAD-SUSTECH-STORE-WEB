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
                v-model="reset.email"
                label="Email Adress"
                clearable
                :rules="[rules.required, rules.email]"
            ></v-text-field>

            <v-row>
              <v-col clos="12" >
                <v-text-field
                    v-model="reset.Vcode"
                    label="verification code"
                    @click:append="appendIconCallback"
                    hint="点击发送验证码"
                    append-icon="mdi-email-receive-outline"
                    clearable
                    :rules="[rules.required]"
                ></v-text-field>
                <span v-show="show" @click="getCode" class="getCode">获取验证码</span>
                <span v-show="!show" class="count">{{count}}s后重新获取</span>
              </v-col>
            </v-row>

            <v-text-field
                v-model="reset.password"
                label="new password"
                clearable
                :rules="[rules.required, rules.counter]"
            ></v-text-field>

            <v-text-field
                v-model="reset.passwordConfirm"
                label="new password confirm"
                clearable
                :rules="[rules.required, rules.pwdConfirm]"
            ></v-text-field>

            <v-row justify="center">
              <v-btn plain @click="resetPwd" class="px-0">确认</v-btn>
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
                :rules="[rules.required, rules.number]"
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
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              name="input-10-1"
              :rules="[rules.required]"
              @click:append="show1 = !show1"
          ></v-text-field>

          <v-row justify="center">
            <v-btn plain @click="login" class="px-0">登录</v-btn>
            <v-btn plain @click="trans(1)" class="ml-4">注册</v-btn>
            <v-btn plain @click="trans(2)" class="ml-4">忘记密码?</v-btn>
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
      show: true,
      show1:false,
      count: '',
      timer: null,
      st: 0,
      info: null,
      loginn: {
        username: '11910215',
        email: '',
        password: '123456'
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
        pwdConfirm: value => this.reset.passwordConfirm === this.reset.password || 'Passwords does not match',
        number: value => {
          const pattern = /[0-9]+/;
          return pattern.test(value)||"Number only";
        }
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
    // appendIconCallback () {
    //   alert('验证码已发送，60s后重发')
    // },
    getCode(){
      console.log(this.reset.email)
      let data = {
        username: this.reset.email
      }
      this.$store.dispatch('modifyPwd',data).then(() => {
        this.$message({
          showClose: true,
          message: '验证码已发送，60s后重发',
          type: 'success'
        });
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }).catch((err) => {
        this.$message({
          showClose: true,
          message: err,
          type: 'warning'
        });
      })

    },
    appendIconCallback() {
      this.$message({
        showClose: true,
        message: '验证码已发送，60s后重发',
        type: 'success'
      });
    },
    login(){
      this.$store.dispatch("Login", this.loginn).then(
          (res) => {
            this.$store.dispatch("setupChat").then(()=>{
              this.$store.dispatch("renew");
            });
            this.$store.commit("SET_NAME", this.loginn.username);

            this.$router.push({name: "Home"});
            this.$store.dispatch("getMyInfo").then(res=>{
              this.storeUser();
            });
          }).catch((err) => {
        this.$message({
          showClose: true,
          message: err,
          type: 'warning'
        });
          });
    },

    regist(){
      this.$store.dispatch("Register", this.register).then(
          (res) => {
            const msg = res.resp_msg;
            console.log(msg);
            alert(msg);
            this.trans(0);
          }).catch(
          (err) => {
            console.log(err);
            alert(err);
          })
    },

    resetPwd(){
      let data = {
        username : this.reset.email,
        captcha : this.reset.Vcode,
        newPassword: this.reset.password
      }
      this.$store.dispatch('forgetPwd',data).then(() => {
        this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success'
        });
      }).catch((err) => {
        this.$message({
          showClose: true,
          message: err,
          type: 'warning'
        });
      })
    },

    storeUser(){
      let user = {};
      Object.assign(user, this.$store.state.user);
      user.userInfos = Object.fromEntries(user.userInfos);
      localStorage.setItem('user', JSON.stringify(user));
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
