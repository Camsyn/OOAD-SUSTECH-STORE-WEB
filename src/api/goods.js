import service from "@/utils/request";
import qs from "qs";
export function search(searchInfo) {
    return service({
        url: "request/request/search",
        params: searchInfo,
        paramsSerializer: params => {
            return qs.stringify(params, { indices: false })
        }
    });
}

export function push(info){
    return service({
        method: "post",
        url: "request/request/push",
        data: info
    });
}
