import service from "../utils/request";

export function post(msg){
    return service({
        method: 'post',
        url: 'chat/circle/post',
        data:msg,
    })
}

export function postComment(msg){
    return service({
        method: 'post',
        url: 'chat/circle/comment/post',
        data:msg,
    })

}

export function Delete(msg){
    return service({
        method: 'delete',
        url: 'chat/circle/delete',
        params:msg,
    })
}

export function commentDelete(msg){
    return service({
        method: 'delete',
        url: 'chat/circle/comment/delete',
        params:msg,
    })
}

export function AllgetLatest(n){
    return service({
        method: 'get',
        url: 'chat/circle/all/getLatest',
        params:{count: n},
    })
}

export function sbGetLast(sid, count){
    return service({
        method: 'get',
        url: 'chat/circle/sid/getLatest',
        params:{sid, count},
    })
}

export function sbGetPage(sid, page, limit){
    return service({
        method: 'get',
        url: 'chat/circle/sid/page',
        params:{sid, page, limit},
    })
}
