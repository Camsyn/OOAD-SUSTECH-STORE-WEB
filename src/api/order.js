import service from "../utils/request";

export function getPush(page, pageSize) {
    return service({
        url: "order/order/push/get",
        params: {page, pageSize},
    });
}

export function confirmPush(orderId) {
    return service({
        method: "put",
        url: "order/order/push/confirm",
        params: {orderId},
    });
}

export function getPull(page, pageSize) {
    return service({
        url: "order/order/pull/get",
        params: {page, pageSize},
    });
}

export function confirmPull(orderId) {
    return service({
        method: "put",
        url: "order/order/pull/confirm",
        params: {orderId},
    });
}

