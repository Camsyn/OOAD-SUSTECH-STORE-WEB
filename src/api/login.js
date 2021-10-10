import request from "@/utils/request";
export function login(username, password) {
  return request({
    url: "/uaa/login",
    method: "post",
    data: {
      username,
      password,
    },
  });
}

export function logout() {
  return request({
    url: "/uaa/account",
    method: "post",
  });
}
