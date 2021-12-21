import service from "@/utils/request";

export function search(searchInfo) {
    return service({
        url: "request/request/search",
        data: searchInfo
    });
}

export function push(info){
    return service({
        method: "post",
        url: "request/request/push",
        data: info
    });
}
