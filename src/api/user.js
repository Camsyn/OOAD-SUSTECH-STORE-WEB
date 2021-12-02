import service from "../utils/request";
// <!--  camsyn.cn:7000/uaa/login      -->
export function login(username, password) {
  return service({
    //http://camsyn.top:8000/auth
    //http://camsyn.cn:7000
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
    //http://camsyn.top:8000/auth
    //http://camsyn.cn:7000
    url: "/auth/oauth/token",
    method: "post",
    params: {
      refresh_token,
    },
  });
}

export function getUserInfo(sid){
  return service({
    url: "/oauth/user/get/"+sid,
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
