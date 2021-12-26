import service from "../../utils/request";
import {upload, download} from "../../api/file";

const file = {
    state: {
    },
    getters: {

    },
    actions: {
        upload(context, {files, mul}){
            return new Promise((resolve, reject)=>{
                upload(files, mul).then(response=>{
                    let st = response.status;
                    if (st!==200){
                        reject()
                    }else{
                        resolve(response.data); // 请求成功 返回数据
                    }
                }).catch(err=>{
                    reject(err);
                });
            });
            // upload(files, mul).then(res=>{
            //     console.log(1, res.data);
            //     return res.data;
            // }).catch(err=>{
            //     console.log("file err", err);
            // });
        },

        download(context, name){
            return download(name);
        },
    }
}

export default file;
