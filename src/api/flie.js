import service from "../utils/request";

export function upload(files){
    return service({
        url: "/uploadMultipleFiles",
        method: "post",
        data: files
    })
}

export function download(fileName){
    return service({
        url: "downLoadFile/"+fileName,
        method: "get",
    })
}