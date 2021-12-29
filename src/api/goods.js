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

export function update(info){
    return service({
        method: "put",
        url: "request/request/update",
        data: info
    });
}

export function close(requestId){
    return service({
        method: "put",
        url: "request/request/close",
        params: {requestId}
    });
}
export function open(requestId) {
    return service({
        method: "put",
        url: "request/request/open",
        params: {requestId}
    });
}

export function withdraw(requestId){
    return service({
        method: "put",
        url: "request/request/withdraw",
        params: {requestId}
    });
}
export function pullRequest(data) {
    return service({
        method: 'put',
        url:"request/request/pull",
        params: data
    })
}
