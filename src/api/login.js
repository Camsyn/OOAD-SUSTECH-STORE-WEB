import request from "../utils/request";
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


