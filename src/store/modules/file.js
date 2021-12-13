import service from "../../utils/request";
import {upload, download} from "../../api/file";

const file = {
    state: {

    },
    getters: {

    },

    actions: {
        upload(context, {files, mul}){
            return upload(files, mul);
            // return new Promise((resolve, reject)=>{
            //     upload(files).then(res => {
            //         resolve(res);
            //     }).catch(err => {
            //         reject(err);
            //     })
            // })
        },

        download(context, name){
            return download(name);
        },
    }
}

export default file;
