import axios from "axios"
import service from "../utils/request";
import store from "../store";

export function upload(files, mul = false){
    let forms = new FormData();
    let url = "/api/file/uploadMultipleFiles";
    let configs = {
        headers:{'Content-Type':'multipart/form-data'}
    };

    let token = sessionStorage.getItem("token");
    if (token !== null && token !== undefined){
        configs.headers["Authorization"] = token;
    }

    let ind = 0;
    if (!mul)
        forms.append("file",files);
    else{
        for (let f of files){
            forms.append("files", f);
        }
    }

    return axios.post(url, forms, configs);

    // return new Promise((resolve, reject)=>{
    //     axios.post(url, forms, configs).then(response=>{
    //         let st = response.status;
    //         if (st!==200){
    //             reject()
    //         }else{
    //             console.log(1, response.data)
    //             resolve(response.data); // 请求成功 返回数据
    //         }
    //     }).catch(err=>{
    //         reject(err);
    //     });
    // });
}

export function download(fileName){
    return service({
        url: "/file/downloadFile/"+fileName,
        method: "get",
    })
}
