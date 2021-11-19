import {service, service_login} from "../utils/request";
// <!--  camsyn.cn:7000/uaa/login      -->
export function login(username, password) {
  return service_login({
    //http://camsyn.top:8000/auth
    //http://camsyn.cn:7000
    url: "/uaa/login",
    method: "post",
    params: {
      username,
      password,
    },
  });
}

export function logout() {
  return service({
    url: "/auth/uaa/account",
    method: "post",
  });
}

export function getUserInfo(sid){
  return service({
    url: "/auth/user/get/"+sid,
    method: "get"
  })
}

export function updateMyInfo(info){
  return service({
    url: "/auth/user/update",
    method: "post",
    data: info,
  })
}
