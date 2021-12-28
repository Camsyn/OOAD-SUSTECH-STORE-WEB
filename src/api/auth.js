import service from "../utils/request";


export function ModifyPassword(data){
    return service({
        method: 'post',
        url: 'request/cart/delete',
        params:cartItemId,
    })
}