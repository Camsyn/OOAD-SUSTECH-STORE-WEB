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
  })
}

export function updateMyInfo(info){
  return service({
    url: "/auth/user/update",
    method: "post",
    data: info,
  })
}
