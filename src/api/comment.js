import service from "../utils/request";

export function getUserComment(data) {
    return service({
        url: "/auth/comment/getPage",
        method: "get",
        params:
            data,
    });
}

export function push(toSid, content) {
    return service({
        url: "/auth/comment/push",
        method: "post",
        data:{toSid, content},
    });
}
