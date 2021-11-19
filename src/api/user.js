import request from "../utils/request";
// <!--  camsyn.cn:7000/uaa/login      -->
export function login(username, password) {
  return request({
    url: "/auth/uaa/login",
    method: "post",
    params: {
      username,
      password,
    },
  });
}

export function logout() {
  return request({
    url: "/auth/uaa/account",
    method: "post",
  });
}

export function getUserInfo(sid){
  return request({
    url: "/auth/user/get/"+sid,
    method: "get"
  })
}

export function updateMyInfo(info){
  return request({
    url: "/auth/user/update",
    method: "post",
    data: info,
  })
}
