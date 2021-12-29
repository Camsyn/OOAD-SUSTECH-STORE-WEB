import service from "../utils/request";

export function getLastOfEach(){
    return service({
        url: "/chat/private-talk/record/getAll",
        method: "get",
        params: {
            pageSize: 30,
            page: 1,
            count: 99,
        }
    })
}

