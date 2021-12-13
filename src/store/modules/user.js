import {forgetPwd, getUserInfo, login, logout} from "../../api/user";
import {register, exist} from "../../api/register";
import { removeToken } from "../../utils/auth";
import getters from "../getters";

const user = {
  state: {
    name: undefined,
    avatar: undefined,
    token: undefined,
    tokenHead: undefined,
    refreshToken: undefined,
    userInfos: new Map(),
  },

  getters:{
    token: state => {
      return state.token;
    },
    tokenHead: state => {
      return state.tokenHead;
    },
    refresh_token: state => {
      return state.refreshToken;
    }
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = parseInt(name.trim());
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
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
    },
  },

  actions: {
    // 登录
    Login(context, userInfo) {
      const username = userInfo.username.trim();
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
        const sid = userInfo.sid.trim();
        const password = userInfo.password.trim();
        const email = userInfo.email.trim();
        return register(sid, password, email);
    },

    forgetPwd(context, {sid, captcha, newPassword}){
      return forgetPwd(sid, captcha, newPassword);
    },

    getUserInfo(context, sid){
      return getUserInfo(sid);
    }
  },

  getInfoOf(context, id){
    getUserInfo(id).then(res => {
      context.commit("SET_INFO_OF", res);
    }).catch(err => {
      console.log(err);
    });
  }
};

export default user;
