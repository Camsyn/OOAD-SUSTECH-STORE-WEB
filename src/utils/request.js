import axios from "axios";

const service = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

const service_login = axios.create({
  baseURL: "/api_login",
  timeout: 5000,
});
//发送请求前
service.interceptors.request.use(
  (config) => {
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  });

service_login.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    });


// //发送请求后
service.interceptors.response.use(
  (response) => {
      // console.log(response);
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

service.defaults.withCredentials = true;
service_login.defaults.withCredentials = true;

export {service, service_login};
