import { login, logout } from "../../api/login";
import {register, exist} from "../../api/register";
import { removeToken } from "../../utils/auth";

const user = {
  state: {
    name: "",
    avatar: "",
    JSESSIONID: "",
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
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        login(username, userInfo.password.trim())
          .then((response) => {
            //登录成功，更新用户信息
            const data = response.data;
            commit("SET_NAME", data.name);
            commit("SET_AVATAR", data.avatar);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            // 等出成功，清楚用户信息
            commit("SET_NAME", "");
            commit("SET_AVATAR", "");
            removeToken();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    Register({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        const sid = userInfo.sid.trim();
        const password = userInfo.password.trim();
        const email = userInfo.email.trim();
        register(sid, password, email)
            .then((response) => {
              const data = response.data;

            })
      })
    }
  },
};

export default user;
