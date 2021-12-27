import service from "../utils/request";

export function getUserComment(username, data) {
    return service({
        url: "/auth/comment/getPage",
        method: "get",
        params: {
            data
        },
    });
}