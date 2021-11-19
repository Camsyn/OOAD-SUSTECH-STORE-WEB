import service from "../utils/request";

export function getLastOfEach(sid){
    return service({
        url: "/chat/record/getAll",
        method: "get",
        params: {
            recvSid: sid,
            userSize: 9999,
            count: 10,
        }
    })
}

