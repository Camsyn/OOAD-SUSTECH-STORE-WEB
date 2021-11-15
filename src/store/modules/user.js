import { login, logout } from "@/api/login";
import {register, exist} from "@/api/register";
import { removeToken } from "@/utils/auth";
import chat from "@/utils/chat";

const user = {
  state: {
      name: "",
      avatar: "",
      JSESSIONID: "emm",
  },

    getters:{

    },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_TOKEN: (state, token) => {
      state.JSESSIONID = token;
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
            const data = response.data;
              context.commit("SET_NAME", data.name);
              context.commit("SET_AVATAR", data.avatar);
              // context.commit("SET_CHAT", username);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    LogOut(context) {
      return new Promise((resolve, reject) => {
        logout(context.state.token)
          .then(() => {
            // 等出成功，清楚用户信息
              context.commit("SET_NAME", "");
              context.commit("SET_AVATAR", "");
            removeToken();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
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
  },
};

export default user;
