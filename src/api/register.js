import request from "../utils/request";
export function register(sid, password, email) {
    return request({
        url: "/auth/verify/register",
        method: "post",
        data: {
            sid,
            password,
            email
        },
    });
}

export function exist(sid) {
    return request({
        url: "/auth/verify/register",
        method: "get",
        data: {
            sid,
        },
    });
}
