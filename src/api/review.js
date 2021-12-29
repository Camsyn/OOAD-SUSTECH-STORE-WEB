import request from "../utils/request";
import service from "../utils/request";


export function selectReportRecord(data) {
    if (data===-1 || data ===null){
        return service({
            url: "/review/selectReportRecord",
            method: "get",
        });
    }
    else{
        return service({
            url: "/review/selectReportRecord",
            method: "get",
            params:data,
        });
    }
}

export function selectReportsAboutUser(data) {
    return service({
        url: "/review/selectReportsAboutUser",
        method: "get",
        params:data,
    });
}

export function selectReportsAboutRequest(data) {
    return service({
        url: "/review/selectReportsAboutRequest",
        method: "get",
        params:data,
    });
}

export function selectReportsAboutOrder(data) {
    return service({
        url: "/review/selectReportsAboutOrder",
        method: "get",
        params:data,
    });
}

export function selectReportsAboutChat(data) {
    return service({
        url: "/review/selectReportsAboutChat",
        method: "get",
        params:data,
    });
}

export function selectReportsAboutCircle(data) {
    return service({
        url: "/review/selectReportsAboutCircle",
        method: "get",
        params:data,
    });
}

export function selectReportsAboutComment(data) {
    return service({
        url: "/review/selectReportsAboutComment",
        method: "get",
        params:data,
    });
}

export function selectSendingAboutUser(data) {
    return service({
        url: "/review/selectSendingAboutUser",
        method: "get",
        params:data,
    });
}

export function selectSendingAboutRequest(data) {
    return service({
        url: "/review/selectSendingAboutRequest",
        method: "get",
        params:data,
    });
}

export function selectSendingAboutOrder(data) {
    return service({
        url: "/review/selectSendingAboutOrder",
        method: "get",
        params:data,
    });
}

export function selectSendingAboutChat (data) {
    return service({
        url: "/review/selectSendingAboutChat",
        method: "get",
        params:data,
    });
}

export function selectSendingAboutCircle (data) {
    return service({
        url: "/review/selectSendingAboutCircle",
        method: "get",
        params:data,
    });
}

export function selectSendingAboutComment (data) {
    return service({
        url: "/review/selectSendingAboutComment",
        method: "get",
        params:data,
    });
}



export function reportCircle(data) {
    return service({
        url: "/review/reportCircle",
        method: "post",
        params: data,
    });
}

export function reportComment(data) {
    return request({
        url: "/review/reportComment",
        method: "post",
        params: data,
    });
}

export function reportUser(data) {
    return service({
        url: "/review/reportUser",
        method: "post",
        params: data,
    });
}

export function reportRequest(data) {
    return service({
        url: "/review/reportRequest",
        method: "post",
        params: data,
    });
}

export function reportOrder(data) {
    return service({
        url: "/review/reportOrder",
        method: "post",
        params: data,
    });
}

export function reportChat(data) {
    return service({
        url: "/review/reportChat",
        method: "post",
        params: data,
    });
}

export function Argue(info) {
    return service({
        url: "/review/argue",
        method: "put",
        data: info,
    });
}
