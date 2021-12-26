import service from "../utils/request";

export function add(addIo){
    return service({
        method: 'post',
        url: "request/cart/add",
        params: addIo
    })
}

export  function  getItem() {
    return service({
        method: 'get',
        url: 'request/cart/get',
    })
}

export function deleteItem(cartItemId){
    return service({
        method: 'delete',
        url: 'request/cart/delete',
        params:cartItemId,
    })
}

export function buy(details){
    return service({
        method: 'put',
        url: 'request/request/pull',
        params:details,
    })
}
export function satisfy(data) {
    return service({
        method: 'put',
        url: 'request/cart/satisfy',
        params: data
    })
}