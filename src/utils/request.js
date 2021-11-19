import axios from "axios";
import store from "../store";
import { getToken } from "./auth";

const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
    // baseURL: "http://camsyn.cn:7000"
});
//发送请求前
// service.interceptors.request.use(
//   (config) => {
//     if (store.getters.token) {
//       config.headers["Authorization"] = getToken(); // 更新token
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

//发送请求后
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    const resp_code = res.resp_code;
    const resp_msg = res.resp_msg;
    if (resp_code !== 0) {
      // 判断错误码
      return Promise.reject(resp_msg); //直接返回错误码
    } else {
      return res; // 请求成功 返回数据
    }
  },
  (error) => {
    return Promise.reject(error); //直接返回错误码
  }
);

export default service;
