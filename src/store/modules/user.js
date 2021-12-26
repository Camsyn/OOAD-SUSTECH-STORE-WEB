import {forgetPwd, getUserInfo,getMyInfo, login, updateMyInfo} from "../../api/user";
import {register, exist} from "../../api/register";
import head from "../../assets/head.jpeg";
const user = {
  state: {
    name: null,
    email: null,
    avatar: null,
    token: null,
    tokenHead: null,
    refreshToken: null,
    liyuan: 0,
    credit: 0,
    description: null,
    nickname: null,
    paycode:null,
    userInfos: new Map(),
    tracer: 0,
  },

  getters:{
    name: state=>{
      return state.name;
  },
      token: state => {
    return state.token;
  },
      tokenHead: state => {
      return state.tokenHead;
    },
    refresh_token: state => {
      return state.refreshToken;
    },
    myInfo: state=>{
      let t = state.tracer;
      return state.userInfos.get(state.name);
    }
  },
  mutations: {
    TRACE: (state)=>{
      state.tracer++;
    },
    SET_NAME: (state, name) => {
      state.name = parseInt(name);
      // console.log(state.name)
    },
    SET_USER_INFO: (state, {sid, liyuan, credit, email, headImage, payCode, description, nickname})=>{
      state.name = sid;
      state.nickname = nickname;
      state.liyuan = liyuan;
      state.credit = credit;
      state.email = email;
      state.avatar = headImage;
      state.payCode = payCode;
      state.description = description;

    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_TOKEN_HEAD: (state, token) => {
      state.tokenHead = token;
    },
    SET_REFRESH_TOKEN: (state, token) => {
      state.refreshToken = token;
    },
    SET_INFO_OF: (state, info) => {
      state.userInfos.set(info.sid, info)
      state.tracer++;
    },
  },

  actions: {
    // 登录
    Login(context, userInfo) {
      const username = userInfo.username.trim();
      context.commit("SET_INFO_OF", userInfo);
      return new Promise((resolve, reject) => {
        login(username, userInfo.password.trim())
          .then((response) => {
            //登录成功，更新用户信息
            let data = response.data;
            context.commit("SET_TOKEN", data.token);
            context.commit("SET_TOKEN_HEAD", data.tokenHead);
            context.commit("SET_REFRESH_TOKEN", data.refreshToken);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    LogOut(context) {
      context.commit("SET_TOKEN", undefined);
      context.commit("SET_TOKEN_HEAD", undefined);
      context.commit("SET_REFRESH_TOKEN", undefined);
    },

    Register(context, userInfo) {
        const sid = parseInt(userInfo.sid.trim());
        const password = userInfo.password.trim();
        const email = userInfo.email.trim();
        return register(sid, password, email);
    },

    update(context, info){
      info.sid = context.state.name;
      updateMyInfo(info).then(res=>{
        context.dispatch("getMyInfo").then().catch(err=>{console.log(err);});
      }).catch(err=>{
        console.log(err);
      });
    },

    forgetPwd(context, {sid, captcha, newPassword}){
      return forgetPwd(sid, captcha, newPassword);
    },

    getMyInfo(context){
      getMyInfo().then(res => {
        res = res.data;
        if (!res.headImage){
          res.headImage = head;
        }
        if (!res.nickname){
          res.nickname = res.sid.toString();
        }
        context.commit("SET_USER_INFO", res);
        context.commit("SET_INFO_OF", res);
      }).catch(err => {
        console.log(err);
      });
    },

    getInfoOf(context, id){
      return new Promise((resolve, reject)=>{
        getUserInfo(id).then(res => {
          res = res.data;
          if (!res.headImage){
            res.headImage = head;
          }
          if (!res.nickname){
            res.nickname = res.sid.toString();
          }
          context.commit("SET_INFO_OF", res);
          resolve(res);
        }).catch(err => {
          console.log(err);
        });
      });
    },
  },
};

export default user;
