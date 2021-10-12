import axios from "axios";
import store from "../store";
import { getToken } from "@/utils/auth";

const service = axios.create({
  baseURL: "camsyn.cn:8000/auth",
  timeout: 5000,
});
//发送请求前
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers["Authorization"] = getToken(); // 更新token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//发送请求后
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      // 判断错误码
      return Promise.reject(res.code); //直接返回错误码
    } else {
      return response.data; // 请求成功 返回数据
    }
  },
  (error) => {
    return Promise.reject(error); //直接返回错误码
  }
);

export default service;
