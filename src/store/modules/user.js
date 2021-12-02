import {getUserInfo, login, logout} from "../../api/user";
import {register, exist} from "../../api/register";
import { removeToken } from "../../utils/auth";
import getters from "../getters";

const user = {
  state: {
    name: "",
    avatar: "",
    token: undefined,
    tokenHead: undefined,
    refreshToken: undefined,
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
      state.name = name;
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
      return new Promise((resolve, reject) => {
        context.commit("SET_TOKEN", undefined);
        context.commit("SET_REFRESH_TOKEN", undefined);
        resolve();
      })
    },
    Register(context, userInfo) {
      return new Promise((resolve, reject) => {
        const sid = userInfo.sid.trim();
        const password = userInfo.password.trim();
        const email = userInfo.email.trim();
        register(sid, password, email)
            .then((response) => {
              const data = response.data;
                // context.commit("SET_CHAT",sid);
            })
          resolve();
      })
    },

    getUserInfo(context, sid){
      return getUserInfo(sid);
    }
  },
};

export default user;
