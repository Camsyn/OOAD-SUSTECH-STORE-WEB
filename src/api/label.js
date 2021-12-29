import service from "../utils/request";

export function requestLabel(info){
    return service({
        method: "put",
        url: "request/label/request",
        data: info
    });
}


export function frequencyLabel(info){
    return service({
        method: "get",
        url: "request/label/frequency",
        params: {
            page:info.pages,
            pageSize:info.pagesize,
            isPush:info.isPush
        }
    });
}
