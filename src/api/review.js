import request from "../utils/request";
import service from "../utils/request";


export function selectReportRecord(i_id) {
  return service({
      url: "/review/review/selectReportRecord",
      method: "get",
      params: {i_id},
  });
}

export function selectReportsAboutUser(t_id) {
    return service({
        url: "/review/review/selectReportsAboutUser",
        method: "get",
        params:{t_id},
    });
}

export function selectReportsAboutRequest(t_id) {
    return service({
        url: "/review/review/selectReportsAboutRequest",
        method: "get",
        params:{t_id},
    });
}

export function selectReportsAboutOrder(t_id) {
    return service({
        url: "/review/review/selectReportsAboutOrder",
        method: "get",
        params:{t_id},
    });
}

export function selectReportsAboutChat(t_id) {
    return service({
        url: "/review/review/selectReportsAboutChat",
        method: "get",
        params:{t_id},
    });
}

export function selectReportsAboutCircle(t_id) {
    return service({
        url: "/review/review/selectReportsAboutCircle",
        method: "get",
        params:{t_id},
    });
}

export function selectReportsAboutComment(t_id) {
    return service({
        url: "/review/review/selectReportsAboutComment",
        method: "get",
        params: {t_id},
    });
}

export function selectSendingAboutUser(t_id) {
    return service({
        url: "/review/review/selectSendingAboutUser",
        method: "get",
        params: {t_id},
    });
}

export function selectSendingAboutRequest(t_id) {
    return service({
        url: "/review/review/selectSendingAboutRequest",
        method: "get",
        params: {t_id},
    });
}

export function selectSendingAboutOrder(t_id) {
    return service({
        url: "/review/review/selectSendingAboutOrder",
        method: "get",
        params:{t_id},
    });
}

export function selectSendingAboutChat (t_id) {
    return service({
        url: "/review/review/selectSendingAboutChat",
        method: "get",
        params:{t_id},
    });
}

export function selectSendingAboutCircle (t_id) {
    return service({
        url: "/review/review/selectSendingAboutCircle",
        method: "get",
        params:{t_id},
    });
}

export function selectSendingAboutComment (t_id) {
    return service({
        url: "/review/review/selectSendingAboutComment",
        method: "get",
        params:{t_id},
    });
}



export function reportCircle(data) {
    return service({
        url: "/review/review/reportCircle",
        method: "post",
        params: data,
    });
}

export function reportComment(t_id, desc) {
    return request({
        url: "/review/review/reportComment",
        method: "post",
        params: {t_id, desc},
    });
}

export function reportUser(t_id, desc) {
    return service({
        url: "/review/review/reportUser",
        method: "post",
        params: {t_id, desc},
    });
}

export function reportRequest(t_id, desc) {
    return service({
        url: "/review/review/reportRequest",
        method: "post",
        params: {t_id, desc},
    });
}

export function reportOrder(t_id, desc) {
    return service({
        url: "/review/review/reportOrder",
        method: "post",
        params: {t_id, desc},
    });
}

export function reportChat(t_id, desc) {
    return service({
        url: "/review/review/reportChat",
        method: "post",
        params: {t_id, desc},
    });
}

export function Argue(R_id, desc) {
    return service({
        url: "/review/review/argue",
        method: "put",
        data: {R_id, desc},
    });
}
