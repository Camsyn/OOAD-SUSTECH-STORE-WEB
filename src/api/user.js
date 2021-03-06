import service from "../utils/request";
export function login(username, password) {
  return service({
    url: "/auth/oauth/token",
    method: "post",
    params: {
      username,
      password,
    },
  });
}

export function forgetPwd(data) {
  return service({
    url: "/auth/account/modify/password/captcha",
    method: "post",
    params: data,
  });
}

export  function  modifyPwdIn(data) {
  return service({
    url: "/auth/account/modify/password/oldPassword",
    method: "post",
    params:data,
  });

}
export function modifyPwd(data) {
  return service({
    url: "/auth/verify/modify/password",
    method: "post",
    params:data,
  });
}

export function refresh(username, refresh_token) {
  return service({
    url: "/auth/oauth/token",
    method: "post",
    params: {
      refresh_token,
    },
  });
}

export function getUserInfo(sid){
  return service({
    url: "/auth/user/get/"+sid,
    method: "get"
  });
}

export function getMyInfo(){
  return service({
    url: "/auth/user/get",
    method: "get"
  });
}

export function updateMyInfo(info){
  return service({
    url: "/auth/user/update",
    method: "put",
    data: info,
  });
}

export function randomUser(data) {
  return service({
    url: "/auth/user/getRandom",
    method: "get",
    params: data,
  });
}

